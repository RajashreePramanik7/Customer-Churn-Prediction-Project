"use strict";
(self["webpackChunk_anaconda_share_notebook"] = self["webpackChunk_anaconda_share_notebook"] || []).push([["lib_shared_lib_index_js"],{

/***/ "../../lib/shared/lib/backend.js":
/*!***************************************!*\
  !*** ../../lib/shared/lib/backend.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackendError: () => (/* binding */ BackendError),
/* harmony export */   InvalidJSONError: () => (/* binding */ InvalidJSONError),
/* harmony export */   backendFetch: () => (/* binding */ backendFetch),
/* harmony export */   handleProxyResponse: () => (/* binding */ handleProxyResponse)
/* harmony export */ });
/* harmony import */ var _jupyterlab_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/services */ "webpack/sharing/consume/default/@jupyterlab/services");
/* harmony import */ var _jupyterlab_services__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_services__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/coreutils */ "webpack/sharing/consume/default/@jupyterlab/coreutils");
/* harmony import */ var _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_1__);


async function makeRequest(endpoint, query, options) {
    const settings = _jupyterlab_services__WEBPACK_IMPORTED_MODULE_0__.ServerConnection.makeSettings();
    let url = _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_1__.URLExt.join(settings.baseUrl, endpoint);
    const encodedQuery = _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_1__.URLExt.objectToQueryString(query);
    if (encodedQuery) {
        url += encodedQuery;
    }
    return await _jupyterlab_services__WEBPACK_IMPORTED_MODULE_0__.ServerConnection.makeRequest(url, options, settings);
}
async function backendFetch(endpoint, query = {}, options = {}, isJSON = true) {
    try {
        const response = await makeRequest(endpoint, query, options);
        return handleResponse(response, isJSON);
    }
    catch (e) {
        throw new BackendError("Network request failed", { underlying: e });
    }
}
function handleProxyResponse(data) {
    let { remote_status_code: code, remote_data: proxyData } = data;
    if (code < 200 || code >= 300) {
        throw new BackendError(`Proxied network request returned a ${code} status`, { code, data });
    }
    return proxyData;
}
class BackendError extends Error {
    statusCode;
    data;
    constructor(message, { code, data, underlying, }) {
        // The old version of typescript needed to support v3 extensions
        // doesn't have ES2022, and therefore errors when calling super() with extra args
        // @ts-ignore
        super(message, { cause: underlying });
        this.statusCode = code;
        this.data = data;
    }
}
class InvalidJSONError extends BackendError {
}
async function handleResponse(response, isJSON) {
    if (!response.ok) {
        return handleError(response);
    }
    const text = await response.text();
    if (!isJSON) {
        return text;
    }
    let data;
    if (text.length > 0) {
        try {
            data = JSON.parse(text);
        }
        catch (e) {
            throw new InvalidJSONError("Received a response that isn't JSON", {
                data: { rawText: text },
                underlying: e,
            });
        }
    }
    return data;
}
async function handleError(response) {
    const text = await response.text();
    let data;
    if (text.length > 0) {
        try {
            data = JSON.parse(text);
        }
        catch (e) {
            console.warn("Received an error message that isn't JSON", text);
        }
    }
    throw new BackendError(response.statusText
        ? `${response.statusText} (status: ${response.status})`
        : `Network request returned a ${response.status} status`, { code: response.status, data });
}


/***/ }),

/***/ "../../lib/shared/lib/index.js":
/*!*************************************!*\
  !*** ../../lib/shared/lib/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Environment: () => (/* reexport safe */ _plugins_core__WEBPACK_IMPORTED_MODULE_3__.Environment),
