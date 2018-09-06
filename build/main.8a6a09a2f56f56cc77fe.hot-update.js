exports.id = "main";
exports.modules = {

/***/ "./src/screens/UserProfile/index.js":
/*!******************************************!*\
  !*** ./src/screens/UserProfile/index.js ***!
  \******************************************/
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Spinner */ "./src/components/Spinner/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _EditProfileForm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./EditProfileForm */ "./src/screens/UserProfile/EditProfileForm/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../store/actions/auth */ "./src/store/actions/auth.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./styles */ "./src/screens/UserProfile/styles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");







var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/UserProfile/index.js';
/* global FileReader */
/* global FormData */



















var UserProfile = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(UserProfile, _Component);

  function UserProfile(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, UserProfile);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (UserProfile.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(UserProfile)).call(this, props));

    _this._renderLoading = function () {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].loadingContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_13__["default"], { size: 50, width: 7, color: _styles__WEBPACK_IMPORTED_MODULE_20__["colors"].lightText, __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        })
      );
    };

    _this.fileChangeHandler = function (event) {
      if (event.target.files && event.target.files[0]) {
        _this.setState({ selectedProfileImageBinary: event.target.files[0] });
        var reader = new FileReader();
        reader.onload = function (e) {
          _this.setState({ selectedProfileImage: e.target.result });
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    };

    _this.onAvatarCancel = function () {
      _this.setState({ selectedProfileImage: null });
    };

    _this.getUserImage = function (user) {
      if (_this.state.selectedProfileImage) {
        return _this.state.selectedProfileImage;
      }
      if (user.avatar) {
        return user.avatar;
      }

      return 'https://res.cloudinary.com/bitcharge/image/upload/v1535940305/panda-avatar.png';
    };

    _this._renderUserDetails = function (user) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].avatarContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 102
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].editImageContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 103
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'user-avatar', className: Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].avatarIconStyle), src: _this.getUserImage(user), __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              }
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('input', { type: 'file', id: 'profileImage', accept: 'image/*', className: Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].inputStyle), onChange: _this.fileChangeHandler, __source: {
                fileName: _jsxFileName,
                lineNumber: 105
              }
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'label',
              { htmlFor: 'profileImage', className: Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].editImageIconContainer), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 106
                }
              },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                'svg',
                { className: 'mdi-icon ', width: '14', height: '14', fill: 'white', viewBox: '0 0 24 24', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('path', { d: 'M4,4H7L9,2H15L17,4H20C21.1,4 22,4.9 22,6V18C22,19.1 21.1,20 20,20H4C2.9,20 2,19.1 2,18V6C2,4.9 2.9,4 4,4M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7M12,9C13.66,9 15,10.34 15,12C15,13.66 13.66,15 12,15C10.34,15 9,13.66 9,12C9,10.34 10.34,9 12,9Z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                  }
                })
              )
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].headerTextContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_14__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].headerNameTextStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              }
            },
            user.name
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_14__["default"],
            { tag: 'h6', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].headerUsernameTextStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 111
              }
            },
            user.username
          )
        ),
        _this.state.selectedProfileImage && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].editAvatarOptionsContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 114
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_15__["default"],
            {
              primary: true,
              onClick: _this.handleAvatarSubmit,
              style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].editProfileButton,
              disabled: _this.state.isSubmittingAvatar,
              type: 'submit',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              }
            },
            'Save ',
            _this.state.isSubmittingAvatar && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'span',
              { className: Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].spinnerIcon), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 122
                }
              },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_13__["default"], { size: 18, width: 4, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 122
                }
              })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_15__["default"],
            {
              onClick: _this.onAvatarCancel,
              style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].editProfileButton,
              disabled: _this.state.isSubmittingAvatar,
              link: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 124
              }
            },
            'Cancel'
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].detailsContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 134
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].profileHeaderContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 135
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_14__["default"],
              { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].profileHeaderTextStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 136
                }
              },
              'My Profile'
            ),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_15__["default"],
              { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Link"], to: '/' + user.username, target: '_blank', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].editProfileButton, secondary: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 137
                }
              },
              'View Profile',
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('i', { className: 'icon ion-md-person ' + Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].editIcon), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 137
                }
              })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_EditProfileForm__WEBPACK_IMPORTED_MODULE_16__["default"], { user: user, onSubmit: _this.handleProfileSubmit, __source: {
              fileName: _jsxFileName,
              lineNumber: 139
            }
          })
        )
      );
    };

    _this.state = {
      selectedProfileImage: null,
      selectedProfileImageBinary: null,
      isSubmittingAvatar: false
    };

    _this.handleAvatarSubmit = _this.handleAvatarSubmit.bind(_this);
    _this.handleProfileSubmit = _this.handleProfileSubmit.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(UserProfile, [{
    key: 'handleAvatarSubmit',
    value: function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var formData, user;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({ isSubmittingAvatar: true });
                _context.prev = 1;
                formData = new FormData();

                formData.append('avatar', this.state.selectedProfileImageBinary, this.state.selectedProfileImageBinary.name);
                _context.next = 6;
                return _api__WEBPACK_IMPORTED_MODULE_17__["default"].updateUser(formData);

              case 6:
                user = _context.sent;

                this.setState({
                  selectedProfileImage: null,
                  selectedProfileImageBinary: null,
                  isSubmittingAvatar: false
                });
                this.props.getAuthUser(user);
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](1);

                this.setState({ isSubmittingAvatar: false });

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11]]);
      }));

      function handleAvatarSubmit() {
        return _ref.apply(this, arguments);
      }

      return handleAvatarSubmit;
    }()
  }, {
    key: 'handleProfileSubmit',
    value: function () {
      var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(values, bag) {
        var data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _api__WEBPACK_IMPORTED_MODULE_17__["default"].updateUser(values);

              case 3:
                data = _context2.sent;

                bag.setSubmitting(false);
                this.props.getAuthUser(data);
                _context2.next = 13;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2['catch'](0);

                console.log(_context2.t0);
                bag.setSubmitting(false);
                bag.setErrors(_api__WEBPACK_IMPORTED_MODULE_17__["default"].setErrors(_context2.t0.response.data.errors.details.errors));

              case 13:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function handleProfileSubmit(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return handleProfileSubmit;
    }()
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
        { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].cardContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 147
            }
          },
          this.props.user ? this._renderUserDetails(this.props.user) : this._renderLoading()
        )
      );
    }
  }]);

  return UserProfile;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

UserProfile.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  getAuthUser: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, { getAuthUser: _store_actions_auth__WEBPACK_IMPORTED_MODULE_18__["getAuthUser"] })(UserProfile));

/***/ })

};
//# sourceMappingURL=main.8a6a09a2f56f56cc77fe.hot-update.js.map