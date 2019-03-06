module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Flight.js":
/*!******************************!*\
  !*** ./components/Flight.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var Flight =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Flight, _Component);

  function Flight() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Flight);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Flight).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Flight, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flight"
      }, children);
    }
  }]);

  return Flight;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Flight);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var hrStyle = {
  marginTop: 75
};

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_styles_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _src_styles_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_styles_style_scss__WEBPACK_IMPORTED_MODULE_2__);




var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML: {
      __html: _src_styles_style_scss__WEBPACK_IMPORTED_MODULE_2___default.a
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Flight-Tracker")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");




var Layout = function Layout(props) {
  var children = props.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/PageWrapper.js":
/*!***********************************!*\
  !*** ./components/PageWrapper.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config.js */ "./config.js");











var PageWrapper = function PageWrapper(Comp) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(_class, _React$Component);

      function _class() {
        Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _class);

        return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(_class).apply(this, arguments));
      }

      Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(_class, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Comp, this.props);
        }
      }], [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(args) {
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.t0 = _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"];
                    _context.t1 = {};

                    if (!Comp.getInitialProps) {
                      _context.next = 8;
                      break;
                    }

                    _context.next = 5;
                    return Comp.getInitialProps(args);

                  case 5:
                    _context.t2 = _context.sent;
                    _context.next = 9;
                    break;

                  case 8:
                    _context.t2 = null;

                  case 9:
                    _context.t3 = _context.t2;
                    return _context.abrupt("return", (0, _context.t0)(_context.t1, _context.t3));

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          }

          return getInitialProps;
        }()
      }]);

      return _class;
    }(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component)
  );
};

/* harmony default export */ __webpack_exports__["default"] = (PageWrapper);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var skyUrl = 'https://opensky-network.org/api';
var proxySkyUrl = 'https://xcors.felixkoppe.com/https://opensky-network.org/api';
var updateApi = 'https://cors.koppe.design/';
var mapStyles = [{
  "elementType": "geometry",
  "stylers": [{
    "color": "#212121"
  }]
}, {
  "elementType": "labels.icon",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#757575"
  }]
}, {
  "elementType": "labels.text.stroke",
  "stylers": [{
    "color": "#212121"
  }]
}, {
  "featureType": "administrative",
  "elementType": "geometry",
  "stylers": [{
    "color": "#757575"
  }]
}, {
  "featureType": 'poi',
  "elementType": 'labels',
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "administrative.country",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#9e9e9e"
  }]
}, {
  "featureType": "administrative.land_parcel",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "administrative.locality",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#bdbdbd"
  }]
}, {
  "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#757575"
  }]
}, {
  "featureType": "poi.park",
  "elementType": "geometry",
  "stylers": [{
    "color": "#181818"
  }]
}, {
  "featureType": "poi.park",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#616161"
  }]
}, {
  "featureType": "poi.park",
  "elementType": "labels.text.stroke",
  "stylers": [{
    "color": "#1b1b1b"
  }]
}, {
  "featureType": "road",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#2c2c2c"
  }]
}, {
  "featureType": "road",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#8a8a8a"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "geometry",
  "stylers": [{
    "color": "#373737"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [{
    "color": "#3c3c3c"
  }]
}, {
  "featureType": "road.highway.controlled_access",
  "elementType": "geometry",
  "stylers": [{
    "color": "#4e4e4e"
  }]
}, {
  "featureType": "road.local",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#616161"
  }]
}, {
  "featureType": "transit",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#757575"
  }]
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [{
    "color": "#000000"
  }]
}, {
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#3d3d3d"
  }]
}];
var Config = {
  apiUrl: skyUrl,
  proxyApiUrl: proxySkyUrl,
  authApiUrl: updateApi,
  mapStyles: mapStyles
};
/* harmony default export */ __webpack_exports__["default"] = (Config);

/***/ }),

