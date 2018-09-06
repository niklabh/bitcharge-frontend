exports.id = "main";
exports.modules = {

/***/ "./node_modules/create-emotion-server/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/create-emotion-server/dist/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var through = _interopDefault(__webpack_require__(/*! through */ "through"));
var tokenize = _interopDefault(__webpack_require__(/*! html-tokenize */ "./node_modules/html-tokenize/index.js"));
var pipe = _interopDefault(__webpack_require__(/*! multipipe */ "./node_modules/multipipe/index.js"));

var createExtractCritical = function createExtractCritical(emotion) {
  return function (html) {
    // parse out ids from html
    // reconstruct css/rules/cache to pass
    var RGX = new RegExp(emotion.caches.key + "-([a-zA-Z0-9-]+)", 'gm');
    var o = {
      html: html,
      ids: [],
      css: ''
    };
    var match;
    var ids = {};

    while ((match = RGX.exec(html)) !== null) {
      // $FlowFixMe
      if (ids[match[1]] === undefined) {
        // $FlowFixMe
        ids[match[1]] = true;
      }
    }

    o.ids = Object.keys(emotion.caches.inserted).filter(function (id) {
      if ((ids[id] === true || emotion.caches.registered[emotion.caches.key + "-" + id] === undefined) && emotion.caches.inserted[id] !== true) {
        o.css += emotion.caches.inserted[id];
        return true;
      }
    });
    return o;
  };
};

function generateStyleTag(cssKey, ids, styles, nonceString) {
  return "<style data-emotion-" + cssKey + "=\"" + ids.substring(1) + "\"" + nonceString + ">" + styles + "</style>";
}

var createRenderStylesToString = function createRenderStylesToString(emotion, nonceString) {
  return function (html) {
    var _emotion$caches = emotion.caches,
        inserted = _emotion$caches.inserted,
        cssKey = _emotion$caches.key,
        registered = _emotion$caches.registered;
    var regex = new RegExp("<|" + cssKey + "-([a-zA-Z0-9-]+)", 'gm');
    var seen = {};
    var result = '';
    var globalIds = '';
    var globalStyles = '';

    for (var id in inserted) {
      if (inserted.hasOwnProperty(id)) {
        var style = inserted[id];
        var key = cssKey + "-" + id;

        if (style !== true && registered[key] === undefined) {
          globalStyles += style;
          globalIds += " " + id;
        }
      }
    }

    if (globalStyles !== '') {
      result = generateStyleTag(cssKey, globalIds, globalStyles, nonceString);
    }

    var ids = '';
    var styles = '';
    var lastInsertionPoint = 0;
    var match;

    while ((match = regex.exec(html)) !== null) {
      // $FlowFixMe
      if (match[0] === '<') {
        if (ids !== '') {
          result += generateStyleTag(cssKey, ids, styles, nonceString);
          ids = '';
          styles = '';
        } // $FlowFixMe


        result += html.substring(lastInsertionPoint, match.index); // $FlowFixMe

        lastInsertionPoint = match.index;
        continue;
      } // $FlowFixMe


      var _id = match[1];
      var _style = inserted[_id];

      if (_style === true || seen[_id]) {
        continue;
      }

      seen[_id] = true;
      styles += _style;
      ids += " " + _id;
    }

    result += html.substring(lastInsertionPoint);
    return result;
  };
};

var createRenderStylesToNodeStream = function createRenderStylesToNodeStream(emotion, nonceString) {
  return function () {
    var insed = {};
    var tokenStream = tokenize();
    var inlineStream = through(function write(thing) {
      var type = thing[0],
          data = thing[1];

      if (type === 'open') {
        var css = '';
        var ids = {};
        var match;
        var fragment = data.toString();
        var regex = new RegExp(emotion.caches.key + "-([a-zA-Z0-9-]+)", 'gm');

        while ((match = regex.exec(fragment)) !== null) {
          if (match !== null && insed[match[1]] === undefined) {
            ids[match[1]] = true;
          }
        }

        Object.keys(emotion.caches.inserted).forEach(function (id) {
          if (emotion.caches.inserted[id] !== true && insed[id] === undefined && (ids[id] === true || emotion.caches.registered[emotion.caches.key + "-" + id] === undefined && (ids[id] = true))) {
            insed[id] = true; // $FlowFixMe flow thinks emotion.caches.inserted[id] can be true even though it's checked earlier

            css += emotion.caches.inserted[id];
          }
        });

        if (css !== '') {
          this.queue("<style data-emotion-" + emotion.caches.key + "=\"" + Object.keys(ids).join(' ') + "\"" + nonceString + ">" + css + "</style>");
        }
      }

      this.queue(data);
    }, function end() {
      this.queue(null);
    });
    return pipe(tokenStream, inlineStream);
  };
};

function index (emotion) {
  var nonceString = emotion.caches.nonce !== undefined ? " nonce=\"" + emotion.caches.nonce + "\"" : '';
  return {
    extractCritical: createExtractCritical(emotion),
    renderStylesToString: createRenderStylesToString(emotion, nonceString),
    renderStylesToNodeStream: createRenderStylesToNodeStream(emotion, nonceString)
  };
}

module.exports = index;


/***/ }),

