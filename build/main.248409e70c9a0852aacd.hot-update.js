exports.id = "main";
exports.modules = {

/***/ "./src/store/sagas/auth.js":
/*!*********************************!*\
  !*** ./src/store/sagas/auth.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/store/constants.js");


var _marked = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signupFlow),
    _marked2 = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loginFlow),
    _marked3 = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(authProfileFlow),
    _marked4 = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logoutFlow),
    _marked5 = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(confirmEmailFlow),
    _marked6 = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(authFlow);

/* global localStorage */






var getAuthenticatedState = function getAuthenticatedState(state) {
  return state.auth.isAuthenticated;
};

var setToken = function setToken(token) {
  _api__WEBPACK_IMPORTED_MODULE_2__["default"].setAuthHeader(token);
  localStorage.setItem('JWT_TOKEN', token);
};

function signupFlow(action) {
  var payload;
  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signupFlow$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          payload = action.payload;


          setToken(payload.user.token);

          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({ type: _constants__WEBPACK_IMPORTED_MODULE_3__["SIGNUP_SUCCESS"], payload: payload });

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

function loginFlow(action) {
  var payload;
  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loginFlow$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          payload = action.payload;


          setToken(payload.user.token);

          _context2.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({ type: _constants__WEBPACK_IMPORTED_MODULE_3__["LOGIN_SUCCESS"], payload: payload });

        case 4:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function authProfileFlow(action) {
  var payload, isAuthenticated, data;
  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function authProfileFlow$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          payload = action.payload;

          if (!(payload && payload.user)) {
            _context3.next = 6;
            break;
          }

          _context3.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({ type: _constants__WEBPACK_IMPORTED_MODULE_3__["FETCH_AUTH_USER_SUCCESS"], payload: payload });

        case 4:
          _context3.next = 20;
          break;

        case 6:
          isAuthenticated = Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(getAuthenticatedState);

          if (!isAuthenticated) {
            _context3.next = 20;
            break;
          }

          _context3.prev = 8;
          _context3.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["default"].getAuthUser);

        case 11:
          data = _context3.sent;
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({ type: _constants__WEBPACK_IMPORTED_MODULE_3__["FETCH_AUTH_USER_SUCCESS"], payload: { user: data } });

        case 14:
          _context3.next = 20;
          break;

        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3['catch'](8);
          _context3.next = 20;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _constants__WEBPACK_IMPORTED_MODULE_3__["FETCH_AUTH_USER_ERROR"],
            payload: {
              isAuthenticated: false
            }
          });

        case 20:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this, [[8, 16]]);
}

function logoutFlow() {
  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logoutFlow$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _api__WEBPACK_IMPORTED_MODULE_2__["default"].removeAuthHeader();
          localStorage.removeItem('JWT_TOKEN');
          _context4.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({ type: _constants__WEBPACK_IMPORTED_MODULE_3__["LOGOUT_SUCCESS"] });

        case 4:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this);
}

function confirmEmailFlow(action) {
  var payload;
  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function confirmEmailFlow$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          payload = action.payload;

          if (!payload.success) {
            _context5.next = 4;
            break;
          }

          _context5.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({ type: _constants__WEBPACK_IMPORTED_MODULE_3__["FETCH_AUTH_USER"] });

        case 4:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this);
}

function authFlow() {
  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function authFlow$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_constants__WEBPACK_IMPORTED_MODULE_3__["SIGNUP"], signupFlow);

        case 2:
          _context6.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_constants__WEBPACK_IMPORTED_MODULE_3__["LOGIN"], loginFlow);

        case 4:
          _context6.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_constants__WEBPACK_IMPORTED_MODULE_3__["LOGOUT"], logoutFlow);

        case 6:
          _context6.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_constants__WEBPACK_IMPORTED_MODULE_3__["FETCH_AUTH_USER"], authProfileFlow);

        case 8:
          _context6.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_constants__WEBPACK_IMPORTED_MODULE_3__["CONFIRM_EMAIL"], confirmEmailFlow);

        case 10:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this);
}

/* harmony default export */ __webpack_exports__["default"] = (authFlow);

/***/ })

};
//# sourceMappingURL=main.248409e70c9a0852aacd.hot-update.js.map