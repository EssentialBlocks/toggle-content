(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/color-control/style.css":
/*!**************************************!*\
  !*** ./util/color-control/style.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/toggle-button/style.scss":
/*!***************************************!*\
  !*** ./util/toggle-button/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/unit-control/style.scss":
/*!**************************************!*\
  !*** ./util/unit-control/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var attributes = {
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
  buttonHeight: {
    type: "number"
  },
  buttonWidth: {
    type: "number"
  },
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
  headingSpace: {
    type: "number"
  },
  headingSpaceUnit: {
    type: "string",
    "default": "px"
  },
  labelSpace: {
    type: "number"
  },
  labelSpaceUnit: {
    type: "string",
    "default": "px"
  },
  fontFamily: {
    type: "string"
  },
  fontWeight: {
    type: "string"
  },
  fontSize: {
    type: "number"
  },
  fontSizeUnit: {
    type: "string",
    "default": "px"
  },
  lineHeight: {
    type: "number"
  },
  lineHeightUnit: {
    type: "string",
    "default": "px"
  },
  letterSpacing: {
    type: "number"
  },
  letterSpacingUnit: {
    type: "string",
    "default": "px"
  },
  textDecoration: {
    type: "string",
    "default": "none"
  },
  textTransform: {
    type: "string",
    "default": "none"
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
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: DEFAULT_TEMPLATE, INITIAL_CONTENT, SWITCH_STYLES, SEPERATOR_TYPE, SWITCH_SIZE, ALIGNMENT, BORDER_STYLES, BACKGROUND_TYPE, TEXT_TRANSFORM, TEXT_DECORATION, DEFAULT_BACKGROUND, DEFAULT_ACTIVE_BG, DEFAULT_CONTROLLER_COLOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TEMPLATE", function() { return DEFAULT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_CONTENT", function() { return INITIAL_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH_STYLES", function() { return SWITCH_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEPERATOR_TYPE", function() { return SEPERATOR_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH_SIZE", function() { return SWITCH_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALIGNMENT", function() { return ALIGNMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORDER_STYLES", function() { return BORDER_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_TYPE", function() { return BACKGROUND_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_TRANSFORM", function() { return TEXT_TRANSFORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_DECORATION", function() { return TEXT_DECORATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_BACKGROUND", function() { return DEFAULT_BACKGROUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ACTIVE_BG", function() { return DEFAULT_ACTIVE_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CONTROLLER_COLOR", function() { return DEFAULT_CONTROLLER_COLOR; });
var __ = wp.i18n.__;
var DEFAULT_TEMPLATE = [["core/paragraph", {}], ["core/paragraph", {}]];
var INITIAL_CONTENT = [{
  label: __("Primary"),
  value: "primary"
}, {
  label: __("Secondary"),
  value: "secondary"
}];
var SWITCH_STYLES = [{
  label: __("Rectangle"),
  value: "rectangle"
}, {
  label: __("Rounded"),
  value: "rounded"
}, {
  label: __("Text"),
  value: "text"
}, {
  label: __("Toggle"),
  value: "toggle"
}];
var SEPERATOR_TYPE = [{
  label: __("None"),
  value: "none"
}, {
  label: __("Circle"),
  value: "circle"
}, {
  label: __("Diamond"),
  value: "diamond"
}];
var SWITCH_SIZE = [{
  label: __("Small"),
  value: "s"
}, {
  label: __("Medium"),
  value: "m"
}, {
  label: __("Large"),
  value: "l"
}, {
  label: __("Extra Large"),
  value: "xl"
}];
var ALIGNMENT = [{
  label: __("Left"),
  value: "left"
}, {
  label: __("Center"),
  value: "center"
}, {
  label: __("Right"),
  value: "right"
}];
var BORDER_STYLES = [{
  label: __("None"),
  value: "none"
}, {
  label: __("Dashed"),
  value: "dashed"
}, {
  label: __("Solid"),
  value: "solid"
}, {
  label: __("Dotted"),
  value: "dotted"
}, {
  label: __("Double"),
  value: "double"
}, {
  label: __("Groove"),
  value: "groove"
}, {
  label: __("Inset"),
  value: "inset"
}, {
  label: __("Outset"),
  value: "outset"
}, {
  label: __("Ridge"),
  value: "ridge"
}];
var BACKGROUND_TYPE = [{
  label: __("Solid"),
  value: "solid"
}, {
  label: __("Gradient"),
  value: "gradient"
}];
var TEXT_TRANSFORM = [{
  label: __("None"),
  value: "none"
}, {
  label: __("Lowercase"),
  value: "lowercase"
}, {
  label: __("Capitalize"),
  value: "capitalize"
}, {
  label: __("Uppercase"),
  value: "uppercase"
}];
var TEXT_DECORATION = [{
  label: __("Initial"),
  value: "initial"
}, {
  label: __("Overline"),
  value: "overline"
}, {
  label: __("Line Through"),
  value: "line-through"
}, {
  label: __("Underline"),
  value: "underline"
}, {
  label: __("Underline Oveline"),
  value: "underline overline"
}];
var DEFAULT_BACKGROUND = "#3074ff";
var DEFAULT_ACTIVE_BG = "#0f52ba";
var DEFAULT_CONTROLLER_COLOR = "white";

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




var Edit = function Edit(_ref) {
  var clientId = _ref.clientId,
      isSelected = _ref.isSelected,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var initialContent = attributes.initialContent,
      switchStyle = attributes.switchStyle,
      switchSize = attributes.switchSize,
      buttonHeight = attributes.buttonHeight,
      buttonWidth = attributes.buttonWidth,
      seperatorType = attributes.seperatorType,
      primaryLabelText = attributes.primaryLabelText,
      secondaryLabelText = attributes.secondaryLabelText,
      alignment = attributes.alignment,
      activeColor = attributes.activeColor,
      activeBg = attributes.activeBg,
      primaryLabelColor = attributes.primaryLabelColor,
      secondaryLabelColor = attributes.secondaryLabelColor,
      headingSpace = attributes.headingSpace,
      headingSpaceUnit = attributes.headingSpaceUnit,
      labelSpace = attributes.labelSpace,
      labelSpaceUnit = attributes.labelSpaceUnit,
      fontFamily = attributes.fontFamily,
      fontSize = attributes.fontSize,
      fontSizeUnit = attributes.fontSizeUnit,
      textTransform = attributes.textTransform,
      textDecoration = attributes.textDecoration,
      letterSpacing = attributes.letterSpacing,
      letterSpacingUnit = attributes.letterSpacingUnit,
      lineHeight = attributes.lineHeight,
      lineHeightUnit = attributes.lineHeightUnit,
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
      inset = attributes.inset;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(initialContent === "primary" ? true : false),
      _useState2 = _slicedToArray(_useState, 2),
      isPrimary = _useState2[0],
      setPrimary = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isRemoved = _useState4[0],
      setRemoved = _useState4[1];

  var contentRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var primaryTextRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var secondaryTextRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var primaryRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var secondaryRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
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
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // Set block id
    setAttributes({
      id: clientId
    }); // Listen primary/seconday block remove event

    Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["subscribe"])(checkInnerBlocks); // Add label click event listender for text type switch

    setClickEvents();
  }, []);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // Replace removed block with an empty block
    if (isRemoved) {
      var innerBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["select"])("core/block-editor").getBlocksByClientId(clientId)[0].innerBlocks;
      var newBlock = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["createBlock"])("core/paragraph", {});
      var replaceBlocks = [];

      if (isPrimary) {
        replaceBlocks = [newBlock, innerBlocks[0]];
      } else {
        replaceBlocks = [innerBlocks[0], newBlock];
      }

      Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["dispatch"])("core/block-editor").replaceInnerBlocks(clientId, replaceBlocks);
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
    var block = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["select"])("core/block-editor").getBlocksByClientId(clientId)[0];

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
    var width = buttonWidth || 30;

    switch (alignment) {
      case "center":
        return "".concat((100 - width) / 2, "%");

      case "right":
        return "".concat(100 - width, "%");

      case "left":
        return "0%";
    }
  }; // Style objects


  var controllerStyle = {
    position: "absolute",
    content: "",
    zIndex: 1,
    backgroundColor: controllerColor || _constants__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_CONTROLLER_COLOR"],
    backgroundImage: controllerType === "gradient" ? controllerGradient : "none",
    transition: "0.4s",
    transform: switchStyle !== "toggle" && getTransform(),
    borderRadius: switchStyle === "toggle" ? undefined : getRadius()
  };
  var headingStyle = {
    textAlign: alignment,
    marginBottom: "".concat(headingSpace).concat(headingSpaceUnit),
    fontSize: fontSize ? "".concat(fontSize).concat(fontSizeUnit) : undefined,
    fontFamily: fontFamily,
    textTransform: textTransform || undefined,
    textDecoration: textDecoration || undefined,
    letterSpacing: "".concat(letterSpacing).concat(letterSpacingUnit),
    lineHeight: switchStyle !== "toggle" && lineHeight ? "".concat(lineHeight).concat(lineHeightUnit) : undefined
  };
  var sliderStyle = {
    height: switchStyle === "toggle" && "".concat(buttonHeight, "px"),
    backgroundColor: backgroundColor || _constants__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_BACKGROUND"],
    backgroundImage: backgroundType === "gradient" ? backgroundGradient : "none",
    borderRadius: switchStyle === "rounded" && "21px",
    border: "".concat(borderWidth, "px ").concat(borderStyle, " ").concat(borderColor),
    boxShadow: "".concat(hOffset || 0, "px ").concat(vOffset || 0, "px ").concat(blur || 0, "px ").concat(spread || 0, "px ").concat(shadowColor, " ").concat(inset ? "inset" : "")
  };
  var labelStyle = {
    margin: "0 ".concat(labelSpace).concat(labelSpaceUnit),
    display: switchStyle === "text" && "none"
  };
  var primaryLabelStyle = {
    color: isPrimary ? activeColor || primaryLabelColor : primaryLabelColor || "inherit",
    background: switchStyle === "text" ? isPrimary ? activeBg || _constants__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_ACTIVE_BG"] : backgroundColor || _constants__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_BACKGROUND"] : "transparent",
    margin: switchStyle === "text" && seperatorType !== "none" && "0 -10px 0 10px",
    padding: switchStyle === "text" && "10px 20px",
    borderTop: switchStyle === "text" && "".concat(borderWidth, "px ").concat(borderStyle, " ").concat(borderColor),
    borderRight: switchStyle === "text" && "none",
    borderBottom: switchStyle === "text" && "".concat(borderWidth, "px ").concat(borderStyle, " ").concat(borderColor),
    borderLeft: switchStyle === "text" && "".concat(borderWidth, "px ").concat(borderStyle, " ").concat(borderColor),
    borderTopLeftRadius: switchStyle === "text" && borderRadius,
    borderBottomLeftRadius: switchStyle === "text" && borderRadius
  };
  var secondaryLabelStyle = {
    color: !isPrimary ? activeColor || secondaryLabelColor : secondaryLabelColor || "inherit",
    background: switchStyle === "text" ? !isPrimary ? activeBg || _constants__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_ACTIVE_BG"] : backgroundColor || _constants__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_BACKGROUND"] : "transparent",
    margin: switchStyle === "text" && seperatorType !== "none" && "0 10px 0 -10px",
    padding: switchStyle === "text" && "10px 20px",
    borderTop: switchStyle === "text" && "".concat(borderWidth, "px ").concat(borderStyle, " ").concat(borderColor),
    borderRight: switchStyle === "text" && "".concat(borderWidth, "px ").concat(borderStyle, " ").concat(borderColor),
    borderBottom: switchStyle === "text" && "".concat(borderWidth, "px ").concat(borderStyle, " ").concat(borderColor),
    borderLeft: switchStyle === "text" && "none",
    borderTopRightRadius: switchStyle === "text" && borderRadius,
    borderBottomRightRadius: switchStyle === "text" && borderRadius
  };
  var seperatorStyle = {
    display: switchStyle === "text" && seperatorType !== "none" ? "inline-block" : "none",
    background: backgroundColor || _constants__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_BACKGROUND"]
  };
  return [isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockControls"], null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["AlignmentToolbar"], {
    value: alignment,
    onChange: function onChange(alignment) {
      return setAttributes({
        alignment: alignment
      });
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "eb-toggle-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-toggle-heading",
    style: _objectSpread(_objectSpread({}, headingStyle), {}, {
      display: switchStyle === "toggle" ? "block" : "none"
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-text-switch-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-text-switch-content",
    style: {
      width: "".concat(buttonWidth, "%"),
      marginLeft: getMargin()
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "eb-text-switch-label",
    style: sliderStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-text-switch-toggle",
    style: _objectSpread(_objectSpread({}, controllerStyle), {}, {
      zIndex: 0,
      marginLeft: !isPrimary && "50%"
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "eb-switch-names",
    style: {
      fontSize: fontSize ? "".concat(fontSize).concat(fontSizeUnit) : undefined
    }
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    tagName: "span",
    className: "eb-text-switch-primary",
    ref: primaryTextRef,
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("First"),
    style: primaryLabelStyle,
    value: primaryLabelText,
    onChange: function onChange(primaryLabelText) {
      return setAttributes({
        primaryLabelText: primaryLabelText
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    tagName: "span",
    className: "eb-text-switch-secondary",
    ref: secondaryTextRef,
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Second"),
    style: secondaryLabelStyle,
    value: secondaryLabelText,
    onChange: function onChange(secondaryLabelText) {
      return setAttributes({
        secondaryLabelText: secondaryLabelText
      });
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "eb-toggle-heading",
    style: _objectSpread(_objectSpread({}, headingStyle), {}, {
      display: switchStyle !== "toggle" ? "block" : "none"
    })
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    tagName: "span",
    ref: primaryRef,
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("First"),
    keepPlaceholderOnFocus: true,
    style: primaryLabelStyle,
    value: primaryLabelText,
    onChange: function onChange(primaryLabelText) {
      return setAttributes({
        primaryLabelText: primaryLabelText
      });
    }
  }), /*#__PURE__*/React.createElement("label", {
    className: "eb-toggle-switch toggle-".concat(switchSize),
    style: labelStyle
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: isPrimary,
    onChange: function onChange(e) {
      return onSwitchClick(e);
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "eb-toggle-controller",
    style: controllerStyle
  }), /*#__PURE__*/React.createElement("span", {
    className: "eb-toggle-slider",
    style: sliderStyle
  })), /*#__PURE__*/React.createElement("span", {
    className: "eb-toggle-".concat(seperatorType),
    style: seperatorStyle
  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    tagName: "span",
    ref: secondaryRef,
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Second"),
    keepPlaceholderOnFocus: true,
    style: secondaryLabelStyle,
    value: secondaryLabelText,
    onChange: function onChange(secondaryLabelText) {
      return setAttributes({
        secondaryLabelText: secondaryLabelText
      });
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "eb-toggle-content",
    ref: contentRef
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
    template: _constants__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_TEMPLATE"],
    renderAppender: false
  })))];
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
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
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");







Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])("block/toggle-content", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Toggle Content", "block"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("", "block"),
  category: "widgets",
  icon: _icon__WEBPACK_IMPORTED_MODULE_5__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"],
  supports: {
    align: ["wide", "full"]
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _util_unit_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/unit-control */ "./util/unit-control/index.js");
/* harmony import */ var _util_gradient_color_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/gradient-color-controller */ "./util/gradient-color-controller/index.js");
/* harmony import */ var _util_typography_control_FontPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/typography-control/FontPicker */ "./util/typography-control/FontPicker.js");
/* harmony import */ var _util_color_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/color-control */ "./util/color-control/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RadioControl = _wp$components.RadioControl,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    BaseControl = _wp$components.BaseControl,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button,
    Dropdown = _wp$components.Dropdown;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    PanelColorSettings = _wp$blockEditor.PanelColorSettings;
