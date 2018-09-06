exports.id = "main";
exports.modules = {

/***/ "./src/screens/Profile/index.js":
/*!**************************************!*\
  !*** ./src/screens/Profile/index.js ***!
  \**************************************/
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
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! qrcode.react */ "qrcode.react");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/Navbar */ "./src/components/Navbar/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/Spinner */ "./src/components/Spinner/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _SingleValue__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./SingleValue */ "./src/screens/Profile/SingleValue/index.js");
/* harmony import */ var _DropdownItem__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./DropdownItem */ "./src/screens/Profile/DropdownItem/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./styles */ "./src/screens/Profile/styles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");









var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Profile/index.js';






















var selectStyles = {
  control: function control(base) {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8___default()({}, base, _styles__WEBPACK_IMPORTED_MODULE_25__["default"].selectStyle);
  },
  container: function container(base) {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8___default()({}, base, { width: '100%' });
  },
  indicatorsContainer: function indicatorsContainer(base) {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8___default()({}, base, { transition: 'all 0.3s ease-out' });
  },
  indicatorSeparator: function indicatorSeparator(base) {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8___default()({}, base, { backgroundColor: '#FFF' });
  },
  dropdownIndicator: function dropdownIndicator(base) {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8___default()({}, base, { color: '#000' });
  },
  menu: function menu(base) {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8___default()({}, base, { marginTop: '1px', border: 0, borderRadius: 0 });
  },
  option: function option(base) {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8___default()({}, _styles__WEBPACK_IMPORTED_MODULE_25__["default"].dropdownItemStyle);
  },
  singleValue: function singleValue(base) {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8___default()({}, _styles__WEBPACK_IMPORTED_MODULE_25__["default"].singleValueStyle);
  },
  valueContainer: function valueContainer(base) {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8___default()({}, base, { padding: 0 });
  }
};