/***/ "./node_modules/duplexer2/index.js":
/*!*****************************************!*\
  !*** ./node_modules/duplexer2/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stream = __webpack_require__(/*! readable-stream */ "readable-stream");

function DuplexWrapper(options, writable, readable) {
  if (typeof readable === "undefined") {
    readable = writable;
    writable = options;
    options = null;
  }

  stream.Duplex.call(this, options);

  if (typeof readable.read !== "function") {
    readable = (new stream.Readable(options)).wrap(readable);
  }

  this._writable = writable;
  this._readable = readable;
  this._waiting = false;

  var self = this;

  writable.once("finish", function() {
    self.end();
  });

  this.once("finish", function() {
    writable.end();
  });

  readable.on("readable", function() {
    if (self._waiting) {
      self._waiting = false;
      self._read();
    }
  });

  readable.once("end", function() {
    self.push(null);
  });

  if (!options || typeof options.bubbleErrors === "undefined" || options.bubbleErrors) {
    writable.on("error", function(err) {
      self.emit("error", err);
    });

    readable.on("error", function(err) {
      self.emit("error", err);
    });
  }
}

DuplexWrapper.prototype = Object.create(stream.Duplex.prototype, {constructor: {value: DuplexWrapper}});

DuplexWrapper.prototype._write = function _write(input, encoding, done) {
  this._writable.write(input, encoding, done);
};

DuplexWrapper.prototype._read = function _read() {
  var buf;
  var reads = 0;
  while ((buf = this._readable.read()) !== null) {
    this.push(buf);
    reads++;
  }
  if (reads === 0) {
    this._waiting = true;
  }
};

module.exports = function duplex2(options, writable, readable) {
  return new DuplexWrapper(options, writable, readable);
};

module.exports.DuplexWrapper = DuplexWrapper;


/***/ }),

/***/ "./node_modules/emotion-server/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/emotion-server/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var createEmotionServer = _interopDefault(__webpack_require__(/*! create-emotion-server */ "./node_modules/create-emotion-server/dist/index.js"));
var emotion = __webpack_require__(/*! emotion */ "emotion");

var _createEmotionServer = createEmotionServer(emotion),
    extractCritical = _createEmotionServer.extractCritical,
    renderStylesToString = _createEmotionServer.renderStylesToString,
    renderStylesToNodeStream = _createEmotionServer.renderStylesToNodeStream;

exports.extractCritical = extractCritical;
exports.renderStylesToString = renderStylesToString;
exports.renderStylesToNodeStream = renderStylesToNodeStream;


/***/ }),

/***/ "./node_modules/html-tokenize/index.js":
/*!*********************************************!*\
  !*** ./node_modules/html-tokenize/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bufferFrom = __webpack_require__(/*! buffer-from */ "buffer-from")
var Transform = __webpack_require__(/*! readable-stream */ "readable-stream").Transform;
var inherits = __webpack_require__(/*! inherits */ "inherits");

inherits(Tokenize, Transform);
module.exports = Tokenize;

var codes = {
    lt: '<'.charCodeAt(0),
    gt: '>'.charCodeAt(0),
    slash: '/'.charCodeAt(0),
    dquote: '"'.charCodeAt(0),
    squote: "'".charCodeAt(0),
    equal: '='.charCodeAt(0)
};

