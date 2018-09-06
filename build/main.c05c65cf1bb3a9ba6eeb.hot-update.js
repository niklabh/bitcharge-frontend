exports.id = "main";
exports.modules = {

/***/ "./src/store/sagas/address.js":
/*!************************************!*\
  !*** ./src/store/sagas/address.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/store/constants.js");



var _marked = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(fetchAddressesFlow),
    _marked2 = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addAddressFlow),
    _marked3 = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(updateAddressFlow),
    _marked4 = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(deleteAddressFlow),
    _marked5 = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addressFlow);






function fetchAddressesFlow(action) {
  var addresses;
  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function fetchAddressesFlow$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({ type: _constants__WEBPACK_IMPORTED_MODULE_4__["FETCH_ADDRESSES_LOADING"] });

        case 3:
          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(_api__WEBPACK_IMPORTED_MODULE_3__["default"].getAddresses);

        case 5:
          addresses = _context.sent;
          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _constants__WEBPACK_IMPORTED_MODULE_4__["FETCH_ADDRESSES_SUCCESS"],
            payload: babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, addresses)
          });

        case 8:
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context['catch'](0);
          _context.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _constants__WEBPACK_IMPORTED_MODULE_4__["FETCH_ADDRESSES_ERROR"]
          });

        case 14:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 10]]);
}

function addAddressFlow(action) {
  var payload;
  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addAddressFlow$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          payload = action.payload;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _constants__WEBPACK_IMPORTED_MODULE_4__["ADD_ADDRESS_SUCCESS"],
            payload: payload
          });

        case 3:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function updateAddressFlow(action) {
  var payload;
  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function updateAddressFlow$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          payload = action.payload;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _constants__WEBPACK_IMPORTED_MODULE_4__["UPDATE_ADDRESS_SUCCESS"],
            payload: payload
          });

        case 3:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

function deleteAddressFlow(action) {
  var payload, response;
  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function deleteAddressFlow$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          payload = action.payload;

          if (!(payload.params && payload.params.local)) {
            _context4.next = 6;
            break;
          }

          _context4.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _constants__WEBPACK_IMPORTED_MODULE_4__["DELETE_ADDRESS_SUCCESS"],
            payload: payload
          });

        case 4:
          _context4.next = 19;
          break;

        case 6:
          _context4.prev = 6;
          _context4.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(_api__WEBPACK_IMPORTED_MODULE_3__["default"].deleteAddress, payload.address);

        case 9:
          response = _context4.sent;

          console.log(response);

          _context4.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _constants__WEBPACK_IMPORTED_MODULE_4__["DELETE_ADDRESS_SUCCESS"],
            payload: payload
          });

        case 13:
          _context4.next = 19;
          break;

        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4['catch'](6);
          _context4.next = 19;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _constants__WEBPACK_IMPORTED_MODULE_4__["DELETE_ADDRESS_ERROR"]
          });

        case 19:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this, [[6, 15]]);
}

function addressFlow() {
  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addressFlow$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_constants__WEBPACK_IMPORTED_MODULE_4__["FETCH_ADDRESSES"], fetchAddressesFlow);

        case 2:
          _context5.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_constants__WEBPACK_IMPORTED_MODULE_4__["ADD_ADDRESS"], addAddressFlow);

        case 4:
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_constants__WEBPACK_IMPORTED_MODULE_4__["UPDATE_ADDRESS"], updateAddressFlow);

        case 6:
          _context5.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_constants__WEBPACK_IMPORTED_MODULE_4__["DELETE_ADDRESS"], deleteAddressFlow);

        case 8:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this);
}

/* harmony default export */ __webpack_exports__["default"] = (addressFlow);

/***/ })

};
//# sourceMappingURL=main.c05c65cf1bb3a9ba6eeb.hot-update.js.map