/***/ "./fake.js":
/*!*****************!*\
  !*** ./fake.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);

var fake = [{
  "time": "20:52",
  "barAlt": 0,
  "lat": 50.9046,
  "lng": 4.4754
}, {
  "time": "20:53",
  "barAlt": 304,
  "lat": 50.9003,
  "lng": 4.4608
}, {
  "time": "20:53",
  "barAlt": 609,
  "lat": 50.8976,
  "lng": 4.4518
}, {
  "time": "20:53",
  "barAlt": 609,
  "lat": 50.8962,
  "lng": 4.4486
}, {
  "time": "20:53",
  "barAlt": 914,
  "lat": 50.8937,
  "lng": 4.4456
}, {
  "time": "20:53",
  "barAlt": 914,
  "lat": 50.8896,
  "lng": 4.444
}, {
  "time": "20:53",
  "barAlt": 914,
  "lat": 50.8859,
  "lng": 4.4446
}, {
  "time": "20:53",
  "barAlt": 914,
  "lat": 50.8821,
  "lng": 4.4465
}, {
  "time": "20:53",
  "barAlt": 914,
  "lat": 50.8774,
  "lng": 4.451
}, {
  "time": "20:54",
  "barAlt": 1219,
  "lat": 50.8647,
  "lng": 4.4659
}, {
  "time": "20:54",
  "barAlt": 1219,
  "lat": 50.8497,
  "lng": 4.4808
}, {
  "time": "20:54",
  "barAlt": 1524,
  "lat": 50.8443,
  "lng": 4.4866
}, {
  "time": "20:54",
  "barAlt": 1524,
  "lat": 50.8391,
  "lng": 4.4931
}, {
  "time": "20:54",
  "barAlt": 1524,
  "lat": 50.8344,
  "lng": 4.5003
}, {
  "time": "20:54",
  "barAlt": 1524,
  "lat": 50.8302,
  "lng": 4.5079
}, {
  "time": "20:54",
  "barAlt": 1524,
  "lat": 50.8249,
  "lng": 4.5193
}, {
  "time": "20:54",
  "barAlt": 1524,
  "lat": 50.8211,
  "lng": 4.5293
}, {
  "time": "20:55",
  "barAlt": 1828,
  "lat": 50.8168,
  "lng": 4.5431
}, {
  "time": "20:55",
  "barAlt": 1828,
  "lat": 50.8141,
  "lng": 4.5535
}, {
  "time": "20:55",
  "barAlt": 1828,
  "lat": 50.8114,
  "lng": 4.5657
}, {
  "time": "20:55",
  "barAlt": 2133,
  "lat": 50.8087,
  "lng": 4.5792
}, {
  "time": "20:55",
  "barAlt": 2133,
  "lat": 50.8066,
  "lng": 4.5917
}, {
  "time": "20:55",
  "barAlt": 2438,
  "lat": 50.8005,
  "lng": 4.6291
}, {
  "time": "20:55",
  "barAlt": 2743,
  "lat": 50.7947,
  "lng": 4.665
}, {
  "time": "20:56",
  "barAlt": 3048,
  "lat": 50.786,
  "lng": 4.7159
}, {
  "time": "20:57",
  "barAlt": 3352,
  "lat": 50.7624,
  "lng": 4.8367
}, {
  "time": "20:57",
  "barAlt": 3657,
  "lat": 50.7521,
  "lng": 4.8887
}, {
  "time": "20:57",
  "barAlt": 3962,
  "lat": 50.7457,
  "lng": 4.9211
}, {
  "time": "20:57",
  "barAlt": 4267,
  "lat": 50.7328,
  "lng": 4.9861
}, {
  "time": "20:58",
  "barAlt": 4572,
  "lat": 50.7199,
  "lng": 5.0506
}, {
  "time": "20:58",
  "barAlt": 4876,
  "lat": 50.7135,
  "lng": 5.0833
}, {
  "time": "20:58",
  "barAlt": 4876,
  "lat": 50.7117,
  "lng": 5.0968
}, {
  "time": "20:58",
  "barAlt": 5181,
  "lat": 50.7101,
  "lng": 5.1142
}, {
  "time": "20:58",
  "barAlt": 5181,
  "lat": 50.7095,
  "lng": 5.1307
}, {
  "time": "20:58",
  "barAlt": 5486,
  "lat": 50.7095,
  "lng": 5.1472
}, {
  "time": "20:59",
  "barAlt": 5486,
  "lat": 50.7104,
  "lng": 5.1964
}, {
  "time": "20:59",
  "barAlt": 5486,
  "lat": 50.7114,
  "lng": 5.2135
}, {
  "time": "20:59",
  "barAlt": 5791,
  "lat": 50.7132,
  "lng": 5.2293
}, {
  "time": "20:59",
  "barAlt": 5791,
  "lat": 50.7154,
  "lng": 5.2438
}, {
  "time": "20:59",
  "barAlt": 5791,
  "lat": 50.7194,
  "lng": 5.2632
}, {
  "time": "20:59",
  "barAlt": 5791,
  "lat": 50.7224,
  "lng": 5.2772
}, {
  "time": "21:00",
  "barAlt": 6096,
  "lat": 50.7377,
  "lng": 5.346
}, {
  "time": "21:00",
  "barAlt": 6400,
  "lat": 50.7527,
  "lng": 5.4142
}, {
  "time": "21:01",
  "barAlt": 6705,
  "lat": 50.7838,
  "lng": 5.555
}, {
  "time": "21:02",
  "barAlt": 7010,
  "lat": 50.83,
  "lng": 5.7673
}, {
  "time": "21:02",
  "barAlt": 7315,
  "lat": 50.8601,
  "lng": 5.9072
}, {
  "time": "21:03",
  "barAlt": 7620,
  "lat": 50.8859,
  "lng": 6.029
}, {
  "time": "21:03",
  "barAlt": 7924,
  "lat": 50.8987,
  "lng": 6.0885
}, {
  "time": "21:04",
  "barAlt": 8229,
  "lat": 50.9106,
  "lng": 6.1431
}, {
  "time": "21:04",
  "barAlt": 8534,
  "lat": 50.9182,
  "lng": 6.1797
}, {
  "time": "21:04",
  "barAlt": 8839,
  "lat": 50.9381,
  "lng": 6.2838
}, {
  "time": "21:05",
  "barAlt": 9144,
  "lat": 50.9689,
  "lng": 6.4484
}, {
  "time": "21:06",
  "barAlt": 9448,
  "lat": 50.9867,
  "lng": 6.55
}, {
  "time": "21:06",
  "barAlt": 9753,
  "lat": 51.0033,
  "lng": 6.6442
}, {
  "time": "21:07",
  "barAlt": 10058,
  "lat": 51.0282,
  "lng": 6.7852
}, {
  "time": "21:07",
  "barAlt": 10363,
  "lat": 51.0355,
  "lng": 6.8266
}, {
  "time": "21:07",
  "barAlt": 10363,
  "lat": 51.0398,
  "lng": 6.8456
}, {
  "time": "21:07",
  "barAlt": 10363,
  "lat": 51.0449,
  "lng": 6.8642
}, {
  "time": "21:07",
  "barAlt": 10363,
  "lat": 51.05,
  "lng": 6.8803
}, {
  "time": "21:07",
  "barAlt": 10363,
  "lat": 51.0567,
  "lng": 6.8983
}, {
  "time": "21:08",
  "barAlt": 10363,
  "lat": 51.0757,
  "lng": 6.9476
}, {
  "time": "21:09",
  "barAlt": 10668,
  "lat": 51.1955,
  "lng": 7.2591
}, {
  "time": "21:10",
  "barAlt": 10363,
  "lat": 51.2097,
  "lng": 7.2965
}, {
  "time": "21:14",
  "barAlt": 10668,
  "lat": 51.5244,
  "lng": 8.1414
}, {
  "time": "21:15",
  "barAlt": 10363,
  "lat": 51.5683,
  "lng": 8.2605
}, {
  "time": "21:15",
  "barAlt": 10668,
  "lat": 51.6,
  "lng": 8.3478
}, {
  "time": "21:17",
  "barAlt": 10363,
  "lat": 51.7475,
  "lng": 8.7574
}, {
  "time": "21:21",
  "barAlt": 10668,
  "lat": 52.0024,
  "lng": 9.481
}, {
  "time": "21:23",
  "barAlt": 10363,
  "lat": 52.0878,
  "lng": 9.7276
}, {
  "time": "21:25",
  "barAlt": 10668,
  "lat": 52.2407,
  "lng": 10.1766
}, {
  "time": "21:26",
  "barAlt": 10363,
  "lat": 52.3142,
  "lng": 10.3943
}, {
  "time": "21:27",
  "barAlt": 10058,
  "lat": 52.3803,
  "lng": 10.5924
}, {
  "time": "21:28",
  "barAlt": 9753,
  "lat": 52.4442,
  "lng": 10.7861
}, {
  "time": "21:28",
  "barAlt": 9448,
  "lat": 52.4682,
  "lng": 10.859
}, {
  "time": "21:29",
  "barAlt": 9144,
  "lat": 52.4966,
  "lng": 10.9451
}, {
  "time": "21:29",
  "barAlt": 8839,
  "lat": 52.5193,
  "lng": 11.0143
}, {
  "time": "21:30",
  "barAlt": 8534,
  "lat": 52.5424,
  "lng": 11.0856
}, {
  "time": "21:30",
  "barAlt": 8229,
  "lat": 52.5477,
  "lng": 11.1027
}, {
  "time": "21:30",
  "barAlt": 8229,
  "lat": 52.5526,
  "lng": 11.1204
}, {
  "time": "21:30",
  "barAlt": 8229,
  "lat": 52.5659,
  "lng": 11.1708
}, {
  "time": "21:30",
  "barAlt": 8229,
  "lat": 52.5704,
  "lng": 11.189
}, {
  "time": "21:30",
  "barAlt": 8229,
  "lat": 52.5741,
  "lng": 11.2086
}, {
  "time": "21:30",
  "barAlt": 7924,
  "lat": 52.5768,
  "lng": 11.2275
}, {
  "time": "21:30",
  "barAlt": 7924,
  "lat": 52.5785,
  "lng": 11.246
}, {
  "time": "21:31",
  "barAlt": 7924,
  "lat": 52.5795,
  "lng": 11.265
}, {
  "time": "21:31",
  "barAlt": 7924,
  "lat": 52.5878,
  "lng": 11.437
}, {
  "time": "21:32",
  "barAlt": 7620,
  "lat": 52.5983,
  "lng": 11.6467
}, {
  "time": "21:33",
  "barAlt": 7315,
  "lat": 52.6085,
  "lng": 11.8603
}, {
  "time": "21:34",
  "barAlt": 7010,
  "lat": 52.6179,
  "lng": 12.0695
}, {
  "time": "21:35",
  "barAlt": 6705,
  "lat": 52.6214,
  "lng": 12.1497
}, {
  "time": "21:35",
  "barAlt": 6400,
  "lat": 52.6233,
  "lng": 12.1926
}, {
  "time": "21:35",
  "barAlt": 6096,
  "lat": 52.6251,
  "lng": 12.2326
}, {
  "time": "21:36",
  "barAlt": 5791,
  "lat": 52.6287,
  "lng": 12.3161
}, {
  "time": "21:36",
  "barAlt": 5486,
  "lat": 52.6328,
  "lng": 12.4133
}, {
  "time": "21:36",
  "barAlt": 5181,
  "lat": 52.6352,
  "lng": 12.4718
}, {
  "time": "21:37",
  "barAlt": 4876,
  "lat": 52.6375,
  "lng": 12.5308
}, {
  "time": "21:37",
  "barAlt": 4572,
  "lat": 52.6391,
  "lng": 12.5702
}, {
  "time": "21:37",
  "barAlt": 4267,
  "lat": 52.6424,
  "lng": 12.6487
}, {
  "time": "21:38",
  "barAlt": 3962,
  "lat": 52.6456,
  "lng": 12.7262
}, {
  "time": "21:38",
  "barAlt": 3657,
  "lat": 52.6483,
  "lng": 12.797
}, {
  "time": "21:38",
  "barAlt": 3352,
  "lat": 52.6503,
  "lng": 12.8506
}, {
  "time": "21:39",
  "barAlt": 3048,
  "lat": 52.6524,
  "lng": 12.9082
}, {
  "time": "21:39",
  "barAlt": 2743,
  "lat": 52.6546,
  "lng": 12.9714
}, {
  "time": "21:39",
  "barAlt": 2438,
  "lat": 52.6581,
  "lng": 13.0655
}, {
  "time": "21:40",
  "barAlt": 2133,
  "lat": 52.664,
  "lng": 13.2321
}, {
  "time": "21:41",
  "barAlt": 1828,
  "lat": 52.6672,
  "lng": 13.3471
}, {
  "time": "21:42",
  "barAlt": 1524,
  "lat": 52.6706,
  "lng": 13.4408
}, {
  "time": "21:42",
  "barAlt": 1219,
  "lat": 52.6728,
  "lng": 13.4924
}];
fake.forEach(function (p, i) {
  p.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["subMinutes"])(new Date(), i), 'HH:mm');
});
/* harmony default export */ __webpack_exports__["default"] = (fake);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_PageWrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/PageWrapper */ "./components/PageWrapper.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! google-map-react */ "google-map-react");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_Flight__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Flight */ "./components/Flight.js");
/* harmony import */ var _fake__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../fake */ "./fake.js");
/* harmony import */ var any_promise__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! any-promise */ "any-promise");
/* harmony import */ var any_promise__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(any_promise__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_23__);



















 // import {format} from 'date-fns';