var strings = {
    endScript: bufferFrom('</script'),
    endStyle: bufferFrom('</style'),
    endTitle: bufferFrom('</title'),
    comment: bufferFrom('<!--'),
    endComment: bufferFrom('-->'),
    cdata: bufferFrom('<![CDATA['),
    endCdata: bufferFrom(']]>')
};

var states = {
    'TagNameState': 1,
    'AttributeNameState': 2,
    'BeforeAttributeValueState': 3,
    'AttributeValueState':4
}

function Tokenize () {
    if (!(this instanceof Tokenize)) return new Tokenize;
    Transform.call(this);
    this._readableState.objectMode = true;
    this.state = 'text';
    this.tagState = null;
    this.quoteState = null;
    this.raw = null;
    this.buffers = [];
    this._last = [];
}

Tokenize.prototype._transform = function (buf, enc, next) {
    var i = 0;
    var offset = 0;
    
    if (this._prev) {
        buf = Buffer.concat([ this._prev, buf ]);
        i = this._prev.length - 1;
        offset = this._offset;
        this._prev = null;
        this._offset = 0;
    }
    
    for (; i < buf.length; i++) {
        var b = buf[i];
        this._last.push(b);
        if (this._last.length > 9) this._last.shift();
        // detect end of raw character mode (comment, script,..)
        if (this.raw) {
            var parts = this._testRaw(buf, offset, i);
            if (parts) {
                this.push([ 'text', parts[0] ]);
                
                if (this.raw === strings.endComment
                || this.raw === strings.endCdata) {
                    this.state = 'text';
                    this.buffers = [];
                    this.push([ 'close', parts[1] ]);
                }
                else {
                    this.state = 'open';
                    this.buffers = [ parts[1] ];
                }
                
                this.raw = null;
                offset = i + 1;
            }
        }
        // ask for more data if last byte is '<' 
        else if (this.state === 'text' && b === codes.lt
        && i === buf.length - 1) {
            this._prev = buf;
            this._offset = offset;
            return next();
        }
        // detect a tag opening
        else if (this.state === 'text' && b === codes.lt
        && !isWhiteSpace(buf[i+1])) {
            if (i > 0 && i - offset > 0) {
                this.buffers.push(buf.slice(offset, i));
            }
            offset = i;
            this.state = 'open';
            this.tagState = states.TagNameState;
            this._pushState('text');
        }
        else if (
            this.tagState === states.TagNameState &&
            isWhiteSpace(b)
        ) {
            this.tagState = states.AttributeNameState
        }
        else if (
            this.tagState === states.AttributeNameState &&
            b === codes.equal
        ) {
            this.tagState = states.BeforeAttributeValueState
        }
        else if (
            this.tagState === states.BeforeAttributeValueState &&
            isWhiteSpace(b)
        ) {}
        else if (
            this.tagState === states.BeforeAttributeValueState
            && b !== codes.gt
        ) {
            this.tagState = states.AttributeValueState;
            if (b === codes.dquote) {
                this.quoteState = 'double';
            } else if (b === codes.squote) {
                this.quoteState = 'single';
            } else {
                this.quoteState = null;
            }
        }
        else if (
            this.tagState === states.AttributeValueState &&
            !this.quoteState &&
            isWhiteSpace(b)
        ) {
            this.tagState = states.AttributeNameState;
        }
        else if (
            this.tagState === states.AttributeValueState &&
            this.quoteState === 'double' &&
            b === codes.dquote
        ) {
            this.quoteState = null;
            this.tagState = states.AttributeNameState;
        }
        else if (
            this.tagState === states.AttributeValueState &&
            this.quoteState === 'single' &&
            b === codes.squote
        ) {
            this.quoteState = null;
            this.tagState = states.AttributeNameState;
        }
        else if (this.state === 'open' && b === codes.gt && !this.quoteState) {
            this.buffers.push(buf.slice(offset, i + 1));
            offset = i + 1;
            this.state = 'text';
            this.tagState = null;
            if (this._getChar(1) === codes.slash) {
                this._pushState('close');
            }
            else {
                var tag = this._getTag();
                if (tag === 'script') this.raw = strings.endScript;
                if (tag === 'style') this.raw = strings.endStyle;
                if (tag === 'title') this.raw = strings.endTitle;
                this._pushState('open');
            }
        }
        else if (this.state === 'open' && compare(this._last, strings.comment)) {
            this.buffers.push(buf.slice(offset, i + 1));
            offset = i + 1;
            this.state = 'text';
            this.raw = strings.endComment;
            this._pushState('open');
        }
        else if (this.state === 'open' && compare(this._last, strings.cdata)) {
            this.buffers.push(buf.slice(offset, i + 1));
            offset = i + 1;
            this.state = 'text';
            this.raw = strings.endCdata;
            this._pushState('open');
        }
    }
    if (offset < buf.length) this.buffers.push(buf.slice(offset));
    next();
};

