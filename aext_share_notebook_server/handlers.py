import json
import logging
import os
from typing import Dict, Type

import tornado
from tornado.routing import _RuleList
from tornado.web import HTTPError

from aext_shared.backend_proxy import ProxyResponse
from aext_shared.config import SHARED_CONFIG, get_config
from aext_shared.handler import BackendHandler, create_rules

log = logging.getLogger(__name__)


def get_request_headers():
    return {"X-API-Version": "2.0"}  # TODO: modify api version based on request domain


class ShareNotebookRouteHandlerV1(BackendHandler):
    @tornado.web.authenticated
    async def post(self, matched_part=None, *args, **kwargs):

        # collect data from body
        json_body = self.get_json_body()
        nb_json = json_body.get("nb_json")
        if nb_json is None:
            raise HTTPError(400, "missing nb_json in posted data")
        upload_filename = json_body.get("upload_filename")
        if upload_filename is None:
            raise HTTPError(400, "missing upload_filename in posted data")
        # create the project
        name = os.path.basename(upload_filename)
        payload = {"name": name}
        response = await self.anaconda_cloud_proxy("projects", method="POST", json=payload)
        project_id = response["remote_data"]["id"]
        project_name = response["remote_data"]["name"]
        # set the project as public
        response = await self.anaconda_cloud_proxy(
            f"projects/{project_id}/permissions",
            json={"is_public": True},
            method="POST",
        )
        # upload the notebook to the project
        files = {"files": (upload_filename, json.dumps(nb_json))}
        response = await self.anaconda_cloud_proxy(
            f"projects/{project_id}/versions",
            files=files,
            method="POST",
        )
        file_urls = response["remote_data"]["file_urls"]
        notebook_url = file_urls[0]
        # create the notebook preview
        response = await self.anaconda_cloud_proxy(
            "notebooks/preview", method="POST", json={"key_path": notebook_url}, headers=get_request_headers()
        )
        preview_url = response["remote_data"]["preview_url"]
        overview_url = response["remote_data"]["overview_url"]
        # Find the cloud environment base api URL

        config = get_config()
        cloud_base_url = config["api"]["url"]
        # return results
        response = ProxyResponse(
            remote_status_code=200,
            remote_data={
                "project_id": project_id,
                "project_name": project_name,
                "notebook_url": notebook_url,
                "preview_url": preview_url,
                "overview_url": overview_url,
                "cloud_base_url": cloud_base_url,
            },
        )
        self.finish(response)


class ShareNotebookRouteHandlerV2(BackendHandler):
    @tornado.web.authenticated
    async def post(self, matched_part=None, *args, **kwargs):
        # collect data from body
        json_body = self.get_json_body()
        nb_json = json_body.get("nb_json")
        if nb_json is None:
            raise HTTPError(400, "missing nb_json in posted data")
        upload_filename = json_body.get("upload_filename")
        if upload_filename is None:
            raise HTTPError(400, "missing upload_filename in posted data")
        # create the project
        name = os.path.basename(upload_filename)
        api_version_header = {"Api-Version": "2023.11.28"}
        payload = {"title": name, "name": "<random>"}
        response = await self.anaconda_cloud_proxy("projects", method="POST", json=payload, headers=api_version_header)
        project_id = response["remote_data"]["id"]
        project_name = response["remote_data"]["title"]
        # set the project as public
        response = await self.anaconda_cloud_proxy(
            f"projects/{project_id}/permissions", json={"is_public": True}, method="POST", headers=api_version_header
        )
        # upload the notebook to the project
        files = {"files": (upload_filename, json.dumps(nb_json))}
        response = await self.anaconda_cloud_proxy(
            f"projects/{project_id}/files/{name}", files=files, method="PUT", headers=api_version_header
        )
        notebook_url = response["remote_data"]["url"]
        project_id = response["remote_data"]["project_id"]
        file_name = response["remote_data"]["name"]
        file_version_id = response["remote_data"]["file_version_id"]
        # create the notebook preview
        response = await self.anaconda_cloud_proxy(
            "notebooks/preview",
            method="POST",
            json={
                "key_path": notebook_url,
                "project_id": project_id,
                "name": file_name,
                "file_version_id": file_version_id,
            },
            headers=get_request_headers(),
        )
        preview_url = response["remote_data"]["preview_url"]
        overview_url = response["remote_data"]["overview_url"]
        # Find the cloud environment base api URL
        config = get_config()
        cloud_base_url = config["api"]["url"]
        # return results
        response = ProxyResponse(
            remote_status_code=200,
            remote_data={
                "project_id": project_id,
                "project_name": project_name,
                "notebook_url": notebook_url,
                "preview_url": preview_url,
                "overview_url": overview_url,
                "cloud_base_url": cloud_base_url,
            },
        )
        self.finish(response)


