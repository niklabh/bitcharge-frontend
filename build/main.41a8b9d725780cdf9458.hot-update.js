exports.id = "main";
exports.modules = {

/***/ "./src/screens/Login/index.js":
/*!************************************!*\
  !*** ./src/screens/Login/index.js ***!
  \************************************/
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
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LoginForm */ "./src/screens/Login/LoginForm/index.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../store/actions/auth */ "./src/store/actions/auth.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./styles */ "./src/screens/Login/styles.js");







var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Login/index.js';















var Login = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Login, _Component);

  function Login(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Login);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Login.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(Login)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Login, [{
    key: 'handleSubmit',
    value: function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, bag) {
        var data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _api__WEBPACK_IMPORTED_MODULE_15__["default"].login(values);

              case 3:
                data = _context.sent;

                bag.setSubmitting(false);
                this.props.loginAction(data.user);
                this.props.history.push('/profile');
                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](0);

                bag.setSubmitting(false);
                bag.setErrors(_context.t0.response.data.errors.details.errors.errors);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
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
            lineNumber: 37
          }
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
        { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_17__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_17__["default"].heroContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_17__["default"].heroLogoContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'a',
              { href: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                }
              },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'bitcharge-logo', className: Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_17__["default"].logoImageStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1532990484/icons/bitcharge-logo-white.png', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                }
              })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_17__["default"].heroTextContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'login-avatar', className: Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_17__["default"].signupAvatarIconStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1535940305/panda-avatar.png', __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              }
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_14__["default"],
              { tag: 'h3', style: _styles__WEBPACK_IMPORTED_MODULE_17__["default"].heroText, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 48
                }
              },
              'Welcome back.'
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_17__["default"].heroFooterContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_14__["default"],
              { tag: 'h6', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                }
              },
              'Don\'t have an account. ',
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"],
                { to: '/signup', className: Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_17__["default"].SignupLink), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  }
                },
                'Signup'
              )
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_17__["default"].bodyContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_LoginForm__WEBPACK_IMPORTED_MODULE_12__["default"], { onSubmit: this.handleSubmit, __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          })
        )
      );
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Login.propTypes = {
  loginAction: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  history: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, { loginAction: _store_actions_auth__WEBPACK_IMPORTED_MODULE_16__["login"] })(Login));

/***/ })

};
//# sourceMappingURL=main.41a8b9d725780cdf9458.hot-update.js.map