Tokenize.prototype._flush = function (next) {
    if (this.state === 'text') this._pushState('text');
    this.push(null);
    next();
};

Tokenize.prototype._pushState = function (ev) {
    if (this.buffers.length === 0) return;
    var buf = Buffer.concat(this.buffers);
    this.buffers = [];
    this.push([ ev, buf ]);
};

Tokenize.prototype._getChar = function (i) {
    var offset = 0;
    for (var j = 0; j < this.buffers.length; j++) {
        var buf = this.buffers[j];
        if (offset + buf.length > i) {
            return buf[i - offset];
        }
        offset += buf;
    }
};

Tokenize.prototype._getTag = function () {
    var offset = 0;
    var tag = '';
    for (var j = 0; j < this.buffers.length; j++) {
        var buf = this.buffers[j];
        for (var k = 0; k < buf.length; k++) {
            if (offset === 0 && k === 0) continue;
            var c = String.fromCharCode(buf[k]);
            if (/[^\w-!\[\]]/.test(c)) {
                return tag.toLowerCase();
            }
            else tag += c;
        }
        offset += buf.length;
    }
};

Tokenize.prototype._testRaw = function (buf, offset, index) {
    var raw = this.raw, last = this._last;
    if (!compare(last, raw)) return;
    
    this.buffers.push(buf.slice(offset, index + 1));
    var buf = Buffer.concat(this.buffers);
    var k = buf.length - raw.length;
    return [ buf.slice(0, k), buf.slice(k) ];
};

function compare (a, b) {
    if (a.length < b.length) return false;
    for (var i=a.length-1, j=b.length-1; i >= 0 && j >= 0; i--, j--) {
        if (lower(a[i]) !== lower(b[j])) return false;
    }
    return true;
}

function lower (n) {
    if (n >= 65 && n <= 90) return n + 32;
    return n;
}

function isWhiteSpace(b) {
  return b === 0x20 || b === 0x09 || b === 0x0A || b === 0x0C || b === 0x0D;
}


/***/ }),

/***/ "./node_modules/multipipe/index.js":
/*!*****************************************!*\
  !*** ./node_modules/multipipe/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var duplexer = __webpack_require__(/*! duplexer2 */ "./node_modules/duplexer2/index.js");
var PassThrough = __webpack_require__(/*! stream */ "stream").PassThrough;
var Readable = __webpack_require__(/*! stream */ "stream").PassThrough;
var objectAssign = __webpack_require__(/*! object-assign */ "object-assign");

/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Duplexer options.
 */

var defaultOpts = {
  bubbleErrors: false,
  objectMode: true
};

/**
 * Expose `pipe`.
 */

module.exports = pipe;

/**
 * Pipe.
 *
 * @param streams Array[Stream,...]
 * @param opts [Object]
 * @param cb [Function]
 * @return {Stream}
 * @api public
 */