/**
 * Converts a flight info array in a semantic readable Object
 * @param {*} arr 
 * @param {*} time 
 * @returns {*} flight
 */

function flightArrayToObject(arr, time) {
  if (!arr) return false;
  if (!time) return false;
  var flight = {
    icao24: arr[0],
    callsign: arr[1],
    lat: arr[6],
    lng: arr[5],
    barAlt: arr[7],
    geoAlt: arr[13],
    time: time
  };
  return flight;
}
/**
 * Takes a Path Array from API and returns a semantic and readable Array of Objects
 * @param {*} path
 * @returns {*} formatedPaths
 */


function pathArrayToObject(path) {
  if (!path) return [];
  var formatedPaths = [];
  path.forEach(function (p) {
    formatedPaths.push({
      time: Object(date_fns__WEBPACK_IMPORTED_MODULE_23__["format"])(new Date(p[0] * 1000), 'HH:mm'),
      barAlt: p[3] ? p[3] : 0,
      lat: p[1],
      lng: p[2]
    });
  });
  return formatedPaths;
} // 💩-api not sending a cors header? - no problem 😎


var API = axios__WEBPACK_IMPORTED_MODULE_21___default.a.create({
  baseURL: _config__WEBPACK_IMPORTED_MODULE_15__["default"].proxyApiUrl,
  timeout: 1000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
});
var updateApi = axios__WEBPACK_IMPORTED_MODULE_21___default.a.create({
  baseURL: _config__WEBPACK_IMPORTED_MODULE_15__["default"].authApiUrl,
  timeout: 1000
});

