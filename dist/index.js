/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // import {
// 	wrapperWidth,
// 	rangeIconSize,
// 	rangeIconPadding,
// 	rangeIconDistance,
// 	rangeIconRowGap,
// 	sclDeviderPosRight,
// } from "./constants/rangeNames";
// import {
// 	generateTypographyAttributes,
// 	generateDimensionsAttributes,
// 	generateBackgroundAttributes,
// 	generateBorderShadowAttributes,
// 	generateResponsiveRangeAttributes,
// } from "../../../util/helpers";

var _window$EBToggleConte = window.EBToggleContentControls,
    generateTypographyAttributes = _window$EBToggleConte.generateTypographyAttributes,
    generateDimensionsAttributes = _window$EBToggleConte.generateDimensionsAttributes,
    generateBackgroundAttributes = _window$EBToggleConte.generateBackgroundAttributes,
    generateBorderShadowAttributes = _window$EBToggleConte.generateBorderShadowAttributes,
    generateResponsiveRangeAttributes = _window$EBToggleConte.generateResponsiveRangeAttributes;

var attributes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
  // the following 4 attributes is must required for responsive options and asset generation for frontend
  // responsive control attributes ⬇
  resOption: {
    type: "string",
    "default": "Desktop"
  },
  // blockId attribute for making unique className and other uniqueness ⬇
  blockId: {
    type: "string"
  },
  //
  blockRoot: {
    type: "string",
    "default": "essential_block"
  },
  // blockMeta is for keeping all the styles ⬇
  blockMeta: {
    type: "object"
  },
  //
  id: {
    type: "string"
  },
  initialContent: {
    type: "string",
    "default": "primary"
  },
  switchStyle: {
    type: "string",
    "default": "rounded"
  },
  // buttonHeight: {
  // 	type: "number",
  // },
  // buttonWidth: {
  // 	type: "number",
  // },
  alignment: {
    type: "string",
    "default": "center"
  },
  switchSize: {
    type: "string",
    "default": "m"
  },
  switchSizeUnit: {
    type: "string",
    "default": "px"
  },
  seperatorType: {
    type: "string",
    "default": "none"
  },
  activeColor: {
    type: "string"
  },
  // headingSpace: {
  // 	type: "number",
  // },
  // headingSpaceUnit: {
  // 	type: "string",
  // 	default: "px",
  // },
  labelSpace: {
    type: "number"
  },
  labelSpaceUnit: {
    type: "string",
    "default": "px"
  },
  backgroundType: {
    type: "string",
    "default": "solid"
  },
  backgroundColor: {
    type: "string"
  },
  backgroundGradient: {
    type: "string",
    "default": "linear-gradient(45deg,#00F260,#0575E6)"
  },
  controllerType: {
    type: "string",
    "default": "solid"
  },
  controllerColor: {
    type: "string"
  },
  controllerGradient: {
    type: "string"
  },
  borderStyle: {
    type: "string"
  },
  borderWidth: {
    type: "number"
  },
  borderColor: {
    type: "string"
  },
  borderRadius: {
    type: "number"
  },
  primaryLabelText: {
    type: "string"
  },
  secondaryLabelText: {
    type: "string"
  },
  primaryLabelColor: {
    type: "string"
  },
  secondaryLabelColor: {
    type: "string"
  },
  activeBg: {
    type: "string"
  },
  shadowColor: {
    type: "string"
  },
  hOffset: {
    type: "number"
  },
  vOffset: {
    type: "number"
  },
  blur: {
    type: "number"
  },
  spread: {
    type: "number"
  },
  inset: {
    type: "boolean",
    "default": false
  }
}, generateTypographyAttributes(Object.values(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__))), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.tglWrapMarginConst //,
// {
// 	top: 15,
// 	bottom: 20,
// 	isLinked: false,
// }
)), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.tglWrapPaddingConst //,
// {
// 	top: 15,
// 	bottom: 20,
// 	isLinked: false,
// }
)), generateBorderShadowAttributes(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_4__.WrpBdShadowConst, {// noShadow: true,
  // noBorder: true,
})), generateBackgroundAttributes(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_3__.WrpBgConst, {
  defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)" // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_2__.rangeButtonWidth, {
  defaultUnit: "%" // if 'noUnits: true' is also passed here then 'defaultUnit' won't work, also it doesn't make sense to pass a defaultUnit when No units given

})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_2__.rangeButtonHeight, {
  noUnits: true
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_2__.rangeHeadingSpace, {}));

/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/constants/backgroundsConstants.js":
/*!***********************************************!*\
  !*** ./src/constants/backgroundsConstants.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrpBgConst": function() { return /* binding */ WrpBgConst; },
/* harmony export */   "imgTopBgPrefix": function() { return /* binding */ imgTopBgPrefix; },
/* harmony export */   "socialWrpBg": function() { return /* binding */ socialWrpBg; }
/* harmony export */ });
// each and every const here has to be totally unique from one another
var WrpBgConst = "WrpBg_";
var imgTopBgPrefix = "imgBgP_";
var socialWrpBg = "sclWBg_";

/***/ }),

/***/ "./src/constants/borderShadowConstants.js":
/*!************************************************!*\
  !*** ./src/constants/borderShadowConstants.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrpBdShadowConst": function() { return /* binding */ WrpBdShadowConst; },
/* harmony export */   "prefixSocialBdShadow": function() { return /* binding */ prefixSocialBdShadow; },
/* harmony export */   "prefixImgBd": function() { return /* binding */ prefixImgBd; }
/* harmony export */ });
// each and every const here has to be totally unique from one another
var WrpBdShadowConst = "wrpBdSd_";
var prefixSocialBdShadow = "sclBdSd_";
var prefixImgBd = "imgBd_";

/***/ }),

/***/ "./src/constants/dimensionsConstants.js":
/*!**********************************************!*\
  !*** ./src/constants/dimensionsConstants.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tglWrapMarginConst": function() { return /* binding */ tglWrapMarginConst; },
