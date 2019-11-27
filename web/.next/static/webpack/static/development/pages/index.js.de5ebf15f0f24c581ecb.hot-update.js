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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles */ "../shared/styles.js");





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

      Object(_http_httpHandler__WEBPACK_IMPORTED_MODULE_7__["httpGet"])('connectionService/getConnections').then(function (result) {
        if (result) {
          return _this2.setState({
            data: result,
            fatched: true
          });
        }
      });
    }
  }, {
    key: "onLogin",
    value: function onLogin() {
      alert('login');
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var input = _styles__WEBPACK_IMPORTED_MODULE_8__["default"].input,
          container = _styles__WEBPACK_IMPORTED_MODULE_8__["default"].container,
          headerText = _styles__WEBPACK_IMPORTED_MODULE_8__["default"].headerText,
          loginButton = _styles__WEBPACK_IMPORTED_MODULE_8__["default"].loginButton;

      if (this.state.fatched) {
        return __jsx(react_native__WEBPACK_IMPORTED_MODULE_6__["View"], {
          style: container,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, __jsx(react_native__WEBPACK_IMPORTED_MODULE_6__["TextInput"], {
          style: input,
          placeholder: "email",
          onChangeText: function onChangeText(text) {
            return _this3.setState({
              email: text
            });
          },
          keyboardType: "email-address",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }), __jsx(react_native__WEBPACK_IMPORTED_MODULE_6__["TextInput"], {
          style: input,
          placeholder: "Password",
          secureTextEntry: true,
          onChangeText: function onChangeText(text) {
            return _this3.setState({
              password: text
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }), __jsx(react_native__WEBPACK_IMPORTED_MODULE_6__["TouchableOpacity"], {
          onPress: function onPress() {
            return _this3.onLogin();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, __jsx(react_native__WEBPACK_IMPORTED_MODULE_6__["View"], {
          style: loginButton,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, __jsx(react_native__WEBPACK_IMPORTED_MODULE_6__["Text"], {
          style: {
            color: 'white',
            fontSize: 20,
            fontWeight: '800'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, "Login"))));
      } else {
        return __jsx(react_native__WEBPACK_IMPORTED_MODULE_6__["View"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, __jsx(react_native__WEBPACK_IMPORTED_MODULE_6__["Text"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, " Demo from Shared folder  "), __jsx(react_native__WEBPACK_IMPORTED_MODULE_6__["Text"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, "Received Data: NO DATA(network error)"));
      }
    }
  }]);

  return Demo;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Demo);

/***/ })

})
//# sourceMappingURL=index.js.de5ebf15f0f24c581ecb.hot-update.js.map