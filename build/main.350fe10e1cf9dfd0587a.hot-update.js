exports.id = "main";
exports.modules = {

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/promise */ "babel-runtime/core-js/promise");
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "babel-runtime/core-js/object/keys");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);







var PUBLIC_URI =  false ? undefined : 'http://localhost:8080';

var API = function API() {
  var _this = this;

  babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, API);

  this.setErrors = function (errors) {
    var errorObj = {};
    if (errors && babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(errors).length) {
      babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(errors).forEach(function (error) {
        errorObj[error] = errors[error].msg;
      });
    }

    return errorObj;
  };

  this.setAuthHeader = function (token) {
    _this.axios.defaults.headers.common['Authorization'] = 'bearer ' + token;
  };

  this.removeAuthHeader = function () {
    delete _this.axios.defaults.headers.common['Authorization'];
  };

  this.signup = function (userDetails) {
    return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(resolve, reject) {
        var response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this.axios.post('/signup', userDetails);

              case 3:
                response = _context.sent;
                return _context.abrupt('return', resolve(response.data));

              case 7:
                _context.prev = 7;
                _context.t0 = _context['catch'](0);
                return _context.abrupt('return', reject(_context.t0));

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 7]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  };

  this.confirmEmail = function (code) {
    return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {
      var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(resolve, reject) {
        var response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _this.axios.post('/confirm', { confirmationCode: code });

              case 3:
                response = _context2.sent;
                return _context2.abrupt('return', resolve(response));

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](0);
                return _context2.abrupt('return', reject(_context2.t0));

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this, [[0, 7]]);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());
  };

  this.login = function (userDetails) {
    return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {
      var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(resolve, reject) {
        var response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _this.axios.post('/login', userDetails);

              case 3:
                response = _context3.sent;
                return _context3.abrupt('return', resolve(response.data));

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3['catch'](0);
                return _context3.abrupt('return', reject(_context3.t0));

              case 10:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this, [[0, 7]]);
      }));

      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }());
  };

  this.addAddress = function (addressDetails) {
    return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {
      var _ref4 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(resolve, reject) {
        var response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _this.axios.post('/addresses', addressDetails);

              case 3:
                response = _context4.sent;
                return _context4.abrupt('return', resolve(response.data));

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4['catch'](0);
                return _context4.abrupt('return', reject(_context4.t0));

              case 10:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this, [[0, 7]]);
      }));

      return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    }());
  };

  this.getCurrencies = function () {
    return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {
      var _ref5 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(resolve, reject) {
        var response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _this.axios.get('/currencies');

              case 3:
                response = _context5.sent;
                return _context5.abrupt('return', resolve(response.data));

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5['catch'](0);
                return _context5.abrupt('return', reject(_context5.t0));

              case 10:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this, [[0, 7]]);
      }));

      return function (_x9, _x10) {
        return _ref5.apply(this, arguments);
      };
    }());
  };

  this.updateUser = function (details) {
    return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {
      var _ref6 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(resolve, reject) {
        var response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _this.axios.put('/profile', details);

              case 3:
                response = _context6.sent;
                return _context6.abrupt('return', resolve(response.data));

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6['catch'](0);
                return _context6.abrupt('return', reject(_context6.t0));

              case 10:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this, [[0, 7]]);
      }));

      return function (_x11, _x12) {
        return _ref6.apply(this, arguments);
      };
    }());
  };

  this.verifyEmail = function () {
    return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {
      var _ref7 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(resolve, reject) {
        var response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return _this.axios.get('/verify/email');

              case 3:
                response = _context7.sent;
                return _context7.abrupt('return', resolve(response.data));

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7['catch'](0);
                return _context7.abrupt('return', reject(_context7.t0));

              case 10:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, _this, [[0, 7]]);
      }));

      return function (_x13, _x14) {
        return _ref7.apply(this, arguments);
      };
    }());
  };

  this.getAuthUser = function () {
    return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {
      var _ref8 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(resolve, reject) {
        var response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return _this.axios.get('/profile');

              case 3:
                response = _context8.sent;
                return _context8.abrupt('return', resolve(response.data));

              case 7:
                _context8.prev = 7;
                _context8.t0 = _context8['catch'](0);
                return _context8.abrupt('return', reject(_context8.t0));

              case 10:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, _this, [[0, 7]]);
      }));

      return function (_x15, _x16) {
        return _ref8.apply(this, arguments);
      };
    }());
  };

  this.getAddresses = function () {
    return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {
      var _ref9 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(resolve, reject) {
        var response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return _this.axios.get('/addresses');

              case 3:
                response = _context9.sent;
                return _context9.abrupt('return', resolve(response.data));

              case 7:
                _context9.prev = 7;
                _context9.t0 = _context9['catch'](0);
                return _context9.abrupt('return', reject(_context9.t0));

              case 10:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, _this, [[0, 7]]);
      }));

      return function (_x17, _x18) {
        return _ref9.apply(this, arguments);
      };
    }());
  };

  this.updateAddress = function (addressDetails) {
    return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {
      var _ref10 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(resolve, reject) {
        var response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return _this.axios.put('/addresses/' + addressDetails.currency.symbol, { address: addressDetails.address });

              case 3:
                response = _context10.sent;
                return _context10.abrupt('return', resolve(response.data));

              case 7:
                _context10.prev = 7;
                _context10.t0 = _context10['catch'](0);
                return _context10.abrupt('return', reject(_context10.t0));

              case 10:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, _this, [[0, 7]]);
      }));

      return function (_x19, _x20) {
        return _ref10.apply(this, arguments);
      };
    }());
  };

  this.deleteAddress = function (address) {
    return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {
      var _ref11 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(resolve, reject) {
        var response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                _context11.next = 3;
                return _this.axios.delete('/addresses/' + address.currency.symbol);

              case 3:
                response = _context11.sent;
                return _context11.abrupt('return', resolve(response.data));

              case 7:
                _context11.prev = 7;
                _context11.t0 = _context11['catch'](0);
                return _context11.abrupt('return', reject(_context11.t0));

              case 10:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, _this, [[0, 7]]);
      }));

      return function (_x21, _x22) {
        return _ref11.apply(this, arguments);
      };
    }());
  };

  this.getProfile = function (username) {

    return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {
      var _ref12 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(resolve, reject) {
        var response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                _context12.next = 3;
                return _this.axios.get('' + username);

              case 3:
                response = _context12.sent;
                return _context12.abrupt('return', resolve(response.data));

              case 7:
                _context12.prev = 7;
                _context12.t0 = _context12['catch'](0);
                return _context12.abrupt('return', reject(_context12.t0));

              case 10:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, _this, [[0, 7]]);
      }));

      return function (_x23, _x24) {
        return _ref12.apply(this, arguments);
      };
    }());
  };

  this.axios = axios__WEBPACK_IMPORTED_MODULE_5___default.a.create({
    baseURL: PUBLIC_URI + '/api'
  });
};

/* harmony default export */ __webpack_exports__["default"] = (new API());

/***/ })

};
//# sourceMappingURL=main.350fe10e1cf9dfd0587a.hot-update.js.map