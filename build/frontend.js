/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/frontend.js":
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener("DOMContentLoaded", function (event) {
  var toggleBlocks = document.querySelectorAll(".eb-toggle-wrapper");
  if (!toggleBlocks) return;

  var _iterator = _createForOfIteratorHelper(toggleBlocks),
      _step;

  try {
    var _loop = function _loop() {
      var block = _step.value;
      // Selectors
      var switcher = block.querySelector(".eb-toggle-switch > input");
      var primaryLabel = block.querySelector(".eb-toggle-primary-label");
      var secondaryLabel = block.querySelector(".eb-toggle-secondary-label");
      var textPrimaryLabel = block.querySelector(".eb-toggle-primary-label-text");
      var textSecondaryLabel = block.querySelector(".eb-toggle-secondary-label-text");
      var slider = block.querySelector(".eb-toggle-slider");
      var controller = block.querySelector(".eb-toggle-controller");
      var content = block.querySelector(".eb-toggle-content");
      var seperator = block.querySelector(".eb-toggle-seperator"); // Data attributes

      var initContent = block.getAttribute("data-init-content");
      var size = block.getAttribute("data-size");
      var switchStyle = block.getAttribute("data-switch-style");
      var primaryColor = block.getAttribute("data-primary-color");
      var secondaryColor = block.getAttribute("data-secondary-color");
      var activeColor = block.getAttribute("data-active-color");
      var bgColor = block.getAttribute("data-bg-color");
      var activeBg = block.getAttribute("data-active-bg");
      var defaultBg = "inherit";
      var defaultActiveBg = "inherit"; // Set initial display values, we'll use them to toggle content

      var primaryDisplay = window.getComputedStyle(content.children[0]).display;
      var secondaryDisplay = window.getComputedStyle(content.children[1]).display; // Move slider for different size

      var getTransform = function getTransform() {
        switch (size) {
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
        switch (size) {
          case "s":
            return "10px";

          case "m":
            return "13px";

          case "l":
            return "18px";

          case "xl":
            return "21px";
        }
      }; // Toggle type switch


      var id = block.querySelector(".eb-text-switch-label").getAttribute("for");
      var toggler = block.querySelector("#".concat(id));

      if (initContent === "primary") {
        showPrimary();
      } else {
        toggler.checked = true;
        showSecondary();
      }

      toggler.addEventListener("change", onTextToggleChange);

      function onTextToggleChange() {
        this.checked ? showSecondary() : showPrimary();
      } // Init text type label background


      if (switchStyle === "text") {
        primaryLabel.style.background = bgColor || defaultBg;
        secondaryLabel.style.background = bgColor || defaultBg;
        seperator.style.background = bgColor || defaultBg;
      } // Add click event for text type switch


      function activePrimary() {
        if (switchStyle !== "toggle") {
          primaryLabel.style.background = activeBg || defaultActiveBg;
          secondaryLabel.style.background = bgColor || defaultBg;
        }

        showPrimary();
      }

      function activeSecondary() {
        if (switchStyle !== "toggle") {
          secondaryLabel.style.background = activeBg || defaultActiveBg;
          primaryLabel.style.background = bgColor || defaultBg;
        }

        showSecondary();
      }

      primaryLabel.addEventListener("click", activePrimary);
      secondaryLabel.addEventListener("click", activeSecondary);

      if (switchStyle === "text") {
        initContent === "primary" ? activePrimary() : activeSecondary();
      } // Make controller round


      if (switchStyle == "rounded") {
        slider.style.borderRadius = "21px";
        controller.style.borderRadius = getRadius();
      } // Display initial content


      initContent === "primary" ? showPrimary() : showSecondary();
      switcher.addEventListener("change", onSwitch);

      function onSwitch() {
        this.checked ? showSecondary() : showPrimary();
      }

      function showPrimary() {
        switcher.checked = false;
        content.children[0].style.display = primaryDisplay;
        content.children[1].style.display = "none";
        secondaryLabel.style.color = secondaryColor;
        primaryLabel.style.color = activeColor || primaryColor;

        if (switchStyle === "toggle") {
          textSecondaryLabel.style.color = secondaryColor;
          textPrimaryLabel.style.color = activeColor || primaryColor;
        }

        if (switchStyle !== "text") {
          controller.style.transform = "translateX(0px)";
        }
      }

      function showSecondary() {
        switcher.checked = true;
        content.children[1].style.display = secondaryDisplay;
        content.children[0].style.display = "none";
        primaryLabel.style.color = primaryColor;
        secondaryLabel.style.color = activeColor;

        if (switchStyle === "toggle") {
          textPrimaryLabel.style.color = primaryColor;
          textSecondaryLabel.style.color = activeColor || secondaryColor;
        }

        if (switchStyle !== "text") {
          controller.style.transform = getTransform();
        }
      }
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});

/***/ })

/******/ });
//# sourceMappingURL=frontend.js.map