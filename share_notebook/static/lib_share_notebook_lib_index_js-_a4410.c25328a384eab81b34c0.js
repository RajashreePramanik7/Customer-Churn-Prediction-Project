"use strict";
(self["webpackChunk_anaconda_share_notebook"] = self["webpackChunk_anaconda_share_notebook"] || []).push([["lib_share_notebook_lib_index_js-_a4410"],{

/***/ "../../lib/share_notebook/lib/components/share-notebook-extension.js":
/*!***************************************************************************!*\
  !*** ../../lib/share_notebook/lib/components/share-notebook-extension.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShareNotebookButtonExtension: () => (/* binding */ ShareNotebookButtonExtension)
/* harmony export */ });
/* harmony import */ var _lumino_disposable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lumino/disposable */ "webpack/sharing/consume/default/@lumino/disposable");
/* harmony import */ var _lumino_disposable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lumino_disposable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyterlab/ui-components */ "webpack/sharing/consume/default/@jupyterlab/ui-components");
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons */ "../../lib/share_notebook/lib/icons.js");
/* harmony import */ var _share_notebook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./share-notebook */ "../../lib/share_notebook/lib/components/share-notebook.js");





class ShareNotebookButtonExtension {
    constructor() { }
    createNew(panel, context) {
        const shareNotebookinButton = () => {
            (0,_share_notebook__WEBPACK_IMPORTED_MODULE_4__.shareNotebook)(panel);
        };
        const button = new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton({
            className: "share-notebook-button",
            label: "Share",
            icon: new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_2__.LabIcon({
                name: "ui-components:share-notebook",
                svgstr: _icons__WEBPACK_IMPORTED_MODULE_3__.shareNotebookIconSVG,
            }),
            onClick: shareNotebookinButton,
            tooltip: "Share notebook",
        });
        panel.toolbar.insertAfter("spacer", "shareNotebookButton", button);
        return new _lumino_disposable__WEBPACK_IMPORTED_MODULE_0__.DisposableDelegate(() => {
            button.dispose();
        });
    }
}


/***/ }),

/***/ "../../lib/share_notebook/lib/components/share-notebook.js":
/*!*****************************************************************!*\
  !*** ../../lib/share_notebook/lib/components/share-notebook.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shareNotebook: () => (/* binding */ shareNotebook)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../lib/share_notebook/lib/utils/index.js");
/* harmony import */ var _anaconda_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @anaconda/shared */ "webpack/sharing/consume/default/@anaconda/shared/@anaconda/shared");
/* harmony import */ var _anaconda_shared__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_anaconda_shared__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





/**
 * A notebook widget extension that adds a button to the toolbar.
 */
