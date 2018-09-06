exports.id = "main";
exports.modules = {

/***/ "./src/screens/Settings/index.js":
/*!***************************************!*\
  !*** ./src/screens/Settings/index.js ***!
  \***************************************/
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
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Spinner */ "./src/components/Spinner/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _EditSettingsForm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./EditSettingsForm */ "./src/screens/Settings/EditSettingsForm/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../store/actions/auth */ "./src/store/actions/auth.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./styles */ "./src/screens/Settings/styles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");







var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Settings/index.js';

















var SettingsBody = function SettingsBody(_ref) {
  var user = _ref.user;

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
    { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsBodyContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    },
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      },
      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
        { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemLabel, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        },
        'Username'
      ),
      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
        { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemValue, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        },
        user.username
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      },
      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
        { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemLabel, __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        },
        'Email'
      ),
      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
        { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemValue, __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        },
        user.email
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      },
      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
        { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemLabel, __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        },
        'Password'
      ),
      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
        { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemValue, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        },
        'Change ',
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('i', { className: 'icon ion-md-create ' + Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].verifiedIcon), __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        })
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      },
      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
        { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemLabel, __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        },
        'Email Verification'
      ),
      user.active ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
        { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemValue, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        'Verified ',
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('i', { className: 'icon ion-md-checkmark-circle-outline ' + Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].verifiedIcon), __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        })
      ) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_14__["default"],
        { secondary: true, style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].editSettingsButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        },
        'Resend Email',
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('i', { className: 'icon ion-md-arrow-round-forward ' + Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].editIcon), __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        })
      )
    )
  );
};

var Settings = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Settings, _Component);

  function Settings() {
    var _ref2;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Settings);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (_ref2 = Settings.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(Settings)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      isEditing: false
    }, _this._renderLoading = function () {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].loadingContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_12__["default"], { size: 50, width: 7, color: _styles__WEBPACK_IMPORTED_MODULE_19__["colors"].lightText, __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        })
      );
    }, _this.onEdit = function () {
      _this.setState({ isEditing: true });
    }, _this.onCancelEdit = function () {
      _this.setState({ isEditing: false });
    }, _this._renderUserDetails = function (user) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsHeaderContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
            { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsHeaderTextStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 87
              }
            },
            'Settings'
          ),
          _this.state.isEditing ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_14__["default"],
            { onClick: _this.onCancelEdit, style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].editSettingsButton, secondary: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 90
              }
            },
            'Cancel',
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('i', { className: 'icon ion-md-close ' + Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].editIcon), __source: {
                fileName: _jsxFileName,
                lineNumber: 90
              }
            })
          ) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_14__["default"],
            { onClick: _this.onEdit, style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].editSettingsButton, primary: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 91
              }
            },
            'Edit',
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('i', { className: 'icon ion-md-arrow-round-forward ' + Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].editIcon), __source: {
                fileName: _jsxFileName,
                lineNumber: 91
              }
            })
          )
        ),
        _this.state.isEditing ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_EditSettingsForm__WEBPACK_IMPORTED_MODULE_15__["default"], { user: user, onCancel: _this.onCancelEdit, onSubmit: _this.onEditSubmit, __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SettingsBody, { user: user, __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        })
      );
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Settings, [{
    key: 'onEditSubmit',
    value: function () {
      var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, bag) {
        var userDetails, data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userDetails = {
                  username: values.username
                };

                if (values.password) {
                  userDetails['password'] = values.password;
                }

                _context.prev = 2;
                _context.next = 5;
                return _api__WEBPACK_IMPORTED_MODULE_16__["default"].updateUser(userDetails);

              case 5:
                data = _context.sent;

                bag.setSubmitting(false);
                this.props.getAuthUser(data);
                this.setState({ isEditing: false });
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](2);

                bag.setSubmitting(false);
                bag.setErrors(_api__WEBPACK_IMPORTED_MODULE_16__["default"].setErrors(_context.t0.response.data.errors.details.errors));

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 11]]);
      }));

      function onEditSubmit(_x, _x2) {
        return _ref3.apply(this, arguments);
      }

      return onEditSubmit;
    }()
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
        { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].cardContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 105
            }
          },
          this.props.user ? this._renderUserDetails(this.props.user) : this._renderLoading()
        )
      );
    }
  }]);

  return Settings;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Settings.propTypes = {
  getAuthUser: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  user: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object
};

SettingsBody.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, { getAuthUser: _store_actions_auth__WEBPACK_IMPORTED_MODULE_17__["getAuthUser"] })(Settings));

/***/ })

};
//# sourceMappingURL=main.71b66f3a00e29e62de6c.hot-update.js.map