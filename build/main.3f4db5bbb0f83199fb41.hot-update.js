exports.id = "main";
exports.modules = {

/***/ "./src/screens/Settings/EditSettingsForm/index.js":
/*!********************************************************!*\
  !*** ./src/screens/Settings/EditSettingsForm/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Input */ "./src/components/Input/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles */ "./src/screens/Settings/styles.js");
var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Settings/EditSettingsForm/index.js';













var validationSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
  username: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2),
  password: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(6)
});

var EditSettingsForm = function EditSettingsForm(_ref) {
  var onSubmit = _ref.onSubmit,
      onCancel = _ref.onCancel,
      user = _ref.user;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: { username: user.username, password: '' },
    onSubmit: onSubmit,
    validationSchema: validationSchema,
    render: function render(_ref2) {
      var values = _ref2.values,
          handleChange = _ref2.handleChange,
          handleSubmit = _ref2.handleSubmit,
          handleBlur = _ref2.handleBlur,
          errors = _ref2.errors,
          touched = _ref2.touched,
          isValid = _ref2.isValid,
          isSubmitting = _ref2.isSubmitting;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsBodyContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_6__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemLabel, __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            },
            'Username'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
            name: 'username',
            noErrorText: true,
            inputStyle: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].textInputStyle,
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.username,
            error: touched.username && errors.username,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_6__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemLabel, __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              }
            },
            'Email'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_6__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemValue, __source: {
                fileName: _jsxFileName,
                lineNumber: 53
              }
            },
            user.email
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_6__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemLabel, __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              }
            },
            'Password'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
            name: 'password',
            noErrorText: true,
            inputStyle: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].textInputStyle,
            type: 'password',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.password,
            error: touched.password && errors.password,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_6__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemLabel, __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              }
            },
            'Email Verification'
          ),
          user.active ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_6__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemValue, __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              }
            },
            'Verified ',
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'icon ion-md-checkmark-circle-outline ' + Object(emotion__WEBPACK_IMPORTED_MODULE_4__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].verifiedIcon), __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              }
            })
          ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
            { secondary: true, style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].editSettingsButton, __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              }
            },
            'Resend Email',
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'icon ion-md-arrow-round-forward ' + Object(emotion__WEBPACK_IMPORTED_MODULE_4__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].editIcon), __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              }
            })
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
          { style: Object(emotion__WEBPACK_IMPORTED_MODULE_4__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemContainer, _styles__WEBPACK_IMPORTED_MODULE_9__["default"].editButtonContainer), __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
            {
              primary: true,
              disabled: !isValid || isSubmitting,
              onClick: handleSubmit,
              style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].editAddressSaveButton,
              type: 'submit',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              }
            },
            'Save'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
            {
              onClick: onCancel,
              style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].editAddressCancelButton,
              link: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 84
              }
            },
            'Cancel'
          )
        )
      );
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  });
};

EditSettingsForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/* harmony default export */ __webpack_exports__["default"] = (EditSettingsForm);

/***/ }),

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
            lineNumber: 88
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsHeaderContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
            { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsHeaderTextStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 90
              }
            },
            'Settings'
          ),
          _this.state.isEditing ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_14__["default"],
            { onClick: _this.onCancelEdit, style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].editSettingsButton, secondary: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              }
            },
            'Cancel',
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('i', { className: 'icon ion-md-close ' + Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].editIcon), __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              }
            })
          ) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_14__["default"],
            { onClick: _this.onEdit, style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].editSettingsButton, primary: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 94
              }
            },
            'Edit',
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('i', { className: 'icon ion-md-arrow-round-forward ' + Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].editIcon), __source: {
                fileName: _jsxFileName,
                lineNumber: 94
              }
            })
          )
        ),
        _this.state.isEditing ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_EditSettingsForm__WEBPACK_IMPORTED_MODULE_15__["default"], { user: user, onCancel: _this.onCancelEdit, onSubmit: _this.onEditSubmit, __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SettingsBody, { user: user, __source: {
            fileName: _jsxFileName,
            lineNumber: 100
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

                console.log(userDetails);

                _context.prev = 3;
                _context.next = 6;
                return _api__WEBPACK_IMPORTED_MODULE_16__["default"].updateUser(userDetails);

              case 6:
                data = _context.sent;

                bag.setSubmitting(false);
                this.props.getAuthUser(data);
                this.setState({ isEditing: false });
                _context.next = 17;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](3);

                console.log(_context.t0);
                bag.setSubmitting(false);
                bag.setErrors(_api__WEBPACK_IMPORTED_MODULE_16__["default"].setErrors(_context.t0.response.data.errors.details.errors));

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 12]]);
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
            lineNumber: 107
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].cardContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 108
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