/* harmony export */   "tglWrapPaddingConst": function() { return /* binding */ tglWrapPaddingConst; }
/* harmony export */ });
// each and every const here has to be totally unique from one another
var tglWrapMarginConst = "wrpMrg_";
var tglWrapPaddingConst = "wrpPad_";

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_TEMPLATE": function() { return /* binding */ DEFAULT_TEMPLATE; },
/* harmony export */   "INITIAL_CONTENT": function() { return /* binding */ INITIAL_CONTENT; },
/* harmony export */   "SWITCH_STYLES": function() { return /* binding */ SWITCH_STYLES; },
/* harmony export */   "SEPERATOR_TYPE": function() { return /* binding */ SEPERATOR_TYPE; },
/* harmony export */   "SWITCH_SIZE": function() { return /* binding */ SWITCH_SIZE; },
/* harmony export */   "ALIGNMENT": function() { return /* binding */ ALIGNMENT; },
/* harmony export */   "BORDER_STYLES": function() { return /* binding */ BORDER_STYLES; },
/* harmony export */   "BACKGROUND_TYPE": function() { return /* binding */ BACKGROUND_TYPE; },
/* harmony export */   "TEXT_TRANSFORM": function() { return /* binding */ TEXT_TRANSFORM; },
/* harmony export */   "TEXT_DECORATION": function() { return /* binding */ TEXT_DECORATION; },
/* harmony export */   "DEFAULT_BACKGROUND": function() { return /* binding */ DEFAULT_BACKGROUND; },
/* harmony export */   "DEFAULT_ACTIVE_BG": function() { return /* binding */ DEFAULT_ACTIVE_BG; },
/* harmony export */   "DEFAULT_CONTROLLER_COLOR": function() { return /* binding */ DEFAULT_CONTROLLER_COLOR; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

var DEFAULT_TEMPLATE = [["core/paragraph", {}], ["core/paragraph", {}]];
var INITIAL_CONTENT = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Primary", "essential-blocks"),
  value: "primary"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Secondary", "essential-blocks"),
  value: "secondary"
}];
var SWITCH_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rectangle", "essential-blocks"),
  value: "rectangle"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rounded", "essential-blocks"),
  value: "rounded"
}, // { label: __("Text", "essential-blocks"), value: "text" },
{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle", "essential-blocks"),
  value: "toggle"
}];
var SEPERATOR_TYPE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "essential-blocks"),
  value: "none"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Circle", "essential-blocks"),
  value: "circle"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Diamond", "essential-blocks"),
  value: "diamond"
}];
var SWITCH_SIZE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Small", "essential-blocks"),
  value: "s"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Medium", "essential-blocks"),
  value: "m"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Large", "essential-blocks"),
  value: "l"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Extra Large", "essential-blocks"),
  value: "xl"
}];
var ALIGNMENT = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "essential-blocks"),
  value: "left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center", "essential-blocks"),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "essential-blocks"),
  value: "right"
}];
var BORDER_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "essential-blocks"),
  value: "none"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dashed", "essential-blocks"),
  value: "dashed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Solid", "essential-blocks"),
  value: "solid"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dotted", "essential-blocks"),
  value: "dotted"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Double", "essential-blocks"),
  value: "double"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Groove", "essential-blocks"),
  value: "groove"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inset", "essential-blocks"),
  value: "inset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Outset", "essential-blocks"),
  value: "outset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ridge", "essential-blocks"),
  value: "ridge"
}];
var BACKGROUND_TYPE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Solid", "essential-blocks"),
  value: "solid"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gradient", "essential-blocks"),
  value: "gradient"
}];
var TEXT_TRANSFORM = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "essential-blocks"),
  value: "none"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lowercase", "essential-blocks"),
  value: "lowercase"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Capitalize", "essential-blocks"),
  value: "capitalize"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Uppercase", "essential-blocks"),
  value: "uppercase"
}];
var TEXT_DECORATION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Initial", "essential-blocks"),
  value: "initial"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overline", "essential-blocks"),
  value: "overline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Through", "essential-blocks"),
  value: "line-through"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underline", "essential-blocks"),
  value: "underline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underline Oveline", "essential-blocks"),
  value: "underline overline"
}];
var DEFAULT_BACKGROUND = "#3074ff";
var DEFAULT_ACTIVE_BG = "#0f52ba";
var DEFAULT_CONTROLLER_COLOR = "white";

/***/ }),

/***/ "./src/constants/rangeNames.js":
/*!*************************************!*\
  !*** ./src/constants/rangeNames.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rangeButtonWidth": function() { return /* binding */ rangeButtonWidth; },
/* harmony export */   "rangeButtonHeight": function() { return /* binding */ rangeButtonHeight; },
/* harmony export */   "rangeHeadingSpace": function() { return /* binding */ rangeHeadingSpace; }
/* harmony export */ });
// each and every const here has to be totally unique from one another
var rangeButtonWidth = "btnW_";
var rangeButtonHeight = "btnH_";
var rangeHeadingSpace = "hSpc_";

/***/ }),

/***/ "./src/constants/typographyPrefixConstants.js":
/*!****************************************************!*\
  !*** ./src/constants/typographyPrefixConstants.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typoPrefix_tgl": function() { return /* binding */ typoPrefix_tgl; }
/* harmony export */ });
// each and every const here has to be totally unique from one another
var typoPrefix_tgl = "tglC_";

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




 // import {
// 	softMinifyCssStrings,
// 	generateDimensionsControlStyles,
// 	generateBackgroundControlStyles,
// 	generateResponsiveRangeStyles,
// 	generateBorderShadowStyles,
// 	generateTypographyStyles,
// 	mimmikCssForPreviewBtnClick,
// 	duplicateBlockIdFix,
// } from "../../../util/helpers";

var _window$EBToggleConte = window.EBToggleContentControls,
    softMinifyCssStrings = _window$EBToggleConte.softMinifyCssStrings,
    generateDimensionsControlStyles = _window$EBToggleConte.generateDimensionsControlStyles,
    generateBackgroundControlStyles = _window$EBToggleConte.generateBackgroundControlStyles,
    generateResponsiveRangeStyles = _window$EBToggleConte.generateResponsiveRangeStyles,
    generateBorderShadowStyles = _window$EBToggleConte.generateBorderShadowStyles,
    generateTypographyStyles = _window$EBToggleConte.generateTypographyStyles,
    duplicateBlockIdFix = _window$EBToggleConte.duplicateBlockIdFix;
var editorStoreForGettingPreivew = eb_style_handler.editor_type === "edit-site" ? "core/edit-site" : "core/edit-post";