/**
 * Internal dependencies
 */







var Inspector = function Inspector(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var initialContent = attributes.initialContent,
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
      inset = attributes.inset,
      fontFamily = attributes.fontFamily,
      fontWeight = attributes.fontWeight,
      textTransform = attributes.textTransform,
      textDecoration = attributes.textDecoration,
      fontSize = attributes.fontSize,
      fontSizeUnit = attributes.fontSizeUnit,
      letterSpacing = attributes.letterSpacing,
      letterSpacingUnit = attributes.letterSpacingUnit,
      lineHeight = attributes.lineHeight,
      lineHeightUnit = attributes.lineHeightUnit;
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

  var MAX_LINE_HEIGHT = lineHeightUnit === "em" ? 10 : 100;
  var LINE_HEIGHT_STEP = lineHeightUnit === "em" ? 0.1 : 1;
  var MAX_LETTER_SPACING = letterSpacingUnit === "em" ? 10 : 100;
  var LETTER_SPACING_STEP = letterSpacingUnit === "em" ? 0.1 : 1;
  return /*#__PURE__*/React.createElement(InspectorControls, {
    key: "controls"
  }, /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Switch Style")
  }, /*#__PURE__*/React.createElement(RadioControl, {
    label: __("Initial Content"),
    selected: initialContent,
    onChange: function onChange(initialContent) {
      return setAttributes({
        initialContent: initialContent
      });
    },
    options: _constants__WEBPACK_IMPORTED_MODULE_0__["INITIAL_CONTENT"]
  }), /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Switch Type"),
    value: switchStyle,
    onChange: function onChange(switchStyle) {
      return setAttributes({
        switchStyle: switchStyle
      });
    },
    options: _constants__WEBPACK_IMPORTED_MODULE_0__["SWITCH_STYLES"]
  }), (switchStyle === "rounded" || switchStyle === "reactangle") && /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Switch Size"),
    value: switchSize,
    options: _constants__WEBPACK_IMPORTED_MODULE_0__["SWITCH_SIZE"],
    onChange: function onChange(switchSize) {
      return setAttributes({
        switchSize: switchSize
      });
    }
  }), switchStyle === "toggle" && /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Button Height"),
    value: buttonHeight,
    onChange: function onChange(buttonHeight) {
      return setAttributes({
        buttonHeight: buttonHeight
      });
    },
    min: 10,
    max: 100
  }), switchStyle === "toggle" && /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Button Width"),
    value: buttonWidth,
    onChange: function onChange(buttonWidth) {
      return setAttributes({
        buttonWidth: buttonWidth
      });
    },
    min: 10,
    max: 100
  }), switchStyle === "text" && /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Sepetator Type"),
    value: seperatorType,
    options: _constants__WEBPACK_IMPORTED_MODULE_0__["SEPERATOR_TYPE"],
    onChange: function onChange(seperatorType) {
      return setAttributes({
        seperatorType: seperatorType
      });
    }
  }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: headingSpaceUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(headingSpaceUnit) {
      return setAttributes({
        headingSpaceUnit: headingSpaceUnit
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Heading Space"),
    value: headingSpace,
    onChange: function onChange(headingSpace) {
      return setAttributes({
        headingSpace: headingSpace
      });
    }
  }), (switchStyle === "rectangle" || switchStyle === "rounded") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Label Space"),
    value: labelSpace,
    onChange: function onChange(labelSpace) {
      return setAttributes({
        labelSpace: labelSpace
      });
    }
  })), /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Typography"),
    className: "eb-typography-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(Button, {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen,
        icon: "edit"
      });
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: "1rem"
        }
      }, /*#__PURE__*/React.createElement(_util_typography_control_FontPicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: __("Font Family"),
        onChange: function onChange(fontFamily) {
          return setAttributes({
            fontFamily: fontFamily
          });
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        selectedUnit: fontSizeUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }, {
          label: "%",
          value: "%"
        }],
        onClick: function onClick(fontSizeUnit) {
          return setAttributes({
            fontSizeUnit: fontSizeUnit
          });
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Font Size"),
        value: fontSize,
        onChange: function onChange(fontSize) {
          return setAttributes({
            fontSize: fontSize
          });
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Text Decoration"),
        value: textDecoration,
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["TEXT_DECORATION"],
        onChange: function onChange(textDecoration) {
          return setAttributes({
            textDecoration: textDecoration
          });
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Text Transform"),
        value: textTransform,
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["TEXT_TRANSFORM"],
        onChange: function onChange(textTransform) {
          return setAttributes({
            textTransform: textTransform
          });
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        selectedUnit: letterSpacingUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(letterSpacingUnit) {
          return setAttributes({
            letterSpacingUnit: letterSpacingUnit
          });
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Letter Spacing"),
        value: letterSpacing,
        onChange: function onChange(letterSpacing) {
          return setAttributes({
            letterSpacing: letterSpacing
          });
        },
        min: 0,
        max: MAX_LETTER_SPACING,
        step: LETTER_SPACING_STEP
      }), switchStyle !== "toggle" && /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        selectedUnit: lineHeightUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(lineHeightUnit) {
          return setAttributes({
            lineHeightUnit: lineHeightUnit
          });
        }
      }), switchStyle !== "toggle" && /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Line Height"),
        value: lineHeight,
        onChange: function onChange(lineHeight) {
          return setAttributes({
            lineHeight: lineHeight
          });
        },
        min: 0,
        max: MAX_LINE_HEIGHT,
        step: LINE_HEIGHT_STEP
      }));
    }
  })), switchStyle !== "text" && /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Gradient Background"),
    checked: backgroundType === "gradient",
    onChange: function onChange() {
      return setAttributes({
        backgroundType: backgroundType === "solid" ? "gradient" : "solid"
      });
    }
  }), switchStyle !== "text" && /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Gradient Controller"),
    checked: controllerType === "gradient",
    onChange: function onChange() {
      return setAttributes({
        controllerType: controllerType === "solid" ? "gradient" : "solid"
      });
    }
  })), switchStyle !== "text" && backgroundType === "solid" && /*#__PURE__*/React.createElement(PanelColorSettings, {
    title: __("Background Color"),
    initialOpen: false,
    colorSettings: [{
      value: backgroundColor,
      onChange: function onChange(backgroundColor) {
        return setAttributes({
          backgroundColor: backgroundColor
        });
      },
      label: ""
    }]
  }), switchStyle !== "text" && backgroundType === "gradient" && /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Background Gradient"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_gradient_color_controller__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gradientColor: backgroundGradient,
    onChange: function onChange(backgroundGradient) {
      return setAttributes({
        backgroundGradient: backgroundGradient
      });
    }
  })), switchStyle !== "text" && controllerType === "solid" && /*#__PURE__*/React.createElement(PanelColorSettings, {
    title: __("Controller Color"),
    initialOpen: false,
    colorSettings: [{
      value: controllerColor,
      onChange: function onChange(controllerColor) {
        return setAttributes({
          controllerColor: controllerColor
        });
      },
      label: ""
    }]
  }), switchStyle !== "text" && controllerType === "gradient" && /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Controller Gradient"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_gradient_color_controller__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gradientColor: controllerGradient || "linear-gradient(45deg,#ffffff,#ffffff)",
    onChange: function onChange(controllerGradient) {
      return setAttributes({
        controllerGradient: controllerGradient
      });
    }
  })), /*#__PURE__*/React.createElement(PanelColorSettings, {
    title: __("".concat(switchStyle === "text" ? "Colors" : "Label Colors")),
    initialOpen: false,
    colorSettings: labelColors
  }), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Border"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Border Style"),
    value: borderStyle,
    options: _constants__WEBPACK_IMPORTED_MODULE_0__["BORDER_STYLES"],
    onChange: function onChange(borderStyle) {
      return setAttributes({
        borderStyle: borderStyle
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: __("Border Color"),
    color: borderColor,
    onChange: function onChange(borderColor) {
      return setAttributes({
        borderColor: borderColor
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Border Width"),
    value: borderWidth,
    onChange: function onChange(borderWidth) {
      return setAttributes({
        borderWidth: borderWidth
      });
    },
    min: 0,
    max: 17
  }), switchStyle === "text" && /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Border Radius"),
    value: borderRadius,
    onChange: function onChange(borderRadius) {
      return setAttributes({
        borderRadius: borderRadius
      });
    },
    min: 0,
    max: 100
  })), switchStyle !== "text" && /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Shadow"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: __("Shadow Color"),
    color: shadowColor,
    onChange: function onChange(shadowColor) {
      return setAttributes({
        shadowColor: shadowColor
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Horizontal Offset"),
    value: hOffset,
    allowReset: true,
    onChange: function onChange(hOffset) {
      return setAttributes({
        hOffset: hOffset
      });
    },
    min: 0,
    max: 10
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Vertical Offset"),
    value: vOffset,
    allowReset: true,
    onChange: function onChange(vOffset) {
      return setAttributes({
        vOffset: vOffset
      });
    },
    min: 0,
    max: 10
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Blur"),
    value: blur,
    allowReset: true,
    onChange: function onChange(blur) {
      return setAttributes({
        blur: blur
      });
    },
    min: 0,
    max: 10
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __(" Spread"),
    value: spread,
    allowReset: true,
    onChange: function onChange(spread) {
      return setAttributes({
        spread: spread
      });
    },
    min: 0,
    max: 10
  }), /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Inset"),
    checked: inset,
    onChange: function onChange() {
      return setAttributes({
        inset: !inset
      });
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * WordPress dependencies
 */
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    RichText = _wp$blockEditor.RichText;
/**
 * Internal dependencies
 */



var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var id = attributes.id,
      initialContent = attributes.initialContent,
      switchStyle = attributes.switchStyle,
      switchSize = attributes.switchSize,
      buttonHeight = attributes.buttonHeight,
      buttonWidth = attributes.buttonWidth,
      seperatorType = attributes.seperatorType,
      activeColor = attributes.activeColor,
      activeBg = attributes.activeBg,
      primaryLabelText = attributes.primaryLabelText,
      secondaryLabelText = attributes.secondaryLabelText,
      alignment = attributes.alignment,
      headingSpace = attributes.headingSpace,
      headingSpaceUnit = attributes.headingSpaceUnit,
      primaryLabelColor = attributes.primaryLabelColor,
      secondaryLabelColor = attributes.secondaryLabelColor,
      labelSpace = attributes.labelSpace,
      labelSpaceUnit = attributes.labelSpaceUnit,
      fontFamily = attributes.fontFamily,
      fontSize = attributes.fontSize,
      fontSizeUnit = attributes.fontSizeUnit,
      textTransform = attributes.textTransform,
      textDecoration = attributes.textDecoration,
      letterSpacing = attributes.letterSpacing,
      letterSpacingUnit = attributes.letterSpacingUnit,
      lineHeight = attributes.lineHeight,
      lineHeightUnit = attributes.lineHeightUnit,
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
      inset = attributes.inset;

  var getMargin = function getMargin() {
    var width = buttonWidth || 30;

    switch (alignment) {
      case "center":
        return "".concat((100 - width) / 2, "%");

      case "right":
        return "".concat(100 - width, "%");

      case "left":
        return "0%";
    }
  }; // Style objects


  var headingStyle = {
    textAlign: alignment,
    marginBottom: "".concat(headingSpace).concat(headingSpaceUnit),
    fontSize: fontSize ? "".concat(fontSize).concat(fontSizeUnit) : undefined,
    fontFamily: fontFamily,
    textTransform: textTransform || undefined,
    textDecoration: textDecoration || undefined,
    letterSpacing: "".concat(letterSpacing).concat(letterSpacingUnit),
    lineHeight: switchStyle !== "toggle" && lineHeight ? "".concat(lineHeight).concat(lineHeightUnit) : undefined
  };
  var sliderStyle = {
    height: switchStyle === "toggle" && "".concat(buttonHeight, "px"),
    backgroundColor: backgroundColor || _constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_BACKGROUND"],
    backgroundImage: backgroundType === "gradient" ? backgroundGradient : "none",
    borderRadius: switchStyle === "rounded" && "21px",
    border: "".concat(borderWidth, "px ").concat(borderStyle, " ").concat(borderColor),
    boxShadow: "".concat(hOffset || 0, "px ").concat(vOffset || 0, "px ").concat(blur || 0, "px ").concat(spread || 0, "px ").concat(shadowColor, " ").concat(inset ? "inset" : "")
  };
  var controllerStyle = {
    position: "absolute",
    content: "",
    zIndex: 1,
    backgroundImage: controllerType === "gradient" ? controllerGradient : "none",
    backgroundColor: controllerColor || _constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CONTROLLER_COLOR"],
    transition: "0.4s"
  };
  var labelStyle = {
    margin: "0 ".concat(labelSpace).concat(labelSpaceUnit),
    display: switchStyle === "text" && "none"
  };
  var primaryLabelStyle = {
    margin: switchStyle === "text" && seperatorType !== "none" && "0 -10px 0 10px",
    padding: switchStyle === "text" && "10px 20px",
    borderTop: switchStyle === "text" && "".concat(borderWidth, "px ").concat(borderStyle, " ").concat(borderColor),
    borderRight: switchStyle === "text" && "none",
    borderBottom: switchStyle === "text" && "".concat(borderWidth, "px ").concat(borderStyle, " ").concat(borderColor),
    borderLeft: switchStyle === "text" && "".concat(borderWidth, "px ").concat(borderStyle, " ").concat(borderColor),
    borderTopLeftRadius: switchStyle === "text" && borderRadius,
    borderBottomLeftRadius: switchStyle === "text" && borderRadius
  };
  var secondaryLabelStyle = {
    margin: switchStyle === "text" && seperatorType !== "none" && "0 10px 0 -10px",
    padding: switchStyle === "text" && "10px 20px",
    borderTop: switchStyle === "text" && "".concat(borderWidth, "px ").concat(borderStyle, " ").concat(borderColor),
    borderRight: switchStyle === "text" && "".concat(borderWidth, "px ").concat(borderStyle, " ").concat(borderColor),
    borderBottom: switchStyle === "text" && "".concat(borderWidth, "px ").concat(borderStyle, " ").concat(borderColor),
    borderLeft: switchStyle === "text" && "none",
    borderTopRightRadius: switchStyle === "text" && borderRadius,
    borderBottomRightRadius: switchStyle === "text" && borderRadius
  };
  var seperatorStyle = {
    display: switchStyle === "text" ? "inline-block" : "none"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "eb-toggle-wrapper",
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
    style: _objectSpread(_objectSpread({}, headingStyle), {}, {
      display: switchStyle === "toggle" ? "block" : "none"
    })
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
    style: {
      width: "".concat(buttonWidth, "%"),
      marginLeft: getMargin()
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "eb-text-switch-label",
    "for": "eb-".concat(id),
    style: sliderStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-text-switch-toggle",
    style: _objectSpread(_objectSpread({}, controllerStyle), {}, {
      zIndex: 0
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "eb-switch-names",
    style: {
      fontSize: fontSize ? "".concat(fontSize).concat(fontSizeUnit) : undefined
    }
  }, /*#__PURE__*/React.createElement(RichText.Content, {
    tagName: "span",
    className: "eb-toggle-primary-label-text",
    style: primaryLabelStyle,
    value: primaryLabelText
  }), /*#__PURE__*/React.createElement(RichText.Content, {
    tagName: "span",
    className: "eb-toggle-secondary-label-text",
    style: secondaryLabelStyle,
    value: secondaryLabelText
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "eb-toggle-heading",
    style: _objectSpread(_objectSpread({}, headingStyle), {}, {
      display: switchStyle !== "toggle" ? "block" : "none"
    })
  }, /*#__PURE__*/React.createElement(RichText.Content, {
    tagName: "span",
    className: "eb-toggle-primary-label",
    style: primaryLabelStyle,
    value: primaryLabelText
  }), /*#__PURE__*/React.createElement("label", {
    className: "eb-toggle-switch toggle-".concat(switchSize),
    style: labelStyle
  }, /*#__PURE__*/React.createElement("input", {
    className: "eb-toggle-input",
    type: "checkbox"
  }), /*#__PURE__*/React.createElement("span", {
    className: "eb-toggle-controller",
    style: controllerStyle
  }), /*#__PURE__*/React.createElement("span", {
    className: "eb-toggle-slider",
    style: sliderStyle
  })), /*#__PURE__*/React.createElement("span", {
    className: "eb-toggle-".concat(seperatorType, " eb-toggle-seperator"),
    style: seperatorStyle
  }), /*#__PURE__*/React.createElement(RichText.Content, {
    tagName: "span",
    className: "eb-toggle-secondary-label",
    style: secondaryLabelStyle,
    value: secondaryLabelText
  })), /*#__PURE__*/React.createElement("div", {
    className: "eb-toggle-content"
  }, /*#__PURE__*/React.createElement(InnerBlocks.Content, null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./util/color-control/index.js":
/*!*************************************!*\
  !*** ./util/color-control/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./util/color-control/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __ = wp.i18n.__;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    Dropdown = _wp$components.Dropdown,
    Tooltip = _wp$components.Tooltip,
    ColorPicker = _wp$components.ColorPicker,
    Button = _wp$components.Button;


var ColorControl = function ColorControl(_ref) {
  var label = _ref.label,
      color = _ref.color,
      onChange = _ref.onChange;

  var _useState = useState(color),
      _useState2 = _slicedToArray(_useState, 2),
      bgColor = _useState2[0],
      setBgColor = _useState2[1];

  useEffect(function () {
    setBgColor(color);
  }, [color]);

  var _onChangeComplete = function onChangeComplete(_ref2) {
    var rgb = _ref2.rgb,
        hex = _ref2.hex;
    var color = rgb ? "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")") : hex;
    onChange(color);
  };

  var colorStyles = {
    padding: 2,
    borderRadius: 0,
    background: "white",
    border: "1px solid #ebebeb"
  };
  return /*#__PURE__*/React.createElement(BaseControl, {
    label: label || "",
    className: "eb-color-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    renderToggle: function renderToggle(_ref3) {
      var isOpen = _ref3.isOpen,
          onToggle = _ref3.onToggle;
      return /*#__PURE__*/React.createElement(Tooltip, {
        text: color || "default"
      }, /*#__PURE__*/React.createElement("div", {
        className: "eb-color-ball",
        style: color && colorStyles
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          height: 16,
          width: 16,
          borderRadius: "0%",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
          backgroundColor: bgColor
        },
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": color || "default"
      })));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(ColorPicker, {
        color: color,
        onChangeComplete: function onChangeComplete(color) {
          return _onChangeComplete(color);
        }
      });
    }
  }), bgColor && /*#__PURE__*/React.createElement(Button, {
    isSmall: true,
    className: "eb-color-undo",
    icon: "image-rotate",
    style: {
      transform: "scaleX(-1) rotate(90deg)"
    },
    onClick: function onClick() {
      return onChange(undefined);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorControl);

/***/ }),

/***/ "./util/gradient-color-controller/constants.js":
/*!*****************************************************!*\
  !*** ./util/gradient-color-controller/constants.js ***!
  \*****************************************************/
/*! exports provided: GRADIENT_TYPE, RADIAL_TYPES, FOCUS_COLOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRADIENT_TYPE", function() { return GRADIENT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RADIAL_TYPES", function() { return RADIAL_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_COLOR", function() { return FOCUS_COLOR; });
var GRADIENT_TYPE = [{
  label: "Linear",
  value: "linear"
}, {
  label: "Radial",
  value: "radial"
}];
var RADIAL_TYPES = [{
  label: "Ellipse",
  value: "ellipse"
}, {
  label: "Circle",
  value: "circle"
}];
var FOCUS_COLOR = "#007cba";

/***/ }),

/***/ "./util/gradient-color-controller/helper.js":
/*!**************************************************!*\
  !*** ./util/gradient-color-controller/helper.js ***!
  \**************************************************/
/*! exports provided: parseGradientColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseGradientColor", function() { return parseGradientColor; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Parses the gradient color string
var parseGradientColor = function parseGradientColor(gradientColor) {
  var angle = 45,
      colorOnePosition = 0,
      colorTwoPosition = 100,
      radialShape = "ellipse",
      radialX = 50,
      radialY = 50;

  var _gradientColor$match = gradientColor.match(/\#[a-f\d]{6}|rgba?\([\d\,\.]{3,16}\)/gi),
      _gradientColor$match2 = _slicedToArray(_gradientColor$match, 2),
      colorOne = _gradientColor$match2[0],
      colorTwo = _gradientColor$match2[1];

  var _gradientColor$match3 = gradientColor.match(/\w{6}(?=-)/i),
      _gradientColor$match4 = _slicedToArray(_gradientColor$match3, 1),
      gradientType = _gradientColor$match4[0];

  if (gradientType == "linear") {
    angle = gradientColor.match(/\d{1,3}(?=deg)/i)[0];

    var _ref = gradientColor.match(/\d{1,3}(?=\%)/gi) || [0, 100];

    var _ref2 = _slicedToArray(_ref, 2);

    colorOnePosition = _ref2[0];
    colorTwoPosition = _ref2[1];
  } else {
    radialShape = gradientColor.match(/\w+(?= at)/i)[0];
    radialX = gradientColor.match(/(?<=at )\d{1,3}/i)[0];
    radialY = gradientColor.match(/(?<=% )\d{1,3}/i)[0];
    colorOnePosition = gradientColor.match(/\d{1,3}(?=% ,)/gi)[0];
    colorTwoPosition = gradientColor.match(/\d{1,3}(?=%\))/gi)[0];
  }

  return {
    gradientType: gradientType,
    angle: parseInt(angle),
    colorOne: colorOne,
    colorTwo: colorTwo,
    colorOnePosition: parseInt(colorOnePosition),
    colorTwoPosition: parseInt(colorTwoPosition),
    radialShape: radialShape,
    radialX: parseInt(radialX),
    radialY: parseInt(radialY)
  };
};

/***/ }),

/***/ "./util/gradient-color-controller/index.js":
/*!*************************************************!*\
  !*** ./util/gradient-color-controller/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color-control */ "./util/color-control/index.js");
