exports.id = "main";
exports.modules = {

/***/ "./src/screens/Addresses/index.js":
/*!****************************************!*\
  !*** ./src/screens/Addresses/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "babel-runtime/core-js/object/keys");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _AddressItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AddressItem */ "./src/screens/Addresses/AddressItem/index.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Spinner */ "./src/components/Spinner/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/Modal */ "./src/components/Modal/index.js");
/* harmony import */ var _AddAddress_AddressForm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../AddAddress/AddressForm */ "./src/screens/AddAddress/AddressForm/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _store_actions_address__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../store/actions/address */ "./src/store/actions/address.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./styles */ "./src/screens/Addresses/styles.js");








var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Addresses/index.js';


















var Addresses = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Addresses, _Component);

  function Addresses(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Addresses);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, (Addresses.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default()(Addresses)).call(this, props));

    _this.state = {
      addNewAddressModal: false,
      isAddAddressSuccess: false
    };

    _this.openAddNewAddressModal = function () {
      _this.setState({ addNewAddressModal: true });
    };

    _this.closeAddNewAddressModal = function () {
      _this.setState({ addNewAddressModal: false });
    };

    _this._renderUserAddresses = function (addresses) {
      var addressList = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(addresses).map(function (address) {
        return addresses[address];
      }).sort(function (a, b) {
        var textA = a.currency.name.toUpperCase();
        var textB = b.currency.name.toUpperCase();

        return textA.localeCompare(textB);
      });
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].addressesContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].addressesHeaderContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            }
          },
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].addressesHeaderTextStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              }
            },
            'My Addresses'
          ),
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_15__["default"],
            { onClick: _this.openAddNewAddressModal, style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].addNewAddressButton, primary: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              }
            },
            'Add new'
          ),
          _this._renderAddAddressModal()
        ),
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].addressesListContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            }
          },
          addressList.length && addressList.map(function (address) {
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_AddressItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
              key: address.address,
              address: address,
              deleteAddress: _this.props.deleteAddress,
              editAddress: _this.props.updateAddress,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              }
            });
          })
        )
      );
    };

    _this._renderLoading = function () {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].loadingContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_14__["default"], { size: 50, width: 7, color: _styles__WEBPACK_IMPORTED_MODULE_20__["colors"].lightText, __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        })
      );
    };

    _this._renderError = function () {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].loadingContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
          { tag: 'h3', __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            }
          },
          'Something went wrong. Try reloading the page'
        )
      );
    };

    _this._renderAddAddressModal = function () {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_Modal__WEBPACK_IMPORTED_MODULE_16__["default"],
        { label: 'Add New Address', style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].addAddressModalStyle, isOpen: _this.state.addNewAddressModal, handleClose: _this.closeAddNewAddressModal, __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
          { tag: 'h3', style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].addAddressModalHeaderStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 102
            }
          },
          'Add a new address'
        ),
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_AddAddress_AddressForm__WEBPACK_IMPORTED_MODULE_17__["default"], { onSubmit: _this.handleAddAddressSubmit, onCancel: _this.closeAddNewAddressModal, __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        })
      );
    };

    _this._renderEmpty = function () {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].loadingContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
          { tag: 'h3', __source: {
              fileName: _jsxFileName,
              lineNumber: 111
            }
          },
          'You haven\'t added any addresses.'
        ),
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Button__WEBPACK_IMPORTED_MODULE_15__["default"],
          { primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].addNewEmptyButton, onClick: _this.openAddNewAddressModal, __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            }
          },
          'Add New Address'
        ),
        _this._renderAddAddressModal()
      );
    };

    _this._renderCurrentState = function () {
      var _this$props = _this.props,
          isLoading = _this$props.isLoading,
          error = _this$props.error,
          addresses = _this$props.addresses;

      if (isLoading) {
        return _this._renderLoading();
      }
      if (error) {
        return _this._renderError();
      }

      if (!babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(addresses) || babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(addresses).length === 0) {
        return _this._renderEmpty();
      }

      return _this._renderUserAddresses(_this.props.addresses);
    };

    _this.handleAddAddressSubmit = _this.handleAddAddressSubmit.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Addresses, [{
    key: 'handleAddAddressSubmit',
    value: function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, bag) {
        var addressDetails, data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                addressDetails = {
                  currency: values.currency.symbol,
                  address: values.address
                };
                _context.prev = 1;
                _context.next = 4;
                return _api__WEBPACK_IMPORTED_MODULE_18__["default"].addAddress(addressDetails);

              case 4:
                data = _context.sent;

                bag.setSubmitting(false);
                this.setState({ isAddAddressSuccess: true });
                this.props.addAddress(data.address);
                this.closeAddNewAddressModal();
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](1);

                bag.setSubmitting(false);
                bag.setErrors(_api__WEBPACK_IMPORTED_MODULE_18__["default"].setErrors(_context.t0.response.data.errors.details.errors));

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11]]);
      }));

      function handleAddAddressSubmit(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return handleAddAddressSubmit;
    }()
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
        { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].cardContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            }
          },
          this._renderCurrentState()
        )
      );
    }
  }]);

  return Addresses;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Addresses.propTypes = {
  addresses: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  deleteAddress: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  addAddress: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  updateAddress: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  error: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    addresses: state.addresses.addressList,
    isLoading: state.addresses.isLoading,
    error: state.addresses.isError
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, { addAddress: _store_actions_address__WEBPACK_IMPORTED_MODULE_19__["addAddress"], updateAddress: _store_actions_address__WEBPACK_IMPORTED_MODULE_19__["updateAddress"], deleteAddress: _store_actions_address__WEBPACK_IMPORTED_MODULE_19__["deleteAddress"] })(Addresses));

/***/ })

};
//# sourceMappingURL=main.7b98e7f349d7292588e9.hot-update.js.map