function pipe(streams, opts, cb){
  if (!Array.isArray(streams)) {
    streams = slice.call(arguments);
    opts = null;
    cb = null;
  }

  var lastArg = streams[streams.length - 1];
  if ('function' == typeof lastArg) {
    cb = streams.splice(-1)[0];
    lastArg = streams[streams.length - 1];
  }
  if ('object' == typeof lastArg && typeof lastArg.pipe != 'function') {
    opts = streams.splice(-1)[0];
  }
  var first = streams[0];
  var last = streams[streams.length - 1];
  var ret;
  opts = objectAssign({}, defaultOpts, opts)

  if (!first) {
    if (cb) process.nextTick(cb);
    return new PassThrough(opts);
  }
  
  if (first.writable && last.readable) ret = duplexer(opts, first, last);
  else if (streams.length == 1) ret = new Readable(opts).wrap(streams[0]);
  else if (first.writable) ret = first;
  else if (last.readable) ret = last;
  else ret = new PassThrough(opts);
  
  streams.forEach(function(stream, i){
    var next = streams[i+1];
    if (next) stream.pipe(next);
    if (stream != ret) stream.on('error', ret.emit.bind(ret, 'error'));
  });

  if (cb) {
    var ended = false;
    ret.on('error', end);
    last.on('finish', function(){ end() });
    last.on('close', function(){ end() });
    function end(err){
      if (ended) return;
      ended = true;
      cb(err);
    }
  }

  return ret;
}



/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "babel-runtime/core-js/json/stringify");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/promise */ "babel-runtime/core-js/promise");
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var emotion_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! emotion-server */ "./node_modules/emotion-server/dist/index.js");
/* harmony import */ var emotion_server__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(emotion_server__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes */ "./src/routes.js");


var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/server.js';









var assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");

var server = express__WEBPACK_IMPORTED_MODULE_5___default()();
server.disable('x-powered-by').use(express__WEBPACK_IMPORTED_MODULE_5___default.a.static("/Users/Yogesh/Projects/Bitcharge/bit-web/public")).get('/*', function (req, res) {
  var context = {};

  var matches = _routes__WEBPACK_IMPORTED_MODULE_8__["default"].map(function (route, index) {
    var match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["matchPath"])(req.url, route.path, route);
    console.log(match);
    if (match) {
      var obj = {
        route: route,
        match: match,
        promise: route.component.getInitialData ? route.component.getInitialData({ match: match, req: req, res: res }) : babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(null)
      };
      return obj;
    }

    return null;
  });
  if (matches.length === 0) {
    res.status(404).send('Not found');
  }

  var promises = matches.map(function (match) {
    return match ? match.promise : null;
  });

  babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all(promises).then(function (data) {
    var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_6__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
      react_router_dom__WEBPACK_IMPORTED_MODULE_4__["StaticRouter"],
      { context: context, location: req.url, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      },
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], { routes: _routes__WEBPACK_IMPORTED_MODULE_8__["default"], initialData: data, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      })
    ));
    var htmlWithStyles = Object(emotion_server__WEBPACK_IMPORTED_MODULE_7__["renderStylesToString"])(markup);
    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send('<!doctype html>\n        <html lang="">\n        <head>\n            <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n            <meta charset="utf-8" />\n            <link rel="manifest" href="/manifest.json">\n            <link rel="shortcut icon" href="/favicon.png">\n            <link href="https://unpkg.com/ionicons@4.0.0/dist/css/ionicons.min.css"rel="stylesheet"/>\n            <title>Bitcharge</title>\n            <meta name="viewport" content="width=device-width, initial-scale=1">\n            ' + (assets.client.css ? '<link rel="stylesheet" href="' + assets.client.css + '">' : '') + '\n            ' + ( false ? undefined : '<script src="' + assets.client.js + '" defer crossorigin></script>') + '\n        </head>\n        <body>\n            <div id="root">' + htmlWithStyles + '</div>\n            <script>window._INITIAL_DATA_ = ' + babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data) + ';</script>\n        </body>\n    </html>');
    }
  }).catch(function (error) {
    console.log(error);
    res.status(500).json({ error: error.message, stack: error.stack });
  });
});

/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ }),

/***/ "buffer-from":
/*!******************************!*\
  !*** external "buffer-from" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("buffer-from");

/***/ }),

/***/ "inherits":
/*!***************************!*\
  !*** external "inherits" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inherits");

/***/ }),

/***/ "object-assign":
/*!********************************!*\
  !*** external "object-assign" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),

/***/ "readable-stream":
/*!**********************************!*\
  !*** external "readable-stream" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("readable-stream");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "through":
/*!**************************!*\
  !*** external "through" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("through");

/***/ })

};
//# sourceMappingURL=main.298ea42de366943aca85.hot-update.js.map