/* harmony import */ var _toggle_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toggle-button */ "./util/toggle-button/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./util/gradient-color-controller/constants.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helper */ "./util/gradient-color-controller/helper.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$components = wp.components,
    RangeControl = _wp$components.RangeControl,
    BaseControl = _wp$components.BaseControl;
/**
 * Internal dependencies
 */








var GradientColorControl = function GradientColorControl(_ref) {
  var gradientColor = _ref.gradientColor,
      onChange = _ref.onChange;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("linear"),
      _useState2 = _slicedToArray(_useState, 2),
      gradientType = _useState2[0],
      setGradientType = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("transparent"),
      _useState4 = _slicedToArray(_useState3, 2),
      colorOne = _useState4[0],
      setColorOne = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState6 = _slicedToArray(_useState5, 2),
      colorOnePosition = _useState6[0],
      setColorOnePosition = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("transparent"),
      _useState8 = _slicedToArray(_useState7, 2),
      colorTwo = _useState8[0],
      setColorTwo = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(100),
      _useState10 = _slicedToArray(_useState9, 2),
      colorTwoPosition = _useState10[0],
      setColorTwoPosition = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState12 = _slicedToArray(_useState11, 2),
      angle = _useState12[0],
      setAngle = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("ellipse"),
      _useState14 = _slicedToArray(_useState13, 2),
      radialShape = _useState14[0],
      setRadialShape = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(50),
      _useState16 = _slicedToArray(_useState15, 2),
      radialX = _useState16[0],
      setRadialX = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(50),
      _useState18 = _slicedToArray(_useState17, 2),
      radialY = _useState18[0],
      setRadialY = _useState18[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _parseGradientColor = Object(_helper__WEBPACK_IMPORTED_MODULE_5__["parseGradientColor"])(gradientColor),
        gradientType = _parseGradientColor.gradientType,
        angle = _parseGradientColor.angle,
        colorOne = _parseGradientColor.colorOne,
        colorTwo = _parseGradientColor.colorTwo,
        colorOnePosition = _parseGradientColor.colorOnePosition,
        colorTwoPosition = _parseGradientColor.colorTwoPosition,
        radialShape = _parseGradientColor.radialShape,
        radialX = _parseGradientColor.radialX,
        radialY = _parseGradientColor.radialY;

    setGradientType(gradientType);
    setAngle(angle);
    setColorOne(colorOne);
    setColorTwo(colorTwo);
    setColorOnePosition(colorOnePosition);
    setColorTwoPosition(colorTwoPosition);
    setRadialShape(radialShape);
    setRadialX(radialX);
    setRadialY(radialY);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    onChange(gradientType === "linear" ? getLinearGradient() : getRadialGradient());
  }, [gradientType, colorOne, colorOnePosition, colorTwo, colorTwoPosition, angle, radialShape, radialX, radialY]);

  var getColorString = function getColorString() {
    return "".concat(colorOne, " ").concat(colorOnePosition, "% , ").concat(colorTwo, " ").concat(colorTwoPosition, "%");
  };

  var getRadialGradient = function getRadialGradient() {
    return "radial-gradient(".concat(radialShape, " at ").concat(radialX, "% ").concat(radialY, "%, ").concat(getColorString(), ")");
  };

  var getLinearGradient = function getLinearGradient() {
    return "linear-gradient(".concat(angle, "deg, ").concat(getColorString(), ")");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "eb-gradient-control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseControl, {
    label: __("Gradient Type"),
    className: "eb-gradient-toggle-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_toggle_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    defaultSelected: gradientType === "ellipse" ? _constants__WEBPACK_IMPORTED_MODULE_4__["GRADIENT_TYPE"][0] : _constants__WEBPACK_IMPORTED_MODULE_4__["GRADIENT_TYPE"][1],
    options: _constants__WEBPACK_IMPORTED_MODULE_4__["GRADIENT_TYPE"],
    onChange: function onChange(gradientType) {
      return setGradientType(gradientType);
    },
    focusColor: _constants__WEBPACK_IMPORTED_MODULE_4__["FOCUS_COLOR"]
  })), gradientType === "radial" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseControl, {
    label: __("Radial Type"),
    className: "eb-gradient-toggle-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_toggle_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    defaultSelected: radialShape === "ellipse" ? _constants__WEBPACK_IMPORTED_MODULE_4__["RADIAL_TYPES"][0] : _constants__WEBPACK_IMPORTED_MODULE_4__["RADIAL_TYPES"][1],
    options: _constants__WEBPACK_IMPORTED_MODULE_4__["RADIAL_TYPES"],
    onChange: function onChange(radialShape) {
      return setRadialShape(radialShape);
    },
    focusColor: _constants__WEBPACK_IMPORTED_MODULE_4__["FOCUS_COLOR"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __("First Color"),
    color: colorOne,
    onChange: function onChange(colorOne) {
      return setColorOne(colorOne);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __("Second Color"),
    color: colorTwo,
    onChange: function onChange(colorTwo) {
      return setColorTwo(colorTwo);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
    label: __("First Color Position"),
    value: colorOnePosition,
    onChange: function onChange(colorOnePosition) {
      return setColorOnePosition(colorOnePosition);
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
    label: __("Second Color Position"),
    value: colorTwoPosition,
    onChange: function onChange(colorTwoPosition) {
      return setColorTwoPosition(colorTwoPosition);
    },
    min: 0,
    max: 100
  }), gradientType === "linear" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
    label: __("Angle"),
    value: angle,
    onChange: function onChange(angle) {
      return setAngle(angle);
    },
    min: 0,
    max: 360
  }), gradientType === "radial" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
    label: __("Center X Position"),
    value: radialX,
    onChange: function onChange(radialX) {
      return setRadialX(radialX);
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
    label: __("Center Y Position"),
    value: radialY,
    onChange: function onChange(radialY) {
      return setRadialY(radialY);
    },
    min: 0,
    max: 100
  })));
};

