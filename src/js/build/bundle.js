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

/***/ "./js/src/appSettings.js":
/*!*******************************!*\
  !*** ./js/src/appSettings.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var appSettings = function () {

    var config = {
        fadeIn: 600,
        progressBarErrorClass: 'progress-bar-danger',
        statusText401: 'Unauthorized',
        statusText404: 'Not Found',
        statusText500: 'Internal Server Error',
        timeOut_30_seconds: 30000
    };

    var urls = {
        cyclingEvents: 'https://zxenlogics.github.io/src/events.json'

        /**
         * @desc Returns a reference to the specified html element
         */
    };var elm = {
        progress: document.querySelector('.progress'),
        progressBar: document.querySelector('.progress-bar')
    };

    return {
        config: config,
        urls: urls,
        elm: elm
    };
}();

exports.appSettings = appSettings;

/***/ }),

/***/ "./js/src/dateBuilder.js":
/*!*******************************!*\
  !*** ./js/src/dateBuilder.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var dateBuilder = exports.dateBuilder = function dateBuilder() {
    var _this = this;

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var date = new Date();
    var locale = "en-us";

    var newDate = function newDate(d) {
        var parts = d.split('-');
        date = new Date(parts[0], parts[1] - 1, parts[2]);
        return this;
    };

    var today = function today() {
        date = new Date();
        return _this;
    };

    var shortMonth = function shortMonth() {
        // ref: https://jsfiddle.net/dstorey/Xgerq/
        return date.toLocaleString(locale, { month: "short" });
    };

    var longMonth = function longMonth() {
        // ref: https://jsfiddle.net/dstorey/Xgerq/
        return date.toLocaleString(locale, { month: "long" });
    };

    var toString = function toString() {
        return date.toDateString();;
    };

    var toLongDateString = function toLongDateString() {
        var dt = date.getDate();
        var day = date.getDay();
        var month = longMonth();
        var year = date.getFullYear();
        var dateString = days[day] + ', ' + month + ' ' + dt + ', ' + year;
        return dateString;
    };

    var hasPast = function hasPast() {
        var today = new Date();
        return date < today;
    };

    var isToday = function isToday() {
        var today = new Date();
        return date === today;
    };

    return {
        newDate: newDate,
        today: today,
        isToday: isToday,
        hasPast: hasPast,
        toString: toString,
        toLongDateString: toLongDateString
    };
};

/***/ }),

/***/ "./js/src/main.js":
/*!************************!*\
  !*** ./js/src/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./utils */ "./js/src/utils.js");

var _dateBuilder = __webpack_require__(/*! ./dateBuilder */ "./js/src/dateBuilder.js");

(0, _utils.onReady)(function () {
	// var elems = document.querySelectorAll('.tooltipped');
	// var instances = M.Tooltip.init(elems, options);

	console.log('[onReady]');
});

var app = new Vue({
	el: '#app',
	data: {
		rides: []
	},
	// computed: {
	// 	isInProgress: function(d) {
	// 		var t = dateBuilder.newDate(d).isToday();
	// 		return t ? "is happening today" : "happening in a few days";
	// 	}
	// },
	mounted: function mounted() {
		var _this = this;

		(0, _utils.getEvents)().then(function (events) {
			events.forEach(function (event) {
				var db = (0, _dateBuilder.dateBuilder)().newDate(event.Date);
				event.Date = db.toLongDateString(); //dateBuilder().newDate(event.Date).toLongDateString();
				event.IsActive = !db.hasPast();
				//console.log(`event.IsActive = ${db.hasPast()}`);
				_this.rides.push(event);
			});
		});
	}
});

/***/ }),

/***/ "./js/src/utils.js":
/*!*************************!*\
  !*** ./js/src/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onReady = onReady;
exports.getEvents = getEvents;

var _appSettings = __webpack_require__(/*! ./appSettings */ "./js/src/appSettings.js");

/**
 * @desc Pure js alternative to the jQuery.ready function
 * @param {any} fn Function to execute on DOM loaded
 */
function onReady(fn) {
    //$(fn);
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function getEvents() {
    return fetch(_appSettings.appSettings.urls.cyclingEvents).then(function (response) {
        return response.json();
    }).catch(function (e) {
        console.error('An error occured: ' + e);
    });
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map