async function warnOfUnsavedChanges(widget) {
    const okay = await (0,_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.showDialog)({
        title: "Publish unsaved notebook?",
        body: "The notebook has unsaved changes. Do you want to save changes before sharing?",
        host: document.body,
        hasClose: true,
        buttons: [
            _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.Dialog.cancelButton({ label: "Cancel" }),
            _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.Dialog.okButton({
                label: "Share Without Saving",
            }),
            _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.Dialog.okButton({
                label: "Save and Share",
                caption: "Save changes before sharing",
                actions: ["save"],
            }),
        ],
    }).then((result) => {
        if (result.button.actions.includes("save")) {
            console.log("saving notebook");
            widget?.context.save();
        }
        return result;
    });
    return okay.button.accept;
}
async function uploadNotebookToProjects(upload_filename, nb_json) {
    // POST to extension backend
    const dataToSend = {
        nb_json: nb_json,
        upload_filename: upload_filename,
    };
    const shareResponse = await _anaconda_shared__WEBPACK_IMPORTED_MODULE_2__.backend
        .backendFetch("aext_share_notebook_server/share_notebook_v2", {}, {
        method: "POST",
        body: JSON.stringify(dataToSend),
    })
        .then((r) => _anaconda_shared__WEBPACK_IMPORTED_MODULE_2__.backend.handleProxyResponse(r));
    return {
        notebook_url: shareResponse.notebook_url,
        project_id: shareResponse.project_id,
        project_name: shareResponse.project_name,
        preview_url: shareResponse.preview_url,
        overview_url: shareResponse.overview_url,
        cloud_base_url: shareResponse.cloud_base_url,
    };
}
function showNotebookSharedDialog(notebookURL, overviewURL, project_name, cloudBaseURL) {
    // show badge
    const badgeImg = `${(0,_anaconda_shared__WEBPACK_IMPORTED_MODULE_2__.getConfig)()?.static_content
        .url}/content/a22d04e8445b700f28937ab3231b8cded505d0395c63b7a269696722196d5415`;
    const shareURL = `${cloudBaseURL}/nbserve/launch_notebook?nb_url=${encodeURIComponent(notebookURL)}`;
    const badgeHTML = `<a target="_blank" href=${shareURL}><img src="${badgeImg}"/></a>`;
    const body = (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "notebook-shared-dialog" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "notebook-shared-link" },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h4", { className: "notebook-shared-subheader" }, "Preview Link"),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null, "This will allow the recipient to preview, open, and/or download."),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "notebook-shared-link-copy" },
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("input", { type: "text", id: "overview_link", value: overviewURL }),
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", { className: "notebook-shared-link-copy-button", onClick: () => (0,_utils__WEBPACK_IMPORTED_MODULE_1__.copyToClipboard)(overviewURL, "Link to notebook preview copied to clipboard", "An error occurred when copying the notebook preview link"), title: "Copy notebook preview link to clipboard" },
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "notebook-shared-link-copy-icon" }))),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", { onClick: () => (0,_utils__WEBPACK_IMPORTED_MODULE_1__.copyToClipboard)(`${overviewURL}`, "Link to notebook copied to clipboard", "An error occurred when copying the notebook link"), className: "notebook-shared-copy-button" },
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "notebook-shared-link-icon" }),
                    "Copy Link")),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "notebook-shared-badge" },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h4", { className: "notebook-shared-subheader" }, "Notebook Badge"),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "notebook-shared-badge-copy" },
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("input", { type: "text", id: "badgeHTML", value: badgeHTML }),
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", { className: "notebook-shared-badge-copy-button", onClick: () => (0,_utils__WEBPACK_IMPORTED_MODULE_1__.copyToClipboard)(`${badgeHTML}`, "Badge HTML copied to clipboard", "An error occurred when copying the badge HTML"), title: "Copy badge HTML to clipboard" },
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "notebook-shared-badge-copy-icon" }))),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", { style: { marginTop: "14px " } }, "Badge Preview"),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", { target: "_blank", href: shareURL },
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("img", { src: badgeImg })),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", { onClick: () => (0,_utils__WEBPACK_IMPORTED_MODULE_1__.copyToClipboard)(`${badgeHTML}`, "Badge HTML copied to clipboard", "An error occurred when copying the badge HTML"), className: "notebook-shared-copy-button" },
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "notebook-shared-code-icon" }),
                    "Copy Embed Code")))));
    const host = document.createElement("div");
    host.classList.add("notebook-shared-modal");
    document.body.appendChild(host);
    (0,_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.showDialog)({
        title: `Share '${project_name}' Project`,
        body,
        host: host,
        hasClose: true,
        buttons: [
            _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.Dialog.okButton({
                label: "Done",
            }),
        ],
    });
}
async function shareNotebook(widget) {
    if (!widget) {
        console.error("no notebook widget found");
        return;
    }
    const content = widget.context;
    const nb_name = content.contentsModel?.name;
    const model = widget.model;
    // warn user of unsaved changes
    if (model?.dirty) {
        if (!(await warnOfUnsavedChanges(widget))) {
            return;
        }
    }
    // collect filename of shared file
    const results = await _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.InputDialog.getText({
        title: "Filename of shared notebook",
        text: nb_name,
    });
    const upload_filename = results.value;
    if (!upload_filename) {
        return;
    }
    // upload the notebook
    const nb_json = model?.toJSON();
    try {
        const response = await uploadNotebookToProjects(upload_filename, nb_json);
        showNotebookSharedDialog(response.notebook_url, response.overview_url, response.project_name, response.cloud_base_url);
    }
    catch (error) {
        console.error(error);
        return (0,_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.showErrorMessage)("Error sharing notebook", error);
    }
}