var Edit = function Edit(_ref) {
  var clientId = _ref.clientId,
      isSelected = _ref.isSelected,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      className = _ref.className;
  var resOption = attributes.resOption,
      blockId = attributes.blockId,
      blockMeta = attributes.blockMeta,
      initialContent = attributes.initialContent,
      switchStyle = attributes.switchStyle,
      switchSize = attributes.switchSize,
      seperatorType = attributes.seperatorType,
      _attributes$primaryLa = attributes.primaryLabelText,
      primaryLabelText = _attributes$primaryLa === void 0 ? "First" : _attributes$primaryLa,
      _attributes$secondary = attributes.secondaryLabelText,
      secondaryLabelText = _attributes$secondary === void 0 ? "Second" : _attributes$secondary,
      alignment = attributes.alignment,
      activeColor = attributes.activeColor,
      activeBg = attributes.activeBg,
      primaryLabelColor = attributes.primaryLabelColor,
      secondaryLabelColor = attributes.secondaryLabelColor,
      labelSpace = attributes.labelSpace,
      labelSpaceUnit = attributes.labelSpaceUnit,
      backgroundType = attributes.backgroundType,
      backgroundColor = attributes.backgroundColor,
      backgroundGradient = attributes.backgroundGradient,
      controllerType = attributes.controllerType,
      controllerColor = attributes.controllerColor,
      controllerGradient = attributes.controllerGradient,
      borderStyle = attributes.borderStyle,
      borderWidth = attributes.borderWidth,
      borderColor = attributes.borderColor,
      borderRadius = attributes.borderRadius,
      shadowColor = attributes.shadowColor,
      hOffset = attributes.hOffset,
      vOffset = attributes.vOffset,
      blur = attributes.blur,
      spread = attributes.spread,
      inset = attributes.inset,
      fontSize = attributes["".concat(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_11__.typoPrefix_tgl, "FontSize")],
      sizeUnit = attributes["".concat(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_11__.typoPrefix_tgl, "SizeUnit")];

  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(initialContent === "primary" ? true : false),
      _useState2 = _slicedToArray(_useState, 2),
      isPrimary = _useState2[0],
      setPrimary = _useState2[1];

  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isRemoved = _useState4[0],
      setRemoved = _useState4[1];

  var contentRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var primaryTextRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var secondaryTextRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var primaryRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var secondaryRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setAttributes({
      resOption: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select)(editorStoreForGettingPreivew).__experimentalGetPreviewDeviceType()
    });
  }, []); // this useEffect is for creating a unique blockId for each block's unique className

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var BLOCK_PREFIX = "eb-toggle";
    duplicateBlockIdFix({
      BLOCK_PREFIX: BLOCK_PREFIX,
      blockId: blockId,
      setAttributes: setAttributes,
      select: _wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select,
      clientId: clientId
    });
  }, []); // // this useEffect is for mimmiking css when responsive options clicked from wordpress's 'preview' button
  // useEffect(() => {
  // 	mimmikCssForPreviewBtnClick({
  // 		domObj: document,
  // 		select,
  // 	});
  // }, []);

  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(className, "eb-guten-block-main-parent-wrapper")
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (contentRef.current) {
      var container = contentRef.current.querySelector(".block-editor-block-list__layout");

      if (container && container.children.length === 2) {
        var firstChild = container.firstChild,
            lastChild = container.lastChild;

        if (isPrimary) {
          hideBlock(lastChild);
          showBlock(firstChild);
        } else {
          hideBlock(firstChild);
          showBlock(lastChild);
        }
      }
    }
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // Set block id
    setAttributes({
      id: clientId
    }); // Listen primary/seconday block remove event

    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.subscribe)(checkInnerBlocks); // Add label click event listender for text type switch

    setClickEvents();
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // Replace removed block with an empty block
    if (isRemoved) {
      var innerBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select)("core/block-editor").getBlocksByClientId(clientId)[0].innerBlocks;
      var newBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)("core/paragraph", {});
      var replaceBlocks = [];

      if (isPrimary) {
        replaceBlocks = [newBlock, innerBlocks[0]];
      } else {
        replaceBlocks = [innerBlocks[0], newBlock];
      }

      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.dispatch)("core/block-editor").replaceInnerBlocks(clientId, replaceBlocks);
    }
  }, [isRemoved]);

  var setClickEvents = function setClickEvents() {
    primaryRef.current && primaryRef.current.addEventListener("click", function () {
      return setPrimary(true);
    });
    secondaryRef.current && secondaryRef.current.addEventListener("click", function () {
      return setPrimary(false);
    });
    primaryTextRef.current && primaryTextRef.current.addEventListener("click", function () {
      return setPrimary(true);
    });
    secondaryTextRef.current && secondaryTextRef.current.addEventListener("click", function () {
      return setPrimary(false);
    });
  };

  var hideBlock = function hideBlock(node) {
    return node.style.display = "none";
  };

  var showBlock = function showBlock(node) {
    return node.style.display = "block";
  };

  var checkInnerBlocks = function checkInnerBlocks() {
    var block = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select)("core/block-editor").getBlocksByClientId(clientId)[0];

    if (block) {
      var innerBlocks = block.innerBlocks;
      innerBlocks && innerBlocks.length === 2 ? setRemoved(false) : setRemoved(true);
    }
  };

  var onSwitchClick = function onSwitchClick(e) {
    setPrimary(e.target.checked);
  };

  var getTransform = function getTransform() {
    if (isPrimary) return "translateX(0px)";

    switch (switchSize) {
      case "s":
        return "translateX(22px)";

      case "m":
        return "translateX(26px)";

      case "l":
        return "translateX(36px)";

      case "xl":
        return "translateX(42px)";
    }
  };

  var getRadius = function getRadius() {
    if (switchStyle === "rectangle") return "0px";

    switch (switchSize) {
      case "s":
        return "10px";

      case "m":
        return "13px";

      case "l":
        return "16px";

      case "xl":
        return "21px";
    }
  };

  var getMargin = function getMargin() {
    switch (alignment) {
      case "center":
        return {
          marginLeft: "auto",
          marginRight: "auto"
        };

      case "right":
        return {
          marginLeft: "auto",
          marginRight: "0px"
        };

      case "left":
        return {
          marginLeft: "0px",
          marginRight: "auto"
        };
    }

    return {
      marginLeft: "auto",
      marginRight: "auto"
    };
  }; // styles related to generateTypographyStyles start ⬇


  var _generateTypographySt = generateTypographyStyles({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_11__.typoPrefix_tgl // defaultFontSize: 20,

  }),
      tglTypoStylesDesktop = _generateTypographySt.typoStylesDesktop,
      tglTypoStylesTab = _generateTypographySt.typoStylesTab,
      tglTypoStylesMobile = _generateTypographySt.typoStylesMobile; // styles related to generateTypographyStyles end
  // styles related to generateResponsiveRangeStyles start ⬇


  var _generateResponsiveRa = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_6__.rangeButtonHeight,
    customUnit: "px",
    property: "height",
    attributes: attributes
  }),
      btnHeightDesktop = _generateResponsiveRa.rangeStylesDesktop,
      btnHeightTab = _generateResponsiveRa.rangeStylesTab,
      btnHeightMobile = _generateResponsiveRa.rangeStylesMobile;

  var _generateResponsiveRa2 = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_6__.rangeButtonWidth,
    property: "width",
    attributes: attributes
  }),
      btnWidthDesktop = _generateResponsiveRa2.rangeStylesDesktop,
      btnWidthTab = _generateResponsiveRa2.rangeStylesTab,
      btnWidthMobile = _generateResponsiveRa2.rangeStylesMobile;

  var _generateResponsiveRa3 = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_6__.rangeHeadingSpace,
    property: "margin-bottom",
    attributes: attributes
  }),
      headingSpaceDesktop = _generateResponsiveRa3.rangeStylesDesktop,
      headingSpaceTab = _generateResponsiveRa3.rangeStylesTab,
      headingSpaceMobile = _generateResponsiveRa3.rangeStylesMobile; // styles related to generateResponsiveRangeStyles end
  // styles related to generateDimensionsControlStyles start ⬇


  var _generateDimensionsCo = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_12__.tglWrapMarginConst,
    styleFor: "margin"
  }),
      wrpMarginDesktop = _generateDimensionsCo.dimensionStylesDesktop,
      wrpMarginTab = _generateDimensionsCo.dimensionStylesTab,
      wrpMarginMobile = _generateDimensionsCo.dimensionStylesMobile;

  var _generateDimensionsCo2 = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_12__.tglWrapPaddingConst,
    styleFor: "padding"
  }),
      wrpPaddingDesktop = _generateDimensionsCo2.dimensionStylesDesktop,
      wrpPaddingTab = _generateDimensionsCo2.dimensionStylesTab,
      wrpPaddingMobile = _generateDimensionsCo2.dimensionStylesMobile; // styles related to generateDimensionsControlStyles end
  // styles related to generateBackgroundControlStyles start ⬇


  var _generateBackgroundCo = generateBackgroundControlStyles({
    attributes: attributes,
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_7__.WrpBgConst // noOverlay: true,
    // noMainBgi: true,
    // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

  }),
      wrpBackgroundStylesDesktop = _generateBackgroundCo.backgroundStylesDesktop,
      wrpHoverBackgroundStylesDesktop = _generateBackgroundCo.hoverBackgroundStylesDesktop,
      wrpBackgroundStylesTab = _generateBackgroundCo.backgroundStylesTab,
      wrpHoverBackgroundStylesTab = _generateBackgroundCo.hoverBackgroundStylesTab,
      wrpBackgroundStylesMobile = _generateBackgroundCo.backgroundStylesMobile,
      wrpHoverBackgroundStylesMobile = _generateBackgroundCo.hoverBackgroundStylesMobile,
      wrpOverlayStylesDesktop = _generateBackgroundCo.overlayStylesDesktop,
      wrpHoverOverlayStylesDesktop = _generateBackgroundCo.hoverOverlayStylesDesktop,
      wrpOverlayStylesTab = _generateBackgroundCo.overlayStylesTab,
      wrpHoverOverlayStylesTab = _generateBackgroundCo.hoverOverlayStylesTab,
      wrpOverlayStylesMobile = _generateBackgroundCo.overlayStylesMobile,
      wrpHoverOverlayStylesMobile = _generateBackgroundCo.hoverOverlayStylesMobile,
      wrpBgTransitionStyle = _generateBackgroundCo.bgTransitionStyle,
      wrpOvlTransitionStyle = _generateBackgroundCo.ovlTransitionStyle; // styles related to generateBackgroundControlStyles End
  // styles related to generateBorderShadowStyles start ⬇


  var _generateBorderShadow = generateBorderShadowStyles({
    controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_8__.WrpBdShadowConst,
    attributes: attributes // noShadow: true,
    // noBorder: true,

  }),
      wrpBdShdStyesDesktop = _generateBorderShadow.styesDesktop,
      wrpBdShdStyesTab = _generateBorderShadow.styesTab,
      wrpBdShdStyesMobile = _generateBorderShadow.styesMobile,
      wrpBdShdStylesHoverDesktop = _generateBorderShadow.stylesHoverDesktop,
      wrpBdShdStylesHoverTab = _generateBorderShadow.stylesHoverTab,
      wrpBdShdStylesHoverMobile = _generateBorderShadow.stylesHoverMobile,
      wrpBdShdTransitionStyle = _generateBorderShadow.transitionStyle; // styles related to generateBorderShadowStyles End


  var wrapperStylesDesktop = "\n\t.".concat(blockId, ".eb-toggle-wrapper{\n\t\t").concat(wrpMarginDesktop, "\n\t\t").concat(wrpPaddingDesktop, "\n\t\t").concat(wrpBackgroundStylesDesktop, "\n\t\t").concat(wrpBdShdStyesDesktop, "\n\t\ttransition: all 0.5s, ").concat(wrpBgTransitionStyle, ", ").concat(wrpBdShdTransitionStyle, ";\n\t}\n\t\n\t.").concat(blockId, ".eb-toggle-wrapper:hover{\n\t\t").concat(wrpHoverBackgroundStylesDesktop, "\n\t\t").concat(wrpBdShdStylesHoverDesktop, "\n\t}\n\t\n\t.").concat(blockId, ".eb-toggle-wrapper:before{\n\t\t").concat(wrpOverlayStylesDesktop, "\n\t\ttransition: all 0.5s, ").concat(wrpOvlTransitionStyle, ";\n\t}\n\t\n\t.").concat(blockId, ".eb-toggle-wrapper:hover:before{\n\t\t").concat(wrpHoverOverlayStylesDesktop, "\n\t}\n\n\t.").concat(blockId, ".eb-toggle-wrapper .eb-toggle-secondary-label-text,\n\t.").concat(blockId, ".eb-toggle-wrapper .eb-toggle-secondary-label,\n\t.").concat(blockId, ".eb-toggle-wrapper .eb-toggle-primary-label-text,\n\t.").concat(blockId, ".eb-toggle-wrapper .eb-toggle-primary-label\n\t{\n\t\tz-index:2;\n\t}\n\n\n\t.").concat(blockId, ".eb-toggle-wrapper .eb-text-switch-toggle{\n\t\tz-index:0;\n\t}\n\n\t").concat(switchStyle === "toggle" ? "\n\t\t\t.".concat(blockId, ".eb-toggle-wrapper .eb-text-switch-content{\n\t\t\t\t").concat(btnWidthDesktop, "\n\t\t\t}\n\t\t\t") : "", "\n\t\n\t.").concat(blockId, ".eb-toggle-wrapper .eb-text-switch-toggle,\n\t.").concat(blockId, ".eb-toggle-wrapper .eb-toggle-controller\n\t{\n\t\tposition:absolute;\n\t\tcontent:\"\";\n\t\tz-index:1;\n\t\tbackground-color: ").concat(controllerColor || _constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_CONTROLLER_COLOR, ";\n\t\tbackground-image:").concat(controllerType === "gradient" ? controllerGradient : "none", ";\n\t\ttransition:0.4s;\n\t}\n\t\n\t.").concat(blockId, ".eb-toggle-wrapper .eb-toggle-heading{\n\t\ttext-align: ").concat(alignment || "center", ";\n\t\t").concat(tglTypoStylesDesktop, "\n\t\t").concat(headingSpaceDesktop, "\n\t}\n\t\n\t.").concat(blockId, ".eb-toggle-wrapper .eb-text-switch-label,\n\t.").concat(blockId, ".eb-toggle-wrapper .eb-toggle-slider{\n\t\t").concat(switchStyle === "toggle" ? "".concat(btnHeightDesktop) : "", "\n\t\tbackground-color:").concat(backgroundColor || _constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_BACKGROUND, ";\n\t\tbackground-image:").concat(backgroundType === "gradient" ? backgroundGradient : "none", ";\n\t\t").concat(switchStyle === "rounded" ? "border-radius:21px;" : "", "\n\t\tborder: ").concat(borderWidth || 0, "px ").concat(borderStyle || "none", " ").concat(borderColor || "#00000000", ";\n\t\tbox-shadow: ").concat(hOffset || 0, "px ").concat(vOffset || 0, "px ").concat(blur || 0, "px ").concat(spread || 0, "px ").concat(shadowColor || "#00000000", " ").concat(inset ? "inset" : "", ";\n\t\n\t}\n\n\t.").concat(blockId, ".eb-toggle-wrapper .eb-toggle-switch{\n\t\tmargin: 0 ").concat(labelSpace || 10).concat(labelSpaceUnit || px, ";\n\t\t").concat(switchStyle === "text" ? "display:none" : "", "\n\t}\n\t\n\t").concat(switchStyle === "text" ? "\n\t\t\t.".concat(blockId, ".eb-toggle-wrapper .eb-toggle-primary-label-text,\n\t\t\t.").concat(blockId, ".eb-toggle-wrapper .eb-toggle-primary-label\n\t\t\t{\n\t\t\t\t").concat(seperatorType !== "none" ? "margin:0 -10px 0 10px;" : "", "\n\t\t\t\tpadding:10px 20px;\n\t\t\t\tborder:").concat(borderWidth || 0, "px ").concat(borderStyle || "none", " ").concat(borderColor || "#00000000", ";\n\t\t\t\tborder-right:none;\n\t\t\t\tborder-top-left-radius: ").concat(borderRadius || 0, "px;\n\t\t\t\tborder-bottom-left-radius: ").concat(borderRadius || 0, "px;\n\t\t\t}\n\n\n\t\t\t.").concat(blockId, ".eb-toggle-wrapper .eb-toggle-secondary-label-text,\n\t\t\t.").concat(blockId, ".eb-toggle-wrapper .eb-toggle-secondary-label\n\t\t\t{\n\t\t\t\t").concat(seperatorType !== "none" ? "margin:0 10px 0 -10px;" : "", "\n\t\t\t\tpadding:10px 20px;\n\t\t\t\tborder:").concat(borderWidth || 0, "px ").concat(borderStyle || "none", " ").concat(borderColor || "#00000000", ";\n\t\t\t\tborder-left:none;\n\t\t\t\tborder-top-right-radius: ").concat(borderRadius || 0, "px;\n\t\t\t\tborder-bottom-right-radius: ").concat(borderRadius || 0, "px;\n\t\t\t}\n\t\t\t") : "", "\n\n\t.").concat(blockId, ".eb-toggle-wrapper .eb-toggle-seperator{\n\t\tdisplay: ").concat(switchStyle === "text" ? "inline-block" : "none", ";\n\t}\n\n\t.").concat(blockId, ".eb-toggle-wrapper .eb-switch-names{\n\t\t").concat(fontSize ? "font-size:".concat(fontSize).concat(sizeUnit || "px", ";") : "", "\n\t}\n\n\t");
  var wrapperStylesTab = "\n\t.".concat(blockId, ".eb-toggle-wrapper{\n\t\t").concat(wrpMarginTab, "\n\t\t").concat(wrpPaddingTab, "\n\t\t").concat(wrpBackgroundStylesTab, "\n\t\t").concat(wrpBdShdStyesTab, "\n\t}\n\n\t.").concat(blockId, ".eb-toggle-wrapper:hover{\n\t\t").concat(wrpHoverBackgroundStylesTab, "\n\t\t").concat(wrpBdShdStylesHoverTab, "\n\t}\n\t\n\t.").concat(blockId, ".eb-toggle-wrapper:before{\n\t\t").concat(wrpOverlayStylesTab, "\n\t}\n\t\n\t.").concat(blockId, ".eb-toggle-wrapper:hover:before{\n\t\t").concat(wrpHoverOverlayStylesTab, "\n\t}\n\n\t.").concat(blockId, ".eb-toggle-wrapper .eb-toggle-heading{\n\t\t").concat(tglTypoStylesTab, "\n\t\t").concat(headingSpaceTab, "\n\t}\n\t\n\t").concat(switchStyle === "toggle" ? "\n\t\t\t.".concat(blockId, ".eb-toggle-wrapper .eb-text-switch-content{\n\t\t\t\t").concat(btnWidthTab, "\n\t\t\t}\n\n\t\t\t.").concat(blockId, ".eb-toggle-wrapper .eb-text-switch-label,\n\t\t\t.").concat(blockId, ".eb-toggle-wrapper .eb-toggle-slider{\n\t\t\t\t").concat(btnHeightTab, "\n\t\t\t}\n\t\t\t") : "", "\n\t\n\t\n\t");
  var wrapperStylesMobile = "\n\t.".concat(blockId, ".eb-toggle-wrapper{\n\t\t").concat(wrpMarginMobile, "\n\t\t").concat(wrpPaddingMobile, "\n\t\t").concat(wrpBackgroundStylesMobile, "\n\t\t").concat(wrpBdShdStyesMobile, "\n\t}\n\n\t.").concat(blockId, ".eb-toggle-wrapper:hover{\n\t\t").concat(wrpHoverBackgroundStylesMobile, "\n\t\t").concat(wrpBdShdStylesHoverMobile, "\n\t}\n\t\n\t.").concat(blockId, ".eb-toggle-wrapper:before{\n\t\t").concat(wrpOverlayStylesMobile, "\n\t}\n\t\n\t.").concat(blockId, ".eb-toggle-wrapper:hover:before{\n\t\t").concat(wrpHoverOverlayStylesMobile, "\n\t}\n\n\t.").concat(blockId, ".eb-toggle-wrapper .eb-toggle-heading{\n\t\t").concat(tglTypoStylesMobile, "\n\t\t").concat(headingSpaceMobile, "\n\t}\n\n\t").concat(switchStyle === "toggle" ? "\n\t\t\t.".concat(blockId, ".eb-toggle-wrapper .eb-text-switch-content{\n\t\t\t\t").concat(btnWidthMobile, "\n\t\t\t}\n\t\t\t\n\t\t\t.").concat(blockId, ".eb-toggle-wrapper .eb-text-switch-label,\n\t\t\t.").concat(blockId, ".eb-toggle-wrapper .eb-toggle-slider{\n\t\t\t\t").concat(btnHeightMobile, "\n\t\t\t}\n\t\t\t") : "", "\n\t\n\t"); // all css styles for large screen width (desktop/laptop) in strings ⬇

  var desktopAllStyles = softMinifyCssStrings("\t\t\n\t\t".concat(wrapperStylesDesktop, "\n\n\n\t")); // all css styles for Tab in strings ⬇

  var tabAllStyles = softMinifyCssStrings("\n\t\t".concat(wrapperStylesTab, "\n\n\n\t")); // all css styles for Mobile in strings ⬇

  var mobileAllStyles = softMinifyCssStrings("\n\t\t".concat(wrapperStylesMobile, "\n\n\n\t")); //
  // styling codes End here
  //
  // Set All Style in "blockMeta" Attribute

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var styleObject = {
      desktop: desktopAllStyles,
      tab: tabAllStyles,
      mobile: mobileAllStyles
    };

    if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
      setAttributes({
        blockMeta: styleObject
      });
    }
  }, [attributes]);
  return [isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_10__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.AlignmentToolbar, {
    value: alignment,
    onChange: function onChange(alignment) {
      return setAttributes({
        alignment: alignment
      });
    }
  })), /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("style", null, "\n\n\t\t\t".concat(!isPrimary ? "\n\t\t\t\t\t.".concat(blockId, ".eb-toggle-wrapper .eb-text-switch-toggle{\n\t\t\t\t\t\tmargin-left: 50%;\n\t\t\t\t\t}\n\t\t\t\t\t") : "", "\n\n\t\t\t").concat(switchStyle !== "toggle" ? "\n\t\t\t\t.".concat(blockId, ".eb-toggle-wrapper .eb-text-switch-toggle,\n\t\t\t\t.").concat(blockId, ".eb-toggle-wrapper .eb-toggle-controller{\n\t\t\t\t\ttransform: ").concat(getTransform(), ";\n\t\t\t\t\tborder-radius: ").concat(getRadius(), ";\n\t\t\t\t}\n\t\t\t\t") : "", "\n\n\t\t\t\t\n\t\t\t.").concat(blockId, ".eb-toggle-wrapper .eb-toggle-primary-label-text,\n\t\t\t.").concat(blockId, ".eb-toggle-wrapper .eb-toggle-primary-label\n\t\t\t{\n\t\t\t\tcolor: ").concat(isPrimary ? activeColor || primaryLabelColor || "inherit" : primaryLabelColor || "inherit", ";\n\t\t\t\t").concat(switchStyle === "text" ? "background: ".concat(isPrimary ? activeBg || _constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_ACTIVE_BG : backgroundColor || _constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_BACKGROUND, ";") : "", "\n\t\t\t}\n\n\t\t\t\t\n\t\t\t.").concat(blockId, ".eb-toggle-wrapper .eb-toggle-secondary-label-text,\n\t\t\t.").concat(blockId, ".eb-toggle-wrapper .eb-toggle-secondary-label\n\t\t\t{\n\t\t\t\tcolor: ").concat(!isPrimary ? activeColor || secondaryLabelColor || "inherit" : secondaryLabelColor || "inherit", ";\n\t\t\t\t").concat(switchStyle === "text" ? "background: ".concat(!isPrimary ? activeBg || _constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_ACTIVE_BG : backgroundColor || _constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_BACKGROUND, ";") : "", "\n\t\t\t}\n\n\n\t\t\t.").concat(blockId, ".eb-toggle-wrapper .eb-toggle-seperator{\n\t\t\t\tbackground:").concat(backgroundColor || _constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_BACKGROUND, ";\n\t\t\t}\n\t\t\t\n\n\n\t\t\t\t").concat(desktopAllStyles, "\n\n\t\t\t\t/* mimmikcssStart */\n\n\t\t\t\t").concat(resOption === "Tablet" ? tabAllStyles : " ", "\n\t\t\t\t").concat(resOption === "Mobile" ? tabAllStyles + mobileAllStyles : " ", "\n\n\t\t\t\t/* mimmikcssEnd */\n\n\t\t\t\t@media all and (max-width: 1024px) {\t\n\n\t\t\t\t\t/* tabcssStart */\t\t\t\n\t\t\t\t\t").concat(softMinifyCssStrings(tabAllStyles), "\n\t\t\t\t\t/* tabcssEnd */\t\t\t\n\t\t\t\t\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t@media all and (max-width: 767px) {\n\t\t\t\t\t\n\t\t\t\t\t/* mobcssStart */\t\t\t\n\t\t\t\t\t").concat(softMinifyCssStrings(mobileAllStyles), "\n\t\t\t\t\t/* mobcssEnd */\t\t\t\n\t\t\t\t\n\t\t\t\t}\n\t\t\t\t")), /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockId, " eb-toggle-wrapper")
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-toggle-heading",
    style: {
      // ...headingStyle,
      display: switchStyle === "toggle" ? "block" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-text-switch-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-text-switch-content",
    style: _objectSpread({}, getMargin())
  }, /*#__PURE__*/React.createElement("label", {
    className: "eb-text-switch-label" // style={sliderStyle}

  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-text-switch-toggle",
    style: {
      // ...controllerStyle,
      // zIndex: 0,
      marginLeft: !isPrimary && "50%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "eb-switch-names"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "span",
    className: "eb-toggle-primary-label-text",
    ref: primaryTextRef // placeholder={__("First", "essential-blocks")}
    // style={primaryLabelStyle}
    ,
    value: primaryLabelText,
    onChange: function onChange(primaryLabelText) {
      return setAttributes({
        primaryLabelText: primaryLabelText
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "span",
    className: "eb-toggle-secondary-label-text",
    ref: secondaryTextRef // placeholder={__("Second", "essential-blocks")}
    // style={secondaryLabelStyle}
    ,
    value: secondaryLabelText,
    onChange: function onChange(secondaryLabelText) {
      return setAttributes({
        secondaryLabelText: secondaryLabelText
      });
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "eb-toggle-heading",
    style: {
      // ...headingStyle,
      display: switchStyle !== "toggle" ? "block" : "none"
    }
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "span",
    className: "eb-toggle-primary-label",
    ref: primaryRef,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("First", "essential-blocks"),
    keepPlaceholderOnFocus: true // style={primaryLabelStyle}
    ,
    value: primaryLabelText,
    onChange: function onChange(primaryLabelText) {
      return setAttributes({
        primaryLabelText: primaryLabelText
      });
    }
  }), /*#__PURE__*/React.createElement("label", {
    className: "eb-toggle-switch toggle-".concat(switchSize) // style={labelStyle}

  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: isPrimary,
    onChange: function onChange(e) {
      return onSwitchClick(e);
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "eb-toggle-controller" // style={controllerStyle}

  }), /*#__PURE__*/React.createElement("span", {
    className: "eb-toggle-slider" // style={sliderStyle}

  })), /*#__PURE__*/React.createElement("span", {
    className: "eb-toggle-seperator eb-toggle-".concat(seperatorType) // style={seperatorStyle}

  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "span",
    ref: secondaryRef,
    className: "eb-toggle-secondary-label",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Second", "essential-blocks"),
    keepPlaceholderOnFocus: true // style={secondaryLabelStyle}
    ,
    value: secondaryLabelText,
    onChange: function onChange(secondaryLabelText) {
      return setAttributes({
        secondaryLabelText: secondaryLabelText
      });
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "eb-toggle-content",
    ref: contentRef
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    template: _constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_TEMPLATE,
    renderAppender: false
  }))))];
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/example.js":
/*!************************!*\
  !*** ./src/example.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var example = {
  attributes: {}
};
/* harmony default export */ __webpack_exports__["default"] = (example);

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleContentIcon": function() { return /* binding */ ToggleContentIcon; }
/* harmony export */ });
var ToggleContentIcon = function ToggleContentIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 66 70"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "a"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "toggle-b",
    x1: "1.959",
    x2: "68.382",
    y1: "47.1",
    y2: "47.1",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "toggle-c",
    x1: "1.959",
    x2: "68.382",
    y1: "47.15",
    y2: "47.15",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "d",
    x1: "1.959",
    x2: "68.382",
    y1: "7.5",
    y2: "7.5",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "e",
    x1: "1.959",
    x2: "68.382",
    y1: "7.6",
    y2: "7.6",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "f",
    x1: "1.959",
    x2: "68.382",
    y1: "36.6",
    y2: "36.6",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "g",
    x1: "1.959",
    x2: "68.382",
    y1: "43.3",
    y2: "43.3",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "h",
    x1: "1.959",
    x2: "68.382",
    y1: "49.95",
    y2: "49.95",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#toggle-b)",
    d: "M26.5 24.2H4.6c-2.1 0-3.7 1.6-3.7 3.7v38.5c0 2 1.6 3.6 3.7 3.6h21.9c2.1 0 3.7-1.6 3.7-3.7V28.1c-.1-2.3-1.7-3.9-3.7-3.9zm.9 42.1c0 .5-.5.9-.9.9H4.6c-.5 0-.9-.5-.9-.9V28.1c0-.5.5-.9.9-.9h21.9c.5 0 .9.5.9.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#toggle-c)",
    d: "M61.5 24.2H39.6c-2.1 0-3.7 1.6-3.7 3.7v38.5c0 2.1 1.6 3.7 3.7 3.7h21.9c2.1 0 3.7-1.6 3.7-3.7V28.1c.2-2.3-1.7-3.9-3.7-3.9zm.9 42.1c0 .5-.5.9-.9.9H39.6c-.5 0-.9-.5-.9-.9V28.1c0-.5.5-.9.9-.9h21.9c.5 0 .9.5.9.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#d)",
    d: "M24.8 15h18.9c2.1 0 3.9-1.6 3.9-3.9V3.9C47.6 1.8 46 0 43.7 0H24.8c-2 0-3.9 1.6-3.9 3.9V11c0 2.4 1.6 4 3.9 4zM23.7 4.1c0-.5.5-.9.9-.9h18.9c.5 0 .9.5.9.9v7.1c0 .5-.5.9-.9.9H24.6c-.5 0-.9-.5-.9-.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#e)",
    d: "M36.8 10.4H42.3V4.8H36.8V9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#f)",
    d: "M56.6 35.2H44.4V38H56.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#g)",
    d: "M56.6 41.9H44.4v2.8H56.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#h)",
    d: "M56.6 48.6H44.4v2.7H56.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#f)",
    d: "M21.4 35.2H9.2V38H21.6v-2.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#g)",
    d: "M21.4 41.9H9.2v2.8H21.6v-2.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#h)",
    d: "M21.4 48.6H9.2v2.7H21.6v-2.7z"
  }));
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./example */ "./src/example.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../block.json */ "./block.json");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */








var _EBToggleContentContr = EBToggleContentControls,
    ebConditionalRegisterBlockType = _EBToggleContentContr.ebConditionalRegisterBlockType;
ebConditionalRegisterBlockType(_block_json__WEBPACK_IMPORTED_MODULE_5__, {
  icon: _icon__WEBPACK_IMPORTED_MODULE_1__.ToggleContentIcon,
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("eb Toggle Content", "essential-blocks")],
  example: _example__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




 // import UnitControl from "../../../util/unit-control";
// import GradientColorControl from "../../../util/gradient-color-controller";
// // import FontPicker from "../../../util/typography-control/FontPicker";
// import ColorControl from "../../../util/color-control";
// import ResetControl from "../../../util/reset-control";
// import TypographyDropdown from "../../../util/typography-control-v2";
// import ResponsiveDimensionsControl from "../../../util/dimensions-control-v2";
// import ResponsiveRangeController from "../../../util/responsive-range-control";
// // import ImageAvatar from "../../../util/image-avatar/";
// import BorderShadowControl from "../../../util/border-shadow-control";
// import BackgroundControl from "../../../util/background-control";
// import {
// 	mimmikCssForResBtns,
// 	mimmikCssOnPreviewBtnClickWhileBlockSelected,
// } from "../../../util/helpers";
// import IconList from "../../../util/faIcons";
// import {
// 	TypographyIcon,
// 	// UserIcon,
// 	LeftAlignIcon,
// 	RightAlignIcon,
// 	CenterAlignIcon,
// } from "../../../util/icons";

var _window$EBToggleConte = window.EBToggleContentControls,
    UnitControl = _window$EBToggleConte.UnitControl,
    GradientColorControl = _window$EBToggleConte.GradientColorControl,
    ColorControl = _window$EBToggleConte.ColorControl,
    ResetControl = _window$EBToggleConte.ResetControl,
    TypographyDropdown = _window$EBToggleConte.TypographyDropdown,
    ResponsiveDimensionsControl = _window$EBToggleConte.ResponsiveDimensionsControl,
    ResponsiveRangeController = _window$EBToggleConte.ResponsiveRangeController,
    BorderShadowControl = _window$EBToggleConte.BorderShadowControl,
    BackgroundControl = _window$EBToggleConte.BackgroundControl;
var editorStoreForGettingPreivew = eb_style_handler.editor_type === "edit-site" ? "core/edit-site" : "core/edit-post";




var Inspector = function Inspector(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var resOption = attributes.resOption,
      initialContent = attributes.initialContent,
      switchStyle = attributes.switchStyle,
      switchSize = attributes.switchSize,
      buttonHeight = attributes.buttonHeight,
      buttonWidth = attributes.buttonWidth,
      seperatorType = attributes.seperatorType,
      activeColor = attributes.activeColor,
      activeBg = attributes.activeBg,
      primaryLabelColor = attributes.primaryLabelColor,
      secondaryLabelColor = attributes.secondaryLabelColor,
      headingSpace = attributes.headingSpace,
      headingSpaceUnit = attributes.headingSpaceUnit,
      labelSpace = attributes.labelSpace,
      labelSpaceUnit = attributes.labelSpaceUnit,
      backgroundType = attributes.backgroundType,
      backgroundColor = attributes.backgroundColor,
      backgroundGradient = attributes.backgroundGradient,
      controllerType = attributes.controllerType,
      controllerColor = attributes.controllerColor,
      controllerGradient = attributes.controllerGradient,
      borderStyle = attributes.borderStyle,
      borderWidth = attributes.borderWidth,
      borderColor = attributes.borderColor,
      borderRadius = attributes.borderRadius,
      shadowColor = attributes.shadowColor,
      hOffset = attributes.hOffset,
      vOffset = attributes.vOffset,
      blur = attributes.blur,
      spread = attributes.spread,
      inset = attributes.inset; // this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setAttributes({
      resOption: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select)(editorStoreForGettingPreivew).__experimentalGetPreviewDeviceType()
    });
  }, []); // // this useEffect is for mimmiking css for all the eb blocks on resOption changing
  // useEffect(() => {
  // 	mimmikCssForResBtns({
  // 		domObj: document,
  // 		resOption,
  // 	});
  // }, [resOption]);
  // // this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
  // useEffect(() => {
  // 	const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
  // 		domObj: document,
  // 		select,
  // 		setAttributes,
  // 	});
  // 	return () => {
  // 		cleanUp();
  // 	};
  // }, []);

  var resRequiredProps = {
    setAttributes: setAttributes,
    resOption: resOption,
    attributes: attributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_9__["default"]
  };
  var labelColors = [{
    value: primaryLabelColor,
    onChange: function onChange(primaryLabelColor) {
      return setAttributes({
        primaryLabelColor: primaryLabelColor
      });
    },
    label: "Primary Text"
  }, {
    value: secondaryLabelColor,
    onChange: function onChange(secondaryLabelColor) {
      return setAttributes({
        secondaryLabelColor: secondaryLabelColor
      });
    },
    label: "Secondary Text"
  }, {
    value: activeColor,
    onChange: function onChange(activeColor) {
      return setAttributes({
        activeColor: activeColor
      });
    },
    label: "Active Text Color"
  }]; // Add active background color controller for text type switch

  if (switchStyle === "text") {
    labelColors = [].concat(_toConsumableArray(labelColors), [{
      value: backgroundColor,
      onChange: function onChange(backgroundColor) {
        return setAttributes({
          backgroundColor: backgroundColor
        });
      },
      label: "Background"
    }, {
      value: activeBg,
      onChange: function onChange(activeBg) {
        return setAttributes({
          activeBg: activeBg
        });
      },
      label: "Active Background"
    }]);
  }

  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "controls"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eb-panel-control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TabPanel, {
    className: "eb-parent-tab-panel",
    activeClass: "active-tab" // onSelect={onSelect}
    ,
    tabs: [{
      name: "general",
      title: "General",
      className: "eb-tab general"
    }, {
      name: "styles",
      title: "Style",
      className: "eb-tab styles"
    }, {
      name: "advance",
      title: "Advanced",
      className: "eb-tab advance"
    }]
  }, function (tab) {
    return /*#__PURE__*/React.createElement("div", {
      className: "eb-tab-controls" + tab.name
    }, tab.name === "general" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Initial Content", "essential-blocks"),
      selected: initialContent,
      onChange: function onChange(initialContent) {
        return setAttributes({
          initialContent: initialContent
        });
      },
      options: _constants__WEBPACK_IMPORTED_MODULE_5__.INITIAL_CONTENT
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Switch Type", "essential-blocks"),
      value: switchStyle,
      onChange: function onChange(switchStyle) {
        return setAttributes({
          switchStyle: switchStyle
        });
      },
      options: _constants__WEBPACK_IMPORTED_MODULE_5__.SWITCH_STYLES
    }), (switchStyle === "rounded" || switchStyle === "reactangle") && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Switch Size", "essential-blocks"),
      value: switchSize,
      options: _constants__WEBPACK_IMPORTED_MODULE_5__.SWITCH_SIZE,
      onChange: function onChange(switchSize) {
        return setAttributes({
          switchSize: switchSize
        });
      }
    }), switchStyle === "toggle" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      noUnits: true,
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Height", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_6__.rangeButtonHeight,
      resRequiredProps: resRequiredProps,
      min: 10,
      max: 200,
      step: 1
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Width", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_6__.rangeButtonWidth,
      resRequiredProps: resRequiredProps,
      min: 10,
      max: 100,
      step: 1
    })), switchStyle === "text" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sepetator Type", "essential-blocks"),
      value: seperatorType,
      options: _constants__WEBPACK_IMPORTED_MODULE_5__.SEPERATOR_TYPE,
      onChange: function onChange(seperatorType) {
        return setAttributes({
          seperatorType: seperatorType
        });
      }
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Heading Space", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_6__.rangeHeadingSpace,
      resRequiredProps: resRequiredProps,
      min: 10,
      max: 100,
      step: 1
    }), (switchStyle === "rectangle" || switchStyle === "rounded") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(UnitControl, {
      selectedUnit: labelSpaceUnit,
      unitTypes: [{
        label: "px",
        value: "px"
      }, {
        label: "%",
        value: "%"
      }],
      onClick: function onClick(labelSpaceUnit) {
        return setAttributes({
          labelSpaceUnit: labelSpaceUnit
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Label Space", "essential-blocks"),
      value: labelSpace,
      onChange: function onChange(labelSpace) {
        return setAttributes({
          labelSpace: labelSpace
        });
      }
    })), /*#__PURE__*/React.createElement(TypographyDropdown, {
      baseLabel: "Typography",
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_10__.typoPrefix_tgl,
      resRequiredProps: resRequiredProps
    }))), tab.name === "styles" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("".concat(switchStyle === "text" ? "Colors" : "Label Colors")) // initialOpen={false}
      ,
      colorSettings: labelColors
    }), switchStyle !== "text" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Switch Background", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gradient Background", "essential-blocks"),
      checked: backgroundType === "gradient",
      onChange: function onChange() {
        return setAttributes({
          backgroundType: backgroundType === "solid" ? "gradient" : "solid"
        });
      }
    }), backgroundType === "solid" && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background Color", "essential-blocks") // initialOpen={false}
      ,
      colorSettings: [{
        value: backgroundColor,
        onChange: function onChange(backgroundColor) {
          return setAttributes({
            backgroundColor: backgroundColor
          });
        },
        label: ""
      }]
    }), backgroundType === "gradient" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background Gradient", "essential-blocks") // initialOpen={false}

    }, /*#__PURE__*/React.createElement(GradientColorControl, {
      gradientColor: backgroundGradient || "linear-gradient(45deg,#eef2f3,#8e92ab)",
      onChange: function onChange(backgroundGradient) {
        return setAttributes({
          backgroundGradient: backgroundGradient
        });
      }
    }))), switchStyle !== "text" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Controller Background", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gradient Controller", "essential-blocks"),
      checked: controllerType === "gradient",
      onChange: function onChange() {
        return setAttributes({
          controllerType: controllerType === "solid" ? "gradient" : "solid"
        });
      }
    }), controllerType === "solid" && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Controller Color", "essential-blocks") // initialOpen={false}
      ,
      colorSettings: [{
        value: controllerColor,
        onChange: function onChange(controllerColor) {
          return setAttributes({
            controllerColor: controllerColor
          });
        },
        label: ""
      }]
    }), controllerType === "gradient" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Controller Gradient", "essential-blocks") // initialOpen={false}

    }, /*#__PURE__*/React.createElement(GradientColorControl, {
      gradientColor: controllerGradient || "linear-gradient(45deg,#eef2f3,#8e92ab)",
      onChange: function onChange(controllerGradient) {
        return setAttributes({
          controllerGradient: controllerGradient
        });
      }
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Style", "essential-blocks"),
      value: borderStyle,
      options: _constants__WEBPACK_IMPORTED_MODULE_5__.BORDER_STYLES,
      onChange: function onChange(borderStyle) {
        return setAttributes({
          borderStyle: borderStyle
        });
      }
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Color", "essential-blocks"),
      color: borderColor,
      onChange: function onChange(borderColor) {
        return setAttributes({
          borderColor: borderColor
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Width", "essential-blocks"),
      value: borderWidth,
      onChange: function onChange(borderWidth) {
        return setAttributes({
          borderWidth: borderWidth
        });
      },
      min: 0,
      max: 17
    }), switchStyle === "text" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Radius", "essential-blocks"),
      value: borderRadius,
      onChange: function onChange(borderRadius) {
        return setAttributes({
          borderRadius: borderRadius
        });
      },
      min: 0,
      max: 100
    })), switchStyle !== "text" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shadow", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shadow Color", "essential-blocks"),
      color: shadowColor,
      onChange: function onChange(shadowColor) {
        return setAttributes({
          shadowColor: shadowColor
        });
      }
    }), /*#__PURE__*/React.createElement(ResetControl, {
      onReset: function onReset() {
        return setAttributes({
          hOffset: undefined
        });
      }
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Horizontal Offset", "essential-blocks"),
      value: hOffset,
      onChange: function onChange(hOffset) {
        return setAttributes({
          hOffset: hOffset
        });
      },
      min: 0,
      max: 10
    })), /*#__PURE__*/React.createElement(ResetControl, {
      onReset: function onReset() {
        return setAttributes({
          vOffset: undefined
        });
      }
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vertical Offset", "essential-blocks"),
      value: vOffset,
      onChange: function onChange(vOffset) {
        return setAttributes({
          vOffset: vOffset
        });
      },
      min: 0,
      max: 10
    })), /*#__PURE__*/React.createElement(ResetControl, {
      onReset: function onReset() {
        return setAttributes({
          blur: undefined
        });
      }
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Blur", "essential-blocks"),
      value: blur,
      onChange: function onChange(blur) {
        return setAttributes({
          blur: blur
        });
      },
      min: 0,
      max: 10
    })), /*#__PURE__*/React.createElement(ResetControl, {
      onReset: function onReset() {
        return setAttributes({
          spread: undefined
        });
      }
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(" Spread", "essential-blocks"),
      value: spread,
      onChange: function onChange(spread) {
        return setAttributes({
          spread: spread
        });
      },
      min: 0,
      max: 10
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inset", "essential-blocks"),
      checked: inset,
      onChange: function onChange() {
        return setAttributes({
          inset: !inset
        });
      }
    }))), tab.name === "advance" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin & Padding") // initialOpen={true}

    }, /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_11__.tglWrapMarginConst,
      baseLabel: "Margin"
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_11__.tglWrapPaddingConst,
      baseLabel: "Padding"
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background ", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(BackgroundControl, {
      controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_7__.WrpBgConst,
      resRequiredProps: resRequiredProps
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border & Shadow"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(BorderShadowControl, {
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_8__.WrpBdShadowConst,
      resRequiredProps: resRequiredProps // noShadow
      // noBorder

    }))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var blockId = attributes.blockId,
      id = attributes.id,
      initialContent = attributes.initialContent,
      switchStyle = attributes.switchStyle,
      switchSize = attributes.switchSize,
      seperatorType = attributes.seperatorType,
      activeColor = attributes.activeColor,
      activeBg = attributes.activeBg,
      _attributes$primaryLa = attributes.primaryLabelText,
      primaryLabelText = _attributes$primaryLa === void 0 ? "First" : _attributes$primaryLa,
      _attributes$secondary = attributes.secondaryLabelText,
      secondaryLabelText = _attributes$secondary === void 0 ? "Second" : _attributes$secondary,
      alignment = attributes.alignment,
      primaryLabelColor = attributes.primaryLabelColor,
      secondaryLabelColor = attributes.secondaryLabelColor,
      backgroundType = attributes.backgroundType,
      backgroundColor = attributes.backgroundColor,
      backgroundGradient = attributes.backgroundGradient;

  var getMargin = function getMargin() {
    switch (alignment) {
      case "center":
        return {
          marginLeft: "auto",
          marginRight: "auto"
        };

      case "right":
        return {
          marginLeft: "auto",
          marginRight: "0px"
        };

      case "left":
        return {
          marginLeft: "0px",
          marginRight: "auto"
        };
    }

    return {
      marginLeft: "auto",
      marginRight: "auto"
    };
  };

  return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(), /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockId, " eb-toggle-wrapper"),
    "data-init-content": initialContent,
    "data-size": switchSize,
    "data-switch-style": switchStyle,
    "data-bg-type": backgroundType,
    "data-bg-color": backgroundColor,
    "data-bg-gradient": backgroundGradient || "none",
    "data-primary-color": primaryLabelColor || "inherit",
    "data-secondary-color": secondaryLabelColor || "inherit",
    "data-active-color": activeColor || "inherit",
    "data-active-bg": activeBg
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-toggle-heading",
    style: {
      display: switchStyle === "toggle" ? "block" : "none"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "eb-text-switch-checkbox",
    id: "eb-".concat(id),
    style: {
      display: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "eb-text-switch-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-text-switch-content",
    style: _objectSpread({}, getMargin())
  }, /*#__PURE__*/React.createElement("label", {
    className: "eb-text-switch-label",
    "for": "eb-".concat(id)
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-text-switch-toggle"
  }), /*#__PURE__*/React.createElement("div", {
    className: "eb-switch-names"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
    tagName: "span",
    className: "eb-toggle-primary-label-text",
    value: primaryLabelText
  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
    tagName: "span",
    className: "eb-toggle-secondary-label-text",
    value: secondaryLabelText
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "eb-toggle-heading",
    style: {
      display: switchStyle !== "toggle" ? "block" : "none"
    }
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
    tagName: "span",
    className: "eb-toggle-primary-label",
    value: primaryLabelText
  }), /*#__PURE__*/React.createElement("label", {
    className: "eb-toggle-switch toggle-".concat(switchSize)
  }, /*#__PURE__*/React.createElement("input", {
    className: "eb-toggle-input",
    type: "checkbox"
  }), /*#__PURE__*/React.createElement("span", {
    className: "eb-toggle-controller"
  }), /*#__PURE__*/React.createElement("span", {
    className: "eb-toggle-slider"
  })), /*#__PURE__*/React.createElement("span", {
    className: "eb-toggle-".concat(seperatorType, " eb-toggle-seperator")
  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
    tagName: "span",
    className: "eb-toggle-secondary-label",
    value: secondaryLabelText
  })), /*#__PURE__*/React.createElement("div", {
    className: "eb-toggle-content"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"toggle-content/toggle-content","title":"Toggle Content","category":"widgets","description":"Toggle Contents or blocks with a beautiful switcher.","apiVersion":2,"supports":{"align":["wide","full"]},"textdomain":"toggle-content","editorScript":"file:./dist/index.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"dist": 0,
/******/ 			"style-dist": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktoggle_content"] = self["webpackChunktoggle_content"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-dist"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map