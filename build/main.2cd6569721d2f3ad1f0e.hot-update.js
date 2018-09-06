exports.id = "main";
exports.modules = {

/***/ "./src/screens/AddAddress/index.js":
/*!*****************************************!*\
  !*** ./src/screens/AddAddress/index.js ***!
  \*****************************************/
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
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _AddressForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AddressForm */ "./src/screens/AddAddress/AddressForm/index.js");
/* harmony import */ var _AddAddressSuccess__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AddAddressSuccess */ "./src/screens/AddAddress/AddAddressSuccess/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _store_actions_address__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../store/actions/address */ "./src/store/actions/address.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./styles */ "./src/screens/AddAddress/styles.js");







var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/AddAddress/index.js';
















var AddAddress = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(AddAddress, _Component);

  function AddAddress(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, AddAddress);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (AddAddress.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(AddAddress)).call(this, props));

    _this.state = {
      isAddAddressSuccess: false
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.onAddNewAddress = _this.onAddNewAddress.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(AddAddress, [{
    key: 'handleSubmit',
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
                return _api__WEBPACK_IMPORTED_MODULE_16__["default"].addAddress(addressDetails);

              case 4:
                data = _context.sent;

                bag.setSubmitting(false);
                this.setState({ isAddAddressSuccess: true });
                this.props.addAddress(data.address);
                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](1);

                bag.setSubmitting(false);
                bag.setErrors(_api__WEBPACK_IMPORTED_MODULE_16__["default"].setErrors(_context.t0.response.data.errors.details.errors));

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 10]]);
      }));

      function handleSubmit(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: 'onAddNewAddress',
    value: function onAddNewAddress() {
      this.setState({ isAddAddressSuccess: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var PoseAddressForm = react_pose__WEBPACK_IMPORTED_MODULE_11___default()(_AddressForm__WEBPACK_IMPORTED_MODULE_14__["default"])({
        visible: { opacity: 1 },
        invisible: { opacity: 0, display: 'none' }
      });

      var PoseAddAddressSuccess = react_pose__WEBPACK_IMPORTED_MODULE_11___default()(_AddAddressSuccess__WEBPACK_IMPORTED_MODULE_15__["default"])({
        visible: { opacity: 1 },
        invisible: { opacity: 0, display: 'none' }
      });

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
        { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].heroContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].heroLogoContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'a',
              { href: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                }
              },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'bitcharge-logo', className: Object(emotion__WEBPACK_IMPORTED_MODULE_10__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].logoImageStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1532990484/icons/bitcharge-logo-white.png', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                }
              })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].heroTextContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'add-address-avatar', className: Object(emotion__WEBPACK_IMPORTED_MODULE_10__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].addressAvatarIconStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1535940306/hen-avatar.png', __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              }
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
              { tag: 'h3', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].heroText, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                }
              },
              'Add your addresses'
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].bodyContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PoseAddressForm, { pose: this.state.isAddAddressSuccess ? 'invisible' : 'visible', onSubmit: this.handleSubmit, __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PoseAddAddressSuccess, { pose: this.state.isAddAddressSuccess ? 'visible' : 'invisible', onAddNewAddress: this.onAddNewAddress, __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            }
          })
        )
      );
    }
  }]);

  return AddAddress;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

AddAddress.propTypes = {
  addAddress: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(null, { addAddress: _store_actions_address__WEBPACK_IMPORTED_MODULE_17__["addAddress"] })(AddAddress));

/***/ })

};
//# sourceMappingURL=main.2cd6569721d2f3ad1f0e.hot-update.js.map