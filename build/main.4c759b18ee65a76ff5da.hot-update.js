exports.id = "main";
exports.modules = {

/***/ "./src/screens/ForgotPassword/index.js":
/*!*********************************************!*\
  !*** ./src/screens/ForgotPassword/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _EmailForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./EmailForm */ "./src/screens/ForgotPassword/EmailForm/index.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./styles */ "./src/screens/ForgotPassword/styles.js");







var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/ForgotPassword/index.js';












var ForgotPassword = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(ForgotPassword, _Component);

  function ForgotPassword(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, ForgotPassword);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (ForgotPassword.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(ForgotPassword)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(ForgotPassword, [{
    key: 'handleSubmit',
    value: function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, bag) {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                try {
                  bag.setSubmitting(false);
                  this.props.history.push('/profile');
                } catch (e) {
                  console.log(e);
                  bag.setSubmitting(false);
                }

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSubmit(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isAuthenticated) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Redirect"], { to: '/profile', __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
        { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_15__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_15__["default"].heroContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_15__["default"].heroLogoContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'a',
              { href: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 39
                }
              },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'bitcharge-logo', className: Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_15__["default"].logoImageStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1532990484/icons/bitcharge-logo-white.png', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 39
                }
              })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_15__["default"].heroTextContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'forgot-password-avatar', className: Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_15__["default"].signupAvatarIconStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1535940360/cat-avatar.png', __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              }
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_14__["default"],
              { tag: 'h3', style: _styles__WEBPACK_IMPORTED_MODULE_15__["default"].heroText, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 43
                }
              },
              'Forgot Password'
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_15__["default"].bodyContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_14__["default"],
            { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_15__["default"].formHeaderText, __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              }
            },
            'We have your back.'
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_EmailForm__WEBPACK_IMPORTED_MODULE_12__["default"], { onSubmit: this.handleSubmit, __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          })
        )
      );
    }
  }]);

  return ForgotPassword;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

ForgotPassword.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(ForgotPassword));

/***/ })

};
//# sourceMappingURL=main.4c759b18ee65a76ff5da.hot-update.js.map