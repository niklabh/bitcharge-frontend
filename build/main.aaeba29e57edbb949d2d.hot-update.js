exports.id = "main";
exports.modules = {

/***/ "./src/screens/SignupConfirmation/index.js":
/*!*************************************************!*\
  !*** ./src/screens/SignupConfirmation/index.js ***!
  \*************************************************/
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../store/actions/auth */ "./src/store/actions/auth.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./styles */ "./src/screens/SignupConfirmation/styles.js");







var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/SignupConfirmation/index.js';

















var SignupConfirming = function SignupConfirming(_ref) {
  var hostRef = _ref.hostRef;

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
    { hostRef: hostRef, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    },
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationHeaderText, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      },
      'We are confirming your email...'
    )
  );
};

var SignupConfirmationError = function SignupConfirmationError(_ref2) {
  var hostRef = _ref2.hostRef,
      isAuthenticated = _ref2.isAuthenticated,
      handleVerify = _ref2.handleVerify,
      resentVerification = _ref2.resentVerification;

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
    { hostRef: hostRef, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    },
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationHeaderText, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      },
      'Something went wrong'
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h5', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      },
      'Something went wrong while verifying your email. ',
      isAuthenticated ? 'Try resending the verification email' : 'Login to resend the verification email.'
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].buttonContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      },
      isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_16__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], to: '/address/new', primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].submitButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        },
        'Resend Verifcation'
      ) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_16__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], to: '/login', primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].submitButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        'Login Now'
      ),
      isAuthenticated && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_16__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], to: '/profile', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].cancelButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        },
        'Skip'
      )
    ),
    resentVerification.action && resentVerification.success && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].resentVerificationText, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      },
      'Verification mail sent successfully.'
    )
  );
};

var SignupConfirmed = function SignupConfirmed(_ref3) {
  var hostRef = _ref3.hostRef,
      isAuthenticated = _ref3.isAuthenticated;

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
    { hostRef: hostRef, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      }
    },
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationHeaderText, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      },
      'Woohoo! You\'re all set.'
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationInfoText, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      },
      'Thank you for verifying your account. ',
      isAuthenticated ? 'You can now start adding your addresses.' : 'You need to login to start adding your addresses.'
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].buttonContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      },
      isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_16__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], to: '/address/new', primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].submitButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        },
        'Add an Address'
      ) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_16__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], to: '/login', primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].submitButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        },
        'Login Now'
      ),
      isAuthenticated && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_16__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], to: '/profile', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].cancelButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        },
        'Skip'
      )
    )
  );
};

var SignupConfirmationExpired = function SignupConfirmationExpired(_ref4) {
  var hostRef = _ref4.hostRef,
      isAuthenticated = _ref4.isAuthenticated,
      handleVerify = _ref4.handleVerify,
      resentVerification = _ref4.resentVerification;
  var action = resentVerification.action,
      success = resentVerification.success,
      error = resentVerification.error;

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
    { hostRef: hostRef, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      }
    },
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationHeaderText, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      },
      'Something went wrong'
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h5', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      },
      'Your verification email is expired. ',
      isAuthenticated ? 'Try resending the verification email' : 'Login to resend the verification email.'
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].buttonContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      },
      isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_16__["default"],
        { onClick: andleVerify, primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].submitButton, disabled: action && !(success || error), __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        },
        'Resend Verifcation'
      ) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_16__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], to: '/login', primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].submitButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        },
        'Login Now'
      )
    ),
    action && success && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].resentVerificationText, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      },
      'Verification mail sent successfully.'
    )
  );
};

