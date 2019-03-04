webpackHotUpdate("static/development/pages/app.js",{

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_PageWrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/PageWrapper */ "./components/PageWrapper.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/lib/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_FlightInfo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/FlightInfo */ "./components/FlightInfo.js");
/* harmony import */ var _components_Flight__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Flight */ "./components/Flight.js");


















/**
 * Converts a flight info array in a semantic readable Object
 * @param {*} arr 
 * @param {*} time 
 * @returns {*} flight
 */

function flightArrayToObject(arr, time) {
  // let altitudeHistory = getAltitudeHistoryObject(arr, time);
  var flight = {
    icao24: arr[0],
    callsign: arr[1],
    lat: arr[6],
    lng: arr[5],
    barAlt: arr[7],
    geoAlt: arr[13],
    // altitudeHistory: [altitudeHistory],
    time: time
  };
  return flight;
}

var flightPollInterval;

var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      flightList: [],
      openFlight: false,
      center: {
        lat: 52.52000659999999,
        lng: 13.404954
      },
      zoom: 11,
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_onBoundsChange", function (center, zoom, bounds, marginBounds) {
      var newBounds = {
        northeast: {
          lat: bounds[6],
          lng: bounds[7]
        },
        southwest: {
          lat: bounds[4],
          lng: bounds[5]
        } // console.log(this.state.bounds, bounds)

      };

      _this.setState({
        bounds: newBounds
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_onChildClick", function (key, childProps) {
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(App, [{
    key: "getPositionData",
    value: function () {
      var _getPositionData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var locationRequest, locationResponse, locationData;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14___default()("https://maps.googleapis.com/maps/api/geocode/json?&key=AIzaSyDUGpUnqLVJtzfGuH_ZqbN9eLLgA5wMEis&address=".concat(this.props.locationSlug));

              case 2:
                locationRequest = _context.sent;
                _context.next = 5;
                return locationRequest.json();

              case 5:
                locationResponse = _context.sent;
                locationData = locationResponse.results[0];
                return _context.abrupt("return", locationData);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getPositionData() {
        return _getPositionData.apply(this, arguments);
      }

      return getPositionData;
    }()
  }, {
    key: "updateFlightList",
    value: function () {
      var _updateFlightList = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this2 = this;

        var bounds, flightAreaListRequest, flightAreaListResponse, flightAreaList, i;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // get all 🚀 based on the location bounds
                bounds = this.state.bounds;
                _context2.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_13__["default"].apiUrl, "/states/all?lamin=").concat(bounds.southwest.lat, "&lomin=").concat(bounds.southwest.lng, "&lamax=").concat(bounds.northeast.lat, "&lomax=").concat(bounds.northeast.lng));

              case 3:
                flightAreaListRequest = _context2.sent;
                _context2.next = 6;
                return flightAreaListRequest.json();

              case 6:
                flightAreaListResponse = _context2.sent;

                if (flightAreaListResponse.states) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt("return");

              case 9:
                flightAreaList = flightAreaListResponse.states.map(function (flight) {
                  return flightArrayToObject(flight, flightAreaListResponse.time);
                }); // create the apiUrl to poll for 🚀-Track data

                flightAreaList.forEach(function (flight, i) {
                  // api not sending a cors header? - no problem 😎
                  flightAreaList[i].trackUrl = "https://xcors.felixkoppe.com/https://opensky-network.org/api/tracks/?icao24=".concat(flight.icao24);
                }); // set location of opened flight to center map (🚀 follow feature)

                i = flightAreaList.findIndex(function (flight) {
                  return flight.icao24 === _this2.state.openFlight;
                });

                if (flightAreaList[i]) {
                  console.log("following plane"); // this.setState({
                  //   center: {
                  //     lat: flightAreaList[i].lat,
                  //     lng: flightAreaList[i].lng
                  //   }
                  // })
                }

                this.setState({
                  flightList: flightAreaList
                });

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function updateFlightList() {
        return _updateFlightList.apply(this, arguments);
      }

      return updateFlightList;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // await this.getPositionData();
      this.flightPollInterval = setInterval(this.updateFlightList.bind(this), 1000); // trackPollInterval = setInterval(this.updateFlightTracks.bind(this), 3000)
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.flightPollInterval);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      // map flights to Map Marker DOM
      var flights = this.state.flightList.map(function (flight) {
        if (flight) {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Flight__WEBPACK_IMPORTED_MODULE_17__["default"], {
            style: {
              height: 100,
              width: 100
            },
            open: _this3.state.openFlight == flight.icao24,
            key: flight.icao24,
            lat: flight.lat,
            lng: flight.lng,
            flight: flight
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("svg", {
            style: {
              zIndex: 1
            },
            version: "1",
            width: "48",
            height: "48",
            className: "plane-icon",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 400.156 400.155"
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("path", {
            d: "M396 50c6-19 5-33-3-43-10-8-24-9-42-3-19 6-35 16-49 31l-46 45L66 35c-3-1-6 0-9 2L21 74c-2 2-3 4-3 8 1 3 2 5 5 6l145 80-74 74-55-15h-2c-3 0-5 0-7 2L3 257c-2 2-3 4-3 7s2 5 4 7l72 53 54 72c1 3 4 4 6 4h1l7-2 27-28c3-3 3-5 2-9l-15-55 74-74 80 145c1 2 3 4 6 5h2l5-2 37-27c3-3 4-6 3-10l-45-198 45-46c15-15 25-31 31-49z"
          })));
        }
      });
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          height: '100vh',
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(google_map_react__WEBPACK_IMPORTED_MODULE_15___default.a, {
        bootstrapURLKeys: {
          key: 'AIzaSyDUGpUnqLVJtzfGuH_ZqbN9eLLgA5wMEis'
        },
        center: {
          lat: this.state.center.lat,
          lng: this.state.center.lng
        },
        defaultZoom: this.state.zoom,
        options: {
          styles: _config__WEBPACK_IMPORTED_MODULE_13__["default"].mapStyles,
          disableDefaultUI: true,
          clickableIcons: false
        },
        hoverDistance: 50,
        onBoundsChange: this._onBoundsChange,
        onChildClick: this._onChildClick.bind(this)
      }, flights)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(context) {
        var locationSlug;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                locationSlug = context.query.slug;
                return _context3.abrupt("return", {
                  locationSlug: locationSlug
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_PageWrapper__WEBPACK_IMPORTED_MODULE_12__["default"])(App));

/***/ })

})
//# sourceMappingURL=app.js.9180001eefa9e5463ae1.hot-update.js.map