/***/ }),

/***/ "../../lib/share_notebook/lib/icons.js":
/*!*********************************************!*\
  !*** ../../lib/share_notebook/lib/icons.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shareNotebookIconSVG: () => (/* binding */ shareNotebookIconSVG)
/* harmony export */ });
const shareNotebookIconSVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_289_5006)">
    <path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z" fill="#323232"/>
</g>
<defs>
    <clipPath id="clip0_289_5006">
        <rect width="24" height="24" fill="white"/>
    </clipPath>
</defs>
</svg>`;


/***/ }),

/***/ "../../lib/share_notebook/lib/index.js":
/*!*********************************************!*\
  !*** ../../lib/share_notebook/lib/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShareNotebookPlugin: () => (/* reexport safe */ _share_notebook_plugin__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _share_notebook_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share_notebook_plugin */ "../../lib/share_notebook/lib/share_notebook_plugin.js");




/***/ }),

/***/ "../../lib/share_notebook/lib/share_notebook_plugin.js":
/*!*************************************************************!*\
  !*** ../../lib/share_notebook/lib/share_notebook_plugin.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShareNotebookPlugin)
/* harmony export */ });
/* harmony import */ var _components_share_notebook_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/share-notebook-extension */ "../../lib/share_notebook/lib/components/share-notebook-extension.js");

class ShareNotebookPlugin {
    async activate(app, opts) {
        const coreReady = await opts.corePlugin.ready();
        if (coreReady.featureFlag.getBool("monorepo-share-notebooks", false) &&
            !coreReady.featureFlag.getBool("monorepo-notebook-sharing-dialog", false)) {
            console.log("[Monorepo] Enabling the share-notebook plugin");
            app.docRegistry.addWidgetExtension("Notebook", new _components_share_notebook_extension__WEBPACK_IMPORTED_MODULE_0__.ShareNotebookButtonExtension());
        }
    }
}


/***/ }),

/***/ "../../lib/share_notebook/lib/utils/helper.js":
/*!****************************************************!*\
  !*** ../../lib/share_notebook/lib/utils/helper.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyToClipboard: () => (/* binding */ copyToClipboard)
/* harmony export */ });
/* harmony import */ var jupyterlab_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jupyterlab_toastify */ "../../node_modules/jupyterlab_toastify/lib/index.js");

// TODO migrate INotifications -> Notification once jupyterlab is upgraded to 3.6.0+
// https://github.com/jupyterlab/jupyterlab/pull/12959
// import { Notification } from '@jupyterlab/apputils';
// This function is also used in data_catalog
// TODO move to shared library?
async function copyToClipboard(text, successMessage = "Copied to clipboard", errorMessage = "Failed to copy to clipboard") {
    try {
        await navigator.clipboard.writeText(text);
        jupyterlab_toastify__WEBPACK_IMPORTED_MODULE_0__.INotification.success(successMessage, {
            autoClose: 5000,
        });
    }
    catch (error) {
        jupyterlab_toastify__WEBPACK_IMPORTED_MODULE_0__.INotification.error(errorMessage, {
            autoClose: 5000,
        });
        console.error(errorMessage, error);
    }
}


/***/ }),

/***/ "../../lib/share_notebook/lib/utils/index.js":
/*!***************************************************!*\
  !*** ../../lib/share_notebook/lib/utils/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyToClipboard: () => (/* reexport safe */ _helper__WEBPACK_IMPORTED_MODULE_0__.copyToClipboard)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "../../lib/share_notebook/lib/utils/helper.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "../../lib/share_notebook/lib/utils/types.js");




/***/ }),

/***/ "../../lib/share_notebook/lib/utils/types.js":
/*!***************************************************!*\
  !*** ../../lib/share_notebook/lib/utils/types.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ })

}]);
//# sourceMappingURL=lib_share_notebook_lib_index_js-_a4410.c25328a384eab81b34c0.js.map