class ShareNotebookRouteHandlerV3(BackendHandler):
    @tornado.web.authenticated
    async def post(self, project_id: str, file_name: str, file_version_id: str):
        """
        Handle the POST request to get shared notebook data.
        Args:
            project_id (str): The unique project identifier from the URL path
            file_name (str): The notebook file name from the URL path
            file_version_id (str): The file version identifier from the URL path
        Body:

        Returns: {
            "preview_url": str,
            "overview_url": str,
            "cloud_base_url": str,
            "notebook_url": str,
        }


        """
        missing_parts = []
        if not project_id:
            missing_parts.append("project_id")
        if not file_name:
            missing_parts.append("file_name")
        if not file_version_id:
            missing_parts.append("file_version_id")

        if missing_parts:
            message = "Missing required URL parameters: " + ", ".join(missing_parts)
            self.set_status(400, message)
            self.finish(
                ProxyResponse(
                    remote_status_code=400,
                    remote_data={"error": message},
                )
            )
            return

        config = get_config()

        try:
            api_version_header = {"Api-Version": "2023.11.28"}
            await self.anaconda_cloud_proxy(
                f"projects/{project_id}/permissions",
                json={"is_public": True},
                method="POST",
                headers=api_version_header,
            )
        except Exception as e:
            self.set_status(500, f"Failed to call anaconda_cloud_proxy: {e}")
            self.finish(
                ProxyResponse(
                    remote_status_code=500,
                    remote_data={"error": f"Failed to call anaconda_cloud_proxy: {e}"},
                )
            )
            return

        try:
            notebook_url = f"{project_id}/files/{file_name}?version={file_version_id}"
            proxy_response = await self.anaconda_cloud_proxy(
                "notebooks/preview",
                json={
                    "key_path": f"/{notebook_url}",
                    "project_id": project_id,
                    "name": file_name,
                    "file_version_id": file_version_id,
                },
                method="POST",
                headers=get_request_headers(),
            )
        except Exception as e:
            self.set_status(500, f"Failed to call anaconda_cloud_proxy: {e}")
            self.finish(
                ProxyResponse(
                    remote_status_code=500,
                    remote_data={"error": f"Failed to call anaconda_cloud_proxy: {e}"},
                )
            )
            return

        remote_data = proxy_response.get("remote_data", {})
        preview_url = remote_data.get("preview_url", "")
        overview_url = remote_data.get("overview_url", "")

        if not preview_url or not overview_url:
            self.set_status(500, "Unable to retrieve required URLs")
            self.finish(
                ProxyResponse(
                    remote_status_code=500,
                    remote_data={"error": "Unable to retrieve required URLs"},
                )
            )
            return

        base_cloud_url = config["api"]["url"]
        response = ProxyResponse(
            remote_status_code=200,
            remote_data={
                "preview_url": preview_url,
                "overview_url": overview_url,
                "cloud_base_url": base_cloud_url,
                "notebook_url": f"{base_cloud_url}/projects/{notebook_url}",
            },
        )
        self.finish(response)


def get_routes(base_url: str) -> _RuleList:
    handlers: Dict[str, Type[BackendHandler]] = {
        "share_notebook": ShareNotebookRouteHandlerV1,
        "share_notebook_v2": ShareNotebookRouteHandlerV2,
        "share_notebook_v3/project/([^/]*)/file/([^/]*)/file_version/([^/]*)": ShareNotebookRouteHandlerV3,
    }
    return create_rules(base_url, "aext_share_notebook_server", handlers)