GradientColorControl.propTypes = {
  gradientColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (GradientColorControl);

/***/ }),

/***/ "./util/toggle-button/index.js":
/*!*************************************!*\
  !*** ./util/toggle-button/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./util/toggle-button/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ToggleButton = function ToggleButton(_ref) {
  var options = _ref.options,
      focusColor = _ref.focusColor,
      onChange = _ref.onChange,
      defaultSelected = _ref.defaultSelected;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultSelected || options[0]),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    onChange(selected.value);
  }, [selected]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "switch",
    className: "eb-switch-control"
  }, options.map(function (option, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: index ? "individual" : "business",
      type: "radio",
      name: "gh",
      placeholder: "name",
      onChange: function onChange() {
        return setSelected(option);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        color: selected.value === option.value ? "white" : "black"
      }
    }, option.label));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "slideBg",
    style: {
      backgroundColor: "#551ef7",
      transform: selected == options[0] ? "translateX(0)" : "translateX(100%)"
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ToggleButton);

/***/ }),

/***/ "./util/typography-control/FontPicker.js":
/*!***********************************************!*\
  !*** ./util/typography-control/FontPicker.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./util/typography-control/constants.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var withInstanceId = wp.compose.withInstanceId;
var BaseControl = wp.components.BaseControl;

function FontFamilyPicker(_ref) {
  var label = _ref.label,
      value = _ref.value,
      help = _ref.help,
      instanceId = _ref.instanceId,
      onChange = _ref.onChange,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["label", "value", "help", "instanceId", "onChange", "className"]);

  var id = "inspector-eb-font-family-".concat(instanceId);
  var fonts = [{
    value: "",
    label: __("Default")
  }, {
    value: "Arial",
    label: "Arial"
  }, {
    value: "Helvetica",
    label: "Helvetica"
  }, {
    value: "Times New Roman",
    label: "Times New Roman"
  }, {
    value: "Georgia",
    label: "Georgia"
  }]; //Add Google Fonts

  Object.keys(_constants__WEBPACK_IMPORTED_MODULE_0__["FONTS"]).map(function (k) {
    fonts.push({
      value: k,
      label: k
    });
  });

  var onChangeValue = function onChangeValue(event) {
    var meta = wp.data.select("core/editor").getEditedPostAttribute("meta");
    var ba = "";
    var googleFontsAttr = ":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic";
    var link = document.createElement("link");
    link.rel = "stylesheet";

    if (typeof meta !== "undefined" && typeof meta._eb_attr !== "undefined") {
      ba = meta._eb_attr;
    }

    if (ba.length > 0) {
      //Load fonts on the header
      if (!ba.includes(event.target.value)) {
        link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
        document.head.appendChild(link);
      }

      ba = ba.replace("," + event.target.value, "");
      ba = ba + "," + event.target.value;
    } else {
      link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
      document.head.appendChild(link);
      ba = event.target.value;
    } //Save values to metadata


    wp.data.dispatch("core/editor").editPost({
      meta: {
        _eb_attr: ba
      }
    });
    onChange(event.target.value);
  };

  return /*#__PURE__*/React.createElement(BaseControl, {
    label: label,
    id: id,
    help: help,
    className: className
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    className: "components-select-control__input",
    onChange: onChangeValue,
    "aria-describedby": !!help ? "".concat(id, "__help") : undefined
  }, props), fonts.map(function (option, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: "".concat(option.label, "-").concat(option.value, "-").concat(index),
      value: option.value,
      selected: value === option.value ? "selected" : ""
    }, option.label);
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (withInstanceId(FontFamilyPicker));

