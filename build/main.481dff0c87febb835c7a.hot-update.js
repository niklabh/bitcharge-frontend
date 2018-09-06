exports.id = "main";
exports.modules = {

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _screens_Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/Root */ "./src/screens/Root/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/App.css */ "./src/styles/App.css");
/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_App_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/App.js';









var App = function App(_ref) {
  var routes = _ref.routes,
      initialData = _ref.initialData,
      initialDataError = _ref.initialDataError;

  console.log(initialDataError);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"],
    { store: _store__WEBPACK_IMPORTED_MODULE_4__["default"], __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_screens_Root__WEBPACK_IMPORTED_MODULE_3__["default"], { routes: routes, initialData: initialData, initialDataError: initialDataError, __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    })
  );
};

App.propTypes = {
  routes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  initialData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  initialDataError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

};
//# sourceMappingURL=main.481dff0c87febb835c7a.hot-update.js.map