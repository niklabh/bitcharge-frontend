exports.id = "main";
exports.modules = {

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/promise */ "babel-runtime/core-js/promise");
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes */ "./src/routes.js");

var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/server.js';








var assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");

var server = express__WEBPACK_IMPORTED_MODULE_4___default()();
server.disable('x-powered-by').use(express__WEBPACK_IMPORTED_MODULE_4___default.a.static("/Users/Yogesh/Projects/Bitcharge/bit-web/public")).get('/*', function (req, res) {
  var context = {};

  var matches = _routes__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (route, index) {
    var match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["matchPath"])(req.url, route.path, route);
    if (match) {
      var obj = {
        route: route,
        match: match,
        promise: route.component.getInitialData ? route.component.getInitialData({ match: match, req: req, res: res }) : babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(null)
      };
      return obj;
    }

    return null;
  });
  console.log(match);
  if (matches.length === 0) {
    res.status(404).send('Not found');
  }

  var promises = matches.map(function (match) {
    return match ? match.promise : null;
  });

  babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all(promises).then(function (data) {
    var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_5__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      react_router_dom__WEBPACK_IMPORTED_MODULE_3__["StaticRouter"],
      { context: context, location: req.url, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      },
      react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_1__["default"], { routes: _routes__WEBPACK_IMPORTED_MODULE_6__["default"], initialData: data, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      })
    ));

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send('<!doctype html>\n        <html lang="">\n        <head>\n            <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n            <meta charset="utf-8" />\n            <link rel="manifest" href="/manifest.json">\n            <link rel="shortcut icon" href="/favicon.png">\n            <link href="https://unpkg.com/ionicons@4.0.0/dist/css/ionicons.min.css"rel="stylesheet"/>\n            <title>Bitcharge</title>\n            <meta name="viewport" content="width=device-width, initial-scale=1">\n            ' + (assets.client.css ? '<link rel="stylesheet" href="' + assets.client.css + '">' : '') + '\n            ' + ( false ? undefined : '<script src="' + assets.client.js + '" defer crossorigin></script>') + '\n        </head>\n        <body>\n            <div id="root">' + markup + '</div>\n        </body>\n    </html>');
    }
  });
});

/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ })

};
//# sourceMappingURL=main.5977f067c50916bc75e8.hot-update.js.map