/***/ }),

/***/ "./util/typography-control/constants.js":
/*!**********************************************!*\
  !*** ./util/typography-control/constants.js ***!
  \**********************************************/
/*! exports provided: FONTS, WEIGHTS, TRANSFORMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONTS", function() { return FONTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEIGHTS", function() { return WEIGHTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSFORMS", function() { return TRANSFORMS; });
var __ = wp.i18n.__;
var FONTS = {
  "Abril Fatface": {
    weight: ["400"]
  },
  Anton: {
    weight: ["400"]
  },
  Arvo: {
    weight: ["400", "700"]
  },
  Asap: {
    weight: ["400", "500", "600", "700"]
  },
  "Barlow Condensed": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  Barlow: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "Cormorant Garamond": {
    weight: ["300", "400", "500", "600", "700"]
  },
  Faustina: {
    weight: ["400", "500", "600", "700"]
  },
  "Fira Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "IBM Plex Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700"]
  },
  Inconsolata: {
    weight: ["400", "700"]
  },
  Heebo: {
    weight: ["100", "300", "400", "500", "700", "800", "900"]
  },
  Karla: {
    weight: ["400", "700"]
  },
  Lato: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  Lora: {
    weight: ["400", "700"]
  },
  Merriweather: {
    weight: ["300", "400", "500", "600", "700", "800", "900"]
  },
  Montserrat: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "Noto Sans": {
    weight: ["400", "700"]
  },
  "Noto Serif": {
    weight: ["400", "700"]
  },
  "Open Sans": {
    weight: ["300", "400", "500", "600", "700", "800"]
  },
  Oswald: {
    weight: ["200", "300", "400", "500", "600", "700"]
  },
  "Playfair Display": {
    weight: ["400", "700", "900"]
  },
  "PT Serif": {
    weight: ["400", "700"]
  },
  Roboto: {
    weight: ["100", "300", "400", "500", "700", "900"]
  },
  Rubik: {
    weight: ["300", "400", "500", "700", "900"]
  },
  Tajawal: {
    weight: ["200", "300", "400", "500", "700", "800", "900"]
  },
  Ubuntu: {
    weight: ["300", "400", "500", "700"]
  },
  Yrsa: {
    weight: ["300", "400", "500", "600", "700"]
  }
};
var WEIGHTS = [{
  label: __("Default"),
  value: ""
}, {
  label: __("Normal"),
  value: "normal"
}, {
  label: __("Bold"),
  value: "bold"
}];
var TRANSFORMS = [{
  label: __("None"),
  value: ""
}, {
  label: __("AA"),
  value: "uppercase"
}, {
  label: __("aa"),
  value: "lowercase"
}, {
  label: __("Aa"),
  value: "capitalize"
}];


/***/ }),

/***/ "./util/unit-control/index.js":
/*!************************************!*\
  !*** ./util/unit-control/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./util/unit-control/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);



/**
 * WordPress dependencies
 */

var _wp$components = wp.components,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button;

var UnitControl = function UnitControl(_ref) {
  var selectedUnit = _ref.selectedUnit,
      unitTypes = _ref.unitTypes,
      _onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonGroup, {
    className: "eb-unit-control-btn-group"
  }, unitTypes.map(function (unit) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
      className: "eb-unit-control-btn ".concat(unit.value === selectedUnit && "eb-unit-active"),
      isSmall: true,
      isPrimary: unit.value === selectedUnit,
      onClick: function onClick() {
        return _onClick(unit.value);
      }
    }, unit.label);
  }));
};

UnitControl.propTypes = {
  selectedUnit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  unitTypes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (UnitControl);

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map