/***/ }),

/***/ "./src/screens/Settings/styles.js":
/*!****************************************!*\
  !*** ./src/screens/Settings/styles.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 100%;\n  min-height: calc(100vh - 4.5em);\n  align-items: center;\n  border-bottom: 1px solid ', ';\n'], ['\n  width: 100%;\n  min-height: calc(100vh - 4.5em);\n  align-items: center;\n  border-bottom: 1px solid ', ';\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 50em;\n  margin-top: 3em;\n  margin-bottom: 3em;\n  background-color: ', ';\n  border-radius: 4px;\n  padding: 2em 3em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    padding: 1.5em;\n  }\n'], ['\n  width: 50em;\n  margin-top: 3em;\n  margin-bottom: 3em;\n  background-color: ', ';\n  border-radius: 4px;\n  padding: 2em 3em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    padding: 1.5em;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  align-items: center;\n  justify-content: center;\n  padding: 5em;\n'], ['\n  align-items: center;\n  justify-content: center;\n  padding: 5em;\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 1em;\n  border-bottom: .5px dashed ', ';\n'], ['\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 1em;\n  border-bottom: .5px dashed ', ';\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  margin-bottom: -0.4em;\n'], ['\n  font-weight: 600;\n  margin-bottom: -0.4em;\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  font-size: 1em;\n'], ['\n  font-weight: 600;\n  font-size: 1em;\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-left: 0.75em;\n'], ['\n  margin-left: 0.75em;\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-left: 0.3em;\n'], ['\n  margin-left: 0.3em;\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 1em;\n'], ['\n  margin-top: 1em;\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 2em 0 2em 0;\n  border-bottom: .5px dotted ', ';\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  &:last-child {\n    border-bottom: 0;\n  }\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 1em 0;\n  }\n'], ['\n  padding: 2em 0 2em 0;\n  border-bottom: .5px dotted ', ';\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  &:last-child {\n    border-bottom: 0;\n  }\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 1em 0;\n  }\n']),
    _templateObject11 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  justify-content: flex-end;\n\n  @media (max-width: ', ') {\n    flex-direction: row;\n  }\n'], ['\n  justify-content: flex-end;\n\n  @media (max-width: ', ') {\n    flex-direction: row;\n  }\n']),
    _templateObject12 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n'], ['\n  font-weight: 500;\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n']),
    _templateObject13 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  @media (max-width: ', ') {\n    font-size: 1em;\n}\n'], ['\n  @media (max-width: ', ') {\n    font-size: 1em;\n}\n']),
    _templateObject14 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 70%;\n  margin-left: auto;\n  margin-right: -1em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin-right: 0;\n  }\n'], ['\n  width: 70%;\n  margin-left: auto;\n  margin-right: -1em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin-right: 0;\n  }\n']),
    _templateObject15 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n@media (max-width: ', ') {\n  font-size: 1em;\n}\n'], ['\n@media (max-width: ', ') {\n  font-size: 1em;\n}\n']),
    _templateObject16 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n'], ['\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n']);




var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray);

var cardContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var loadingContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3);

var settingsHeaderContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder);

var settingsHeaderTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5);

var editSettingsButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6);

var editIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7);

var verifiedIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8);

var settingsBodyContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9);

var settingsItemContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var editButtonContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject11, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var settingsItemValue = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var settingsItemLabel = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject13, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var textInputStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject14, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var editAddressSaveButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject15, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var editAddressCancelButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject16, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var styles = {
  mainContainer: mainContainer,
  cardContainer: cardContainer,
  loadingContainer: loadingContainer,
  settingsHeaderContainer: settingsHeaderContainer,
  settingsHeaderTextStyle: settingsHeaderTextStyle,
  editSettingsButton: editSettingsButton,
  editAddressSaveButton: editAddressSaveButton,
  editAddressCancelButton: editAddressCancelButton,
  settingsBodyContainer: settingsBodyContainer,
  editButtonContainer: editButtonContainer,
  editIcon: editIcon,
  verifiedIcon: verifiedIcon,
  settingsItemContainer: settingsItemContainer,
  settingsItemLabel: settingsItemLabel,
  settingsItemValue: settingsItemValue,
  textInputStyle: textInputStyle
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ })

};
//# sourceMappingURL=main.3f4db5bbb0f83199fb41.hot-update.js.map