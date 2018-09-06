exports.id = "main";
exports.modules = {

/***/ "./src/screens/Addresses/AddressItem/index.js":
/*!****************************************************!*\
  !*** ./src/screens/Addresses/AddressItem/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-copy-to-clipboard */ "react-copy-to-clipboard");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/Input */ "./src/components/Input/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../components/Modal */ "./src/components/Modal/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../api */ "./src/api/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./styles */ "./src/screens/Addresses/AddressItem/styles.js");








var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Addresses/AddressItem/index.js';

















var validationSchema = yup__WEBPACK_IMPORTED_MODULE_13__["object"]().shape({
  address: yup__WEBPACK_IMPORTED_MODULE_13__["string"]().min(30).required('Address is required')
});

var EditAddressForm = function EditAddressForm(_ref) {
  var onSubmit = _ref.onSubmit,
      onCancel = _ref.onCancel,
      address = _ref.address;

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Formik"], {
    initialValues: { address: address },
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

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressInputContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_16__["default"], {
          name: 'address',
          noErrorText: true,
          inputStyle: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressInputStyle,
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.address,
          error: touched.address && errors.address,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].optionsContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          },
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_17__["default"],
            {
              primary: true,
              disabled: !isValid || isSubmitting,
              onClick: handleSubmit,
              style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].editAddressSaveButton,
              type: 'submit',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              }
            },
            'Save'
          ),
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_17__["default"],
            {
              onClick: onCancel,
              style: Object(emotion__WEBPACK_IMPORTED_MODULE_10__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressActionButton, _styles__WEBPACK_IMPORTED_MODULE_20__["default"].editAddressCancelButton),
              link: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            },
            'Cancel'
          )
        )
      );
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  });
};

var AddressItem = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(AddressItem, _Component);

  function AddressItem(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, AddressItem);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, (AddressItem.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default()(AddressItem)).call(this, props));

    _this.state = {
      copiedAddress: false,
      deleteAddressModal: false,
      isEditing: false
    };

    _this.onCopyAddress = function () {
      _this.setState({ copied: true });
      setInterval(function () {
        _this.setState({ copied: false });
      }, 3000);
    };

    _this.onEdit = function () {
      _this.setState({ isEditing: true });
    };

    _this.onDeleteAddress = function () {
      _this.setState({ deleteAddressModal: true });
    };

    _this.handleDeleteAddress = function () {
      _this.props.deleteAddress(_this.props.address);
      _this.closeDeleteAddressModal();
    };

    _this.closeDeleteAddressModal = function () {
      _this.setState({ deleteAddressModal: false });
    };

    _this.renderDeleteModal = function () {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_Modal__WEBPACK_IMPORTED_MODULE_18__["default"],
        { label: 'Delete Address', style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].deleteAddressModalStyle, isOpen: _this.state.deleteAddressModal, handleClose: _this.closeDeleteAddressModal, __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
          { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].deleteAddressHeaderStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 129
            }
          },
          'Are you sure you want to delete this address?'
        ),
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].deleteAddressModalbuttonContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 130
            }
          },
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_17__["default"],
            { error: true, link: true, onClick: _this.handleDeleteAddress, __source: {
                fileName: _jsxFileName,
                lineNumber: 131
              }
            },
            'Delete'
          ),
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_17__["default"],
            { link: true, onClick: _this.closeDeleteAddressModal, __source: {
                fileName: _jsxFileName,
                lineNumber: 132
              }
            },
            'Cancel'
          )
        )
      );
    };

    _this.onCancelEdit = function () {
      _this.setState({ isEditing: false });
    };

    _this.renderAddressText = function () {
      var address = _this.props.address;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressTextContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
          { tag: 'h6', style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressTextStyle, unstyled: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 146
            }
          },
          address.address
        ),
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].optionsContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 147
            }
          },
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_12__["CopyToClipboard"],
            { text: address.address, onCopy: _this.onCopyAddress, __source: {
                fileName: _jsxFileName,
                lineNumber: 148
              }
            },
            _this.state.copied ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
              { tag: 'h6', style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].copiedTextStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 150
                }
              },
              'Copied!'
            ) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_17__["default"],
              { onClick: _this.addNewAddress, style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressActionButton, link: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 151
                }
              },
              'Copy'
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_17__["default"],
            { onClick: _this.onEdit, style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressActionButton, link: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 154
              }
            },
            'Edit'
          ),
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_17__["default"],
            { onClick: _this.onDeleteAddress, style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressActionButton, link: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 155
              }
            },
            'Delete'
          )
        )
      );
    };

    _this.onEditSubmit = _this.onEditSubmit.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(AddressItem, [{
    key: 'onEditSubmit',
    value: function () {
      var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, bag) {
        var addressDetails, data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                addressDetails = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, this.props.address, { address: values.address });
                _context.prev = 1;
                _context.next = 4;
                return _api__WEBPACK_IMPORTED_MODULE_19__["default"].updateAddress(addressDetails);

              case 4:
                data = _context.sent;

                bag.setSubmitting(false);
                this.props.deleteAddress(this.props.address, { local: true });
                this.props.editAddress(data.address);
                this.setState({ isEditing: false });
                _context.next = 16;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](1);

                console.log(_context.t0);
                bag.setSubmitting(false);
                bag.setErrors(_api__WEBPACK_IMPORTED_MODULE_19__["default"].setErrors(_context.t0.response.data.errors.details.errors));

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11]]);
      }));

      function onEditSubmit(_x, _x2) {
        return _ref3.apply(this, arguments);
      }

      return onEditSubmit;
    }()
  }, {
    key: 'render',
    value: function render() {
      var address = this.props.address;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressItemContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          }
        },
        this.renderDeleteModal(),
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressIconContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 166
            }
          },
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement('img', { alt: 'adress-icon', src: address.currency.icon, className: Object(emotion__WEBPACK_IMPORTED_MODULE_10__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressIconImage), __source: {
              fileName: _jsxFileName,
              lineNumber: 167
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressIconText, __source: {
                fileName: _jsxFileName,
                lineNumber: 168
              }
            },
            address.currency.name
          )
        ),
        this.state.isEditing ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(EditAddressForm, { onSubmit: this.onEditSubmit, onCancel: this.onCancelEdit, address: this.props.address.address, __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          }
        }) : this.renderAddressText()
      );
    }
  }]);

  return AddressItem;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

EditAddressForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  address: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
};

AddressItem.propTypes = {
  address: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  editAddress: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  deleteAddress: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
};

/* harmony default export */ __webpack_exports__["default"] = (AddressItem);

/***/ })

};
//# sourceMappingURL=main.71416be45c0ad341c690.hot-update.js.map