var Profile = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Profile, _Component);

  function Profile(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Profile);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, (Profile.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default()(Profile)).call(this, props));

    _this.onCopyAddress = function () {
      _this.setState({ copied: true });
      setInterval(function () {
        _this.setState({ copied: false });
      }, 3000);
    };

    _this.onDropdownItemPress = function (value) {
      _this.setState({ selectedAddress: value });
    };

    _this._renderCardBody = function (addresses) {
      var selectedAddress = _this.state.selectedAddress;


      if (!addresses || !addresses.length) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].cardBodyContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            }
          },
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
            { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].bodyDataContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 79
              }
            },
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].addressContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80
                }
              },
              react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].noAddressImageContainer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('img', { className: Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_25__["default"].noAddressImage), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1536110953/assets/building-profile.png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                  }
                })
              ),
              react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_18__["default"],
                { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].noAddressText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                  }
                },
                'This profile is still in progress. No addresses added yet.'
              )
            )
          )
        );
      }

      var addressList = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(addresses).map(function (address) {
        return addresses[address];
      }).sort(function (a, b) {
        var textA = a.currency.name.toUpperCase();
        var textB = b.currency.name.toUpperCase();

        return textA.localeCompare(textB);
      });

      var addressText = selectedAddress ? selectedAddress.address : addresses[0].address;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].cardBodyContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        },
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_12___default.a, {
          options: addressList,
          defaultValue: addressList[0],
          isSearchable: false,
          components: { Option: _DropdownItem__WEBPACK_IMPORTED_MODULE_24__["default"], SingleValue: _SingleValue__WEBPACK_IMPORTED_MODULE_23__["default"] },
          getOptionLabel: function getOptionLabel(_ref) {
            var currency = _ref.currency;
            return currency.name;
          },
          getOptionValue: function getOptionValue(_ref2) {
            var currency = _ref2.currency;
            return currency.symbol;
          },
          styles: selectStyles,
          onChange: _this.onDropdownItemPress,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
          { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].bodyDataContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 111
            }
          },
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].addressContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 112
              }
            },
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_18__["default"],
              { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].addressHeaderStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 113
                }
              },
              'Wallet Address'
            ),
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_18__["default"],
              { tag: 'h6', style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].addressValueText, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 114
                }
              },
              addressText
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].qrcodeContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 116
              }
            },
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_13___default.a, { value: addressText, size: 172, __source: {
                fileName: _jsxFileName,
                lineNumber: 117
              }
            })
          )
        )
      );
    };

    _this._renderUser = function (user) {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          }
        },
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].cardHeaderContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 127
            }
          },
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].avatarContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 128
              }
            },
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('img', { alt: 'user-avatar', className: Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_25__["default"].avatarIconStyle), src: user.avatar || 'https://res.cloudinary.com/bitcharge/image/upload/v1535940305/panda-avatar.png', __source: {
                fileName: _jsxFileName,
                lineNumber: 129
              }
            })
          ),
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].headerTextContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 131
              }
            },
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_18__["default"],
              { tag: 'h5', unstyled: true, style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].headerTextStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 132
                }
              },
              user.name
            ),
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_18__["default"],
              { tag: 'h6', unstyled: true, style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].headerSubTextStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 133
                }
              },
              user.intro || user.username
            )
          )
        ),
        _this._renderCardBody(user.addresses)
      );
    };

    _this._renderLoading = function () {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].loadingContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          }
        },
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_21__["default"], { size: 50, width: 7, color: _styles__WEBPACK_IMPORTED_MODULE_26__["colors"].lightText, __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          }
        })
      );
    };

    _this._renderError = function () {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          }
        },
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].cardErrorHeaderContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 152
            }
          },
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].errorHeaderTextContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 153
              }
            },
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_18__["default"],
              { tag: 'h3', unstyled: true, style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].errorHeaderTextStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 154
                }
              },
              'We couldn\'t find that Bitcharge profile'
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].errorUserContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 157
            }
          },
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].noAddressImageContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 158
              }
            },
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('img', { className: Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_25__["default"].errorUserImage), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1536119853/assets/user-not-found.png', __source: {
                fileName: _jsxFileName,
                lineNumber: 159
              }
            })
          ),
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_18__["default"],
            { tag: 'h6', style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].errorUserText, __source: {
                fileName: _jsxFileName,
                lineNumber: 161
              }
            },
            'Seems like nobody has a Bitcharge profile with that username, try checking the link again. You can also create your own Bitcharge profile with this username. '
          ),
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_22__["default"],
            { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Link"], to: '/signup', primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].getStartedButton, __source: {
                fileName: _jsxFileName,
                lineNumber: 162
              }
            },
            'Create My Profile ',
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('i', { className: 'icon ion-md-arrow-round-forward ' + _styles__WEBPACK_IMPORTED_MODULE_25__["default"].getStartedButtonIcon, __source: {
                fileName: _jsxFileName,
                lineNumber: 162
              }
            })
          )
        )
      );
    };

    _this._renderCard = function () {
      if (_this.state.isLoading) {
        return _this._renderLoading();
      }

      if (_this.state.user) {
        return _this._renderUser(_this.state.user);
      }

      if (_this.state.isError) {
        return _this._renderError();
      }
    };

    _this.getMetaTags = function (user) {
      var firstName = user.name.split(' ')[0];
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        react_helmet__WEBPACK_IMPORTED_MODULE_15__["Helmet"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          }
        },
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('meta', { property: 'og:title', content: 'Pay ' + firstName + ' in crypto with Bitcharge', __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('meta', { property: 'og:description', content: 'Go to bitcharge.co/' + user.username + ' to pay ' + firstName + ' in your favourite cryptocurrency.', __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('meta', { property: 'og:image', content: 'https://res.cloudinary.com/bitcharge/image/upload/v1536051435/assets/bitcharge-social-graph.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('meta', { property: 'og:image:alt', content: 'Bitcharge', __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('meta', { property: 'og:url', content: 'https://bitcharge.co/' + user.username, __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          }
        })
      );
    };

    _this.state = {
      isLoading: true,
      isError: false,
      user: null,
      selectedAddress: null,
      copiedAddress: false
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Profile, [{
    key: 'componentDidMount',
    value: function () {
      var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _api__WEBPACK_IMPORTED_MODULE_16__["default"].getProfile(this.props.match.params.username);

              case 3:
                data = _context.sent;

                this.setState({ isLoading: false, user: data });
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context['catch'](0);

                this.setState({ isLoading: false, isError: true });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function componentDidMount() {
        return _ref3.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var user = this.state.user;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
        { fluid: true, fullHeight: true, style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          }
        },
        user && this.getMetaTags(user),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_19__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
          { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].bodyContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 201
            }
          },
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].cardContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 202
              }
            },
            this._renderCard()
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_20__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          }
        })
      );
    }
  }], [{
    key: 'getInitialData',
    value: function getInitialData(_ref4) {
      var match = _ref4.match,
          req = _ref4.req,
          res = _ref4.res;

      console.log('match', match);
      return _api__WEBPACK_IMPORTED_MODULE_16__["default"].getProfile(match.params.username);
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Profile.propTypes = {
  match: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

};
//# sourceMappingURL=main.a42ab9f8a241cbbe3602.hot-update.js.map