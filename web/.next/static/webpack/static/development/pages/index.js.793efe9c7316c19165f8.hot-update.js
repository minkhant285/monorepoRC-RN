webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "../shared/Demo.js":
/*!*************************!*\
  !*** ../shared/Demo.js ***!
  \*************************/
/*! exports provided: Demo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Demo", function() { return Demo; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-native */ "./node_modules/react-native-web/dist/index.js");
/* harmony import */ var _http_httpHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./http/httpHandler */ "../shared/http/httpHandler.js");





var _jsxFileName = "C:\\Users\\Min Khant\\Desktop\\Monorepo\\shared\\Demo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var Demo =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Demo, _Component);

  function Demo(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Demo);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Demo).call(this, props));
    _this.state = {
      data: [{
        name: '123'
      }],
      fatched: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Demo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getDataFromApi();
    }
  }, {
    key: "getDataFromApi",
    value: function getDataFromApi() {
      var _this2 = this;

      Object(_http_httpHandler__WEBPACK_IMPORTED_MODULE_7__["httpGet"])('connectionService/getConnections').then(function (result, err) {
        return _this2.setState({
          data: result,
          fatched: true
        });
      });
      throw err;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.fatched) {
        return __jsx(react_native__WEBPACK_IMPORTED_MODULE_6__["View"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, __jsx(react_native__WEBPACK_IMPORTED_MODULE_6__["Text"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, " Demo from Shared folder"), __jsx(react_native__WEBPACK_IMPORTED_MODULE_6__["Text"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, "Received Data: ", this.state.data[0].name));
      } else {
        return __jsx(react_native__WEBPACK_IMPORTED_MODULE_6__["View"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, __jsx(react_native__WEBPACK_IMPORTED_MODULE_6__["Text"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, " Demo from Shared folder  "));
      }
    }
  }]);

  return Demo;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Demo);

/***/ })

})
//# sourceMappingURL=index.js.793efe9c7316c19165f8.hot-update.js.map