var SignupConfirmation = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(SignupConfirmation, _Component);

  function SignupConfirmation(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, SignupConfirmation);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (SignupConfirmation.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(SignupConfirmation)).call(this, props));

    _this.state = {
      isConfirmed: false,
      isConfirming: false,
      isExpired: false,
      isError: false,
      resentVerification: false,
      resentVerificationSuccess: false,
      resentVerificationError: false
    };

    _this.resendVerificationMail = _this.resendVerificationMail.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(SignupConfirmation, [{
    key: 'componentDidMount',
    value: function () {
      var _ref5 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var query, response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = qs__WEBPACK_IMPORTED_MODULE_13___default.a.parse(this.props.location.search.split('?')[1]);
                _context.prev = 1;
                _context.next = 4;
                return _api__WEBPACK_IMPORTED_MODULE_18__["default"].confirmEmail(query.confirmationCode);

              case 4:
                response = _context.sent;

                this.setState({ isConfirming: false });
                if (response) {
                  this.setState({ isConfirmed: true });
                  this.props.confirmEmailAction(true);
                }
                _context.next = 14;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](1);

                this.setState({ isConfirming: false });
                if (_context.t0.response.status === 410) {
                  this.setState({ isExpired: true });
                }
                this.setState({ isError: true });

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 9]]);
      }));

      function componentDidMount() {
        return _ref5.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'resendVerificationMail',
    value: function () {
      var _ref6 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _api__WEBPACK_IMPORTED_MODULE_18__["default"].verifyEmail();

              case 3:
                this.setState({ resentVerification: true });
                _context2.next = 10;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2['catch'](0);

                console.log(_context2.t0);
                this.setState({ resentVerification: true, resentVerificationError: true });

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 6]]);
      }));

      function resendVerificationMail() {
        return _ref6.apply(this, arguments);
      }

      return resendVerificationMail;
    }()
  }, {
    key: 'render',
    value: function render() {
      var PoseSignupConfirming = react_pose__WEBPACK_IMPORTED_MODULE_11___default()(SignupConfirming)({
        visible: { opacity: 1 },
        invisible: { opacity: 0, display: 'none' }
      });

      var PoseSignupConfirmed = react_pose__WEBPACK_IMPORTED_MODULE_11___default()(SignupConfirmed)({
        visible: { opacity: 1 },
        invisible: { opacity: 0, display: 'none' }
      });

      var PoseSignupConfirmError = react_pose__WEBPACK_IMPORTED_MODULE_11___default()(SignupConfirmationError)({
        visible: { opacity: 1 },
        invisible: { opacity: 0, display: 'none' }
      });

      var PoseSignupConfirmExpired = react_pose__WEBPACK_IMPORTED_MODULE_11___default()(SignupConfirmationExpired)({
        visible: { opacity: 1 },
        invisible: { opacity: 0, display: 'none' }
      });

      var resentVerification = {
        action: true,
        success: this.state.resentVerificationSuccess,
        error: this.state.resentVerificationError
      };
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
        { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroLogoContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 157
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'a',
              { href: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 158
                }
              },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'bitcharge-logo', className: Object(emotion__WEBPACK_IMPORTED_MODULE_12__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].logoImageStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1532990484/icons/bitcharge-logo-white.png', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 158
                }
              })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroTextContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 160
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { className: Object(emotion__WEBPACK_IMPORTED_MODULE_12__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroAvatarIconStyle), alt: 'signup-confirmation-avatar', src: 'https://res.cloudinary.com/bitcharge/image/upload/v1535940306/fox-avatar.png', __source: {
                fileName: _jsxFileName,
                lineNumber: 161
              }
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
              { tag: 'h3', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroText, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 162
                }
              },
              'You\'re almost there.'
            )
          ),
          !this.props.isAuthenticated && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroFooterContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 165
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
              { tag: 'h6', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 166
                }
              },
              'Already have an account. ',
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"],
                { to: '/login', className: Object(emotion__WEBPACK_IMPORTED_MODULE_12__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].LoginLink), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 166
                  }
                },
                'Login'
              )
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].bodyContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 171
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PoseSignupConfirming, { pose: this.state.isConfirming ? 'visible' : 'invisible', __source: {
              fileName: _jsxFileName,
              lineNumber: 172
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PoseSignupConfirmed, { pose: this.state.isConfirmed ? 'visible' : 'invisible', isAuthenticated: this.props.isAuthenticated, __source: {
              fileName: _jsxFileName,
              lineNumber: 173
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PoseSignupConfirmError, { pose: this.state.isError ? 'visible' : 'invisible', isAuthenticated: this.props.isAuthenticated, handleVerify: this.resendVerificationMail, resentVerification: resentVerification, __source: {
              fileName: _jsxFileName,
              lineNumber: 174
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PoseSignupConfirmExpired, { pose: this.state.isExpired ? 'visible' : 'invisible', isAuthenticated: this.props.isAuthenticated, handleVerify: this.resendVerificationMail, resentVerification: resentVerification, __source: {
              fileName: _jsxFileName,
              lineNumber: 175
            }
          })
        )
      );
    }
  }]);

  return SignupConfirmation;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

SignupConfirmed.propTypes = {
  hostRef: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
};

SignupConfirming.propTypes = {
  hostRef: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any
};

SignupConfirmationError.propTypes = {
  hostRef: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  handleVerify: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  resentVerification: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};

SignupConfirmationExpired.propTypes = {
  hostRef: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  handleVerify: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  resentVerification: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};

SignupConfirmation.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  confirmEmailAction: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, { confirmEmailAction: _store_actions_auth__WEBPACK_IMPORTED_MODULE_17__["confirmEmail"] })(SignupConfirmation));

/***/ })

};
//# sourceMappingURL=main.aaeba29e57edbb949d2d.hot-update.js.map