"use strict";
(self["webpackChunk_anaconda_share_notebook"] = self["webpackChunk_anaconda_share_notebook"] || []).push([["style_index_js"],{

/***/ "./style/index.js":
/*!************************!*\
  !*** ./style/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.css */ "./style/base.css");
/* harmony import */ var _anaconda_share_notebook_lib_style_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @anaconda/share_notebook_lib/style/index.js */ "../../lib/share_notebook/lib/style/index.js");




/***/ }),

/***/ "../../lib/share_notebook/lib/style/index.js":
/*!***************************************************!*\
  !*** ../../lib/share_notebook/lib/style/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "../../lib/share_notebook/lib/style/index.css");



/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/getUrl.js":
/*!************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!****************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \****************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \************************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \*******************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js!./style/base.css":
/*!******************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!./style/base.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
    See the JupyterLab Developer Guide for useful CSS Patterns:

    https://jupyterlab.readthedocs.io/en/stable/developer/css.html
*/
`, "",{"version":3,"sources":["webpack://./style/base.css"],"names":[],"mappings":"AAAA;;;;CAIC","sourcesContent":["/*\n    See the JupyterLab Developer Guide for useful CSS Patterns:\n\n    https://jupyterlab.readthedocs.io/en/stable/developer/css.html\n*/\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js!../../lib/share_notebook/lib/style/index.css":
/*!**********************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../lib/share_notebook/lib/style/index.css ***!
  \**********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "../../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icon-copy.svg */ "../../lib/share_notebook/lib/style/images/icon-copy.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icon-copy-code.svg */ "../../lib/share_notebook/lib/style/images/icon-copy-code.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icon-link.svg */ "../../lib/share_notebook/lib/style/images/icon-link.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icon-code.svg */ "../../lib/share_notebook/lib/style/images/icon-code.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
    See the JupyterLab Developer Guide for useful CSS Patterns:

    https://jupyterlab.readthedocs.io/en/stable/developer/css.html
*/

:root {
  --notebook-shared-link-copy-icon-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  --notebook-shared-badge-copy-icon-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  --notebook-shared-link-icon-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  --notebook-shared-code-icon-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  --anaconda-notebook-shared-link-secondary-color: #6d5bf6;
  --anaconda-notebook-shared-link-secondary-color-hover: #9286f7;
}

.notebook-shared-dialog p,
.notebook-shared-dialog h4 {
  margin-bottom: 14px;
  margin-top: 14px;
}

.notebook-shared-link {
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 465px;
  border-top: 1px solid var(--jp-border-color2);
}

.notebook-shared-link h4 {
  margin-bottom: 0;
}

.notebook-shared-subheader {
	font-size: 16px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 14px;
  margin-top: 14px;
}

.notebook-shared-badge p {
  margin-bottom: 14px;
}

.notebook-shared-link-copy {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.notebook-shared-badge h4 {
  margin: 20px 0 10px;
}

.notebook-shared-link-copy input,
.notebook-shared-badge input {
  width: 100%;
  margin-right: 10px;
  border-radius: 4px;
  height: 36px;
  background: var(--jp-input-background);
}

.notebook-shared-badge input {
	border-radius: 4px !important;
  border: 1px solid var(--gray-400, #8C94A6) !important;
  background: var(--gray-200, #CED2D9) !important;
  height: 57px !important;
}

.notebook-shared-link-copy-button {
  box-sizing: content-box;
  display: flex;
  width: 19px;
  height: 22px;
  align-items: right;
  justify-content: right;
}

.share-notebook-button {
  display: flex !important;
  align-items: center !important;
  font-family: var(--anaconda-catalog-font-family) !important;
  font-weight: 700 !important;
  font-size: 27px !important;
  line-height: 24px !important;
  background-color: var(--anaconda-catalog-open-notebook-background) !important;
  border-radius: 4px !important;
  padding: 0 10px !important;
}

.share-notebook-button * {
  color: var(--md-grey-900) !important;
}

button.share-notebook-button:hover {
  background-color: var(--anaconda-catalog-open-notebook-hover);
}

.share-notebook-button span {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}

.share-notebook-button span .jp-ToolbarButtonComponent-icon {
  margin-left: 4px;
}

.share-notebook-button span span svg g path {
  fill: var(--md-grey-900);
}

.share-notebook-button .jp-ToolbarButtonComponent-label {
  font-size: var(--jp-ui-font-size1);
  line-height: 100%;
  font-weight: 700 !important;
  padding-left: 2px;
  color: var(--md-grey-900) !important;
  font-family: var(--jp-ui-font-family);
}
.notebook-shared-code-icon,
.notebook-shared-link-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  background-color: var(--anaconda-notebook-shared-link-secondary-color);
  margin-right: 8px;
}

.notebook-shared-link-icon {
  -webkit-mask-image: var(--notebook-shared-link-icon-image);
  mask-image: var(--notebook-shared-link-icon-image);
}

.notebook-shared-code-icon {
  -webkit-mask-image: var(--notebook-shared-code-icon-image);
  mask-image: var(--notebook-shared-code-icon-image);
}

button:hover .notebook-shared-code-icon,
button:hover .notebook-shared-link-icon {
  background-color: var(--anaconda-notebook-shared-link-secondary-color-hover);
}

.notebook-shared-link-copy-icon {
  width: 19px;
  height: 22px;
  display: flex;
  align-items: right;
  background-color: var(--jp-layout-color4);
  -webkit-mask-image: var(--notebook-shared-link-copy-icon-image);
  mask-image: var(--notebook-shared-link-copy-icon-image);
  cursor: pointer;
}

.notebook-shared-badge {
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 20px;
  border-top: 1px solid var(--jp-border-color2);
  border-bottom: 1px solid var(--jp-border-color2);
  padding-bottom: 20px;
  margin-bottom: 10px;
}

.notebook-shared-badge-copy {
  display: flex;
  flex-direction: row;
  align-items: left;
}


button.notebook-shared-copy-button {
  background: var(--jp-layout-color1)  !important;
  border: 1px solid var(--anaconda-notebook-shared-link-secondary-color) !important;
  color: var(--anaconda-notebook-shared-link-secondary-color) !important;
  border-radius: 4px !important;
  padding: 8px 14px !important;
  margin: 13px 0 0 !important;
  white-space: nowrap !important;
  font-weight: 700 !important;
  font-size: 16px !important;
  line-height: 24px !important;
  width: fit-content !important;
  display: flex !important;
  align-items: center !important;
  height: 40px !important;
}

button.notebook-shared-copy-button:hover {
  background-color: var(--jp-layout-color2) !important;
  border-color: var(--anaconda-notebook-shared-link-secondary-color-hover) !important;
  color: var(--anaconda-notebook-shared-link-secondary-color-hover) !important;
  text-decoration: none !important;
  cursor: pointer !important;
}

.notebook-shared-badge-copy-button {
  box-sizing: content-box !important;
  display: flex !important;
  width: 21px !important;
  height: 24px !important;
  align-items: right !important;
  justify-content: right !important;
  align-self: center !important;
}

.notebook-shared-badge-copy-icon {
  width: 21px !important;
  height: 24px !important;
  display: flex !important;
  align-items: right !important;
  background-color: var(--jp-layout-color4) !important;
  -webkit-mask-image: var(--notebook-shared-badge-copy-icon-image) !important;
  mask-image: var(--notebook-shared-badge-copy-icon-image) !important;
  cursor: pointer !important;
}

.notebook-shared-badge-image {
  margin-top: 12px !important;
  font-size: 11px !important;
  line-height: 20px !important;
}

.notebook-shared-modal .jp-Dialog-header {
	font-size: 24px;
	font-style: normal;
	font-weight: 600;
}

.notebook-shared-modal .jp-Dialog-content {
    min-height: 585px;
    width: 515px;
}

.notebook-shared-modal .jp-Dialog-body {
	overflow: hidden;
}

.notebook-shared-modal .jp-Dialog-footer button {
	color: #06262D !important;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
}
`, "",{"version":3,"sources":["webpack://./../../lib/share_notebook/lib/style/index.css"],"names":[],"mappings":"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","sourcesContent":["/*\n    See the JupyterLab Developer Guide for useful CSS Patterns:\n\n    https://jupyterlab.readthedocs.io/en/stable/developer/css.html\n*/\n\n:root {\n  --notebook-shared-link-copy-icon-image: url('./images/icon-copy.svg');\n  --notebook-shared-badge-copy-icon-image: url('./images/icon-copy-code.svg');\n  --notebook-shared-link-icon-image: url('./images/icon-link.svg');\n  --notebook-shared-code-icon-image: url('./images/icon-code.svg');\n  --anaconda-notebook-shared-link-secondary-color: #6d5bf6;\n  --anaconda-notebook-shared-link-secondary-color-hover: #9286f7;\n}\n\n.notebook-shared-dialog p,\n.notebook-shared-dialog h4 {\n  margin-bottom: 14px;\n  margin-top: 14px;\n}\n\n.notebook-shared-link {\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  width: 465px;\n  border-top: 1px solid var(--jp-border-color2);\n}\n\n.notebook-shared-link h4 {\n  margin-bottom: 0;\n}\n\n.notebook-shared-subheader {\n\tfont-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  margin-bottom: 14px;\n  margin-top: 14px;\n}\n\n.notebook-shared-badge p {\n  margin-bottom: 14px;\n}\n\n.notebook-shared-link-copy {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.notebook-shared-badge h4 {\n  margin: 20px 0 10px;\n}\n\n.notebook-shared-link-copy input,\n.notebook-shared-badge input {\n  width: 100%;\n  margin-right: 10px;\n  border-radius: 4px;\n  height: 36px;\n  background: var(--jp-input-background);\n}\n\n.notebook-shared-badge input {\n\tborder-radius: 4px !important;\n  border: 1px solid var(--gray-400, #8C94A6) !important;\n  background: var(--gray-200, #CED2D9) !important;\n  height: 57px !important;\n}\n\n.notebook-shared-link-copy-button {\n  box-sizing: content-box;\n  display: flex;\n  width: 19px;\n  height: 22px;\n  align-items: right;\n  justify-content: right;\n}\n\n.share-notebook-button {\n  display: flex !important;\n  align-items: center !important;\n  font-family: var(--anaconda-catalog-font-family) !important;\n  font-weight: 700 !important;\n  font-size: 27px !important;\n  line-height: 24px !important;\n  background-color: var(--anaconda-catalog-open-notebook-background) !important;\n  border-radius: 4px !important;\n  padding: 0 10px !important;\n}\n\n.share-notebook-button * {\n  color: var(--md-grey-900) !important;\n}\n\nbutton.share-notebook-button:hover {\n  background-color: var(--anaconda-catalog-open-notebook-hover);\n}\n\n.share-notebook-button span {\n  display: flex;\n  align-items: center;\n  flex-direction: row-reverse;\n}\n\n.share-notebook-button span .jp-ToolbarButtonComponent-icon {\n  margin-left: 4px;\n}\n\n.share-notebook-button span span svg g path {\n  fill: var(--md-grey-900);\n}\n\n.share-notebook-button .jp-ToolbarButtonComponent-label {\n  font-size: var(--jp-ui-font-size1);\n  line-height: 100%;\n  font-weight: 700 !important;\n  padding-left: 2px;\n  color: var(--md-grey-900) !important;\n  font-family: var(--jp-ui-font-family);\n}\n.notebook-shared-code-icon,\n.notebook-shared-link-icon {\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  background-color: var(--anaconda-notebook-shared-link-secondary-color);\n  margin-right: 8px;\n}\n\n.notebook-shared-link-icon {\n  -webkit-mask-image: var(--notebook-shared-link-icon-image);\n  mask-image: var(--notebook-shared-link-icon-image);\n}\n\n.notebook-shared-code-icon {\n  -webkit-mask-image: var(--notebook-shared-code-icon-image);\n  mask-image: var(--notebook-shared-code-icon-image);\n}\n\nbutton:hover .notebook-shared-code-icon,\nbutton:hover .notebook-shared-link-icon {\n  background-color: var(--anaconda-notebook-shared-link-secondary-color-hover);\n}\n\n.notebook-shared-link-copy-icon {\n  width: 19px;\n  height: 22px;\n  display: flex;\n  align-items: right;\n  background-color: var(--jp-layout-color4);\n  -webkit-mask-image: var(--notebook-shared-link-copy-icon-image);\n  mask-image: var(--notebook-shared-link-copy-icon-image);\n  cursor: pointer;\n}\n\n.notebook-shared-badge {\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  margin-top: 20px;\n  border-top: 1px solid var(--jp-border-color2);\n  border-bottom: 1px solid var(--jp-border-color2);\n  padding-bottom: 20px;\n  margin-bottom: 10px;\n}\n\n.notebook-shared-badge-copy {\n  display: flex;\n  flex-direction: row;\n  align-items: left;\n}\n\n\nbutton.notebook-shared-copy-button {\n  background: var(--jp-layout-color1)  !important;\n  border: 1px solid var(--anaconda-notebook-shared-link-secondary-color) !important;\n  color: var(--anaconda-notebook-shared-link-secondary-color) !important;\n  border-radius: 4px !important;\n  padding: 8px 14px !important;\n  margin: 13px 0 0 !important;\n  white-space: nowrap !important;\n  font-weight: 700 !important;\n  font-size: 16px !important;\n  line-height: 24px !important;\n  width: fit-content !important;\n  display: flex !important;\n  align-items: center !important;\n  height: 40px !important;\n}\n\nbutton.notebook-shared-copy-button:hover {\n  background-color: var(--jp-layout-color2) !important;\n  border-color: var(--anaconda-notebook-shared-link-secondary-color-hover) !important;\n  color: var(--anaconda-notebook-shared-link-secondary-color-hover) !important;\n  text-decoration: none !important;\n  cursor: pointer !important;\n}\n\n.notebook-shared-badge-copy-button {\n  box-sizing: content-box !important;\n  display: flex !important;\n  width: 21px !important;\n  height: 24px !important;\n  align-items: right !important;\n  justify-content: right !important;\n  align-self: center !important;\n}\n\n.notebook-shared-badge-copy-icon {\n  width: 21px !important;\n  height: 24px !important;\n  display: flex !important;\n  align-items: right !important;\n  background-color: var(--jp-layout-color4) !important;\n  -webkit-mask-image: var(--notebook-shared-badge-copy-icon-image) !important;\n  mask-image: var(--notebook-shared-badge-copy-icon-image) !important;\n  cursor: pointer !important;\n}\n\n.notebook-shared-badge-image {\n  margin-top: 12px !important;\n  font-size: 11px !important;\n  line-height: 20px !important;\n}\n\n.notebook-shared-modal .jp-Dialog-header {\n\tfont-size: 24px;\n\tfont-style: normal;\n\tfont-weight: 600;\n}\n\n.notebook-shared-modal .jp-Dialog-content {\n    min-height: 585px;\n    width: 515px;\n}\n\n.notebook-shared-modal .jp-Dialog-body {\n\toverflow: hidden;\n}\n\n.notebook-shared-modal .jp-Dialog-footer button {\n\tcolor: #06262D !important;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./style/base.css":
/*!************************!*\
  !*** ./style/base.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./base.css */ "../../node_modules/css-loader/dist/cjs.js!./style/base.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../../lib/share_notebook/lib/style/index.css":
/*!****************************************************!*\
  !*** ../../lib/share_notebook/lib/style/index.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./index.css */ "../../node_modules/css-loader/dist/cjs.js!../../lib/share_notebook/lib/style/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../../lib/share_notebook/lib/style/images/icon-code.svg":
/*!***************************************************************!*\
  !*** ../../lib/share_notebook/lib/style/images/icon-code.svg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M7.52214 4.77167C7.85553 4.45217 7.86595 3.92777 7.54992 3.59438C7.23389 3.26099 6.70603 3.25057 6.37263 3.5666L0.260462 9.40094C0.0937663 9.55722 0 9.77254 0 10.0017C0 10.2309 0.0937663 10.4463 0.256989 10.606L6.36916 16.4404C6.70255 16.7599 7.23042 16.746 7.54645 16.4126C7.86248 16.0792 7.85206 15.5513 7.51867 15.2353L2.04202 10.0017L7.52214 4.77167ZM12.4848 4.77167L17.9615 10.0017L12.4813 15.2318C12.1479 15.5513 12.1375 16.0757 12.4536 16.4091C12.7696 16.7425 13.2974 16.7529 13.6308 16.4369L19.743 10.6025C19.9062 10.4463 20 10.2275 20 9.99827C20 9.76906 19.9062 9.55375 19.743 9.394L13.6308 3.55965C13.2974 3.24015 12.7696 3.25404 12.4536 3.58744C12.1375 3.92083 12.1479 4.4487 12.4813 4.76472L12.4848 4.77167Z' fill='black'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/share_notebook/lib/style/images/icon-copy-code.svg":
/*!********************************************************************!*\
  !*** ../../lib/share_notebook/lib/style/images/icon-copy-code.svg ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='21' height='24' viewBox='0 0 21 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M17.64 0H3.36C2.46887 0 1.61424 0.337142 0.984121 0.937258C0.353999 1.53737 0 2.35131 0 3.2L0 20.8C0 21.6487 0.353999 22.4626 0.984121 23.0627C1.61424 23.6629 2.46887 24 3.36 24H17.64C18.5311 24 19.3858 23.6629 20.0159 23.0627C20.646 22.4626 21 21.6487 21 20.8V3.2C21 2.35131 20.646 1.53737 20.0159 0.937258C19.3858 0.337142 18.5311 0 17.64 0V0ZM12.8226 7.976L13.713 7.128L16.611 9.884L13.713 12.644L12.8226 11.796L14.8302 9.884L12.8226 7.976ZM10.836 6.656L12.0498 6.98L10.3152 12.88L9.1014 12.556L10.836 6.656ZM5.754 2.2C5.90019 2.19602 6.04431 2.23367 6.16791 2.30813C6.29151 2.38258 6.38897 2.49047 6.44784 2.61797C6.5067 2.74548 6.52429 2.88681 6.49834 3.02389C6.4724 3.16097 6.40411 3.28756 6.3022 3.38746C6.20029 3.48737 6.06941 3.55605 5.92629 3.58472C5.78317 3.61339 5.63433 3.60075 5.49879 3.54841C5.36326 3.49607 5.24721 3.40641 5.16548 3.2909C5.08375 3.17539 5.04006 3.03929 5.04 2.9C5.03992 2.71776 5.11447 2.54268 5.2478 2.41196C5.38113 2.28125 5.56273 2.20521 5.754 2.2ZM7.287 7.128L8.1774 7.976L6.1698 9.884L8.1774 11.796L7.287 12.644L4.389 9.884L7.287 7.128ZM2.52 2.9C2.52006 2.76071 2.56375 2.62461 2.64548 2.5091C2.72721 2.3936 2.84326 2.30394 2.97879 2.25159C3.11433 2.19925 3.26317 2.1866 3.40629 2.21528C3.54941 2.24395 3.68029 2.31263 3.7822 2.41254C3.88411 2.51244 3.9524 2.63903 3.97834 2.77611C4.00429 2.91319 3.9867 3.05452 3.92784 3.18203C3.86897 3.30953 3.77151 3.41742 3.64791 3.49187C3.52431 3.56633 3.38019 3.60398 3.234 3.6C3.04273 3.59479 2.86113 3.51875 2.7278 3.38804C2.59447 3.25732 2.51992 3.08224 2.52 2.9ZM9.849 20.4H3.129V19.6H9.849V20.4ZM17.829 18H3.129V17.2H17.829V18Z' fill='%238C94A6'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/share_notebook/lib/style/images/icon-copy.svg":
/*!***************************************************************!*\
  !*** ../../lib/share_notebook/lib/style/images/icon-copy.svg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='19' height='22' viewBox='0 0 19 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M13 0H2C0.9 0 0 0.9 0 2V15C0 15.55 0.45 16 1 16C1.55 16 2 15.55 2 15V3C2 2.45 2.45 2 3 2H13C13.55 2 14 1.55 14 1C14 0.45 13.55 0 13 0ZM13.59 4.59L18.42 9.42C18.79 9.79 19 10.3 19 10.83V20C19 21.1 18.1 22 17 22H5.99C4.89 22 4 21.1 4 20L4.01 6C4.01 4.9 4.9 4 6 4H12.17C12.7 4 13.21 4.21 13.59 4.59ZM13 11H17.5L12 5.5V10C12 10.55 12.45 11 13 11Z' fill='%238C94A6'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/share_notebook/lib/style/images/icon-link.svg":
/*!***************************************************************!*\
  !*** ../../lib/share_notebook/lib/style/images/icon-link.svg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5 12.5C3.61719 12.5 2.5 11.3828 2.5 10C2.5 8.61719 3.61719 7.5 5 7.5H9.32812C8.46484 6.00781 6.85156 5 5 5C2.23828 5 0 7.23828 0 10C0 12.7617 2.23828 15 5 15C6.84766 15 8.46484 13.9922 9.32812 12.5H5ZM15 15C13.1484 15 11.5351 13.9922 10.6718 12.5H15C16.3828 12.5 17.5 11.3828 17.5 10C17.5 8.61719 16.3789 7.5 15 7.5H10.6718C11.5351 6.00781 13.1523 5 15 5C17.7617 5 20 7.23828 20 10C20 12.7617 17.7617 15 15 15ZM3.75 10C3.75 9.30859 4.30859 8.75 5 8.75H15C15.6914 8.75 16.25 9.30859 16.25 10C16.25 10.6914 15.6914 11.25 15 11.25H5C4.30859 11.25 3.75 10.6914 3.75 10Z' fill='%236D5BF6'/%3e %3c/svg%3e";

/***/ })

}]);
//# sourceMappingURL=style_index_js.7da25c5f1babb21c77a5.js.map