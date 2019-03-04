webpackHotUpdate("static/development/pages/app.js",{

/***/ "./components/Flight.js":
/*!******************************!*\
  !*** ./components/Flight.js ***!
  \******************************/
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
/* harmony import */ var _fake__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../fake */ "./fake.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__);














/**
 * Takes a Path Array from API and returns a semantic and readable Array of Objects
 * @param {*} path
 * @returns {*} formatedPaths
 */

function pathArrayToObject(path) {
  var formatedPaths = [];
  path.forEach(function (p) {
    formatedPaths.push({
      time: Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["format"])(new Date(p[0] * 1000), 'HH:mm'),
      barAlt: p[3] ? p[3] : 0,
      lat: p[1],
      lng: p[2]
    });
  });
  return formatedPaths;
}

var Flight =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Flight, _Component);

  function Flight() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Flight);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Flight)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      trackData: []
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Flight, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateFlightTrack();
      this.trackPollInterval = setInterval(this.updateFlightTrack.bind(this), 5000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("clearing");
      clearInterval(this.trackPollInterval);
    }
  }, {
    key: "updateFlightTrack",
    value: function () {
      var _updateFlightTrack = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var trackData;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log();
                return _context.abrupt("return", isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()(this.props.flight.trackUrl, {
                  headers: {
                    'origin': 'x-requested-with'
                  }
                }).then(function (res) {
                  return res.json();
                }).then(function (res) {
                  if (res.icao24) {
                    trackData = pathArrayToObject(res.path);
                  } else {
                    //TODO: inject fake data here if there was no data yet else use the old data, and add a random point from fake dataset
                    console.log("fake!");
                    trackData = _fake__WEBPACK_IMPORTED_MODULE_10__["default"];
                  }
                }).then(function () {
                  _this2.setState({
                    trackData: trackData
                  });
                }).catch(function (error) {
                  console.log(error.message);
                }));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateFlightTrack() {
        return _updateFlightTrack.apply(this, arguments);
      }

      return updateFlightTrack;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          flight = _this$props.flight,
          open = _this$props.open,
          children = _this$props.children;
      var chartData = pathArrayToObject(flight.path);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flight"
      }, children, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          zIndex: this.state.open ? 99999999999999999 : 1
        },
        className: open ? 'plane-info open' : 'plane-info'
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "info-top"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        className: "hlght"
      }, flight.callsign ? flight.callsign : flight.icao24), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("svg", {
        className: "api-svg",
        viewBox: "0 0 100 100"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("circle", {
        r: "24",
        cy: "26",
        cx: "50",
        fill: "#1A1A1A"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("circle", {
        className: "progress-svg",
        r: "18",
        cy: "26",
        cx: "50",
        fill: "transparent",
        stroke: "#00BCFF",
        strokeWidth: "8"
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
        className: "hlght"
      }, "LAT"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, flight.lat)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
        className: "hlght"
      }, "LNG"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, flight.lng)))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
        className: "hlght"
      }, "ALT"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, flight.geoAlt ? flight.geoAlt : 0)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
        className: "hlght"
      }, "TRANS"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, flight.icao24))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["LineChart"], {
        width: 300,
        height: 150,
        data: this.state.trackData,
        margin: {
          top: 10,
          right: 10,
          left: -15,
          bottom: 10
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["XAxis"], {
        dataKey: "time"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["YAxis"], null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["Tooltip"], {
        labelStyle: {
          background: '#262626'
        },
        contentStyle: {
          background: '#262626'
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["Line"], {
        dot: false,
        type: "monotone",
        dataKey: "barAlt",
        stroke: "#14736F"
      }))));
    }
  }]);

  return Flight;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Flight);

/***/ })

})
//# sourceMappingURL=app.js.977bf0d53899723a72be.hot-update.js.map