/* harmony export */   Environment2: () => (/* reexport safe */ _plugins_core__WEBPACK_IMPORTED_MODULE_3__.Environment2),
/* harmony export */   backend: () => (/* reexport module object */ _backend__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   configStore: () => (/* reexport safe */ _store_config__WEBPACK_IMPORTED_MODULE_2__.configStore),
/* harmony export */   getConfig: () => (/* reexport safe */ _store_config__WEBPACK_IMPORTED_MODULE_2__.getConfig),
/* harmony export */   setConfig: () => (/* reexport safe */ _store_config__WEBPACK_IMPORTED_MODULE_2__.setConfig),
/* harmony export */   tokens: () => (/* binding */ tokens),
/* harmony export */   useGetConfig: () => (/* reexport safe */ _store_config__WEBPACK_IMPORTED_MODULE_2__.useGetConfig)
/* harmony export */ });
/* harmony import */ var _backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backend */ "../../lib/shared/lib/backend.js");
/* harmony import */ var _tokens_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokens/core */ "../../lib/shared/lib/tokens/core.js");
/* harmony import */ var _store_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/config */ "../../lib/shared/lib/store/config.js");
/* harmony import */ var _plugins_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/core */ "../../lib/shared/lib/plugins/core.js");


const tokens = { CoreToken: _tokens_core__WEBPACK_IMPORTED_MODULE_1__["default"] };





/***/ }),

/***/ "../../lib/shared/lib/plugins/core.js":
/*!********************************************!*\
  !*** ../../lib/shared/lib/plugins/core.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Environment: () => (/* binding */ Environment),
/* harmony export */   Environment2: () => (/* binding */ Environment2)
/* harmony export */ });
var Environment;
(function (Environment) {
    Environment["development"] = "development";
    Environment["staging"] = "staging";
    Environment["production"] = "production";
    Environment["local"] = "local";
})(Environment || (Environment = {}));
var Environment2;
(function (Environment2) {
    Environment2["cloud_production"] = "cloud_production";
    Environment2["local_production"] = "local_production";
    Environment2["cloud_development"] = "cloud_development";
    Environment2["local_development"] = "local_development";
    Environment2["github_actions"] = "github_actions";
})(Environment2 || (Environment2 = {}));


/***/ }),

/***/ "../../lib/shared/lib/store/config.js":
/*!********************************************!*\
  !*** ../../lib/shared/lib/store/config.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   configStore: () => (/* binding */ configStore),
/* harmony export */   getConfig: () => (/* binding */ getConfig),
/* harmony export */   setConfig: () => (/* binding */ setConfig),
/* harmony export */   useGetConfig: () => (/* binding */ useGetConfig)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ "../../node_modules/zustand/esm/vanilla.mjs");
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand */ "../../node_modules/zustand/esm/index.mjs");

console.log("------- reading config");
const stateCreatorFn = (set) => ({
    config: null,
    setConfig: (config) => {
        set({ config });
    },
});
// export const useConfigOld = create<ConfigState>(stateCreatorFn);
const configStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.createStore)(stateCreatorFn);
/**
 * 🚨 Use only in React components / React hooks. Use `getConfig()` if calling from vanilla JS.
 * This hook is a shorthand for `const config = useStore(configStore, (s) => s.config)`;
 */
const useGetConfig = () => {
    return (0,zustand__WEBPACK_IMPORTED_MODULE_1__.useStore)(configStore, (s) => s.config);
};
const getConfig = () => configStore.getState().config;
const setConfig = configStore.getState().setConfig;
console.log("instantiated zustand config store");


/***/ }),

/***/ "../../lib/shared/lib/tokens/core.js":
/*!*******************************************!*\
  !*** ../../lib/shared/lib/tokens/core.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lumino_coreutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lumino/coreutils */ "webpack/sharing/consume/default/@lumino/coreutils");
/* harmony import */ var _lumino_coreutils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lumino_coreutils__WEBPACK_IMPORTED_MODULE_0__);

const CoreToken = new _lumino_coreutils__WEBPACK_IMPORTED_MODULE_0__.Token("@anaconda/core");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoreToken);


/***/ })

}]);
//# sourceMappingURL=lib_shared_lib_index_js.db943e3f58aedbe3680a.js.map