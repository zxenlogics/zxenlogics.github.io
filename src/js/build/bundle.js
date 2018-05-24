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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/src/main.js":
/*!************************!*\
  !*** ./js/src/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//import data from './data';

var data = [{
	"ride": "Bloomin Metric",
	"date": "May 20, 2018",
	"website": "https://www.bloominmetric.com/",
	"register": "https://www.bloominmetric.com/"
}, {
	"ride": "Nassau to Suffolk",
	"date": "June 24, 2018",
	"website": "https://www.n2sbc.org/",
	"register": "https://www.n2sbc.org/"
}, {
	"ride": "Gold Goast Tour",
	"date": "July 15, 2018",
	"website": "https://www.hbcli.org/gold_coast_tour",
	"register": "https://www.active.com/greenlawn-ny/cycling/gold-coast-tour-2018"
}];

var getRides = function getRides() {
	var ride = 'Summer sportifs';
	var year = '2018';

	return "Here are the " + data[0].ride + " of " + year;
};

var getEvents = function getEvents() {
	return data;
};

//export { getEvents }
//console.log(getRides());
//console.log(`here is the data ${JSON.stringify(data, null, 2)}`);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map