exports.id = "main";
exports.modules = {

/***/ "./src/screens/UserProfile/EditProfileForm/index.js":
/*!**********************************************************!*\
  !*** ./src/screens/UserProfile/EditProfileForm/index.js ***!
  \**********************************************************/
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
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Spinner */ "./src/components/Spinner/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles */ "./src/screens/UserProfile/EditProfileForm/styles.js");
var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/UserProfile/EditProfileForm/index.js';














var validationSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2),
  intro: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(1)
});

var EditProfileForm = function EditProfileForm(_ref) {
  var onSubmit = _ref.onSubmit,
      user = _ref.user;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: { name: user.name, intro: user.intro || '' },
    onSubmit: onSubmit,
    validationSchema: validationSchema,
    render: function render(_ref2) {
      var values = _ref2.values,
          handleChange = _ref2.handleChange,
          handleSubmit = _ref2.handleSubmit,
          handleBlur = _ref2.handleBlur,
          handleReset = _ref2.handleReset,
          errors = _ref2.errors,
          touched = _ref2.touched,
          isValid = _ref2.isValid,
          isSubmitting = _ref2.isSubmitting;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formBodyContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formItemContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_6__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formItemLabel, __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              }
            },
            'Full Name'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
            name: 'name',
            inputContainerStyle: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].inputContainerStyle,
            noErrorText: true,
            inputStyle: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].textInputStyle,
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.name,
            error: touched.name && errors.name,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formItemContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_6__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formItemLabel, __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            },
            'Intro'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
            name: 'intro',
            noErrorText: true,
            type: 'textarea',
            inputContainerStyle: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].inputContainerStyle,
            inputStyle: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].textInputStyle,
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.intro,
            error: touched.intro && errors.intro,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
          { style: Object(emotion__WEBPACK_IMPORTED_MODULE_4__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].formItemContainer, _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formButtonContainer), __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
            {
              primary: true,
              disabled: !isValid || isSubmitting,
              onClick: handleSubmit,
              style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formButtonStyle,
              type: 'submit',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              }
            },
            'Save ',
            isSubmitting && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'span',
              { className: Object(emotion__WEBPACK_IMPORTED_MODULE_4__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].spinnerIcon), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 76
                }
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_9__["default"], { size: 20, width: 4, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 76
                }
              })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
            {
              onClick: handleReset,
              style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formButtonStyle,
              link: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 78
              }
            },
            'Cancel'
          )
        )
      );
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  });
};

EditProfileForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/* harmony default export */ __webpack_exports__["default"] = (EditProfileForm);

/***/ })

};
//# sourceMappingURL=main.ca294099af790e481637.hot-update.js.map