var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "state", {
      flightList: [],
      openFlight: false,
      center: {
        lat: 52.52000659999999,
        lng: 13.404954
      },
      zoom: 10,
      bounds: {
        northeast: {
          lat: 52.6754542,
          lng: 13.7611175
        },
        southwest: {
          lat: 52.338234,
          lng: 13.088346
        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "isMounted", true);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "_onBoundsChange", function (center, zoom, bounds) {
      var newBounds = {
        northeast: {
          lat: bounds[6],
          lng: bounds[7]
        },
        southwest: {
          lat: bounds[4],
          lng: bounds[5]
        }
      };

      _this.setState({
        bounds: newBounds
      });

      _this.updateAreaList(newBounds);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "_onChildClick", function (key, childProps) {
      //sets current open info window
      _this.setState({
        center: {
          lat: childProps.flight.lat,
          lng: childProps.flight.lng
        },
        openFlight: childProps.flight.icao24
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(App, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var locationData;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.initFlightList();

              case 2:
                this.updatePoll = setInterval(this.updateFlightList.bind(this), 3000);
                _context.next = 5;
                return this.getPositionData(this.props.locationSlug ? this.props.locationSlug : "Berlin");

              case 5:
                locationData = _context.sent;

                if (locationData.geometry) {
                  this.setState({
                    center: locationData.geometry.location,
                    bounds: locationData.geometry.bounds
                  });
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMounted = false;
    }
  }, {
    key: "getPositionData",
    value: function () {
      var _getPositionData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(locationSlug) {
        var locationRequest, locationResponse, locationData;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(locationSlug); // get the userlocation based of the url slug .../<location> (defaults to berlin for demo reasons) 
                //TODO: rewrite with axios

                _context2.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16___default()("https://maps.googleapis.com/maps/api/geocode/json?&key=AIzaSyDUGpUnqLVJtzfGuH_ZqbN9eLLgA5wMEis&address=".concat(locationSlug));

              case 3:
                locationRequest = _context2.sent;
                _context2.next = 6;
                return locationRequest.json();

              case 6:
                locationResponse = _context2.sent;
                locationData = locationResponse.results[0];
                return _context2.abrupt("return", locationData);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getPositionData(_x) {
        return _getPositionData.apply(this, arguments);
      }

      return getPositionData;
    }()
  }, {
    key: "initFlightList",
    value: function () {
      var _initFlightList = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
        var bounds, flightAreaListRequest, flightAreaListResponse, flightAreaList;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // get all 🚀 based on the location bounds
                bounds = this.state.bounds; //TODO: rewrite with axios

                _context3.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_15__["default"].proxyApiUrl, "/states/all?lamin=").concat(bounds.southwest.lat, "&lomin=").concat(bounds.southwest.lng, "&lamax=").concat(bounds.northeast.lat, "&lomax=").concat(bounds.northeast.lng), {
                  headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                  }
                });

              case 3:
                flightAreaListRequest = _context3.sent;
                _context3.prev = 4;
                _context3.next = 7;
                return flightAreaListRequest.json();

              case 7:
                flightAreaListResponse = _context3.sent;

                if (flightAreaListResponse.states) {
                  _context3.next = 10;
                  break;
                }

                return _context3.abrupt("return");

              case 10:
                flightAreaList = flightAreaListResponse.states.map(function (flight) {
                  return flightArrayToObject(flight, flightAreaListResponse.time);
                });
                this.setState({
                  flightList: flightAreaList
                });
                console.log("starting to poll for flights");
                _context3.next = 19;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](4);
                // console.log(error.message)
                //retry if failed
                console.log("retry init");
                this.initFlightList();

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[4, 15]]);
      }));

      function initFlightList() {
        return _initFlightList.apply(this, arguments);
      }

      return initFlightList;
    }()
  }, {
    key: "updateAreaList",
    value: function () {
      var _updateAreaList = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(bounds) {
        var flightAreaListRequest, flightAreaListResponse, flightAreaList;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_15__["default"].proxyApiUrl, "/states/all?lamin=").concat(bounds.southwest.lat, "&lomin=").concat(bounds.southwest.lng, "&lamax=").concat(bounds.northeast.lat, "&lomax=").concat(bounds.northeast.lng), {
                  headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                  }
                });

              case 2:
                flightAreaListRequest = _context4.sent;
                _context4.prev = 3;
                _context4.next = 6;
                return flightAreaListRequest.json();

              case 6:
                flightAreaListResponse = _context4.sent;

                if (flightAreaListResponse.states) {
                  _context4.next = 9;
                  break;
                }

                return _context4.abrupt("return");

              case 9:
                flightAreaList = flightAreaListResponse.states.map(function (flight) {
                  return flightArrayToObject(flight, flightAreaListResponse.time);
                }); //remove flights which are not in bounds anymore
                // UNCOMMENT this to keep memory footprint small... (it will disable  "persistence" of chartdata when moving items from the map)
                // this.setState(state => {
                //   let icaos = flightAreaList.map(f=>f.icao24);
                //   const flightList = state.flightList.filter((f) => !icaos.includes(f.icao24));
                //   return {flightList,};
                // });
                //add flights which are new

                this.setState(function (state) {
                  var oldIcaos = state.flightList.map(function (f) {
                    return f.icao24;
                  });
                  var newFlights = flightAreaList.filter(function (f) {
                    return !oldIcaos.includes(f.icao24);
                  });
                  var flightList = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.flightList), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(newFlights));
                  return {
                    flightList: flightList
                  };
                });
                _context4.next = 15;
                break;

              case 13:
                _context4.prev = 13;
                _context4.t0 = _context4["catch"](3);

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[3, 13]]);
      }));

      function updateAreaList(_x2) {
        return _updateAreaList.apply(this, arguments);
      }

      return updateAreaList;
    }()
  }, {
    key: "updateFlightList",
    value: function () {
      var _updateFlightList = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee6() {
        var _this2 = this;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.setState(
                /*#__PURE__*/
                function () {
                  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
                  /*#__PURE__*/
                  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5(state) {
                    var b, update, newFlights, flightList;
                    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            b = _this2.state.bounds;
                            _context5.next = 3;
                            return updateApi.get("".concat(b.northeast.lat, "/").concat(b.northeast.lng, "/").concat(b.southwest.lat, "/").concat(b.southwest.lng));

                          case 3:
                            update = _context5.sent;
                            newFlights = update.data;
                            flightList = state.flightList.map(function (flight) {
                              _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(newFlights).forEach(function (key) {
                                if (flight.icao24.toUpperCase() == newFlights[key][0]) {
                                  if (!flight.path) flight.path = [];
                                  flight.lat = newFlights[key][1];
                                  flight.lng = newFlights[key][2];
                                  flight.barAlt = newFlights[key][4];
                                  var newPathVector = {
                                    time: Object(date_fns__WEBPACK_IMPORTED_MODULE_23__["format"])(new Date(), 'HH:mm:ss'),
                                    barAlt: newFlights[key][4],
                                    lat: newFlights[key][1],
                                    lng: newFlights[key][2]
                                  };
                                  console.log("Update Flight:", flight.callsign);
                                  flight.path.push(newPathVector);
                                }
                              });

                              return flight;
                            });
                            return _context5.abrupt("return", flightList);

                          case 7:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x3) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateFlightList() {
        return _updateFlightList.apply(this, arguments);
      }

      return updateFlightList;
    }()
  }, {
    key: "updateFlightTrack",
    value: function () {
      var _updateFlightTrack = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee7(url) {
        var trackData;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16___default()(url, {
                  headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                  }
                }).then(function (res) {
                  return res.json();
                }).then(function (res) {
                  if (res.icao24) {
                    trackData = pathArrayToObject(res.path);
                  }
                }).then(function () {
                  return trackData;
                }).catch(function (error) {
                  console.log('💩API:', error.message);
                  return false;
                });

              case 2:
                return _context7.abrupt("return", _context7.sent);

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function updateFlightTrack(_x4) {
        return _updateFlightTrack.apply(this, arguments);
      }

      return updateFlightTrack;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      // map flights to Map Marker DOM
      //ensure the open flightpanel is the last in the array
      var flightList;

      if (this.state.openFlight) {
        flightList = this.state.flightList;
        var i = flightList.findIndex(function (f) {
          return f.icao24 == _this3.state.openFlight;
        });
        flightList.push(flightList[i]);
        flightList.splice(i, 1);
      } else {
        flightList = this.state.flightList;
      }

      var flights = flightList.map(function (flight) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_Flight__WEBPACK_IMPORTED_MODULE_18__["default"], {
          style: {
            height: 100,
            width: 100,
            zIndex: _this3.state.openFlight == flight.icao24 ? 9999999 : 100
          },
          open: _this3.state.openFlight == flight.icao24,
          key: flight.icao24,
          lat: flight.lat,
          lng: flight.lng,
          flight: flight
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("svg", {
          style: {
            zIndex: 1
          },
          version: "1",
          width: "48",
          height: "48",
          className: "plane-icon",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 400.156 400.155"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("path", {
          d: "M396 50c6-19 5-33-3-43-10-8-24-9-42-3-19 6-35 16-49 31l-46 45L66 35c-3-1-6 0-9 2L21 74c-2 2-3 4-3 8 1 3 2 5 5 6l145 80-74 74-55-15h-2c-3 0-5 0-7 2L3 257c-2 2-3 4-3 7s2 5 4 7l72 53 54 72c1 3 4 4 6 4h1l7-2 27-28c3-3 3-5 2-9l-15-55 74-74 80 145c1 2 3 4 6 5h2l5-2 37-27c3-3 4-6 3-10l-45-198 45-46c15-15 25-31 31-49z"
        })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          className: _this3.state.openFlight == flight.icao24 ? 'plane-info open' : 'plane-info'
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          className: "info-top"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h2", {
          className: "hlght"
        }, flight.callsign ? flight.callsign : flight.icao24), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("svg", {
          className: "api-svg",
          viewBox: "0 0 100 100"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("circle", {
          r: "24",
          cy: "26",
          cx: "50",
          fill: "#1A1A1A"
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("circle", {
          className: "progress-svg",
          r: "18",
          cy: "26",
          cx: "50",
          fill: "transparent",
          stroke: "#00BCFF",
          strokeWidth: "8"
        }))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("td", {
          className: "hlght"
        }, "LAT"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("td", null, flight.lat)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("td", {
          className: "hlght"
        }, "LNG"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("td", null, flight.lng)))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("td", {
          className: "hlght"
        }, "ALT"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("td", null, flight.geoAlt ? flight.geoAlt : 0)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("td", {
          className: "hlght"
        }, "TRANS"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("td", null, flight.icao24))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_22__["LineChart"], {
          key: Math.random(),
          width: 300,
          height: 150,
          data: flight.path ? flight.path : [{
            time: 0,
            barAlt: 0
          }, {
            time: 1,
            barAlt: 0
          }],
          margin: {
            top: 10,
            right: 10,
            left: -10,
            bottom: 10
          }
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_22__["XAxis"], {
          dataKey: "time"
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_22__["YAxis"], null), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_22__["Tooltip"], {
          labelStyle: {
            background: '#262626'
          },
          contentStyle: {
            background: '#262626',
            borderColor: '#7697AA'
          }
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_22__["Line"], {
          key: Math.random(),
          isAnimationActive: false,
          dot: false,
          type: "monotone",
          dataKey: "barAlt",
          stroke: "#14736F"
        }))));
      });
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_13__["default"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: '100vh',
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(google_map_react__WEBPACK_IMPORTED_MODULE_17___default.a, {
        bootstrapURLKeys: {
          key: 'AIzaSyDUGpUnqLVJtzfGuH_ZqbN9eLLgA5wMEis'
        },
        center: {
          lat: this.state.center.lat,
          lng: this.state.center.lng
        },
        defaultZoom: this.state.zoom,
        options: {
          styles: _config__WEBPACK_IMPORTED_MODULE_15__["default"].mapStyles,
          disableDefaultUI: true,
          clickableIcons: false
        },
        hoverDistance: 50,
        onBoundsChange: this._onBoundsChange.bind(this),
        onChildClick: this._onChildClick.bind(this),
        overlayViewDivStyle: {
          zIndex: 100
        }
      }, flights)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee8(context) {
        var locationSlug;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                locationSlug = context.query.slug;
                console.log("setinitprops");
                return _context8.abrupt("return", {
                  locationSlug: locationSlug
                });

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function getInitialProps(_x5) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_PageWrapper__WEBPACK_IMPORTED_MODULE_14__["default"])(App));

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Fira+Mono:500,700\");\n@font-face {\n  font-family: 'RRPioneer';\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"static/fonts/RRPioneer-Regular.eot\");\n  /* IE9 Compat Modes */\n  src: local(\"RRPioneer\"), local(\"RRPioneer\"), url(\"static/fonts/RRPioneer-Regular.woff2\") format(\"woff2\"), url(\"static/fonts/RRPioneer-Regular.woff\") format(\"woff\"), url(\"static/fonts/RRPioneer-Regular.ttf\") format(\"truetype\"); }\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: 'RRPioneer';\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background-color: #000000;\n  color: #686868 !important; }\n.api-svg {\n  width: 100px;\n  left: 23px;\n  position: relative; }\n.progress-svg {\n  padding: 0;\n  stroke-dasharray: 0.9 4.48;\n  -webkit-animation: spinner 25s infinite linear;\n          animation: spinner 25s infinite linear;\n  stroke-dashoffset: 5; }\n@-webkit-keyframes spinner {\n  100% {\n    stroke-dashoffset: -22; } }\n@keyframes spinner {\n  100% {\n    stroke-dashoffset: -22; } }\n.flight {\n  padding: 1em;\n  min-width: 300px;\n  display: 'inline-flex';\n  z-index: 999999; }\n.hlght {\n  color: #D0D0D0; }\n.plane-icon {\n  z-index: 10;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 48px;\n  height: 48px;\n  fill: #7697AA;\n  stroke: #002433;\n  stroke-width: 25px;\n  stroke-linejoin: round; }\n.plane-info {\n  z-index: 9999999;\n  flex-direction: column;\n  display: none;\n  width: 100%;\n  height: 100%;\n  padding: 1em;\n  background: #262626;\n  border-radius: 5px;\n  border: 1px solid #7697AA;\n  color: #999999; }\n.plane-info h2 {\n    padding: 0 .5em; }\n.plane-info .info-top {\n    height: 42px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-start; }\n.plane-info table {\n    display: inline-block; }\n.plane-info table td {\n      padding: 0 .5em; }\n.open {\n  z-index: 9999999999999;\n  display: flex; }\n";

/***/ }),

/***/ 3:
/*!****************************!*\
  !*** multi ./pages/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/felix/Dropbox/KoppeDesign/Projekte/cavorit-coding-challenge/pages/app.js */"./pages/app.js");


/***/ }),

/***/ "any-promise":
/*!******************************!*\
  !*** external "any-promise" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("any-promise");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "google-map-react":
/*!***********************************!*\
  !*** external "google-map-react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("google-map-react");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ })

/******/ });
//# sourceMappingURL=app.js.map