exports.id = "main";
exports.modules = {

/***/ "./src/components/Button/index.js":
/*!****************************************!*\
  !*** ./src/components/Button/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles */ "./src/components/Button/styles.js");







var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/components/Button/index.js';





var Button = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Button, _Component);

  function Button(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Button);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Button.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(Button)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Button, [{
    key: 'onClick',
    value: function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }
      if (this.props.onClick) {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          primary = _props.primary,
          secondary = _props.secondary,
          active = _props.active,
          error = _props.error,
          link = _props.link,
          block = _props.block,
          style = _props.style,
          outline = _props.outline,
          disabled = _props.disabled,
          Tag = _props.tag,
          attributes = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_props, ['primary', 'secondary', 'active', 'error', 'link', 'block', 'style', 'outline', 'disabled', 'tag']);

      var buttonStyle = '' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].button;

      if (primary) {
        buttonStyle = buttonStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].primary;

        if (outline) {
          buttonStyle = buttonStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].primaryOutline;
        }

        if (active) {
          buttonStyle = buttonStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].primaryActive;
        }
      }

      if (secondary) {
        buttonStyle = buttonStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].secondary;

        if (outline) {
          buttonStyle = buttonStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].secondaryOutline;
        }

        if (active) {
          buttonStyle = buttonStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].secondaryActive;
        }
      }

      if (error) {
        buttonStyle = buttonStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].error;

        if (outline) {
          buttonStyle = buttonStyle + ' ' + style.errorOutline;
        }

        if (active) {
          buttonStyle = buttonStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].errorActive;
        }
      }

      if (disabled) {
        buttonStyle = _styles__WEBPACK_IMPORTED_MODULE_9__["default"].button + ' ' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].disabled;
      }

      if (link) {
        buttonStyle = _styles__WEBPACK_IMPORTED_MODULE_9__["default"].button + ' ' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].link;

        if (disabled) {
          buttonStyle = _styles__WEBPACK_IMPORTED_MODULE_9__["default"].button + ' ' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].disabledLink;
        }

        if (error) {
          buttonStyle = buttonStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].errorLink;
        }
      }

      if (attributes.href && Tag === 'button') {
        Tag = 'a';
      }

      if (block) {
        buttonStyle = buttonStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].block;
      }

      if (style) {
        buttonStyle = buttonStyle + ' ' + style;
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Tag, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        type: Tag === 'button' && attributes.onClick ? 'button' : undefined
      }, attributes, {
        className: buttonStyle,
        onClick: this.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }));
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Button.propTypes = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  block: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  primary: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  secondary: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  error: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  link: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  outline: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string]),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node,
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any
};

Button.defaultProps = {
  tag: 'button',
  primary: true,
  disabled: false
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/Button/styles.js":
/*!*****************************************!*\
  !*** ./src/components/Button/styles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  border-color: ', ';\n  color: ', ';\n'], ['\n  background-color: ', ';\n  border-color: ', ';\n  color: ', ';\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\nbackground-color: transparent;\ncolor: ', ';\n\n&:hover {\n  color: ', ';\n}\n'], ['\nbackground-color: transparent;\ncolor: ', ';\n\n&:hover {\n  color: ', ';\n}\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  color: ', ';\n\n  &:hover: {\n    color: ', ';\n  }\n'], ['\n  color: ', ';\n\n  &:hover: {\n    color: ', ';\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  color: ', ';\n  cursor: not-allowed;\n'], ['\n  color: ', ';\n  cursor: not-allowed;\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  display: inline-block;\n  font-weight: 600;\n  font-family: ', ';\n  text-decoration: none;\n  text-align: center;\n  white-space: nowrap;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: .7rem 2rem;\n  font-size: 1.2rem;\n  line-height: 1.5;\n  border-radius: .25em;\n  cursor: pointer;\n  text-transform: none;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\n  &:hover {\n    text-decoration: none;\n  }\n\n  &:not(:disabled):not(', ') {\n    cursor: pointer;\n  }\n'], ['\n  display: inline-block;\n  font-weight: 600;\n  font-family: ', ';\n  text-decoration: none;\n  text-align: center;\n  white-space: nowrap;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: .7rem 2rem;\n  font-size: 1.2rem;\n  line-height: 1.5;\n  border-radius: .25em;\n  cursor: pointer;\n  text-transform: none;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\n  &:hover {\n    text-decoration: none;\n  }\n\n  &:not(:disabled):not(', ') {\n    cursor: pointer;\n  }\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  display: block;\n  width: 100%;\n'], ['\n  display: block;\n  width: 100%;\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  color: ', ';\n  border-color: ', ';\n\n  &:hover {\n    background-color: ', ';\n    border-color: ', ';\n  }\n'], ['\n  background-color: ', ';\n  color: ', ';\n  border-color: ', ';\n\n  &:hover {\n    background-color: ', ';\n    border-color: ', ';\n  }\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  color: ', ';\n  border-color: ', ';\n\n  &:hover {\n    background-color: ', ';\n    border-color: ', '\n  }\n'], ['\n  background-color: ', ';\n  color: ', ';\n  border-color: ', ';\n\n  &:hover {\n    background-color: ', ';\n    border-color: ', '\n  }\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n    border: 2px solid ', ';\n    color: ', ';\n    background-color: transparent;\n\n    &:hover {\n      color: ', ';\n      background-color: ', ';\n      border-color: ', ';\n    }\n'], ['\n    border: 2px solid ', ';\n    color: ', ';\n    background-color: transparent;\n\n    &:hover {\n      color: ', ';\n      background-color: ', ';\n      border-color: ', ';\n    }\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  border: 2px solid ', ';\n  color: ', ';\n  background-color: transparent;\n'], ['\n  border: 2px solid ', ';\n  color: ', ';\n  background-color: transparent;\n']),
    _templateObject11 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  border-color: 2px solid ', ';\n  color: ', ';\n  background-color: transparent;\n'], ['\n  border-color: 2px solid ', ';\n  color: ', ';\n  background-color: transparent;\n']),
    _templateObject12 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  border-color: ', ';\n'], ['\n  background-color: ', ';\n  border-color: ', ';\n']);






var disabled = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].disabled, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white);

var link = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.4, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText));

var primaryLink = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary));

var secondaryLink = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary));

var errorLink = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].errorText, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].errorText));

var disabledLink = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].disabled);

var button = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5, _styles__WEBPACK_IMPORTED_MODULE_2__["typography"].primaryFont, disabled);
var block = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6);

var primary = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary), Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary));

var secondary = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary), Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary));

var error = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].errorText, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].errorText), Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].errorText), Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].errorText));

var primaryOutline = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary);

var secondaryOutline = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary);

var errorOutline = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject11, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].errorText, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary);

var primaryActive = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary), Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary));

var secondaryActive = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary), Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary));

var errorActive = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].errorText), Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].errorText));

var styles = {
  button: button,
  primary: primary,
  secondary: secondary,
  block: block,
  error: error,
  disabled: disabled,
  link: link,
  primaryLink: primaryLink,
  secondaryLink: secondaryLink,
  errorLink: errorLink,
  disabledLink: disabledLink,
  primaryOutline: primaryOutline,
  secondaryOutline: secondaryOutline,
  errorOutline: errorOutline,
  primaryActive: primaryActive,
  secondaryActive: secondaryActive,
  errorActive: errorActive
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-media */ "react-media");
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_media__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Container */ "./src/components/Container/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ "./src/components/Button/index.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Text */ "./src/components/Text/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./src/components/Footer/styles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");
var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/components/Footer/index.js';











var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _Container__WEBPACK_IMPORTED_MODULE_3__["default"],
    { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].mainContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _Container__WEBPACK_IMPORTED_MODULE_3__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].logoContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _Text__WEBPACK_IMPORTED_MODULE_5__["default"],
        { tag: 'h6', style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].logoTextStyle, unstyled: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        'Bitcharge \xA9 2018'
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_media__WEBPACK_IMPORTED_MODULE_2___default.a,
        { query: '(max-width: ' + _styles__WEBPACK_IMPORTED_MODULE_7__["breakpoints"].tablet + ')', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        function (matches) {
          return matches ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _Container__WEBPACK_IMPORTED_MODULE_3__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].rightNavContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              }
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Button__WEBPACK_IMPORTED_MODULE_4__["default"],
              { href: 'https://twitter.com/bitcharge_co', target: '_blank', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].logoutStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 21
                }
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'icon ion-logo-twitter', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 21
                }
              })
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Button__WEBPACK_IMPORTED_MODULE_4__["default"],
              { href: '/profile', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].logoutStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                }
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'icon ion-logo-facebook', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                }
              })
            )
          ) : null;
        }
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _Container__WEBPACK_IMPORTED_MODULE_3__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].centerNavContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _Button__WEBPACK_IMPORTED_MODULE_4__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], to: '/about', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        },
        'About'
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _Button__WEBPACK_IMPORTED_MODULE_4__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], to: '/terms', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        },
        'Terms'
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _Button__WEBPACK_IMPORTED_MODULE_4__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], to: '/privacy', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        },
        'Privacy'
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      react_media__WEBPACK_IMPORTED_MODULE_2___default.a,
      { query: '(max-width: ' + _styles__WEBPACK_IMPORTED_MODULE_7__["breakpoints"].tablet + ')', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      },
      function (matches) {
        return !matches ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _Container__WEBPACK_IMPORTED_MODULE_3__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].rightNavContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _Button__WEBPACK_IMPORTED_MODULE_4__["default"],
            { href: 'https://twitter.com/bitcharge_co', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].logoutStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              }
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'icon ion-logo-twitter', __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              }
            })
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _Button__WEBPACK_IMPORTED_MODULE_4__["default"],
            { href: '/profile', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].logoutStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'icon ion-logo-facebook', __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            })
          )
        ) : null;
      }
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Footer/styles.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/styles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  margin: 0 auto;\n  min-height: 4.5em;\n  color: ', ';\n  padding: 1em 3em;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n\n  @media (max-width: ', ') {\n    padding-left: 1em;\n    padding-right: 1em;\n    flex-direction: column;\n    padding-top: 1em;\n  }\n'], ['\n  background-color: ', ';\n  margin: 0 auto;\n  min-height: 4.5em;\n  color: ', ';\n  padding: 1em 3em;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n\n  @media (max-width: ', ') {\n    padding-left: 1em;\n    padding-right: 1em;\n    flex-direction: column;\n    padding-top: 1em;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    border-bottom: 1px solid ', ';\n    padding-bottom: 1em;\n  }\n'], ['\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    border-bottom: 1px solid ', ';\n    padding-bottom: 1em;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: .5em 0;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n\n  @media (min-width: ', ' and max-width: ', ') {\n    width: 60%;\n  }\n'], ['\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: .5em 0;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n\n  @media (min-width: ', ' and max-width: ', ') {\n    width: 60%;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n'], ['\n  flex-direction: row;\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n  font-size: 1em;\n  border-radius: 0;\n\n  @media (max-width: ', ') {\n    padding-left: 1em;\n    padding-right: 1em;\n    font-size: 1em;\n  }\n'], ['\n  font-weight: 500;\n  font-size: 1em;\n  border-radius: 0;\n\n  @media (max-width: ', ') {\n    padding-left: 1em;\n    padding-right: 1em;\n    font-size: 1em;\n  }\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-size: 1.8em;\n  padding-top: 0;\n  padding-bottom: 0;\n  color: ', ';\n\n  @media (max-width: ', ') {\n    font-weight: 600;\n    padding-top: 0;\n    padding-bottom: 0;\n    font-size: 1.4em;\n    margin-right: -.7em;\n  }\n'], ['\n  font-size: 1.8em;\n  padding-top: 0;\n  padding-bottom: 0;\n  color: ', ';\n\n  @media (max-width: ', ') {\n    font-weight: 600;\n    padding-top: 0;\n    padding-bottom: 0;\n    font-size: 1.4em;\n    margin-right: -.7em;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n'], ['\n  font-weight: 600;\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 150px;\n  height: auto;\n\n  @media (max-width: ', ') {\n    width: 120px;\n    height: auto;\n  }\n'], ['\n  width: 150px;\n  height: auto;\n\n  @media (max-width: ', ') {\n    width: 120px;\n    height: auto;\n  }\n']);





var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var logoContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray);

var centerNavContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var rightNavContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4);

var linkStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var logoutStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText), _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var logoTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7);

var logoImageStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var styles = {
  mainContainer: mainContainer,
  logoContainer: logoContainer,
  centerNavContainer: centerNavContainer,
  logoTextStyle: logoTextStyle,
  logoImageStyle: logoImageStyle,
  linkStyle: linkStyle,
  logoutStyle: logoutStyle,
  rightNavContainer: rightNavContainer
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/components/Input/index.js":
/*!***************************************!*\
  !*** ./src/components/Input/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_select_lib_Async__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-select/lib/Async */ "react-select/lib/Async");
/* harmony import */ var react_select_lib_Async__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_select_lib_Async__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Container */ "./src/components/Container/index.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Text */ "./src/components/Text/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles */ "./src/components/Input/styles.js");







var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/components/Input/index.js';










var Input = function (_PureComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Input, _PureComponent);

  function Input(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Input);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Input.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(Input)).call(this, props));

    _this.handleSelectChange = function (value) {
      this.props.onChange(this.props.name, value);
    };

    _this.handleSelectBlur = function () {
      this.props.onBlur(this.props.name, true);
    };

    _this.handleSelectChange = _this.handleSelectChange.bind(_this);
    _this.handleSelectBlur = _this.handleSelectBlur.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          name = _props.name,
          noErrorText = _props.noErrorText,
          type = _props.type,
          error = _props.error,
          placeholder = _props.placeholder,
          inputStyle = _props.inputStyle,
          inputContainerStyle = _props.inputContainerStyle,
          props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_props, ['label', 'name', 'noErrorText', 'type', 'error', 'placeholder', 'inputStyle', 'inputContainerStyle']);

      var innerInputStyle = Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].inputBaseStyle);
      var mainContainerStyle = Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].mainContainer);

      var innerInputContainerStyle = Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].inputContainer);

      if (inputStyle) {
        innerInputContainerStyle = innerInputContainerStyle + ' ' + inputStyle;
      }

      if (inputContainerStyle) {
        mainContainerStyle = Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(mainContainerStyle, inputContainerStyle);
      }

      var Tag = 'input';

      if (type === 'select') {
        Tag = react_select__WEBPACK_IMPORTED_MODULE_8___default.a;
      }
      if (type === 'async-select') {
        Tag = react_select_lib_Async__WEBPACK_IMPORTED_MODULE_9___default.a;
      }

      if (type === 'textarea') {
        Tag = 'textarea';
        innerInputStyle = Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(innerInputStyle, _styles__WEBPACK_IMPORTED_MODULE_14__["default"].inputTextAreaStyle);
      }

      if (error) {
        innerInputStyle = Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(innerInputStyle, _styles__WEBPACK_IMPORTED_MODULE_14__["default"].inputErrorStyle);
      }
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _Container__WEBPACK_IMPORTED_MODULE_12__["default"],
        { style: mainContainerStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: innerInputContainerStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          },
          label && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _Container__WEBPACK_IMPORTED_MODULE_12__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].inputLabelContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 63
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _Text__WEBPACK_IMPORTED_MODULE_13__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].labelText, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 64
                }
              },
              label
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _Container__WEBPACK_IMPORTED_MODULE_12__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].inputFieldContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              }
            },
            type === 'select' || type === 'async-select' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Tag, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ name: name, placeholder: placeholder || label || null }, props, { onChange: this.handleSelectChange, onBlur: this.handleSelectBlur, __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              }
            })) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Tag, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ className: innerInputStyle, name: name, placeholder: placeholder || label || null, type: type }, props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              }
            })),
            !noErrorText && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _Text__WEBPACK_IMPORTED_MODULE_13__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].errorText, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 73
                }
              },
              error || react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                'span',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                  }
                },
                '\xA0'
              )
            )
          )
        )
      );
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

Input.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  error: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  inputStyle: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any,
  noErrorText: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  inputContainerStyle: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any
};

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./src/components/Input/styles.js":
/*!****************************************!*\
  !*** ./src/components/Input/styles.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  align-items: flex-start;\n  font-family: ', ';\n  width: 100%;\n'], ['\n  align-items: flex-start;\n  font-family: ', ';\n  width: 100%;\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  margin: .5em;\n  width: 100%;\n  justify-content: flex-start;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n'], ['\n  flex-direction: row;\n  margin: .5em;\n  width: 100%;\n  justify-content: flex-start;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  min-height: 5em;\n'], ['\n  min-height: 5em;\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 2;\n  margin-right: 1em;\n  align-items: flex-start;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n'], ['\n  flex: 2;\n  margin-right: 1em;\n  align-items: flex-start;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 5;\n  align-items: flex-start;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n'], ['\n  flex: 5;\n  align-items: flex-start;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  box-sizing: border-box;\n  width: calc(100% - .8em);\n  border: 0.5px solid transparent;\n  border-radius: .25rem;\n  padding: .8em;\n  font-family: ', ';\n  font-size: 1.2rem;\n  background-color: #F5F8F9;\n\n  &:focus {\n    border: 0.5px solid ', ';\n  }\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n'], ['\n  box-sizing: border-box;\n  width: calc(100% - .8em);\n  border: 0.5px solid transparent;\n  border-radius: .25rem;\n  padding: .8em;\n  font-family: ', ';\n  font-size: 1.2rem;\n  background-color: #F5F8F9;\n\n  &:focus {\n    border: 0.5px solid ', ';\n  }\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  border: 0.5px solid ', ';\n  transition: all 0.15s ease-out;\n'], ['\n  border: 0.5px solid ', ';\n  transition: all 0.15s ease-out;\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-size: 1rem;\n  font-weight: 400;\n  margin-bottom: 1.6rem;\n'], ['\n  font-size: 1rem;\n  font-weight: 400;\n  margin-bottom: 1.6rem;\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  color: ', ';\n  font-size: .9rem;\n  margin-top: 0.4em;\n  font-family: inherit;\n  transition: all 0.15s ease-out;\n\n  @media (max-width: ', ') {\n    margin-top: .2em;\n  }\n'], ['\n  color: ', ';\n  font-size: .9rem;\n  margin-top: 0.4em;\n  font-family: inherit;\n  transition: all 0.15s ease-out;\n\n  @media (max-width: ', ') {\n    margin-top: .2em;\n  }\n']);




var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["typography"].primaryFont);

var inputContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var inputTextAreaStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3);

var inputLabelContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var inputFieldContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var inputBaseStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["typography"].primaryFont, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var inputErrorStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].errorText);

var labelText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8);

var errorText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].errorText, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var styles = {
  mainContainer: mainContainer,
  inputContainer: inputContainer,
  inputLabelContainer: inputLabelContainer,
  inputFieldContainer: inputFieldContainer,
  inputBaseStyle: inputBaseStyle,
  inputTextAreaStyle: inputTextAreaStyle,
  inputErrorStyle: inputErrorStyle,
  labelText: labelText,
  errorText: errorText
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/components/Modal/index.js":
/*!***************************************!*\
  !*** ./src/components/Modal/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/components/Modal/styles.js");
var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/components/Modal/index.js';







var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
      label = _ref.label,
      handleClose = _ref.handleClose,
      style = _ref.style,
      children = _ref.children;

  var modalStyle = style ? Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].modalContainer, style) : Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].modalContainer);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    react_modal__WEBPACK_IMPORTED_MODULE_2___default.a,
    {
      isOpen: isOpen,
      contentLabel: label,
      onRequestClose: handleClose,
      className: modalStyle,
      overlayClassName: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].overlayContainer),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    },
    children
  );
};

Modal.propTypes = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  handleClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/components/Modal/styles.js":
/*!****************************************!*\
  !*** ./src/components/Modal/styles.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  display: flex;\n  flex-direction: column;\n  padding: 2em;\n  margin-top: 10%;\n  background-color: ', ';\n  border-radius: 4px;\n  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.25);\n  transition: all 300ms ease-out;\n\n  @media (max-width: ', ') {\n    margin-top: 0;\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  padding: 2em;\n  margin-top: 10%;\n  background-color: ', ';\n  border-radius: 4px;\n  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.25);\n  transition: all 300ms ease-out;\n\n  @media (max-width: ', ') {\n    margin-top: 0;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  position: fixed;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 1em;\n  background-color: rgba(0, 0, 0, 0.5);\n\n  @media (max-width: ', ') {\n    align-items: center;\n  }\n\n'], ['\n  position: fixed;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 1em;\n  background-color: rgba(0, 0, 0, 0.5);\n\n  @media (max-width: ', ') {\n    align-items: center;\n  }\n\n']);




var modalContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var overlayContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var styles = {
  modalContainer: modalContainer,
  overlayContainer: overlayContainer
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/components/Navbar/index.js":
/*!****************************************!*\
  !*** ./src/components/Navbar/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Container */ "./src/components/Container/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ "./src/components/Button/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./src/components/Navbar/styles.js");
var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/components/Navbar/index.js';









var Navbar = function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _Container__WEBPACK_IMPORTED_MODULE_3__["default"],
    { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_5__["default"].mainContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _Container__WEBPACK_IMPORTED_MODULE_3__["default"],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'a',
        { href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { alt: 'bitcharge-logo', className: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_5__["default"].logoImageStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1532990484/icons/bitcharge-logo-secondary.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        })
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _Container__WEBPACK_IMPORTED_MODULE_3__["default"],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _Button__WEBPACK_IMPORTED_MODULE_4__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], link: true, to: '/profile', style: _styles__WEBPACK_IMPORTED_MODULE_5__["default"].profileTextStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        'My Bitcharge'
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/Navbar/styles.js":
/*!*****************************************!*\
  !*** ./src/components/Navbar/styles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  height: 4.5em;\n  padding-left: 3em;\n  padding-right: 3em;\n  color: ', ';\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n\n  @media (max-width: ', ') {\n    padding-left: 1em;\n    padding-right: 1em;\n  }\n'], ['\n  background-color: ', ';\n  height: 4.5em;\n  padding-left: 3em;\n  padding-right: 3em;\n  color: ', ';\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n\n  @media (max-width: ', ') {\n    padding-left: 1em;\n    padding-right: 1em;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n'], ['\n  font-weight: 600;\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 400;\n  font-size: 1em;\n  padding-right: 1em;\n\n  @media (max-width: ', ') {\n    padding-right: .1em;\n    font-size: 0.9em;\n  }\n'], ['\n  font-weight: 400;\n  font-size: 1em;\n  padding-right: 1em;\n\n  @media (max-width: ', ') {\n    padding-right: .1em;\n    font-size: 0.9em;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 150px;\n  height: auto;\n\n  @media (max-width: ', ') {\n    width: 120px;\n    height: auto;\n  }\n'], ['\n  width: 150px;\n  height: auto;\n\n  @media (max-width: ', ') {\n    width: 120px;\n    height: auto;\n  }\n']);




var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var logoTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2);

var profileTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var logoImageStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var styles = {
  mainContainer: mainContainer,
  logoTextStyle: logoTextStyle,
  logoImageStyle: logoImageStyle,
  profileTextStyle: profileTextStyle
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/components/Scroll/index.js":
/*!****************************************!*\
  !*** ./src/components/Scroll/index.js ***!
  \****************************************/
/*! exports provided: ScrollToTopOnMount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToTopOnMount", function() { return ScrollToTopOnMount; });
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var ScrollToTopOnMount = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ScrollToTopOnMount, _Component);

  function ScrollToTopOnMount() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ScrollToTopOnMount);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (ScrollToTopOnMount.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(ScrollToTopOnMount)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ScrollToTopOnMount, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return ScrollToTopOnMount;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/components/Spinner/index.js":
/*!*****************************************!*\
  !*** ./src/components/Spinner/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/components/Spinner/index.js';

var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n    0% {\n    transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  '], ['\n    0% {\n    transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  ']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n    display: inline-block;\n    position: relative;\n    width: ', ';\n    height: ', ';\n  '], ['\n    display: inline-block;\n    position: relative;\n    width: ', ';\n    height: ', ';\n  ']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: ', ';\n    height: ', ';\n    margin: ', ';;\n    border: ', ' solid ', ';\n    border-radius: 50%;\n    animation: ', ' 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: ', ' transparent transparent transparent;\n  '], ['\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: ', ';\n    height: ', ';\n    margin: ', ';;\n    border: ', ' solid ', ';\n    border-radius: 50%;\n    animation: ', ' 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: ', ' transparent transparent transparent;\n  ']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n    animation-delay: -0.45s;\n  '], ['\n    animation-delay: -0.45s;\n  ']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n    animation-delay: -0.3s;\n  '], ['\n    animation-delay: -0.3s;\n  ']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n    animation-delay: -0.15s;\n  '], ['\n    animation-delay: -0.15s;\n  ']);





var Spinner = function Spinner(_ref) {
  var width = _ref.width,
      size = _ref.size,
      color = _ref.color;

  var rotateDelay = Object(emotion__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_templateObject);

  var ring = Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2, size + 'px', size + 'px');

  var innerRing1 = Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3, size + 'px', size + 'px', width + 'px', width + 'px', color, rotateDelay, color);

  var innerRing2 = Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject4);

  var innerRing3 = Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject5);

  var innerRing4 = Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject6);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    'div',
    { className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(ring), __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      }
    },
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', { className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(innerRing1), __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      }
    }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', { className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(innerRing2), __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      }
    }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', { className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(innerRing3), __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      }
    }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', { className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(innerRing4), __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      }
    })
  );
};

Spinner.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

Spinner.defaultProps = {
  width: 6,
  size: 64,
  color: '#fff'
};

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./src/components/Text/index.js":
/*!**************************************!*\
  !*** ./src/components/Text/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/components/Text/styles.js");

var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/components/Text/index.js';





var Text = function Text(_ref) {
  var tag = _ref.tag,
      children = _ref.children,
      unstyled = _ref.unstyled,
      style = _ref.style,
      props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ['tag', 'children', 'unstyled', 'style']);

  var textStyle = '' + _styles__WEBPACK_IMPORTED_MODULE_3__["default"].base;
  var Tag = 'p';

  if (tag) {
    textStyle = textStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_3__["default"][tag];
    Tag = tag;
  }

  if (unstyled) {
    textStyle = textStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_3__["default"].unstyledText;
  }

  if (style) {
    textStyle = textStyle + ' ' + style;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    Tag,
    { className: textStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    },
    children
  );
};

Text.propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired,
  unstyled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./src/components/Text/styles.js":
/*!***************************************!*\
  !*** ./src/components/Text/styles.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-bottom: .5rem;\n  font-weight: 400;\n  line-height: 1.2;\n  font-family: inherit;\n  font-size: 1rem;\n'], ['\n  margin-bottom: .5rem;\n  font-weight: 400;\n  line-height: 1.2;\n  font-family: inherit;\n  font-size: 1rem;\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-size: ', ';\n'], ['\n  font-size: ', ';\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-size: ', '\n'], ['\n  font-size: ', '\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-bottom: 0;\n'], ['\n  margin-bottom: 0;\n']);




var base = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject);
var h1 = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["typography"].h1);

var h2 = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["typography"].h2);

var h3 = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["typography"].h3);

var h4 = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["typography"].h4);

var h5 = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["typography"].h5);

var h6 = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["typography"].h6);

var unstyledText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4);

var styles = {
  base: base,
  h1: h1,
  h2: h2,
  h3: h3,
  h4: h4,
  h5: h5,
  h6: h6,
  unstyledText: unstyledText
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/containers/DashboardNavbar/index.js":
/*!*************************************************!*\
  !*** ./src/containers/DashboardNavbar/index.js ***!
  \*************************************************/
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
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-media */ "react-media");
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_media__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/auth */ "./src/store/actions/auth.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles */ "./src/containers/DashboardNavbar/styles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");
var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/containers/DashboardNavbar/index.js';














var Navbar = function Navbar(_ref) {
  var match = _ref.match,
      logoutAction = _ref.logoutAction;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_6__["default"],
    { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].mainContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_6__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].logoContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'a',
        { href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { alt: 'bitcharge-logo', className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].logoImageStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1532990484/icons/bitcharge-logo-secondary.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        })
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_media__WEBPACK_IMPORTED_MODULE_5___default.a,
        { query: '(max-width: ' + _styles__WEBPACK_IMPORTED_MODULE_10__["breakpoints"].tablet + ')', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        },
        function (matches) {
          return matches ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_6__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].rightNavContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
              { onClick: logoutAction, link: true, style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].logoutStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                }
              },
              'Logout'
            )
          ) : null;
        }
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_6__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].centerNavContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
        {
          tag: react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
          to: '/profile',
          link: true,
          style: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].linkStyle, match.isExact ? _styles__WEBPACK_IMPORTED_MODULE_9__["default"].activeLinkStyle : null),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        },
        'Profile'
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_4__["NavLink"], to: '/profile/addresses', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].linkStyle, activeClassName: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].activeLinkStyle), __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        },
        'Addresses'
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_4__["NavLink"], to: '/profile/settings', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].linkStyle, activeClassName: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].activeLinkStyle), __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        },
        'Settings'
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      react_media__WEBPACK_IMPORTED_MODULE_5___default.a,
      { query: '(max-width: ' + _styles__WEBPACK_IMPORTED_MODULE_10__["breakpoints"].tablet + ')', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      },
      function (matches) {
        return !matches ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_6__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].rightNavContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
            { onClick: logoutAction, link: true, style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].logoutStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              }
            },
            'Logout'
          )
        ) : null;
      }
    )
  );
};

Navbar.propTypes = {
  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  logoutAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, { logoutAction: _store_actions_auth__WEBPACK_IMPORTED_MODULE_8__["logout"] })(Navbar)));

/***/ }),

/***/ "./src/containers/DashboardNavbar/styles.js":
/*!**************************************************!*\
  !*** ./src/containers/DashboardNavbar/styles.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  margin: 0 auto;\n  min-height: 4.5em;\n  color: ', ';\n  padding: 0 3em;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    padding-left: 1em;\n    padding-right: 1em;\n    flex-direction: column;\n    padding-top: 1em;\n  }\n'], ['\n  background-color: ', ';\n  margin: 0 auto;\n  min-height: 4.5em;\n  color: ', ';\n  padding: 0 3em;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    padding-left: 1em;\n    padding-right: 1em;\n    flex-direction: column;\n    padding-top: 1em;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    border-bottom: 1px solid ', ';\n    padding-bottom: 1em;\n  }\n'], ['\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    border-bottom: 1px solid ', ';\n    padding-bottom: 1em;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  height: 4.5em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    height: 4.5em;\n  }\n\n  @media (min-width: ', ' and max-width: ', ') {\n    width: 60%;\n    height: 4.5em;\n  }\n'], ['\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  height: 4.5em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    height: 4.5em;\n  }\n\n  @media (min-width: ', ' and max-width: ', ') {\n    width: 60%;\n    height: 4.5em;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 400;\n  padding-top: 1.05em;\n  padding-bottom: 1.05em;\n  border-radius: 0;\n\n  @media (max-width: ', ') {\n    padding-left: 1em;\n    padding-right: 1em;\n    padding-top: 1.3em;\n    padding-bottom: 1.3em;\n    font-size: 1em;\n  }\n'], ['\n  font-weight: 400;\n  padding-top: 1.05em;\n  padding-bottom: 1.05em;\n  border-radius: 0;\n\n  @media (max-width: ', ') {\n    padding-left: 1em;\n    padding-right: 1em;\n    padding-top: 1.3em;\n    padding-bottom: 1.3em;\n    font-size: 1em;\n  }\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 400;\n  font-size: 1em;\n\n  @media (max-width: ', ') {\n    font-weight: 600;\n    font-size: 1em;\n    padding-right: 0.5em;\n  }\n'], ['\n  font-weight: 400;\n  font-size: 1em;\n\n  @media (max-width: ', ') {\n    font-weight: 600;\n    font-size: 1em;\n    padding-right: 0.5em;\n  }\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  border-bottom: 4px solid ', ';\n'], ['\n  border-bottom: 4px solid ', ';\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n'], ['\n  font-weight: 600;\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 150px;\n  height: auto;\n\n  @media (max-width: ', ') {\n    width: 120px;\n    height: auto;\n  }\n'], ['\n  width: 150px;\n  height: auto;\n\n  @media (max-width: ', ') {\n    width: 120px;\n    height: auto;\n  }\n']);




var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var logoContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray);

var centerNavContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var linkStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var logoutStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var activeLinkStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText);

var logoTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7);

var logoImageStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var styles = {
  mainContainer: mainContainer,
  logoContainer: logoContainer,
  centerNavContainer: centerNavContainer,
  logoTextStyle: logoTextStyle,
  logoImageStyle: logoImageStyle,
  linkStyle: linkStyle,
  logoutStyle: logoutStyle,
  activeLinkStyle: activeLinkStyle
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _screens_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/Home */ "./src/screens/Home/index.js");
/* harmony import */ var _screens_Privacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/Privacy */ "./src/screens/Privacy/index.js");
/* harmony import */ var _screens_Terms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/Terms */ "./src/screens/Terms/index.js");
/* harmony import */ var _screens_Signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/Signup */ "./src/screens/Signup/index.js");
/* harmony import */ var _screens_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/Login */ "./src/screens/Login/index.js");
/* harmony import */ var _screens_ForgotPassword__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screens/ForgotPassword */ "./src/screens/ForgotPassword/index.js");
/* harmony import */ var _screens_Profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screens/Profile */ "./src/screens/Profile/index.js");
/* harmony import */ var _screens_Dashboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./screens/Dashboard */ "./src/screens/Dashboard/index.js");
/* harmony import */ var _screens_AddAddress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./screens/AddAddress */ "./src/screens/AddAddress/index.js");
/* harmony import */ var _screens_SignupConfirmation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./screens/SignupConfirmation */ "./src/screens/SignupConfirmation/index.js");












var routes = [{
  path: '/signup',
  component: _screens_Signup__WEBPACK_IMPORTED_MODULE_3__["default"],
  name: 'Signup',
  exact: true
}, {
  path: '/login',
  component: _screens_Login__WEBPACK_IMPORTED_MODULE_4__["default"],
  name: 'Login',
  exact: true
}, {
  path: '/confirm',
  component: _screens_SignupConfirmation__WEBPACK_IMPORTED_MODULE_9__["default"],
  name: 'SignupConfirmation'
}, {
  path: '/forgot',
  component: _screens_ForgotPassword__WEBPACK_IMPORTED_MODULE_5__["default"],
  name: 'Forgot',
  exact: true
}, {
  path: '/profile',
  component: _screens_Dashboard__WEBPACK_IMPORTED_MODULE_7__["default"],
  name: 'Dashboard',
  private: true
}, {
  path: '/address/new',
  component: _screens_AddAddress__WEBPACK_IMPORTED_MODULE_8__["default"],
  name: 'New Address',
  private: true
}, {
  path: '/privacy',
  component: _screens_Privacy__WEBPACK_IMPORTED_MODULE_1__["default"],
  name: 'Privacy',
  exact: true
}, {
  path: '/terms',
  component: _screens_Terms__WEBPACK_IMPORTED_MODULE_2__["default"],
  name: 'Terms',
  exact: true
}, {
  path: '/',
  component: _screens_Home__WEBPACK_IMPORTED_MODULE_0__["default"],
  name: 'Home',
  exact: true
}, {
  path: '/:username',
  component: _screens_Profile__WEBPACK_IMPORTED_MODULE_6__["default"],
  name: 'Profile'
}];

/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./src/screens/AddAddress/AddAddressSuccess/index.js":
/*!***********************************************************!*\
  !*** ./src/screens/AddAddress/AddAddressSuccess/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./src/screens/AddAddress/AddAddressSuccess/styles.js");
var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/AddAddress/AddAddressSuccess/index.js';










var AddAddressSuccess = function AddAddressSuccess(_ref) {
  var hostRef = _ref.hostRef,
      onAddNewAddress = _ref.onAddNewAddress;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_3__["default"],
    { hostRef: hostRef, style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].successContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_4__["default"],
      { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].successHeaderText, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      'Address added successfully.'
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_4__["default"],
      { tag: 'h5', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      },
      'Your address was added successfully, would you like to add another address. You can access all you addresses in your dashboard too.'
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_3__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].buttonContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_5__["default"],
        { onClick: onAddNewAddress, primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].submitButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        'Add Address'
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_5__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], to: '/profile', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].cancelButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        },
        'Skip'
      )
    )
  );
};

AddAddressSuccess.propTypes = {
  hostRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  onAddNewAddress: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/* harmony default export */ __webpack_exports__["default"] = (AddAddressSuccess);

/***/ }),

/***/ "./src/screens/AddAddress/AddAddressSuccess/styles.js":
/*!************************************************************!*\
  !*** ./src/screens/AddAddress/AddAddressSuccess/styles.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 0 4em;\n  width: 100%;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n  }\n'], ['\n  padding: 0 4em;\n  width: 100%;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  text-align: left;\n  font-weight: 600;\n  margin-bottom: 2em;\n'], ['\n  text-align: left;\n  font-weight: 600;\n  margin-bottom: 2em;\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  justify-content: flex-start;\n  padding-top: 2em;\n'], ['\n  flex-direction: row;\n  justify-content: flex-start;\n  padding-top: 2em;\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: transparent;\n  color: ', ';\n  label: login-cancel-button;\n\n  &:hover {\n    color: ', ';\n  }\n'], ['\n  background-color: transparent;\n  color: ', ';\n  label: login-cancel-button;\n\n  &:hover {\n    color: ', ';\n  }\n']);





var successContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var successHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2);

var buttonContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3);

var cancelButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.4, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText));

var styles = {
  successContainer: successContainer,
  successHeaderText: successHeaderText,
  cancelButton: cancelButton,
  buttonContainer: buttonContainer
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/AddAddress/AddressForm/index.js":
/*!*****************************************************!*\
  !*** ./src/screens/AddAddress/AddressForm/index.js ***!
  \*****************************************************/
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
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/Input */ "./src/components/Input/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/Spinner */ "./src/components/Spinner/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../api */ "./src/api/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./styles */ "./src/screens/AddAddress/AddressForm/styles.js");






var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/AddAddress/AddressForm/index.js',
    _this = undefined;



















var validationSchema = yup__WEBPACK_IMPORTED_MODULE_11__["object"]().shape({
  currency: yup__WEBPACK_IMPORTED_MODULE_11__["string"]().required('Currency is required'),
  address: yup__WEBPACK_IMPORTED_MODULE_11__["string"]().min(30).required('Address is required')
});

var selectStyles = {
  control: function control(base) {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, base, _styles__WEBPACK_IMPORTED_MODULE_18__["default"].selectStyle);
  },
  container: function container(base) {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, base, { width: '100%' });
  },
  indicatorsContainer: function indicatorsContainer(base) {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, base, { transition: 'all 0.3s ease-out' });
  },
  option: function option(base) {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, _styles__WEBPACK_IMPORTED_MODULE_18__["default"].dropdownItemStyle);
  }
};

var DropdownItem = function DropdownItem(props) {
  var isDisabled = props.isDisabled,
      data = props.data;

  return !isDisabled ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
    react_select__WEBPACK_IMPORTED_MODULE_7__["components"].Option,
    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      }
    }),
    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('img', { alt: 'dropdown-item', src: data.icon, className: Object(emotion__WEBPACK_IMPORTED_MODULE_8__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].dropdownItemImage), __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      }
    }),
    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_16__["default"],
      { tag: 'h5', unstyled: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      },
      data.name
    )
  ) : null;
};

var getCurrenciesOption = function getCurrenciesOption(inputVaue) {
  return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {
    var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(resolve, reject) {
      var data;
      return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _api__WEBPACK_IMPORTED_MODULE_17__["default"].getCurrencies();

            case 3:
              data = _context.sent;

              resolve(data.currencies);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](0);

              reject(_context.t0);

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

var AddressForm = function AddressForm(_ref2) {
  var onSubmit = _ref2.onSubmit,
      onCancel = _ref2.onCancel,
      hostRef = _ref2.hostRef;

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
    { hostRef: hostRef, style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].formContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      }
    },
    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_9__["Formik"], {
      initialValues: { currency: '', address: '' },
      onSubmit: onSubmit,
      validationSchema: validationSchema,
      render: function render(_ref3) {
        var values = _ref3.values,
            touched = _ref3.touched,
            handleChange = _ref3.handleChange,
            handleBlur = _ref3.handleBlur,
            handleSubmit = _ref3.handleSubmit,
            handleReset = _ref3.handleReset,
            setFieldValue = _ref3.setFieldValue,
            setFieldTouched = _ref3.setFieldTouched,
            errors = _ref3.errors,
            isValid = _ref3.isValid,
            isSubmitting = _ref3.isSubmitting;

        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            }
          },
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_13__["default"], {
            label: 'Currency',
            name: 'currency',
            type: 'async-select',
            styles: selectStyles,
            components: { Option: DropdownItem },
            getOptionLabel: function getOptionLabel(_ref4) {
              var name = _ref4.name;
              return name;
            },
            getOptionValue: function getOptionValue(_ref5) {
              var symbol = _ref5.symbol;
              return symbol;
            },
            cacheOptions: true,
            defaultOptions: true,
            onChange: setFieldValue,
            onBlur: setFieldTouched,
            error: touched.currency && errors.currency,
            loadOptions: getCurrenciesOption,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_13__["default"], {
            label: 'Your address',
            name: 'address',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.address,
            error: touched.address && errors.address,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].buttonContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 101
              }
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_14__["default"],
              {
                primary: true,
                disabled: !isValid || isSubmitting,
                type: 'submit',
                style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].submitButton,
                onClick: handleSubmit,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 102
                }
              },
              'Submit ',
              isSubmitting && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'span',
                { className: Object(emotion__WEBPACK_IMPORTED_MODULE_8__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].spinnerIcon), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_15__["default"], { size: 20, width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                  }
                })
              )
            ),
            onCancel ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_14__["default"],
              { onClick: onCancel, link: true, style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].cancelButton, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 112
                }
              },
              'Cancel'
            ) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_14__["default"],
              { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"], to: '/profile', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].cancelButton, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 113
                }
              },
              'Skip'
            )
          )
        );
      }, __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      }
    })
  );
};

DropdownItem.propTypes = {
  isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.boolean,
  data: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.obj
};

AddressForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  hostRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any
};

/* harmony default export */ __webpack_exports__["default"] = (AddressForm);

/***/ }),

/***/ "./src/screens/AddAddress/AddressForm/styles.js":
/*!******************************************************!*\
  !*** ./src/screens/AddAddress/AddressForm/styles.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 100%;\n  label: login-body-form-cntr;\n'], ['\n  width: 100%;\n  label: login-body-form-cntr;\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  justify-content: center;\n  padding-top: 1em;\n  margin-left: 1.6em;\n'], ['\n  flex-direction: row;\n  justify-content: center;\n  padding-top: 1em;\n  margin-left: 1.6em;\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-left: 0.5em;\n  label: login-submit-button-icon;\n'], ['\n  padding-left: 0.5em;\n  label: login-submit-button-icon;\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-left: 0.2em;\n'], ['\n  margin-left: 0.2em;\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: transparent;\n  color: ', ';\n  label: login-cancel-button;\n\n  &:hover {\n    color: ', ';\n  }\n'], ['\n  background-color: transparent;\n  color: ', ';\n  label: login-cancel-button;\n\n  &:hover {\n    color: ', ';\n  }\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-right: 1em;\n  width: 2em;\n  height: 2em;\n  border-radius: 50%;\n  border: 1px solid ', ';\n'], ['\n  margin-right: 1em;\n  width: 2em;\n  height: 2em;\n  border-radius: 50%;\n  border: 1px solid ', ';\n']);





var formContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject);

var buttonContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2);

var submitButtonIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3);

var spinnerIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4);

var cancelButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.4, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText));

var selectStyle = {
  boxSizing: 'border-box',
  width: 'calc(100% - .8em)',
  border: '0.5px solid transparent',
  borderRadius: '.25rem',
  padding: '.5em',
  fontFamily: _styles__WEBPACK_IMPORTED_MODULE_2__["typography"].primaryFont,
  fontSize: '1.2rem',
  backgroundColor: '#F5F8F9'
};

var dropdownItemStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '0.8em',
  maxWidth: '100%',
  transition: 'background 0.3s ease-out',
  '&:hover': {
    backgroundColor: _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary,
    color: _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white
  },
  '&:active': {
    backgroundColor: _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary,
    color: _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white
  },
  '&:last-child': {
    borderBottom: '1px solid ' + _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].background
  }
};

var dropdownItemImage = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white);

var styles = {
  formContainer: formContainer,
  buttonContainer: buttonContainer,
  submitButtonIcon: submitButtonIcon,
  spinnerIcon: spinnerIcon,
  cancelButton: cancelButton,
  selectStyle: selectStyle,
  dropdownItemStyle: dropdownItemStyle,
  dropdownItemImage: dropdownItemImage
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

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
                _context.next = 15;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](1);

                console.log(_context.t0);
                bag.setSubmitting(false);
                bag.setErrors(_api__WEBPACK_IMPORTED_MODULE_16__["default"].setErrors(_context.t0.response.data.errors.details.errors));

              case 15:
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
            lineNumber: 60
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].heroContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].heroLogoContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'a',
              { href: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 63
                }
              },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'bitcharge-logo', className: Object(emotion__WEBPACK_IMPORTED_MODULE_10__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].logoImageStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1532990484/icons/bitcharge-logo-white.png', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 63
                }
              })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].heroTextContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'add-address-avatar', className: Object(emotion__WEBPACK_IMPORTED_MODULE_10__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].addressAvatarIconStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1535940306/hen-avatar.png', __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              }
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
              { tag: 'h3', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].heroText, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67
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
              lineNumber: 70
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PoseAddressForm, { pose: this.state.isAddAddressSuccess ? 'invisible' : 'visible', onSubmit: this.handleSubmit, __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PoseAddAddressSuccess, { pose: this.state.isAddAddressSuccess ? 'visible' : 'invisible', onAddNewAddress: this.onAddNewAddress, __source: {
              fileName: _jsxFileName,
              lineNumber: 72
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

/***/ }),

/***/ "./src/screens/AddAddress/styles.js":
/*!******************************************!*\
  !*** ./src/screens/AddAddress/styles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  label: signup-main-cntr;\n  flex-direction: row;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n'], ['\n  background-color: ', ';\n  label: signup-main-cntr;\n  flex-direction: row;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 2;\n  background-color: ', ';\n  color: ', ';\n  padding: 0 2em;\n  label: signup-hero-cntr;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n'], ['\n  flex: 2;\n  background-color: ', ';\n  color: ', ';\n  padding: 0 2em;\n  label: signup-hero-cntr;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 1;\n  padding: 1em;\n  label: signup-hero-text-cntr;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n    height: auto;\n  }\n'], ['\n  flex: 1;\n  padding: 1em;\n  label: signup-hero-text-cntr;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n    height: auto;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-top: 1em;\n'], ['\n  padding-top: 1em;\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 150px;\n  height: auto;\n'], ['\n  width: 150px;\n  height: auto;\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 150px;\n  height: 150px;\n  border-radius: 75px;\n  margin-bottom: .5em;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 125px;\n    height: 125px;\n  }\n'], ['\n  width: 150px;\n  height: 150px;\n  border-radius: 75px;\n  margin-bottom: .5em;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 125px;\n    height: 125px;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 1em;\n  font-weight: 600;\n'], ['\n  margin-top: 1em;\n  font-weight: 600;\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 5;\n  align-items: center;\n  justify-content: center;\n  padding: 6em;\n  height: 100vh;\n  label: signup-body-cntr;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n    height: auto;\n  }\n'], ['\n  flex: 5;\n  align-items: center;\n  justify-content: center;\n  padding: 6em;\n  height: 100vh;\n  label: signup-body-cntr;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n    height: auto;\n  }\n']);




var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroTextContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroLogoContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4);

var logoImageStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5);

var addressAvatarIconStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7);

var bodyContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var styles = {
  mainContainer: mainContainer,
  heroContainer: heroContainer,
  heroLogoContainer: heroLogoContainer,
  addressAvatarIconStyle: addressAvatarIconStyle,
  heroTextContainer: heroTextContainer,
  heroText: heroText,
  logoImageStyle: logoImageStyle,
  bodyContainer: bodyContainer
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/Addresses/AddressItem/index.js":
/*!****************************************************!*\
  !*** ./src/screens/Addresses/AddressItem/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-copy-to-clipboard */ "react-copy-to-clipboard");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/Input */ "./src/components/Input/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../components/Modal */ "./src/components/Modal/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../api */ "./src/api/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./styles */ "./src/screens/Addresses/AddressItem/styles.js");








var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Addresses/AddressItem/index.js';

















var validationSchema = yup__WEBPACK_IMPORTED_MODULE_13__["object"]().shape({
  address: yup__WEBPACK_IMPORTED_MODULE_13__["string"]().min(30).required('Address is required')
});

var EditAddressForm = function EditAddressForm(_ref) {
  var onSubmit = _ref.onSubmit,
      onCancel = _ref.onCancel,
      address = _ref.address;

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Formik"], {
    initialValues: { address: address },
    onSubmit: onSubmit,
    validationSchema: validationSchema,
    render: function render(_ref2) {
      var values = _ref2.values,
          handleChange = _ref2.handleChange,
          handleSubmit = _ref2.handleSubmit,
          handleBlur = _ref2.handleBlur,
          errors = _ref2.errors,
          touched = _ref2.touched,
          isValid = _ref2.isValid,
          isSubmitting = _ref2.isSubmitting;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressInputContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_16__["default"], {
          name: 'address',
          noErrorText: true,
          inputStyle: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressInputStyle,
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.address,
          error: touched.address && errors.address,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].optionsContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          },
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_17__["default"],
            {
              primary: true,
              disabled: !isValid || isSubmitting,
              onClick: handleSubmit,
              style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].editAddressSaveButton,
              type: 'submit',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              }
            },
            'Save'
          ),
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_17__["default"],
            {
              onClick: onCancel,
              style: Object(emotion__WEBPACK_IMPORTED_MODULE_10__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressActionButton, _styles__WEBPACK_IMPORTED_MODULE_20__["default"].editAddressCancelButton),
              link: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            },
            'Cancel'
          )
        )
      );
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  });
};

var AddressItem = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(AddressItem, _Component);

  function AddressItem(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, AddressItem);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, (AddressItem.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default()(AddressItem)).call(this, props));

    _this.state = {
      copiedAddress: false,
      deleteAddressModal: false,
      isEditing: false
    };

    _this.onCopyAddress = function () {
      _this.setState({ copied: true });
      setInterval(function () {
        _this.setState({ copied: false });
      }, 3000);
    };

    _this.onEdit = function () {
      _this.setState({ isEditing: true });
    };

    _this.onDeleteAddress = function () {
      _this.setState({ deleteAddressModal: true });
    };

    _this.handleDeleteAddress = function () {
      _this.props.deleteAddress(_this.props.address);
      _this.closeDeleteAddressModal();
    };

    _this.closeDeleteAddressModal = function () {
      _this.setState({ deleteAddressModal: false });
    };

    _this.renderDeleteModal = function () {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_Modal__WEBPACK_IMPORTED_MODULE_18__["default"],
        { label: 'Delete Address', style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].deleteAddressModalStyle, isOpen: _this.state.deleteAddressModal, handleClose: _this.closeDeleteAddressModal, __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
          { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].deleteAddressHeaderStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 131
            }
          },
          'Are you sure you want to delete this address?'
        ),
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].deleteAddressModalbuttonContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            }
          },
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_17__["default"],
            { error: true, link: true, onClick: _this.handleDeleteAddress, __source: {
                fileName: _jsxFileName,
                lineNumber: 133
              }
            },
            'Delete'
          ),
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_17__["default"],
            { link: true, onClick: _this.closeDeleteAddressModal, __source: {
                fileName: _jsxFileName,
                lineNumber: 134
              }
            },
            'Cancel'
          )
        )
      );
    };

    _this.onCancelEdit = function () {
      _this.setState({ isEditing: false });
    };

    _this.renderAddressText = function () {
      var address = _this.props.address;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressTextContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
          { tag: 'h6', style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressTextStyle, unstyled: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 148
            }
          },
          address.address
        ),
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].optionsContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 149
            }
          },
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_12__["CopyToClipboard"],
            { text: address.address, onCopy: _this.onCopyAddress, __source: {
                fileName: _jsxFileName,
                lineNumber: 150
              }
            },
            _this.state.copied ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
              { tag: 'h6', style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].copiedTextStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 152
                }
              },
              'Copied!'
            ) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_17__["default"],
              { onClick: _this.addNewAddress, style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressActionButton, link: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 153
                }
              },
              'Copy'
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_17__["default"],
            { onClick: _this.onEdit, style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressActionButton, link: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 156
              }
            },
            'Edit'
          ),
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_17__["default"],
            { onClick: _this.onDeleteAddress, style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressActionButton, link: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 157
              }
            },
            'Delete'
          )
        )
      );
    };

    _this.onEditSubmit = _this.onEditSubmit.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(AddressItem, [{
    key: 'onEditSubmit',
    value: function () {
      var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, bag) {
        var addressDetails, data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(values);
                addressDetails = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, this.props.address, { address: values.address });

                console.log(addressDetails);
                _context.prev = 3;
                _context.next = 6;
                return _api__WEBPACK_IMPORTED_MODULE_19__["default"].updateAddress(addressDetails);

              case 6:
                data = _context.sent;

                bag.setSubmitting(false);
                this.props.deleteAddress(this.props.address, { local: true });
                this.props.editAddress(data.address);
                this.setState({ isEditing: false });
                _context.next = 18;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](3);

                console.log(_context.t0);
                bag.setSubmitting(false);
                bag.setErrors(_api__WEBPACK_IMPORTED_MODULE_19__["default"].setErrors(_context.t0.response.data.errors.details.errors));

              case 18:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 13]]);
      }));

      function onEditSubmit(_x, _x2) {
        return _ref3.apply(this, arguments);
      }

      return onEditSubmit;
    }()
  }, {
    key: 'render',
    value: function render() {
      var address = this.props.address;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressItemContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          }
        },
        this.renderDeleteModal(),
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressIconContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 168
            }
          },
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement('img', { alt: 'adress-icon', src: address.currency.icon, className: Object(emotion__WEBPACK_IMPORTED_MODULE_10__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressIconImage), __source: {
              fileName: _jsxFileName,
              lineNumber: 169
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressIconText, __source: {
                fileName: _jsxFileName,
                lineNumber: 170
              }
            },
            address.currency.name
          )
        ),
        this.state.isEditing ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(EditAddressForm, { onSubmit: this.onEditSubmit, onCancel: this.onCancelEdit, address: this.props.address.address, __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          }
        }) : this.renderAddressText()
      );
    }
  }]);

  return AddressItem;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

EditAddressForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  address: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
};

AddressItem.propTypes = {
  address: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  editAddress: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  deleteAddress: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
};

/* harmony default export */ __webpack_exports__["default"] = (AddressItem);

/***/ }),

/***/ "./src/screens/Addresses/AddressItem/styles.js":
/*!*****************************************************!*\
  !*** ./src/screens/Addresses/AddressItem/styles.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 1.6em 0 1em 0;\n  border-bottom: .5px dotted ', ';\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n\n  &:last-child {\n    border-bottom: 0;\n  }\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 1em 0;\n  }\n'], ['\n  padding: 1.6em 0 1em 0;\n  border-bottom: .5px dotted ', ';\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n\n  &:last-child {\n    border-bottom: 0;\n  }\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 1em 0;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (max-width: ', ') {\n    margin-bottom: 1.5em;\n  }\n'], ['\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (max-width: ', ') {\n    margin-bottom: 1.5em;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 40px;\n  height: 40px;\n  margin-right: 1em;\n  border-radius: 50%;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 35px;\n    height: 35px;\n  }\n'], ['\n  width: 40px;\n  height: 40px;\n  margin-right: 1em;\n  border-radius: 50%;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 35px;\n    height: 35px;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n  margin-bottom: 0px;\n\n  @media (max-width: ', ') {\n    font-size: 1.1em;\n  }\n\n'], ['\n  font-weight: 500;\n  margin-bottom: 0px;\n\n  @media (max-width: ', ') {\n    font-size: 1.1em;\n  }\n\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  align-items: flex-end;\n  justify-content: space-between;\n\n  @media (max-width: ', ') {\n    align-items: center;\n  }\n'], ['\n  align-items: flex-end;\n  justify-content: space-between;\n\n  @media (max-width: ', ') {\n    align-items: center;\n  }\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  align-items: flex-end;\n  width: 70%;\n  justify-content: space-between;\n\n  @media (max-width: ', ') {\n    width: 100%;\n  }\n'], ['\n  align-items: flex-end;\n  width: 70%;\n  justify-content: space-between;\n\n  @media (max-width: ', ') {\n    width: 100%;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  align-self: flex-end;\n  margin: 0;\n  margin-right: -0.6em;\n  font-size: 1em;\n'], ['\n  align-self: flex-end;\n  margin: 0;\n  margin-right: -0.6em;\n  font-size: 1em;\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  margin-top: 0.6em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    justify-content: center;\n  }\n'], ['\n  flex-direction: row;\n  margin-top: 0.6em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    justify-content: center;\n  }\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-left: .5em;\n  padding-right: .5em;\n  font-size: 1rem;\n  color: ', ';\n\n  &:last-child {\n    padding-right: 0em;\n  }\n'], ['\n  padding-left: .5em;\n  padding-right: .5em;\n  font-size: 1rem;\n  color: ', ';\n\n  &:last-child {\n    padding-right: 0em;\n  }\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  color: ', ';\n'], ['\n  color: ', ';\n']),
    _templateObject11 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-size: 1rem;\n  margin-right: 1em;\n'], ['\n  font-size: 1rem;\n  margin-right: 1em;\n']),
    _templateObject12 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  color: ', ';\n  font-weight: 600;\n  padding-top: .9em;\n  padding-right: .2em;\n  font-size: 1rem;\n  transition: all 0.15s ease-out;\n'], ['\n  color: ', ';\n  font-weight: 600;\n  padding-top: .9em;\n  padding-right: .2em;\n  font-size: 1rem;\n  transition: all 0.15s ease-out;\n']),
    _templateObject13 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 3em 3em 2em 3em;\n'], ['\n  padding: 3em 3em 2em 3em;\n']),
    _templateObject14 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  @media (max-width: ', ') {\n    font-size: 0.8em;\n  }\n'], ['\n  @media (max-width: ', ') {\n    font-size: 0.8em;\n  }\n']),
    _templateObject15 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  justify-content: flex-end;\n  padding-top: 1.8em;\n  margin-right: -1.2em;\n'], ['\n  flex-direction: row;\n  justify-content: flex-end;\n  padding-top: 1.8em;\n  margin-right: -1.2em;\n']);




var addressItemContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var addressIconContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var addressIconImage = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var addressIconText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var addressTextContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var addressInputContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var addressInputStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7);
var optionsContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var addressActionButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary);

var editAddressCancelButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText);

var editAddressSaveButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject11);

var copiedTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary);

var deleteAddressModalStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject13);

var addressTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject14, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var deleteAddressModalbuttonContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject15);

var styles = {
  addressItemContainer: addressItemContainer,
  addressIconContainer: addressIconContainer,
  addressIconImage: addressIconImage,
  addressIconText: addressIconText,
  addressTextStyle: addressTextStyle,
  addressTextContainer: addressTextContainer,
  addressInputContainer: addressInputContainer,
  addressInputStyle: addressInputStyle,
  optionsContainer: optionsContainer,
  addressActionButton: addressActionButton,
  editAddressSaveButton: editAddressSaveButton,
  editAddressCancelButton: editAddressCancelButton,
  copiedTextStyle: copiedTextStyle,
  deleteAddressModalStyle: deleteAddressModalStyle,
  deleteAddressModalbuttonContainer: deleteAddressModalbuttonContainer
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

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
            lineNumber: 64
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].addressesHeaderContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            }
          },
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].addressesHeaderTextStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              }
            },
            'My Addresses'
          ),
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_15__["default"],
            { onClick: _this.openAddNewAddressModal, style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].addNewAddressButton, primary: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 67
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
              lineNumber: 70
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
                lineNumber: 72
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
            lineNumber: 86
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_14__["default"], { size: 50, width: 7, color: _styles__WEBPACK_IMPORTED_MODULE_20__["colors"].lightText, __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        })
      );
    };

    _this._renderError = function () {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].loadingContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
          { tag: 'h3', __source: {
              fileName: _jsxFileName,
              lineNumber: 95
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
            lineNumber: 102
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
          { tag: 'h3', style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].addAddressModalHeaderStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 103
            }
          },
          'Add a new address'
        ),
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_AddAddress_AddressForm__WEBPACK_IMPORTED_MODULE_17__["default"], { onSubmit: _this.handleAddAddressSubmit, onCancel: _this.closeAddNewAddressModal, __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        })
      );
    };

    _this._renderEmpty = function () {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].loadingContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
          { tag: 'h3', __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            }
          },
          'You haven\'t added any addresses.'
        ),
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Button__WEBPACK_IMPORTED_MODULE_15__["default"],
          { primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].addNewEmptyButton, onClick: _this.openAddNewAddressModal, __source: {
              fileName: _jsxFileName,
              lineNumber: 113
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

      console.log(isLoading, error, addresses);
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
                _context.next = 16;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](1);

                console.log(_context.t0);
                bag.setSubmitting(false);
                bag.setErrors(_api__WEBPACK_IMPORTED_MODULE_18__["default"].setErrors(_context.t0.response.data.errors.details.errors));

              case 16:
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
            lineNumber: 138
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].cardContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 139
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

/***/ }),

/***/ "./src/screens/Addresses/styles.js":
/*!*****************************************!*\
  !*** ./src/screens/Addresses/styles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 100%;\n  min-height: calc(100vh - 4.5em);\n  align-items: center;\n  border-bottom: 1px solid ', ';\n'], ['\n  width: 100%;\n  min-height: calc(100vh - 4.5em);\n  align-items: center;\n  border-bottom: 1px solid ', ';\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 50em;\n  margin-top: 3em;\n  margin-bottom: 3em;\n  background-color: ', ';\n  border-radius: 4px;\n  padding: 2em 3em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    padding: 1.5em;\n  }\n'], ['\n  width: 50em;\n  margin-top: 3em;\n  margin-bottom: 3em;\n  background-color: ', ';\n  border-radius: 4px;\n  padding: 2em 3em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    padding: 1.5em;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  align-items: center;\n  justify-content: center;\n  padding: 5em;\n'], ['\n  align-items: center;\n  justify-content: center;\n  padding: 5em;\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 1em;\n  border-bottom: .5px dashed ', ';\n'], ['\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 1em;\n  border-bottom: .5px dashed ', ';\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  margin-bottom: -0.4em;\n'], ['\n  font-weight: 600;\n  margin-bottom: -0.4em;\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  font-size: 1em;\n\n  @media (max-width: ', ') {\n    padding-left: .8em;\n    padding-right: .8em;\n  }\n'], ['\n  font-weight: 600;\n  font-size: 1em;\n\n  @media (max-width: ', ') {\n    padding-left: .8em;\n    padding-right: .8em;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-right: 0.4em;\n  font-size: 1.1em;\n  font-weight: 600;\n'], ['\n  padding-right: 0.4em;\n  font-size: 1.1em;\n  font-weight: 600;\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 1em;\n'], ['\n  margin-top: 1em;\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 45%;\n\n  @media (max-width: ', ') {\n    width: 100%;\n  }\n'], ['\n  width: 45%;\n\n  @media (max-width: ', ') {\n    width: 100%;\n  }\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  text-align: center;\n  font-weight: 600;\n  margin-top: 1em;\n  margin-bottom: 2em;\n'], ['\n  text-align: center;\n  font-weight: 600;\n  margin-top: 1em;\n  margin-bottom: 2em;\n']),
    _templateObject11 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 2em;\n'], ['\n  margin-top: 2em;\n']),
    _templateObject12 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-left: 0.3em;\n'], ['\n  margin-left: 0.3em;\n']);




var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray);

var cardContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var loadingContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3);

var addressesHeaderContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder);

var addressesHeaderTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5);

var addNewAddressButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var addNewAddressButtonIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7);

var addressesListContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8);

var addAddressModalStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var addAddressModalHeaderStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10);

var addNewEmptyButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject11);

var addIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12);

var styles = {
  mainContainer: mainContainer,
  cardContainer: cardContainer,
  loadingContainer: loadingContainer,
  addressesHeaderTextStyle: addressesHeaderTextStyle,
  addressesHeaderContainer: addressesHeaderContainer,
  addNewAddressButton: addNewAddressButton,
  addNewAddressButtonIcon: addNewAddressButtonIcon,
  addressesListContainer: addressesListContainer,
  addNewEmptyButton: addNewEmptyButton,
  addAddressModalStyle: addAddressModalStyle,
  addAddressModalHeaderStyle: addAddressModalHeaderStyle,
  addIcon: addIcon
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/Dashboard/index.js":
/*!****************************************!*\
  !*** ./src/screens/Dashboard/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../UserProfile */ "./src/screens/UserProfile/index.js");
/* harmony import */ var _Addresses__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Addresses */ "./src/screens/Addresses/index.js");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Settings */ "./src/screens/Settings/index.js");
/* harmony import */ var _containers_DashboardNavbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../containers/DashboardNavbar */ "./src/containers/DashboardNavbar/index.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _store_actions_address__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../store/actions/address */ "./src/store/actions/address.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./styles */ "./src/screens/Dashboard/styles.js");





var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Dashboard/index.js';

















var Dashboard = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Dashboard, _Component);

  function Dashboard() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Dashboard);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Dashboard.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Dashboard)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Dashboard, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchAddresses();
    }
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
        { fluid: true, fullHeight: true, style: _styles__WEBPACK_IMPORTED_MODULE_16__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_containers_DashboardNavbar__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], { path: '/profile/addresses', component: _Addresses__WEBPACK_IMPORTED_MODULE_10__["default"], __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], { path: '/profile/settings', component: _Settings__WEBPACK_IMPORTED_MODULE_11__["default"], __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], { exact: true, path: '/profile', component: _UserProfile__WEBPACK_IMPORTED_MODULE_9__["default"], __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        })
      );
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Dashboard.propTypes = {
  fetchAddresses: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(null, { fetchAddresses: _store_actions_address__WEBPACK_IMPORTED_MODULE_15__["fetchAddresses"] })(Dashboard));

/***/ }),

/***/ "./src/screens/Dashboard/styles.js":
/*!*****************************************!*\
  !*** ./src/screens/Dashboard/styles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n'], ['\n  background-color: ', ';\n']);




var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].background);

var styles = {
  mainContainer: mainContainer
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/ForgotPassword/EmailForm/index.js":
/*!*******************************************************!*\
  !*** ./src/screens/ForgotPassword/EmailForm/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Input */ "./src/components/Input/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Spinner */ "./src/components/Spinner/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles */ "./src/screens/ForgotPassword/EmailForm/styles.js");
var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/ForgotPassword/EmailForm/index.js',
    _this = undefined;















var validationSchema = yup__WEBPACK_IMPORTED_MODULE_5__["object"]().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().email('Not a valid email').required('Email is required')
});

var EmailForm = function EmailForm(_ref) {
  var handleSubmit = _ref.handleSubmit;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_6__["default"],
    { style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
      initialValues: { email: '' },
      onSubmit: _this.handleSubmit,
      validationSchema: validationSchema,
      render: function render(_ref2) {
        var values = _ref2.values,
            touched = _ref2.touched,
            handleChange = _ref2.handleChange,
            handleBlur = _ref2.handleBlur,
            handleSubmit = _ref2.handleSubmit,
            handleReset = _ref2.handleReset,
            errors = _ref2.errors,
            isValid = _ref2.isValid,
            isSubmitting = _ref2.isSubmitting;

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
            name: 'email',
            type: 'email',
            placeholder: 'awesome@doggo.co',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.email,
            error: touched.email && errors.email,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_6__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].buttonContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_8__["default"],
              {
                primary: true,
                disabled: !isValid || isSubmitting,
                type: 'submit',
                style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].submitButton,
                onClick: handleSubmit,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                }
              },
              'Submit ',
              isSubmitting && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'span',
                { className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].spinnerIcon), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_9__["default"], { size: 20, width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                  }
                })
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_8__["default"],
              { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], to: '/login', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].cancelButton, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                }
              },
              'Cancel'
            )
          )
        );
      }, __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    })
  );
};

EmailForm.propTypes = {
  handleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (EmailForm);

/***/ }),

/***/ "./src/screens/ForgotPassword/EmailForm/styles.js":
/*!********************************************************!*\
  !*** ./src/screens/ForgotPassword/EmailForm/styles.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 0 4em;\n  width: 80%;\n  label: forgot-password-body-form-cntr;\n\n  @media (max-width: ', ') {\n    padding: 0;\n    width: 100%;\n  }\n'], ['\n  padding: 0 4em;\n  width: 80%;\n  label: forgot-password-body-form-cntr;\n\n  @media (max-width: ', ') {\n    padding: 0;\n    width: 100%;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  justify-content: center;\n  padding-top: 1em;\n  label: forgot-password-body-form-cntr-btn-cntr;\n'], ['\n  flex-direction: row;\n  justify-content: center;\n  padding-top: 1em;\n  label: forgot-password-body-form-cntr-btn-cntr;\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-left: 0.5em;\n  label: forgot-password-body-form-cntr-btn;\n'], ['\n  padding-left: 0.5em;\n  label: forgot-password-body-form-cntr-btn;\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-size: 1.3em;\n  margin-right: 1em;\n  label: signup-submit-button;\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n'], ['\n  font-size: 1.3em;\n  margin-right: 1em;\n  label: signup-submit-button;\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-left: 0.2em;\n'], ['\n  margin-left: 0.2em;\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: transparent;\n  color: ', ';\n  label: signup-cancel-button;\n\n  &:hover {\n    color: ', ';\n  }\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n'], ['\n  background-color: transparent;\n  color: ', ';\n  label: signup-cancel-button;\n\n  &:hover {\n    color: ', ';\n  }\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n']);





var formContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var buttonContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2);

var submitButtonIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3);

var submitButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var spinnerIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5);

var cancelButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.4, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText), _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var styles = {
  formContainer: formContainer,
  buttonContainer: buttonContainer,
  submitButton: submitButton,
  submitButtonIcon: submitButtonIcon,
  cancelButton: cancelButton,
  spinnerIcon: spinnerIcon
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/ForgotPassword/index.js":
/*!*********************************************!*\
  !*** ./src/screens/ForgotPassword/index.js ***!
  \*********************************************/
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _EmailForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./EmailForm */ "./src/screens/ForgotPassword/EmailForm/index.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./styles */ "./src/screens/ForgotPassword/styles.js");







var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/ForgotPassword/index.js';












var ForgotPassword = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(ForgotPassword, _Component);

  function ForgotPassword(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, ForgotPassword);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (ForgotPassword.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(ForgotPassword)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(ForgotPassword, [{
    key: 'handleSubmit',
    value: function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, bag) {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                try {
                  bag.setSubmitting(false);
                  this.props.history.push('/profile');
                } catch (e) {
                  console.log(e);
                  bag.setSubmitting(false);
                }

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSubmit(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isAuthenticated) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Redirect"], { to: '/profile', __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
        { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_15__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_15__["default"].heroContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_15__["default"].heroLogoContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'a',
              { href: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 39
                }
              },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'bitcharge-logo', className: Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_15__["default"].logoImageStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1532990484/icons/bitcharge-logo-white.png', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 39
                }
              })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_15__["default"].heroTextContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'forgot-password-avatar', className: Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_15__["default"].signupAvatarIconStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1535940360/cat-avatar.png', __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              }
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_14__["default"],
              { tag: 'h3', style: _styles__WEBPACK_IMPORTED_MODULE_15__["default"].heroText, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 43
                }
              },
              'Forgot Password'
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_15__["default"].bodyContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_14__["default"],
            { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_15__["default"].formHeaderText, __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              }
            },
            'We have your back.'
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_EmailForm__WEBPACK_IMPORTED_MODULE_12__["default"], { onSubmit: this.handleSubmit, __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          })
        )
      );
    }
  }]);

  return ForgotPassword;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

ForgotPassword.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(ForgotPassword));

/***/ }),

/***/ "./src/screens/ForgotPassword/styles.js":
/*!**********************************************!*\
  !*** ./src/screens/ForgotPassword/styles.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  label: signup-main-cntr;\n  flex-direction: row;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n'], ['\n  background-color: ', ';\n  label: signup-main-cntr;\n  flex-direction: row;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 2;\n  background-color: ', ';\n  color: ', ';\n  padding: 0 2em;\n  label: signup-hero-cntr;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n'], ['\n  flex: 2;\n  background-color: ', ';\n  color: ', ';\n  padding: 0 2em;\n  label: signup-hero-cntr;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 5;\n  align-items: center;\n  justify-content: center;\n  padding: 3em 2em;\n  height: 100vh;\n  label: signup-body-cntr;\n\n  @media (max-width: ', ') {\n    padding: 2em 1em;\n    height: auto;\n  }\n'], ['\n  flex: 5;\n  align-items: center;\n  justify-content: center;\n  padding: 3em 2em;\n  height: 100vh;\n  label: signup-body-cntr;\n\n  @media (max-width: ', ') {\n    padding: 2em 1em;\n    height: auto;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 0 4em;\n  width: 80%;\n  label: signup-body-form-cntr;\n'], ['\n  padding: 0 4em;\n  width: 80%;\n  label: signup-body-form-cntr;\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  text-align: left;\n  font-weight: 600;\n  margin-bottom: 2em;\n\n  @media (max-width: ', ') {\n    margin-bottom: 1em;\n    font-size: 1.8em;\n  }\n\n'], ['\n  text-align: left;\n  font-weight: 600;\n  margin-bottom: 2em;\n\n  @media (max-width: ', ') {\n    margin-bottom: 1em;\n    font-size: 1.8em;\n  }\n\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-top: 1em;\n'], ['\n  padding-top: 1em;\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 150px;\n  height: auto;\n'], ['\n  width: 150px;\n  height: auto;\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 150px;\n  height: 150px;\n  border-radius: 75px;\n  margin-bottom: .5em;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 125px;\n    height: 125px;\n  }\n'], ['\n  width: 150px;\n  height: 150px;\n  border-radius: 75px;\n  margin-bottom: .5em;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 125px;\n    height: 125px;\n  }\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 1em;\n  font-weight: 600;\n\n  @media (max-width: ', ') {\n    margin-top: .5em;\n    font-size: 1.5em;\n  }\n'], ['\n  margin-top: 1em;\n  font-weight: 600;\n\n  @media (max-width: ', ') {\n    margin-top: .5em;\n    font-size: 1.5em;\n  }\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 1;\n  padding: 1em;\n  label: signup-hero-text-cntr;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n    height: auto;\n  }\n'], ['\n  flex: 1;\n  padding: 1em;\n  label: signup-hero-text-cntr;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n    height: auto;\n  }\n']),
    _templateObject11 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-bottom: 1em;\n'], ['\n  margin-bottom: 1em;\n']),
    _templateObject12 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 1;\n  padding: 4em 4em 4em 2em;\n  align-items: center;\n  justify-content: center;\n  label: signup-hero-image-cntr;\n'], ['\n  flex: 1;\n  padding: 4em 4em 4em 2em;\n  align-items: center;\n  justify-content: center;\n  label: signup-hero-image-cntr;\n']),
    _templateObject13 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n  margin-bottom: 1em;\n  label: home-hero-header-text;\n'], ['\n  font-weight: 500;\n  margin-bottom: 1em;\n  label: home-hero-header-text;\n']),
    _templateObject14 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  line-height: 1.5em;\n  font-weight: 400;\n  margin-bottom: 1.5em;\n  label: home-hero-header-subtext;\n'], ['\n  line-height: 1.5em;\n  font-weight: 400;\n  margin-bottom: 1.5em;\n  label: home-hero-header-subtext;\n']),
    _templateObject15 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  max-width: 100%;\n  height: auto;\n  label: home-hero-image;\n'], ['\n  max-width: 100%;\n  height: auto;\n  label: home-hero-image;\n']),
    _templateObject16 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  display: inline-block;\n  text-decoration: none;\n  color: ', ';\n  padding: .3em;\n  border-radius: .1em;\n  label: login-signup-link;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\n  &:hover {\n    background-color: ', ';\n    color: ', ';\n  }\n'], ['\n  font-weight: 600;\n  display: inline-block;\n  text-decoration: none;\n  color: ', ';\n  padding: .3em;\n  border-radius: .1em;\n  label: login-signup-link;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\n  &:hover {\n    background-color: ', ';\n    color: ', ';\n  }\n']);




var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var bodyContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var formContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4);

var formHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroLogoContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6);

var logoImageStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7);

var signupAvatarIconStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroTextContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroFooterContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject11);

var heroImageContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12);

var heroHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject13);

var heroSubHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject14);

var heroImage = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject15);

var SignupLink = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject16, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary);

var styles = {
  mainContainer: mainContainer,
  bodyContainer: bodyContainer,
  formContainer: formContainer,
  heroContainer: heroContainer,
  heroLogoContainer: heroLogoContainer,
  logoImageStyle: logoImageStyle,
  heroTextContainer: heroTextContainer,
  heroText: heroText,
  heroFooterContainer: heroFooterContainer,
  signupAvatarIconStyle: signupAvatarIconStyle,
  heroImageContainer: heroImageContainer,
  heroHeaderText: heroHeaderText,
  heroSubHeaderText: heroSubHeaderText,
  heroImage: heroImage,
  SignupLink: SignupLink,
  formHeaderText: formHeaderText
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/Home/index.js":
/*!***********************************!*\
  !*** ./src/screens/Home/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Navbar */ "./src/components/Navbar/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles */ "./src/screens/Home/styles.js");





var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Home/index.js';












var Home = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Home, _Component);

  function Home() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Home);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Home.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Home)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Home, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
        { fluid: true, fullHeight: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
          { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].bodyContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
            { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].heroContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              }
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].heroTextContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].heroHeaderText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                  }
                },
                'The easiest way to accept crypto payments.'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].heroSubHeaderText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                  }
                },
                'Pick a username, create a link and get paid in your favorite cryptocurrency. It can\'t get any easier than that.'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Button__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], to: '/signup', primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].getStartedButton, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                  }
                },
                'Get Started ',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('i', { className: 'icon ion-md-arrow-round-forward ' + _styles__WEBPACK_IMPORTED_MODULE_13__["default"].getStartedButtonIcon, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                  }
                })
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].heroImageContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('img', { className: Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_13__["default"].heroImage), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1536025920/assets/hero_image_2.png', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30
                }
              })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].currenciesContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              }
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].currencyItemContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].currenciesSupportText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  }
                },
                'Currently supports'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].currencyItemContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('img', { alt: 'adress-icon', src: 'https://res.cloudinary.com/bitcharge/image/upload/v1532990277/icons/bitcoin.png', className: Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_13__["default"].addressIconImage), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              }),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                { tag: 'h6', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].addressIconText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                  }
                },
                'Bitcoin'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].currencyItemContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('img', { alt: 'adress-icon', src: 'https://res.cloudinary.com/bitcharge/image/upload/v1532990278/icons/ethereum.png', className: Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_13__["default"].addressIconImage), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                }
              }),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                { tag: 'h6', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].addressIconText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                  }
                },
                'Ethereum'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].currencyItemContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('img', { alt: 'adress-icon', src: 'https://res.cloudinary.com/bitcharge/image/upload/v1532990277/icons/litecoin.png', className: Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_13__["default"].addressIconImage), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                }
              }),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                { tag: 'h6', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].addressIconText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  }
                },
                'Litecoin'
              )
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
            { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workHeaderContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].heroHeaderText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                  }
                },
                'How Bitcharge Works'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workDetailsContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workDetailsItemContainer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
                  { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemImageContainer, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 58
                    }
                  },
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('img', { className: Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemImage), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1536025918/assets/choose_username.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 59
                    }
                  })
                ),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
                  { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemTextContainer, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 61
                    }
                  },
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                    { tag: 'h3', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemHeaderText, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                      }
                    },
                    'Pick a username'
                  ),
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_8__["default"], { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemTextBorder, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 65
                    }
                  }),
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                    { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemSubHeaderText, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                      }
                    },
                    'Get started by picking up a username. Your username will be used to create your public profile. When you share your Bitcharge link, it uses your username as the unique identifier.'
                  )
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workDetailsItemContainer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
                  { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemImageContainer, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 72
                    }
                  },
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('img', { className: Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemImage), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1536025920/assets/setup_profile.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 73
                    }
                  })
                ),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
                  { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemTextContainer, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 75
                    }
                  },
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                    { tag: 'h3', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemHeaderText, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                      }
                    },
                    'Build your profile'
                  ),
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_8__["default"], { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemTextBorder, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 79
                    }
                  }),
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                    { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemSubHeaderText, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 80
                      }
                    },
                    'Bitcharge doesn\'t create new wallets, instead it just works with your existing crypto wallets. All you need to do add the address of your wallet where you want to recieve payments.'
                  )
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workDetailsItemContainer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
                  { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemImageContainer, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 86
                    }
                  },
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('img', { className: Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemImage), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1536025920/assets/share_image.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 87
                    }
                  })
                ),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
                  { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemTextContainer, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 89
                    }
                  },
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                    { tag: 'h3', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemHeaderText, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 90
                      }
                    },
                    'Share your link'
                  ),
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_8__["default"], { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemTextBorder, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 93
                    }
                  }),
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                    { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemSubHeaderText, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 94
                      }
                    },
                    'Start using your Bitcharge.co link by sharing it instantly with anyone: friends, customers, or partners. And now you can start accepting crypto from anyone in an instant.'
                  )
                )
              )
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].callActionContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 101
              }
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workHeaderContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 102
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                { tag: 'h2', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].heroHeaderText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                  }
                },
                'Set up your unique Bitcharge.co link today.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].callActionButtonContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 107
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Button__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], to: '/signup', primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].getStartedButton, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                  }
                },
                'Get Started ',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('i', { className: 'icon ion-md-arrow-round-forward ' + _styles__WEBPACK_IMPORTED_MODULE_13__["default"].getStartedButtonIcon, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                  }
                })
              )
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        })
      );
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/screens/Home/styles.js":
/*!************************************!*\
  !*** ./src/screens/Home/styles.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  label: home-main-cntr;\n'], ['\n  background-color: ', ';\n  label: home-main-cntr;\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  min-height: calc(100vh - 4.5em);\n  border-top: 1px solid ', ';\n  label: home-body-cntr;\n'], ['\n  min-height: calc(100vh - 4.5em);\n  border-top: 1px solid ', ';\n  label: home-body-cntr;\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 2em 0;\n  label: home-hero-cntr;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n'], ['\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 2em 0;\n  label: home-hero-cntr;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 1;\n  padding: 4em;\n  label: home-hero-text-cntr;\n  align-items: flex-start;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    align-items: center;\n    padding: 1.5em;\n  }\n'], ['\n  flex: 1;\n  padding: 4em;\n  label: home-hero-text-cntr;\n  align-items: flex-start;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    align-items: center;\n    padding: 1.5em;\n  }\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 1;\n  padding: 6em 4em;\n  align-items: center;\n  justify-content: center;\n  label: home-hero-image-cntr;\n\n  @media (max-width: ', ') {\n    padding: 2em;\n  }\n'], ['\n  flex: 1;\n  padding: 6em 4em;\n  align-items: center;\n  justify-content: center;\n  label: home-hero-image-cntr;\n\n  @media (max-width: ', ') {\n    padding: 2em;\n  }\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  margin-bottom: 1em;\n  label: home-hero-header-text;\n\n  @media (max-width: ', ') {\n    text-align: center;\n    font-size: 1.8em;\n  }\n'], ['\n  font-weight: 600;\n  margin-bottom: 1em;\n  label: home-hero-header-text;\n\n  @media (max-width: ', ') {\n    text-align: center;\n    font-size: 1.8em;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  line-height: 1.5em;\n  font-weight: 400;\n  margin-bottom: 1.5em;\n  label: home-hero-header-subtext;\n\n  @media (max-width: ', ') {\n    text-align: center;\n    font-size: 1em;\n    margin-bottom: 2.5em;\n  }\n'], ['\n  line-height: 1.5em;\n  font-weight: 400;\n  margin-bottom: 1.5em;\n  label: home-hero-header-subtext;\n\n  @media (max-width: ', ') {\n    text-align: center;\n    font-size: 1em;\n    margin-bottom: 2.5em;\n  }\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  max-width: 80%;\n  height: auto;\n  label: home-hero-image;\n\n  @media (max-width: ', ') {\n    max-width: 80%;\n  }\n'], ['\n  max-width: 80%;\n  height: auto;\n  label: home-hero-image;\n\n  @media (max-width: ', ') {\n    max-width: 80%;\n  }\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-left: 0.5em;\n  label: home-get-started-button-icon;\n'], ['\n  padding-left: 0.5em;\n  label: home-get-started-button-icon;\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-size: 1.3em;\n  font-weight: 600;\n  label: home-get-started-button;\n'], ['\n  font-size: 1.3em;\n  font-weight: 600;\n  label: home-get-started-button;\n']),
    _templateObject11 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  padding: 2em 4em;\n  border-bottom: 1px solid ', ';\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    padding: 2em 0;\n  }\n'], ['\n  flex-direction: row;\n  padding: 2em 4em;\n  border-bottom: 1px solid ', ';\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    padding: 2em 0;\n  }\n']),
    _templateObject12 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  margin-right: 2em;\n\n  @media (max-width: ', ') {\n    margin-right: 0;\n  }\n'], ['\n  font-weight: 600;\n  margin-right: 2em;\n\n  @media (max-width: ', ') {\n    margin-right: 0;\n  }\n']),
    _templateObject13 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  margin-right: 3em;\n\n  @media (max-width: ', ') {\n    margin-bottom: 1.5em;\n    margin-right: 0;\n  }\n'], ['\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  margin-right: 3em;\n\n  @media (max-width: ', ') {\n    margin-bottom: 1.5em;\n    margin-right: 0;\n  }\n']),
    _templateObject14 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 40px;\n  height: 40px;\n  margin-right: 1em;\n  border-radius: 50%;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 35px;\n    height: 35px;\n  }\n'], ['\n  width: 40px;\n  height: 40px;\n  margin-right: 1em;\n  border-radius: 50%;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 35px;\n    height: 35px;\n  }\n']),
    _templateObject15 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n  margin-bottom: 0px;\n\n  @media (max-width: ', ') {\n    font-size: 1.1em;\n  }\n\n'], ['\n  font-weight: 500;\n  margin-bottom: 0px;\n\n  @media (max-width: ', ') {\n    font-size: 1.1em;\n  }\n\n']),
    _templateObject16 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 2em 0 0 0;\n  label: home-work-cntr;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    padding: 0;\n  }\n'], ['\n  padding: 2em 0 0 0;\n  label: home-work-cntr;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    padding: 0;\n  }\n']),
    _templateObject17 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin: 2em;\n  align-items: center;\n  justify-content: center;\n'], ['\n  margin: 2em;\n  align-items: center;\n  justify-content: center;\n']),
    _templateObject18 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n\n'], ['\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n\n']),
    _templateObject19 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  background-color: ', ';\n  padding: 2em 1em;\n  margin: 0 2em;\n  justify-content: space-between;\n\n  &:nth-child(even) {\n    flex-direction: row-reverse;\n  }\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    margin: 0 1em;\n    padding: 1em 1em;\n\n    &:nth-child(even) {\n      flex-direction: column;\n    }\n  }\n'], ['\n  flex-direction: row;\n  background-color: ', ';\n  padding: 2em 1em;\n  margin: 0 2em;\n  justify-content: space-between;\n\n  &:nth-child(even) {\n    flex-direction: row-reverse;\n  }\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    margin: 0 1em;\n    padding: 1em 1em;\n\n    &:nth-child(even) {\n      flex-direction: column;\n    }\n  }\n']),
    _templateObject20 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 4em 4em;\n  flex: 1;\n  justify-content: center;\n  align-items: flex-start;\n\n  @media (max-width: ', ') {\n    padding: 2em 0;\n  }\n'], ['\n  padding: 4em 4em;\n  flex: 1;\n  justify-content: center;\n  align-items: flex-start;\n\n  @media (max-width: ', ') {\n    padding: 2em 0;\n  }\n']),
    _templateObject21 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  margin-bottom: .5em;\n\n  @media (max-width: ', ') {\n    text-align: center;\n    font-size: 1.5em;\n  }\n'], ['\n  font-weight: 600;\n  margin-bottom: .5em;\n\n  @media (max-width: ', ') {\n    text-align: center;\n    font-size: 1.5em;\n  }\n']),
    _templateObject22 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  height: 7px;\n  width: 40%;\n  background-color: ', ';\n\n  @media (max-width: ', ') {\n    height: 6px;\n  }\n'], ['\n  height: 7px;\n  width: 40%;\n  background-color: ', ';\n\n  @media (max-width: ', ') {\n    height: 6px;\n  }\n']),
    _templateObject23 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-top: 1.5em;\n  color: ', ';\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n\n'], ['\n  padding-top: 1.5em;\n  color: ', ';\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n\n']),
    _templateObject24 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 1;\n  padding: 2em 4em;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    padding: 0;\n    margin-bottom: 1em;\n  }\n'], ['\n  flex: 1;\n  padding: 2em 4em;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    padding: 0;\n    margin-bottom: 1em;\n  }\n']),
    _templateObject25 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 70%;\n  height: auto;\n\n  @media (max-width: ', ') {\n    width: 80%;\n  }\n'], ['\n  width: 70%;\n  height: auto;\n\n  @media (max-width: ', ') {\n    width: 80%;\n  }\n']),
    _templateObject26 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 2em 4em;\n  border-bottom: 1px solid ', ';\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    padding: 1em 0 3em 0;\n  }\n'], ['\n  padding: 2em 4em;\n  border-bottom: 1px solid ', ';\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    padding: 1em 0 3em 0;\n  }\n']),
    _templateObject27 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 2em;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    padding: 0;\n  }\n'], ['\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 2em;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    padding: 0;\n  }\n']);





var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white);

var bodyContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray);

var heroContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var heroTextContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var heroImageContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var heroSubHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var heroImage = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var getStartedButtonIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9);

var getStartedButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10);

var currenciesContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject11, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var currenciesSupportText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var currencyItemContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject13, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var addressIconImage = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject14, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var addressIconText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject15, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var workContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject16, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var workHeaderContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject17);

var workDetailsContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject18, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var workDetailsItemContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject19, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var workItemTextContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject20, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var workItemHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject21, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var workItemTextBorder = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject22, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var workItemSubHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject23, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText), _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var workItemImageContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject24, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var workItemImage = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject25, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var callActionContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject26, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var callActionButtonContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject27, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var styles = {
  mainContainer: mainContainer,
  bodyContainer: bodyContainer,
  heroContainer: heroContainer,
  heroTextContainer: heroTextContainer,
  heroImageContainer: heroImageContainer,
  heroHeaderText: heroHeaderText,
  heroSubHeaderText: heroSubHeaderText,
  heroImage: heroImage,
  getStartedButton: getStartedButton,
  getStartedButtonIcon: getStartedButtonIcon,
  currenciesContainer: currenciesContainer,
  currenciesSupportText: currenciesSupportText,
  currencyItemContainer: currencyItemContainer,
  addressIconImage: addressIconImage,
  addressIconText: addressIconText,
  workContainer: workContainer,
  workHeaderContainer: workHeaderContainer,
  workDetailsContainer: workDetailsContainer,
  workDetailsItemContainer: workDetailsItemContainer,
  workItemTextContainer: workItemTextContainer,
  workItemHeaderText: workItemHeaderText,
  workItemTextBorder: workItemTextBorder,
  workItemSubHeaderText: workItemSubHeaderText,
  workItemImageContainer: workItemImageContainer,
  workItemImage: workItemImage,
  callActionContainer: callActionContainer,
  callActionButtonContainer: callActionButtonContainer
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/Login/LoginForm/index.js":
/*!**********************************************!*\
  !*** ./src/screens/Login/LoginForm/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Input */ "./src/components/Input/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Spinner */ "./src/components/Spinner/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles */ "./src/screens/Login/LoginForm/styles.js");
var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Login/LoginForm/index.js';














var validationSchema = yup__WEBPACK_IMPORTED_MODULE_5__["object"]().shape({
  loginField: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required('Email is required'),
  password: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().min(6).required('Password is required')
});

var LoginForm = function LoginForm(_ref) {
  var onSubmit = _ref.onSubmit;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_6__["default"],
    { style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
      initialValues: { loginField: '', password: '' },
      onSubmit: onSubmit,
      validationSchema: validationSchema,
      render: function render(_ref2) {
        var values = _ref2.values,
            touched = _ref2.touched,
            handleChange = _ref2.handleChange,
            handleBlur = _ref2.handleBlur,
            handleSubmit = _ref2.handleSubmit,
            handleReset = _ref2.handleReset,
            errors = _ref2.errors,
            isValid = _ref2.isValid,
            isSubmitting = _ref2.isSubmitting;

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
            label: 'Username or Email',
            name: 'loginField',
            type: 'email',
            placeholder: 'awesome-doggo',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.loginField,
            error: touched.loginField && errors.loginField,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
            label: 'Password',
            name: 'password',
            type: 'password',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.password,
            error: touched.password && errors.password,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_6__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].buttonContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              }
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_8__["default"],
              {
                primary: true,
                disabled: !isValid || isSubmitting,
                type: 'submit',
                style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].submitButton,
                onClick: handleSubmit,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 63
                }
              },
              'Submit ',
              isSubmitting && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'span',
                { className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].spinnerIcon), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_9__["default"], { size: 20, width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                  }
                })
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_8__["default"],
              { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], to: '/forgot', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].cancelButton, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 72
                }
              },
              'Forgot Password'
            )
          )
        );
      }, __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    })
  );
};

LoginForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./src/screens/Login/LoginForm/styles.js":
/*!***********************************************!*\
  !*** ./src/screens/Login/LoginForm/styles.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 0 4em;\n  width: 100%;\n  label: login-body-form-cntr;\n\n  @media (max-width: ', ') {\n    padding: 0;\n  }\n'], ['\n  padding: 0 4em;\n  width: 100%;\n  label: login-body-form-cntr;\n\n  @media (max-width: ', ') {\n    padding: 0;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding-top: 1em;\n  margin-left: 1.6em;\n\n  @media (max-width: ', ') {\n  }\n'], ['\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding-top: 1em;\n  margin-left: 1.6em;\n\n  @media (max-width: ', ') {\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n'], ['\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-left: 0.5em;\n  label: login-submit-button-icon;\n'], ['\n  padding-left: 0.5em;\n  label: login-submit-button-icon;\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-left: 0.2em;\n'], ['\n  margin-left: 0.2em;\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: transparent;\n  color: ', ';\n  label: login-cancel-button;\n\n  &:hover {\n    color: ', ';\n  }\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n'], ['\n  background-color: transparent;\n  color: ', ';\n  label: login-cancel-button;\n\n  &:hover {\n    color: ', ';\n  }\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n']);





var formContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var buttonContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var submitButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var submitButtonIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4);

var spinnerIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5);

var cancelButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.4, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText), _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var styles = {
  formContainer: formContainer,
  buttonContainer: buttonContainer,
  submitButtonIcon: submitButtonIcon,
  spinnerIcon: spinnerIcon,
  submitButton: submitButton,
  cancelButton: cancelButton
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/Login/index.js":
/*!************************************!*\
  !*** ./src/screens/Login/index.js ***!
  \************************************/
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LoginForm */ "./src/screens/Login/LoginForm/index.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../store/actions/auth */ "./src/store/actions/auth.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./styles */ "./src/screens/Login/styles.js");







var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Login/index.js';















var Login = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Login, _Component);

  function Login(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Login);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Login.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(Login)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Login, [{
    key: 'handleSubmit',
    value: function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, bag) {
        var data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _api__WEBPACK_IMPORTED_MODULE_15__["default"].login(values);

              case 3:
                data = _context.sent;

                bag.setSubmitting(false);
                this.props.loginAction(data.user);
                this.props.history.push('/profile');
                _context.next = 14;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](0);

                console.log(_context.t0.response);
                bag.setSubmitting(false);
                bag.setErrors(_context.t0.response.data.errors.details.errors.errors);

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function handleSubmit(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isAuthenticated) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Redirect"], { to: '/profile', __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
        { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_17__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_17__["default"].heroContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_17__["default"].heroLogoContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'a',
              { href: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45
                }
              },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'bitcharge-logo', className: Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_17__["default"].logoImageStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1532990484/icons/bitcharge-logo-white.png', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45
                }
              })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_17__["default"].heroTextContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'login-avatar', className: Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_17__["default"].signupAvatarIconStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1535940305/panda-avatar.png', __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              }
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_14__["default"],
              { tag: 'h3', style: _styles__WEBPACK_IMPORTED_MODULE_17__["default"].heroText, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 49
                }
              },
              'Welcome back.'
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_17__["default"].heroFooterContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_14__["default"],
              { tag: 'h6', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 52
                }
              },
              'Don\'t have an account. ',
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"],
                { to: '/signup', className: Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_17__["default"].SignupLink), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                  }
                },
                'Signup'
              )
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_17__["default"].bodyContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_LoginForm__WEBPACK_IMPORTED_MODULE_12__["default"], { onSubmit: this.handleSubmit, __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          })
        )
      );
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Login.propTypes = {
  loginAction: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  history: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, { loginAction: _store_actions_auth__WEBPACK_IMPORTED_MODULE_16__["login"] })(Login));

/***/ }),

/***/ "./src/screens/Login/styles.js":
/*!*************************************!*\
  !*** ./src/screens/Login/styles.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  label: signup-main-cntr;\n  flex-direction: row;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n'], ['\n  background-color: ', ';\n  label: signup-main-cntr;\n  flex-direction: row;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 2;\n  background-color: ', ';\n  color: ', ';\n  padding: 0 2em;\n  label: signup-hero-cntr;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n'], ['\n  flex: 2;\n  background-color: ', ';\n  color: ', ';\n  padding: 0 2em;\n  label: signup-hero-cntr;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 5;\n  align-items: center;\n  justify-content: center;\n  padding: 2em;\n  height: 100vh;\n  label: signup-body-cntr;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n    height: auto;\n  }\n'], ['\n  flex: 5;\n  align-items: center;\n  justify-content: center;\n  padding: 2em;\n  height: 100vh;\n  label: signup-body-cntr;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n    height: auto;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-top: 1em;\n'], ['\n  padding-top: 1em;\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 150px;\n  height: auto;\n'], ['\n  width: 150px;\n  height: auto;\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 150px;\n  height: 150px;\n  border-radius: 75px;\n  margin-bottom: .5em;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 125px;\n    height: 125px;\n  }\n'], ['\n  width: 150px;\n  height: 150px;\n  border-radius: 75px;\n  margin-bottom: .5em;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 125px;\n    height: 125px;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 1em;\n  font-weight: 600;\n  text-align: center;\n\n  @media (max-width: ', ') {\n    margin-top: .5em;\n    font-size: 1.5em;\n  }\n'], ['\n  margin-top: 1em;\n  font-weight: 600;\n  text-align: center;\n\n  @media (max-width: ', ') {\n    margin-top: .5em;\n    font-size: 1.5em;\n  }\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 1;\n  padding: 1em;\n  label: signup-hero-text-cntr;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    flex: none;\n    margin-top: 1em;\n  }\n'], ['\n  flex: 1;\n  padding: 1em;\n  label: signup-hero-text-cntr;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    flex: none;\n    margin-top: 1em;\n  }\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-bottom: 1em;\n'], ['\n  margin-bottom: 1em;\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 1;\n  padding: 4em 4em 4em 2em;\n  align-items: center;\n  justify-content: center;\n  label: signup-hero-image-cntr;\n'], ['\n  flex: 1;\n  padding: 4em 4em 4em 2em;\n  align-items: center;\n  justify-content: center;\n  label: signup-hero-image-cntr;\n']),
    _templateObject11 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n  margin-bottom: 1em;\n  label: home-hero-header-text;\n\n  @media (max-width: ', ') {\n    margin-bottom: 0;\n  }\n'], ['\n  font-weight: 500;\n  margin-bottom: 1em;\n  label: home-hero-header-text;\n\n  @media (max-width: ', ') {\n    margin-bottom: 0;\n  }\n']),
    _templateObject12 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  line-height: 1.5em;\n  font-weight: 400;\n  margin-bottom: 1.5em;\n  label: home-hero-header-subtext;\n'], ['\n  line-height: 1.5em;\n  font-weight: 400;\n  margin-bottom: 1.5em;\n  label: home-hero-header-subtext;\n']),
    _templateObject13 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  max-width: 100%;\n  height: auto;\n  label: home-hero-image;\n'], ['\n  max-width: 100%;\n  height: auto;\n  label: home-hero-image;\n']),
    _templateObject14 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-size: 1.3em;\n  margin-right: 1em;\n  label: signup-submit-button;\n'], ['\n  font-size: 1.3em;\n  margin-right: 1em;\n  label: signup-submit-button;\n']),
    _templateObject15 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  display: inline-block;\n  text-decoration: none;\n  color: ', ';\n  padding: .3em;\n  border-radius: .1em;\n  label: login-signup-link;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\n  &:hover {\n    background-color: ', ';\n    color: ', ';\n  }\n'], ['\n  font-weight: 600;\n  display: inline-block;\n  text-decoration: none;\n  color: ', ';\n  padding: .3em;\n  border-radius: .1em;\n  label: login-signup-link;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\n  &:hover {\n    background-color: ', ';\n    color: ', ';\n  }\n']);




var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var bodyContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroLogoContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4);

var logoImageStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5);

var signupAvatarIconStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroTextContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroFooterContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9);

var heroImageContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10);

var heroHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject11, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroSubHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12);

var heroImage = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject13);

var submitButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject14);

var SignupLink = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject15, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary);

var styles = {
  mainContainer: mainContainer,
  bodyContainer: bodyContainer,
  heroContainer: heroContainer,
  heroLogoContainer: heroLogoContainer,
  heroTextContainer: heroTextContainer,
  heroText: heroText,
  heroFooterContainer: heroFooterContainer,
  signupAvatarIconStyle: signupAvatarIconStyle,
  heroImageContainer: heroImageContainer,
  heroHeaderText: heroHeaderText,
  heroSubHeaderText: heroSubHeaderText,
  heroImage: heroImage,
  logoImageStyle: logoImageStyle,
  submitButton: submitButton,
  SignupLink: SignupLink
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/Privacy/index.js":
/*!**************************************!*\
  !*** ./src/screens/Privacy/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-media */ "react-media");
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_media__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Navbar */ "./src/components/Navbar/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _components_Scroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Scroll */ "./src/components/Scroll/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles */ "./src/screens/Privacy/styles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");





var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Privacy/index.js';















var Privacy = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Privacy, _Component);

  function Privacy() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Privacy);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Privacy.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Privacy)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Privacy, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
        { fluid: true, fullHeight: true, style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Scroll__WEBPACK_IMPORTED_MODULE_13__["ScrollToTopOnMount"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
          { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
            { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].headerContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
              { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].headerTextStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                }
              },
              'Privacy Policy'
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              react_media__WEBPACK_IMPORTED_MODULE_8___default.a,
              { query: '(max-width: ' + _styles__WEBPACK_IMPORTED_MODULE_15__["breakpoints"].tablet + ')', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25
                }
              },
              function (matches) {
                return matches ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_9__["default"], { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].workItemTextBorder, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  }
                }) : null;
              }
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].detailsContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              }
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  }
                },
                'Bitcharge is a platform for people and businesses to accept cryptopayments in their favourite crypto currency. At Bitcharge, your privacy is important to us, and we want you to feel confident that your personal information is secure when using our products and our platform.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                  }
                }),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                  }
                }),
                'The services are provided by Droidsize Inc. (parent company and hereinafter referred to as \u201CBitcharge\u201D). It is Bitcharge\u2019s policy to respect your privacy regarding any information we may collect while operating our website.'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  }
                },
                'Website Visitors'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  }
                },
                'Like most website operators, Bitcharge collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Bitcharge\'s purpose in collecting non-personally identifying information is to better understand how Bitcharge\'s visitors use its website. From time to time, Bitcharge may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website. Bitcharge also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users on ',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"],
                  { to: '/', className: '' + Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].linkText), __source: {
                      fileName: _jsxFileName,
                      lineNumber: 39
                    }
                  },
                  'Bitcharge.com'
                ),
                '.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                  }
                },
                'Gathering of Personally-Identifying Information'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                  }
                },
                'Certain visitors to Bitcharge\'s websites choose to interact with Bitcharge in ways that require Bitcharge to gather personally-identifying information. The amount and type of information that Bitcharge gathers depends on the nature of the interaction. For example, we ask visitors who sign up at ',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"],
                  { to: '/', className: '' + Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].linkText), __source: {
                      fileName: _jsxFileName,
                      lineNumber: 47
                    }
                  },
                  'Bitcharge.com'
                ),
                ' to provide a username and email address. In each case, Bitcharge collects such information only insofar as is necessary or appropriate to fulfill the purpose of the visitor\'s interaction with Bitcharge. Bitcharge does not disclose personally-identifying information other than as described below. And visitors can always refuse to supply personally-identifying information, with the caveat that it may prevent them from engaging in certain website-related activities.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  }
                },
                'Aggregated Statistics'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                  }
                },
                'Bitcharge may collect statistics about the behavior of visitors to its websites. Bitcharge may display this information publicly or provide it to others. However, Bitcharge does not disclose personally-identifying information other than as described below.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 58
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                  }
                },
                'Protection of Certain Personally-Identifying Information'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                  }
                },
                'Bitcharge discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that (i) need to know that information in order to process it on Bitcharge\'s behalf or to provide services available at Bitcharge\'s websites, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using Bitcharge\'s websites, you consent to the transfer of such information to them. Bitcharge will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations, as described above, Bitcharge discloses potentially personally-identifying and personally-identifying information only in response to a subpoena, court order or other governmental request, or when Bitcharge believes in good faith that disclosure is reasonably necessary to protect the property or rights of Bitcharge, third parties or the public at large. If you are a registered user of an Bitcharge website and have supplied your email address, Bitcharge may occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what\'s going on with Bitcharge and our products. If you send us a request (for example via email or via one of our feedback mechanisms), we reserve the right to publish it in order to help us clarify or respond to your request or to help us support other users. Bitcharge takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                  }
                },
                'Cookies'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                  }
                },
                'A cookie is a string of information that a website stores on a visitor\'s computer, and that the visitor\'s browser provides to the website each time the visitor returns. For more information, visit ',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  'a',
                  { className: '' + Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].linkText), href: 'http://www.allaboutcookies.org/', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 71
                    }
                  },
                  'All About Cookies'
                ),
                '.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                  }
                }),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                  }
                }),
                'Bitcharge uses cookies to help Bitcharge identify and track visitors, their usage of Bitcharge website, and their website access preferences. Some cookies expire after a certain amount of time, or upon logging out (session cookies), others remain on your computer or terminal device for a longer period (persistent cookies). Our Site uses first party cookies (cookies set directly by Anchor) as well as third party cookies, as described below',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                  }
                }),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                  }
                }),
                'Strictly Necessary Cookies: Used to provide Users with the Services available through our Site and to use some of their features, such as the ability to log-in and access to secure areas. These cookies are served by Anchor and are essential for using and navigating the Site. Without these cookies, basic functions of our Site would not work. Because these cookies are strictly necessary to deliver the Site and the Services, you cannot refuse them.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                  }
                }),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                  }
                }),
                'Analytics/Performance: Used to better understand the behavior of the Users on our Site and improve our Site accordingly, for example by making sure Users are finding what they need easily. The Site uses Google Analytics, a web analytics service provided by Google Inc. (\u201CGoogle\u201D). The information collected by Google (including your IP address) will be transmitted to and stored by Google on servers in the United States (Google is certified to the Privacy Shield for data transfers). How long a Google Analytics cookie remains on your computer or device depends on what it is and what it is used for. Some Google Analytics cookies expire at the end of your browser session, whilst others can remain for up to two years. You can prevent your data from being collected by Google Analytics on our Site by downloading and installing the ',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  'a',
                  { className: '' + Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].linkText), href: 'https://tools.google.com/dlpage/gaoptout?hl=en', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 74
                    }
                  },
                  'Google Analytics Opt-out Browser Add-on'
                ),
                ' for your current web browser. For more information on Google Analytics privacy practices, read here.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                  }
                }),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                  }
                }),
                'Bitcharge visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Bitcharge\'s websites, with the drawback that certain features of Bitcharge\'s websites may not function properly without the aid of cookies.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 78
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                  }
                },
                'International Users'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                  }
                },
                'Bitcharge is based in India and the some of its servers are based in the United States. If you are accessing our Services from the European Union or other regions with laws governing data collection and use, please note that your Personal Data will be transmitted to our servers in India and the United States and the data may be transmitted to our service providers supporting our business operations (described above). India and United States may have data protection laws less stringent than or otherwise different from the laws in effect in the country in which you are located. Where we transfer your Personal Data out of the EU we will take steps to ensure that your Personal Data receives an adequate level of protection where it is processed and your rights continue to be protected (GDPR).',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                  }
                }),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                  }
                }),
                'By providing your information to the Services you agree to the transfer of your information to India and the United States and processing globally in accordance with this Privacy Policy.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 87
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                  }
                },
                'Privacy Policy Changes'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                  }
                },
                'Although most changes are likely to be minor, Bitcharge may change its Privacy Policy from time to time, and in Bitcharge\'s sole discretion. Bitcharge encourages visitors to frequently check this page for any changes to its Privacy Policy. If you have a ',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"],
                  { to: '/', className: '' + Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].linkText), __source: {
                      fileName: _jsxFileName,
                      lineNumber: 92
                    }
                  },
                  'Bitcharge.com'
                ),
                ' account, you might also receive an alert informing you of these changes. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 95
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                  }
                },
                'Other Terms and Conditions'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                  }
                },
                'Your access to and use of the Bitcharge is subject to any additional terms applicable to such Services that may be posted on the Terms from time to time, including without limitation, Bitcharge\u2019s Terms of Use available at ',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"],
                  { to: '/terms', className: '' + Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].linkText), __source: {
                      fileName: _jsxFileName,
                      lineNumber: 100
                    }
                  },
                  'https://www.bitcharge.co/terms'
                ),
                '.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 103
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                  }
                },
                'Contact Us'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                  }
                },
                'Please feel free to contact us if you have any questions about Bitcharge\u2019s Privacy Policy or the information practices. You may contact us by sending an email to ',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  'a',
                  { className: '' + Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].linkText), href: 'mailto:support@bitcharge.co', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 108
                    }
                  },
                  'support@bitcharge.co'
                )
              )
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        })
      );
    }
  }]);

  return Privacy;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Privacy);

/***/ }),

/***/ "./src/screens/Privacy/styles.js":
/*!***************************************!*\
  !*** ./src/screens/Privacy/styles.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  label: home-main-cntr;\n\n  @media (max-width: ', ') {\n    background-color: ', ';\n  }\n'], ['\n  background-color: ', ';\n  label: home-main-cntr;\n\n  @media (max-width: ', ') {\n    background-color: ', ';\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  min-height: calc(100vh - 4.5em);\n  border-top: 2px solid ', ';\n  align-items: center;\n  label: home-body-cntr;\n\n  @media (max-width: ', ') {\n    border-bottom: 1px solid ', ';\n  }\n'], ['\n  min-height: calc(100vh - 4.5em);\n  border-top: 2px solid ', ';\n  align-items: center;\n  label: home-body-cntr;\n\n  @media (max-width: ', ') {\n    border-bottom: 1px solid ', ';\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  height: 7px;\n  width: 60%;\n  margin-top: .5em;\n  background-color: ', ';\n\n  @media (max-width: ', ') {\n    height: 6px;\n  }\n'], ['\n  height: 7px;\n  width: 60%;\n  margin-top: .5em;\n  background-color: ', ';\n\n  @media (max-width: ', ') {\n    height: 6px;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 5em;\n  margin-bottom: 3em;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    margin-top: 3em;\n    margin-bottom: 0em;\n  }\n'], ['\n  margin-top: 5em;\n  margin-bottom: 3em;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    margin-top: 3em;\n    margin-bottom: 0em;\n  }\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n\n  @media (max-width: ', ') {\n    font-weight: 500;\n    font-size: 2em;\n  }\n'], ['\n  font-weight: 600;\n\n  @media (max-width: ', ') {\n    font-weight: 500;\n    font-size: 2em;\n  }\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 65%;\n  margin-top: 3em;\n  margin-bottom: 5em;\n  background-color: ', ';\n  border-radius: 5px;\n  border: 1px solid ', ';\n  padding: 4em 5em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    padding: 1.5em;\n    border: 0;\n  }\n'], ['\n  width: 65%;\n  margin-top: 3em;\n  margin-bottom: 5em;\n  background-color: ', ';\n  border-radius: 5px;\n  border: 1px solid ', ';\n  padding: 4em 5em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    padding: 1.5em;\n    border: 0;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 2em 0;\n  border-bottom: 1px dashed ', ';\n\n  &:last-child {\n    border-bottom: 0;\n  }\n'], ['\n  padding: 2em 0;\n  border-bottom: 1px dashed ', ';\n\n  &:last-child {\n    border-bottom: 0;\n  }\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n  margin: 1em 0 1.5em 0;\n'], ['\n  font-weight: 500;\n  margin: 1em 0 1.5em 0;\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  color: ', ';\n  line-height: 1.5;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    font-size: 1em;\n  }\n'], ['\n  color: ', ';\n  line-height: 1.5;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    font-size: 1em;\n  }\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  color: ', ';\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.15s ease-out;\n\n  &:hover {\n    color: ', ';\n  }\n'], ['\n  color: ', ';\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.15s ease-out;\n\n  &:hover {\n    color: ', ';\n  }\n']);





var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].background, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white);

var bodyContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder);

var workItemTextBorder = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var headerContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var headerTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var detailsContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.1, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder), _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var sectionContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder);

var sectionHeader = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8);

var bodyText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText), _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var linkText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].linkText, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].linkText));

var styles = {
  mainContainer: mainContainer,
  bodyContainer: bodyContainer,
  detailsContainer: detailsContainer,
  headerContainer: headerContainer,
  workItemTextBorder: workItemTextBorder,
  headerTextStyle: headerTextStyle,
  sectionContainer: sectionContainer,
  sectionHeader: sectionHeader,
  bodyText: bodyText,
  linkText: linkText
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/Profile/DropdownItem/index.js":
/*!***************************************************!*\
  !*** ./src/screens/Profile/DropdownItem/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./src/screens/Profile/DropdownItem/styles.js");

var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Profile/DropdownItem/index.js';









var DropdownItem = function DropdownItem(props) {
  var isDisabled = props.isDisabled,
      data = props.data;

  return !isDisabled ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    react_select__WEBPACK_IMPORTED_MODULE_3__["components"].Option,
    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('img', { alt: 'dropdown-icon', src: data.currency.icon, className: Object(emotion__WEBPACK_IMPORTED_MODULE_4__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_6__["default"].dropdownItemImage), __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_5__["default"],
      { tag: 'h5', unstyled: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      },
      data.currency.name
    )
  ) : null;
};

DropdownItem.propTypes = {
  isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.boolean,
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};

/* harmony default export */ __webpack_exports__["default"] = (DropdownItem);

/***/ }),

/***/ "./src/screens/Profile/DropdownItem/styles.js":
/*!****************************************************!*\
  !*** ./src/screens/Profile/DropdownItem/styles.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-right: 1em;\n  width: 2em;\n  height: 2em;\n  border-radius: 50%;\n  border: 1px solid ', ';\n'], ['\n  margin-right: 1em;\n  width: 2em;\n  height: 2em;\n  border-radius: 50%;\n  border: 1px solid ', ';\n']);




var dropdownItemImage = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white);

/* harmony default export */ __webpack_exports__["default"] = ({
  dropdownItemImage: dropdownItemImage
});

/***/ }),

/***/ "./src/screens/Profile/SingleValue/index.js":
/*!**************************************************!*\
  !*** ./src/screens/Profile/SingleValue/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./src/screens/Profile/SingleValue/styles.js");

var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Profile/SingleValue/index.js';









var SingleValue = function SingleValue(props) {
  var data = props.data;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    react_select__WEBPACK_IMPORTED_MODULE_3__["components"].SingleValue,
    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('img', { alt: 'selected-icon', src: data.currency.icon, className: Object(emotion__WEBPACK_IMPORTED_MODULE_4__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_6__["default"].selectedItemImage), __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_5__["default"],
      { tag: 'h5', unstyled: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      data.currency.name
    )
  );
};

SingleValue.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any
};

/* harmony default export */ __webpack_exports__["default"] = (SingleValue);

/***/ }),

/***/ "./src/screens/Profile/SingleValue/styles.js":
/*!***************************************************!*\
  !*** ./src/screens/Profile/SingleValue/styles.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-right: 1em;\n  width: 1.8em;\n  height: 1.8em;\n  border-radius: 50%;\n  border: 1px solid ', ';\n'], ['\n  margin-right: 1em;\n  width: 1.8em;\n  height: 1.8em;\n  border-radius: 50%;\n  border: 1px solid ', ';\n']);




var selectedItemImage = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white);

/* harmony default export */ __webpack_exports__["default"] = ({
  selectedItemImage: selectedItemImage
});

/***/ }),

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
              lineNumber: 73
            }
          },
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
            { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].bodyDataContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 74
              }
            },
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].addressContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 75
                }
              },
              react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].noAddressImageContainer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('img', { className: Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_25__["default"].noAddressImage), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1536110953/assets/building-profile.png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                  }
                })
              ),
              react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_18__["default"],
                { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].noAddressText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
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
            lineNumber: 95
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
            lineNumber: 96
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
          { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].bodyDataContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 106
            }
          },
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].addressContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 107
              }
            },
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_18__["default"],
              { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].addressHeaderStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 108
                }
              },
              'Wallet Address'
            ),
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_18__["default"],
              { tag: 'h6', style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].addressValueText, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 109
                }
              },
              addressText
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].qrcodeContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 111
              }
            },
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_13___default.a, { value: addressText, size: 172, __source: {
                fileName: _jsxFileName,
                lineNumber: 112
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
            lineNumber: 121
          }
        },
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].cardHeaderContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 122
            }
          },
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].avatarContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 123
              }
            },
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('img', { alt: 'user-avatar', className: Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_25__["default"].avatarIconStyle), src: user.avatar || 'https://res.cloudinary.com/bitcharge/image/upload/v1535940305/panda-avatar.png', __source: {
                fileName: _jsxFileName,
                lineNumber: 124
              }
            })
          ),
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].headerTextContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 126
              }
            },
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_18__["default"],
              { tag: 'h5', unstyled: true, style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].headerTextStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 127
                }
              },
              user.name
            ),
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_18__["default"],
              { tag: 'h6', unstyled: true, style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].headerSubTextStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 128
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
            lineNumber: 138
          }
        },
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_21__["default"], { size: 50, width: 7, color: _styles__WEBPACK_IMPORTED_MODULE_26__["colors"].lightText, __source: {
            fileName: _jsxFileName,
            lineNumber: 139
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
            lineNumber: 146
          }
        },
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].cardErrorHeaderContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 147
            }
          },
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].errorHeaderTextContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 148
              }
            },
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_18__["default"],
              { tag: 'h3', unstyled: true, style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].errorHeaderTextStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 149
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
              lineNumber: 152
            }
          },
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].noAddressImageContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 153
              }
            },
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('img', { className: Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_25__["default"].errorUserImage), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1536119853/assets/user-not-found.png', __source: {
                fileName: _jsxFileName,
                lineNumber: 154
              }
            })
          ),
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_18__["default"],
            { tag: 'h6', style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].errorUserText, __source: {
                fileName: _jsxFileName,
                lineNumber: 156
              }
            },
            'Seems like nobody has a Bitcharge profile with that username, try checking the link again. You can also create your own Bitcharge profile with this username. '
          ),
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_22__["default"],
            { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Link"], to: '/signup', primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].getStartedButton, __source: {
                fileName: _jsxFileName,
                lineNumber: 157
              }
            },
            'Create My Profile ',
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('i', { className: 'icon ion-md-arrow-round-forward ' + _styles__WEBPACK_IMPORTED_MODULE_25__["default"].getStartedButtonIcon, __source: {
                fileName: _jsxFileName,
                lineNumber: 157
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
            lineNumber: 180
          }
        },
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('meta', { property: 'og:title', content: 'Pay ' + firstName + ' in crypto with Bitcharge', __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('meta', { property: 'og:description', content: 'Go to bitcharge.co/' + user.username + ' to pay ' + firstName + ' in your favourite cryptocurrency.', __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('meta', { property: 'og:image', content: 'https://res.cloudinary.com/bitcharge/image/upload/v1536051435/assets/bitcharge-social-graph.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('meta', { property: 'og:image:alt', content: 'Bitcharge', __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('meta', { property: 'og:url', content: 'https://bitcharge.co/' + user.username, __source: {
            fileName: _jsxFileName,
            lineNumber: 185
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
            lineNumber: 193
          }
        },
        user && this.getMetaTags(user),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_19__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
          { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].bodyContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 196
            }
          },
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].cardContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 197
              }
            },
            this._renderCard()
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_20__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          }
        })
      );
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Profile.propTypes = {
  match: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./src/screens/Profile/styles.js":
/*!***************************************!*\
  !*** ./src/screens/Profile/styles.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n'], ['\n  background-color: ', ';\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n'], ['\n  font-weight: 500;\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 100%;\n  min-height: calc(100vh - 6em);\n  align-items: center;\n  border-bottom: 1px dashed ', ';\n\n  @media (max-width: ', ') {\n    padding-bottom: 2em;\n    background-color: ', ';\n    border-top: 1px solid ', ';\n  }\n'], ['\n  width: 100%;\n  min-height: calc(100vh - 6em);\n  align-items: center;\n  border-bottom: 1px dashed ', ';\n\n  @media (max-width: ', ') {\n    padding-bottom: 2em;\n    background-color: ', ';\n    border-top: 1px solid ', ';\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  min-width: 32em;\n  max-width: 42em;\n  margin-top: 3em;\n  margin-bottom: 3em;\n  background-color: ', ';\n  border-radius: 4px;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    min-width: 100%;\n    max-width: 100%;\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n'], ['\n  min-width: 32em;\n  max-width: 42em;\n  margin-top: 3em;\n  margin-bottom: 3em;\n  background-color: ', ';\n  border-radius: 4px;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    min-width: 100%;\n    max-width: 100%;\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  align-items: center;\n  justify-content: center;\n  padding: 5em;\n'], ['\n  align-items: center;\n  justify-content: center;\n  padding: 5em;\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 2.5em 2em;\n  background-color: ', ';\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n'], ['\n  padding: 2.5em 2em;\n  background-color: ', ';\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 2em;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    padding: 1.5em 2em;\n  }\n'], ['\n  padding: 2em;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    padding: 1.5em 2em;\n  }\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  align-items: center;\n  justify-content: center;\n'], ['\n  align-items: center;\n  justify-content: center;\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 100%;\n  padding: 2em 4em;\n  margin-bottom: 1em;\n  align-items: center;\n\n  @media (max-width: ', ') {\n    padding: 2em 1em 1em 1em;\n  }\n'], ['\n  width: 100%;\n  padding: 2em 4em;\n  margin-bottom: 1em;\n  align-items: center;\n\n  @media (max-width: ', ') {\n    padding: 2em 1em 1em 1em;\n  }\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 60%;\n  height: auto;\n\n  @media (max-width: ', ') {\n    width: 80%;\n  }\n'], ['\n  width: 60%;\n  height: auto;\n\n  @media (max-width: ', ') {\n    width: 80%;\n  }\n']),
    _templateObject11 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 65%;\n  height: auto;\n\n  @media (max-width: ', ') {\n    width: 80%;\n  }\n'], ['\n  width: 65%;\n  height: auto;\n\n  @media (max-width: ', ') {\n    width: 80%;\n  }\n']),
    _templateObject12 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n  margin: 1em 2em;\n  text-align: center;\n\n  @media (max-width: ', ') {\n    font-size: 1.2em;\n  }\n'], ['\n  font-weight: 500;\n  margin: 1em 2em;\n  text-align: center;\n\n  @media (max-width: ', ') {\n    font-size: 1.2em;\n  }\n']),
    _templateObject13 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 400;\n  margin: 1em 2em;\n  line-height: 1.5em;\n  text-align: center;\n\n  @media (max-width: ', ') {\n    font-size: .9em;\n  }\n'], ['\n  font-weight: 400;\n  margin: 1em 2em;\n  line-height: 1.5em;\n  text-align: center;\n\n  @media (max-width: ', ') {\n    font-size: .9em;\n  }\n']),
    _templateObject14 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 100px;\n  height: 100px;\n  border-radius: 50px;\n  border: 2px solid ', ';\n'], ['\n  width: 100px;\n  height: 100px;\n  border-radius: 50px;\n  border: 2px solid ', ';\n']),
    _templateObject15 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-top: .8em;\n  text-align: center;\n  color: ', ';\n'], ['\n  padding-top: .8em;\n  text-align: center;\n  color: ', ';\n']),
    _templateObject16 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-top: .8em;\n  text-align: center;\n'], ['\n  padding-top: .8em;\n  text-align: center;\n']),
    _templateObject17 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  margin-bottom: .2em;\n'], ['\n  font-weight: 600;\n  margin-bottom: .2em;\n']),
    _templateObject18 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n  margin-bottom: .2em;\n  color: ', ';\n\n  @media (max-width: ', ') {\n    font-size: 1.3em;\n  }\n'], ['\n  font-weight: 500;\n  margin-bottom: .2em;\n  color: ', ';\n\n  @media (max-width: ', ') {\n    font-size: 1.3em;\n  }\n']),
    _templateObject19 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 400;\n'], ['\n  font-weight: 400;\n']),
    _templateObject20 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  align-items: center;\n  width: 32em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n  }\n\n'], ['\n  align-items: center;\n  width: 32em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n  }\n\n']),
    _templateObject21 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  align-items: center;\n  padding: 1em;\n\n  @media (max-width: ', ') {\n    padding: 0.5em;\n  }\n'], ['\n  align-items: center;\n  padding: 1em;\n\n  @media (max-width: ', ') {\n    padding: 0.5em;\n  }\n']),
    _templateObject22 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  @media (max-width: ', ') {\n    font-size: 13px;\n  }\n'], ['\n  @media (max-width: ', ') {\n    font-size: 13px;\n  }\n']),
    _templateObject23 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: .5em;\n  align-items: center;\n'], ['\n  margin-top: .5em;\n  align-items: center;\n']),
    _templateObject24 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 2em;\n'], ['\n  margin-top: 2em;\n']),
    _templateObject25 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-bottom: 2em;\n  align-items: center;\n'], ['\n  padding-bottom: 2em;\n  align-items: center;\n']),
    _templateObject26 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  width: 90%;\n  align-items: center;\n  justify-content: flex-end;\n  @media (max-width: ', ') {\n    width: 90%;\n    justify-content: flex-end;\n  }\n'], ['\n  flex-direction: row;\n  width: 90%;\n  align-items: center;\n  justify-content: flex-end;\n  @media (max-width: ', ') {\n    width: 90%;\n    justify-content: flex-end;\n  }\n']),
    _templateObject27 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-left: .8em;\n  padding-right: .2em;\n  padding-top: .2em;\n  padding-bottom: .2em;\n  font-size: 1.1em;\n\n  &:last-child {\n    padding-right: 0em;\n  }\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n'], ['\n  padding-left: .8em;\n  padding-right: .2em;\n  padding-top: .2em;\n  padding-bottom: .2em;\n  font-size: 1.1em;\n\n  &:last-child {\n    padding-right: 0em;\n  }\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n']),
    _templateObject28 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-right: 4px;\n  color: ', ';\n'], ['\n  margin-right: 4px;\n  color: ', ';\n']),
    _templateObject29 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  color: ', ';\n  font-weight: 500;\n  padding-top: .4em;\n  padding-right: .2em;\n  font-size: 1em;\n  transition: all 0.15s ease-out;\n'], ['\n  color: ', ';\n  font-weight: 500;\n  padding-top: .4em;\n  padding-right: .2em;\n  font-size: 1em;\n  transition: all 0.15s ease-out;\n']),
    _templateObject30 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n'], ['\n']),
    _templateObject31 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 1.2em;\n  align-items: center;\n  justify-content: center;\n'], ['\n  padding: 1.2em;\n  align-items: center;\n  justify-content: center;\n']),
    _templateObject32 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 10em;\n  height: 10em;\n'], ['\n  width: 10em;\n  height: 10em;\n']),
    _templateObject33 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-left: 0.5em;\n  label: home-get-started-button-icon;\n'], ['\n  padding-left: 0.5em;\n  label: home-get-started-button-icon;\n']),
    _templateObject34 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin: 1em 0em 1.5em 0;\n  font-size: 1em;\n  font-weight: 600;\n  label: home-get-started-button;\n\n  @media (max-width: ', ') {\n    font-size: .9em;\n  }\n'], ['\n  margin: 1em 0em 1.5em 0;\n  font-size: 1em;\n  font-weight: 600;\n  label: home-get-started-button;\n\n  @media (max-width: ', ') {\n    font-size: .9em;\n  }\n']);





var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].background);

var logoTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2);

var bodyContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder);

var cardContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var loadingContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5);

var cardHeaderContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var cardErrorHeaderContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var avatarContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8);

var noAddressImageContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var noAddressImage = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var errorUserImage = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject11, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var noAddressText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var errorUserText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject13, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var avatarIconStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject14, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white);

var headerTextContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject15, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white);

var errorHeaderTextContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject16);

var headerTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject17);

var errorHeaderTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject18, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var headerSubTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject19);

var cardBodyContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject20, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var bodyDataContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject21, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var addressValueText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject22, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var addressContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject23);

var noUserDetailsContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject24);

var errorUserContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject25);

var optionsContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject26, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var addressActionButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject27, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var iconButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject28, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText));

var copiedTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject29, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary);

var addNewEmptyButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject24);

var addressHeaderStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject30);

var qrcodeContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject31);

var qrcodeImage = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject32);

var getStartedButtonIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject33);

var getStartedButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject34, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var selectStyle = {
  boxSizing: 'border-box',
  width: '100%',
  borderRadius: 0,
  border: 0,
  borderBottom: '1px solid ' + _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].background,
  padding: '0.8em',
  fontFamily: _styles__WEBPACK_IMPORTED_MODULE_2__["typography"].primaryFont,
  fontSize: '1.2rem',
  backgroundColor: _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white,
  '&:hover': {
    border: 0,
    borderBottom: '1px solid ' + _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].background
  }
};

var dropdownItemStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '0.8em',
  maxWidth: '100%',
  transition: 'background 0.3s ease-out',
  '&:hover': {
    backgroundColor: _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary,
    color: _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white
  },
  '&:active': {
    backgroundColor: _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary,
    color: _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white
  }
};

var singleValueStyle = {
  display: 'flex',
  alignItems: 'center'
};

var styles = {
  mainContainer: mainContainer,
  logoTextStyle: logoTextStyle,
  bodyContainer: bodyContainer,
  cardContainer: cardContainer,
  loadingContainer: loadingContainer,
  cardHeaderContainer: cardHeaderContainer,
  cardErrorHeaderContainer: cardErrorHeaderContainer,
  cardBodyContainer: cardBodyContainer,
  avatarContainer: avatarContainer,
  noAddressImageContainer: noAddressImageContainer,
  noAddressText: noAddressText,
  noAddressImage: noAddressImage,
  avatarIconStyle: avatarIconStyle,
  headerTextContainer: headerTextContainer,
  headerTextStyle: headerTextStyle,
  errorHeaderTextStyle: errorHeaderTextStyle,
  headerSubTextStyle: headerSubTextStyle,
  bodyDataContainer: bodyDataContainer,
  addressContainer: addressContainer,
  addressValueText: addressValueText,
  iconButton: iconButton,
  copiedTextStyle: copiedTextStyle,
  optionsContainer: optionsContainer,
  addressActionButton: addressActionButton,
  addressHeaderStyle: addressHeaderStyle,
  qrcodeContainer: qrcodeContainer,
  qrcodeImage: qrcodeImage,
  addNewEmptyButton: addNewEmptyButton,
  selectStyle: selectStyle,
  singleValueStyle: singleValueStyle,
  dropdownItemStyle: dropdownItemStyle,

  errorUserImage: errorUserImage,
  errorUserText: errorUserText,
  noUserDetailsContainer: noUserDetailsContainer,
  errorUserContainer: errorUserContainer,
  errorHeaderTextContainer: errorHeaderTextContainer,
  getStartedButton: getStartedButton,
  getStartedButtonIcon: getStartedButtonIcon
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/Settings/EditSettingsForm/index.js":
/*!********************************************************!*\
  !*** ./src/screens/Settings/EditSettingsForm/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Input */ "./src/components/Input/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles */ "./src/screens/Settings/styles.js");
var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Settings/EditSettingsForm/index.js';













var validationSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
  username: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2),
  password: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(6)
});

var EditSettingsForm = function EditSettingsForm(_ref) {
  var onSubmit = _ref.onSubmit,
      onCancel = _ref.onCancel,
      user = _ref.user;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: { username: user.username, password: '' },
    onSubmit: onSubmit,
    validationSchema: validationSchema,
    render: function render(_ref2) {
      var values = _ref2.values,
          handleChange = _ref2.handleChange,
          handleSubmit = _ref2.handleSubmit,
          handleBlur = _ref2.handleBlur,
          errors = _ref2.errors,
          touched = _ref2.touched,
          isValid = _ref2.isValid,
          isSubmitting = _ref2.isSubmitting;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsBodyContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_6__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemLabel, __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            },
            'Username'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
            name: 'username',
            noErrorText: true,
            inputStyle: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].textInputStyle,
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.username,
            error: touched.username && errors.username,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_6__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemLabel, __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              }
            },
            'Email'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_6__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemValue, __source: {
                fileName: _jsxFileName,
                lineNumber: 53
              }
            },
            user.email
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_6__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemLabel, __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              }
            },
            'Password'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
            name: 'password',
            noErrorText: true,
            inputStyle: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].textInputStyle,
            type: 'password',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.password,
            error: touched.password && errors.password,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_6__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemLabel, __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              }
            },
            'Email Verification'
          ),
          user.active ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_6__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemValue, __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              }
            },
            'Verified ',
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'icon ion-md-checkmark-circle-outline ' + Object(emotion__WEBPACK_IMPORTED_MODULE_4__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].verifiedIcon), __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              }
            })
          ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
            { secondary: true, style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].editSettingsButton, __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              }
            },
            'Resend Email',
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'icon ion-md-arrow-round-forward ' + Object(emotion__WEBPACK_IMPORTED_MODULE_4__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].editIcon), __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              }
            })
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
          { style: Object(emotion__WEBPACK_IMPORTED_MODULE_4__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemContainer, _styles__WEBPACK_IMPORTED_MODULE_9__["default"].editButtonContainer), __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
            {
              primary: true,
              disabled: !isValid || isSubmitting,
              onClick: handleSubmit,
              style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].editAddressSaveButton,
              type: 'submit',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              }
            },
            'Save'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
            {
              onClick: onCancel,
              style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].editAddressCancelButton,
              link: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 84
              }
            },
            'Cancel'
          )
        )
      );
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  });
};

EditSettingsForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/* harmony default export */ __webpack_exports__["default"] = (EditSettingsForm);

/***/ }),

/***/ "./src/screens/Settings/index.js":
/*!***************************************!*\
  !*** ./src/screens/Settings/index.js ***!
  \***************************************/
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
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Spinner */ "./src/components/Spinner/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _EditSettingsForm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./EditSettingsForm */ "./src/screens/Settings/EditSettingsForm/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../store/actions/auth */ "./src/store/actions/auth.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./styles */ "./src/screens/Settings/styles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");







var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Settings/index.js';

















var SettingsBody = function SettingsBody(_ref) {
  var user = _ref.user;

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
    { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsBodyContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    },
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      },
      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
        { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemLabel, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        },
        'Username'
      ),
      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
        { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemValue, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        },
        user.username
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      },
      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
        { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemLabel, __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        },
        'Email'
      ),
      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
        { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemValue, __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        },
        user.email
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      },
      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
        { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemLabel, __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        },
        'Password'
      ),
      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
        { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemValue, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        },
        'Change ',
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('i', { className: 'icon ion-md-create ' + Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].verifiedIcon), __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        })
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      },
      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
        { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemLabel, __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        },
        'Email Verification'
      ),
      user.active ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
        { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemValue, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        'Verified ',
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('i', { className: 'icon ion-md-checkmark-circle-outline ' + Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].verifiedIcon), __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        })
      ) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_14__["default"],
        { secondary: true, style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].editSettingsButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        },
        'Resend Email',
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('i', { className: 'icon ion-md-arrow-round-forward ' + Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].editIcon), __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        })
      )
    )
  );
};

var Settings = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Settings, _Component);

  function Settings() {
    var _ref2;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Settings);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (_ref2 = Settings.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(Settings)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      isEditing: false
    }, _this._renderLoading = function () {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].loadingContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_12__["default"], { size: 50, width: 7, color: _styles__WEBPACK_IMPORTED_MODULE_19__["colors"].lightText, __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        })
      );
    }, _this.onEdit = function () {
      _this.setState({ isEditing: true });
    }, _this.onCancelEdit = function () {
      _this.setState({ isEditing: false });
    }, _this._renderUserDetails = function (user) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsHeaderContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
            { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsHeaderTextStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 90
              }
            },
            'Settings'
          ),
          _this.state.isEditing ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_14__["default"],
            { onClick: _this.onCancelEdit, style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].editSettingsButton, secondary: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              }
            },
            'Cancel',
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('i', { className: 'icon ion-md-close ' + Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].editIcon), __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              }
            })
          ) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_14__["default"],
            { onClick: _this.onEdit, style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].editSettingsButton, primary: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 94
              }
            },
            'Edit',
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('i', { className: 'icon ion-md-arrow-round-forward ' + Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].editIcon), __source: {
                fileName: _jsxFileName,
                lineNumber: 94
              }
            })
          )
        ),
        _this.state.isEditing ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_EditSettingsForm__WEBPACK_IMPORTED_MODULE_15__["default"], { user: user, onCancel: _this.onCancelEdit, onSubmit: _this.onEditSubmit, __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SettingsBody, { user: user, __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        })
      );
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Settings, [{
    key: 'onEditSubmit',
    value: function () {
      var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, bag) {
        var userDetails, data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userDetails = {
                  username: values.username
                };

                if (values.password) {
                  userDetails['password'] = values.password;
                }

                console.log(userDetails);

                _context.prev = 3;
                _context.next = 6;
                return _api__WEBPACK_IMPORTED_MODULE_16__["default"].updateUser(userDetails);

              case 6:
                data = _context.sent;

                bag.setSubmitting(false);
                this.props.getAuthUser(data);
                this.setState({ isEditing: false });
                _context.next = 17;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](3);

                console.log(_context.t0);
                bag.setSubmitting(false);
                bag.setErrors(_api__WEBPACK_IMPORTED_MODULE_16__["default"].setErrors(_context.t0.response.data.errors.details.errors));

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 12]]);
      }));

      function onEditSubmit(_x, _x2) {
        return _ref3.apply(this, arguments);
      }

      return onEditSubmit;
    }()
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
        { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].cardContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 108
            }
          },
          this.props.user ? this._renderUserDetails(this.props.user) : this._renderLoading()
        )
      );
    }
  }]);

  return Settings;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Settings.propTypes = {
  getAuthUser: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  user: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object
};

SettingsBody.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, { getAuthUser: _store_actions_auth__WEBPACK_IMPORTED_MODULE_17__["getAuthUser"] })(Settings));

/***/ }),

/***/ "./src/screens/Settings/styles.js":
/*!****************************************!*\
  !*** ./src/screens/Settings/styles.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 100%;\n  min-height: calc(100vh - 4.5em);\n  align-items: center;\n  border-bottom: 1px solid ', ';\n'], ['\n  width: 100%;\n  min-height: calc(100vh - 4.5em);\n  align-items: center;\n  border-bottom: 1px solid ', ';\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 50em;\n  margin-top: 3em;\n  margin-bottom: 3em;\n  background-color: ', ';\n  border-radius: 4px;\n  padding: 2em 3em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    padding: 1.5em;\n  }\n'], ['\n  width: 50em;\n  margin-top: 3em;\n  margin-bottom: 3em;\n  background-color: ', ';\n  border-radius: 4px;\n  padding: 2em 3em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    padding: 1.5em;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  align-items: center;\n  justify-content: center;\n  padding: 5em;\n'], ['\n  align-items: center;\n  justify-content: center;\n  padding: 5em;\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 1em;\n  border-bottom: .5px dashed ', ';\n'], ['\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 1em;\n  border-bottom: .5px dashed ', ';\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  margin-bottom: -0.4em;\n'], ['\n  font-weight: 600;\n  margin-bottom: -0.4em;\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  font-size: 1em;\n'], ['\n  font-weight: 600;\n  font-size: 1em;\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-left: 0.75em;\n'], ['\n  margin-left: 0.75em;\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-left: 0.3em;\n'], ['\n  margin-left: 0.3em;\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 1em;\n'], ['\n  margin-top: 1em;\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 2em 0 2em 0;\n  border-bottom: .5px dotted ', ';\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  &:last-child {\n    border-bottom: 0;\n  }\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 1em 0;\n  }\n'], ['\n  padding: 2em 0 2em 0;\n  border-bottom: .5px dotted ', ';\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  &:last-child {\n    border-bottom: 0;\n  }\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 1em 0;\n  }\n']),
    _templateObject11 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  justify-content: flex-end;\n\n  @media (max-width: ', ') {\n    flex-direction: row;\n  }\n'], ['\n  justify-content: flex-end;\n\n  @media (max-width: ', ') {\n    flex-direction: row;\n  }\n']),
    _templateObject12 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n'], ['\n  font-weight: 500;\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n']),
    _templateObject13 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  @media (max-width: ', ') {\n    font-size: 1em;\n}\n'], ['\n  @media (max-width: ', ') {\n    font-size: 1em;\n}\n']),
    _templateObject14 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 70%;\n  margin-left: auto;\n  margin-right: -1em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin-right: 0;\n  }\n'], ['\n  width: 70%;\n  margin-left: auto;\n  margin-right: -1em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin-right: 0;\n  }\n']),
    _templateObject15 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n@media (max-width: ', ') {\n  font-size: 1em;\n}\n'], ['\n@media (max-width: ', ') {\n  font-size: 1em;\n}\n']),
    _templateObject16 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n'], ['\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n']);




var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray);

var cardContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var loadingContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3);

var settingsHeaderContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder);

var settingsHeaderTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5);

var editSettingsButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6);

var editIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7);

var verifiedIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8);

var settingsBodyContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9);

var settingsItemContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var editButtonContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject11, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var settingsItemValue = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var settingsItemLabel = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject13, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var textInputStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject14, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var editAddressSaveButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject15, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var editAddressCancelButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject16, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var styles = {
  mainContainer: mainContainer,
  cardContainer: cardContainer,
  loadingContainer: loadingContainer,
  settingsHeaderContainer: settingsHeaderContainer,
  settingsHeaderTextStyle: settingsHeaderTextStyle,
  editSettingsButton: editSettingsButton,
  editAddressSaveButton: editAddressSaveButton,
  editAddressCancelButton: editAddressCancelButton,
  settingsBodyContainer: settingsBodyContainer,
  editButtonContainer: editButtonContainer,
  editIcon: editIcon,
  verifiedIcon: verifiedIcon,
  settingsItemContainer: settingsItemContainer,
  settingsItemLabel: settingsItemLabel,
  settingsItemValue: settingsItemValue,
  textInputStyle: textInputStyle
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/Signup/SignupForm/index.js":
/*!************************************************!*\
  !*** ./src/screens/Signup/SignupForm/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Input */ "./src/components/Input/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Spinner */ "./src/components/Spinner/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles */ "./src/screens/Signup/SignupForm/styles.js");
var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Signup/SignupForm/index.js';













var validationSchema = yup__WEBPACK_IMPORTED_MODULE_4__["object"]().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().email('Not a valid email').required('Email is required'),
  name: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(3).required('Name is required'),
  username: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(4).required('Username is required'),
  password: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(6).required('Password is required'),
  confirmPassword: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().oneOf([yup__WEBPACK_IMPORTED_MODULE_4__["ref"]('password', null)], 'Passwords must match').required('Confirm password is required')
});

var SignupForm = function SignupForm(_ref) {
  var onSubmit = _ref.onSubmit,
      hostRef = _ref.hostRef;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
    { hostRef: hostRef, style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].formContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
      initialValues: { email: '', username: '', password: '', confirmPassword: '', name: '' },
      onSubmit: onSubmit,
      validationSchema: validationSchema,
      render: function render(_ref2) {
        var values = _ref2.values,
            touched = _ref2.touched,
            handleChange = _ref2.handleChange,
            handleBlur = _ref2.handleBlur,
            handleSubmit = _ref2.handleSubmit,
            handleReset = _ref2.handleReset,
            errors = _ref2.errors,
            isValid = _ref2.isValid,
            isSubmitting = _ref2.isSubmitting;

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
            label: 'Full Name',
            name: 'name',
            placeholder: 'Doggo Best',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.name,
            error: touched.name && errors.name,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
            label: 'Username',
            name: 'username',
            placeholder: 'awesome-doggo',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.username,
            error: touched.username && errors.username,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
            label: 'Email',
            name: 'email',
            type: 'email',
            placeholder: 'specksy@doggo.co',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.email,
            error: touched.email && errors.email,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
            label: 'Password',
            name: 'password',
            type: 'password',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.password,
            error: touched.password && errors.password,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
            label: 'Confirm Password',
            name: 'confirmPassword',
            type: 'password',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.confirmPassword,
            error: touched.confirmPassword && errors.confirmPassword,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].buttonContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 98
              }
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
              {
                primary: true,
                disabled: !isValid || isSubmitting,
                type: 'submit',
                style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].submitButton,
                onClick: handleSubmit,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 99
                }
              },
              'Submit ',
              isSubmitting && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'span',
                { className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].spinnerIcon), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_8__["default"], { size: 20, width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                  }
                })
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
              { onClick: handleReset, link: true, style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].cancelButton, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 108
                }
              },
              'Reset'
            )
          )
        );
      }, __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    })
  );
};

SignupForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  hostRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

/* harmony default export */ __webpack_exports__["default"] = (SignupForm);

/***/ }),

/***/ "./src/screens/Signup/SignupForm/styles.js":
/*!*************************************************!*\
  !*** ./src/screens/Signup/SignupForm/styles.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 0 2em;\n  width: 100%;\n  label: signup-body-form-cntr;\n\n  @media (max-width: ', ') {\n    padding: 0;\n  }\n'], ['\n  padding: 0 2em;\n  width: 100%;\n  label: signup-body-form-cntr;\n\n  @media (max-width: ', ') {\n    padding: 0;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  justify-content: center;\n  padding-top: 1em;\n'], ['\n  flex-direction: row;\n  justify-content: center;\n  padding-top: 1em;\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-left: 0.5em;\n  label: signup-submit-button-icon;\n'], ['\n  padding-left: 0.5em;\n  label: signup-submit-button-icon;\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-size: 1.3em;\n  margin-right: 1em;\n  label: signup-submit-button;\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n'], ['\n  font-size: 1.3em;\n  margin-right: 1em;\n  label: signup-submit-button;\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-left: 0.2em;\n'], ['\n  margin-left: 0.2em;\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: transparent;\n  color: ', ';\n  label: signup-cancel-button;\n\n  &:hover {\n    color: ', ';\n  }\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n'], ['\n  background-color: transparent;\n  color: ', ';\n  label: signup-cancel-button;\n\n  &:hover {\n    color: ', ';\n  }\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n']);





var formContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var buttonContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2);

var submitButtonIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3);

var submitButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var spinnerIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5);

var cancelButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.4, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText), _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var styles = {
  formContainer: formContainer,
  buttonContainer: buttonContainer,
  submitButtonIcon: submitButtonIcon,
  submitButton: submitButton,
  cancelButton: cancelButton,
  spinnerIcon: spinnerIcon
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/Signup/SignupSuccess/index.js":
/*!***************************************************!*\
  !*** ./src/screens/Signup/SignupSuccess/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/screens/Signup/SignupSuccess/styles.js");
var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Signup/SignupSuccess/index.js';








var SignupSuccess = function SignupSuccess(_ref) {
  var hostRef = _ref.hostRef;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_2__["default"],
    { hostRef: hostRef, style: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].successContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_3__["default"],
      { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].successHeaderText, __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      },
      'Thank you for signing up.'
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_3__["default"],
      { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].successInfoText, __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      'We\'ve sent you a verification link on your email. Please click verify in the email to continue.'
    )
  );
};

SignupSuccess.propTypes = {
  hostRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

/* harmony default export */ __webpack_exports__["default"] = (SignupSuccess);

/***/ }),

/***/ "./src/screens/Signup/SignupSuccess/styles.js":
/*!****************************************************!*\
  !*** ./src/screens/Signup/SignupSuccess/styles.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 0 4em;\n  width: 100%;\n\n  @media (max-width: ', ') {\n    padding: 0;\n  }\n'], ['\n  padding: 0 4em;\n  width: 100%;\n\n  @media (max-width: ', ') {\n    padding: 0;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  text-align: left;\n  font-weight: 600;\n  margin-bottom: 2em;\n\n  @media (max-width: ', ') {\n    font-size: 1.5em;\n    margin-top: 1em;\n    margin-bottom: 1em;\n  }\n'], ['\n  text-align: left;\n  font-weight: 600;\n  margin-bottom: 2em;\n\n  @media (max-width: ', ') {\n    font-size: 1.5em;\n    margin-top: 1em;\n    margin-bottom: 1em;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n@media (max-width: ', ') {\n  font-size: 1em;\n  margin-bottom: 1em;\n}\n'], ['\n@media (max-width: ', ') {\n  font-size: 1em;\n  margin-bottom: 1em;\n}\n']);




var successContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var successHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var successInfoText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var styles = {
  successContainer: successContainer,
  successHeaderText: successHeaderText,
  successInfoText: successInfoText
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/Signup/index.js":
/*!*************************************!*\
  !*** ./src/screens/Signup/index.js ***!
  \*************************************/
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
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _SignupForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SignupForm */ "./src/screens/Signup/SignupForm/index.js");
/* harmony import */ var _SignupSuccess__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SignupSuccess */ "./src/screens/Signup/SignupSuccess/index.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../store/actions/auth */ "./src/store/actions/auth.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./styles */ "./src/screens/Signup/styles.js");







var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Signup/index.js';

















var Signup = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Signup, _Component);

  function Signup(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Signup);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Signup.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(Signup)).call(this, props));

    _this.state = {
      isSignupSuccess: false
    };

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Signup, [{
    key: 'handleSubmit',
    value: function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, bag) {
        var data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _api__WEBPACK_IMPORTED_MODULE_18__["default"].signup(values);

              case 3:
                data = _context.sent;

                bag.setSubmitting(false);
                this.setState({ isSignupSuccess: true });
                this.props.signupAction(data.user);
                _context.next = 14;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](0);

                console.log(_context.t0.response);
                bag.setSubmitting(false);
                bag.setErrors(_api__WEBPACK_IMPORTED_MODULE_18__["default"].setErrors(_context.t0.response.data.errors.details.errors));

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function handleSubmit(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isAuthenticated && !this.state.isSignupSuccess) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Redirect"], { to: '/profile', __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        });
      }

      var PoseSignupForm = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(_SignupForm__WEBPACK_IMPORTED_MODULE_13__["default"])({
        visible: { opacity: 1 },
        invisible: { opacity: 0, display: 'none' }
      });

      var PoseSignupSuccess = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(_SignupSuccess__WEBPACK_IMPORTED_MODULE_14__["default"])({
        visible: { opacity: 1 },
        invisible: { opacity: 0, display: 'none' }
      });

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_15__["default"],
        { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_15__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_15__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroLogoContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'a',
              { href: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                }
              },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'bitcharge-logo', className: Object(emotion__WEBPACK_IMPORTED_MODULE_12__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].logoImageStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1532990484/icons/bitcharge-logo-white.png', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                }
              })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_15__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroTextContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'signup-avatar', className: Object(emotion__WEBPACK_IMPORTED_MODULE_12__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].signupAvatarIconStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1535940306/dog-avatar.png', __source: {
                fileName: _jsxFileName,
                lineNumber: 63
              }
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_16__["default"],
              { tag: 'h3', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroText, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 64
                }
              },
              'Let\'s get you set up.'
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_15__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroFooterContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_16__["default"],
              { tag: 'h6', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67
                }
              },
              'Already have an account. ',
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"],
                { to: '/login', className: Object(emotion__WEBPACK_IMPORTED_MODULE_12__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].LoginLink), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                  }
                },
                'Login'
              )
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_15__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].bodyContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PoseSignupForm, { pose: this.state.isSignupSuccess ? 'invisible' : 'visible', onSubmit: this.handleSubmit, __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PoseSignupSuccess, { pose: this.state.isSignupSuccess ? 'visible' : 'invisible', __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            }
          })
        )
      );
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

Signup.propTypes = {
  signupAction: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, { signupAction: _store_actions_auth__WEBPACK_IMPORTED_MODULE_17__["signup"] })(Signup));

/***/ }),

/***/ "./src/screens/Signup/styles.js":
/*!**************************************!*\
  !*** ./src/screens/Signup/styles.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  label: signup-main-cntr;\n  flex-direction: row;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n'], ['\n  background-color: ', ';\n  label: signup-main-cntr;\n  flex-direction: row;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 2;\n  background-color: ', ';\n  color: ', ';\n  padding: 0 2em;\n  label: signup-hero-cntr;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n'], ['\n  flex: 2;\n  background-color: ', ';\n  color: ', ';\n  padding: 0 2em;\n  label: signup-hero-cntr;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 5;\n  align-items: center;\n  justify-content: center;\n  padding: 0 2em;\n  height: 100vh;\n  label: signup-body-cntr;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n    height: auto;\n  }\n'], ['\n  flex: 5;\n  align-items: center;\n  justify-content: center;\n  padding: 0 2em;\n  height: 100vh;\n  label: signup-body-cntr;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n    height: auto;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-top: 1em;\n'], ['\n  padding-top: 1em;\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 150px;\n  height: auto;\n'], ['\n  width: 150px;\n  height: auto;\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  margin-bottom: .5em;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 125px;\n    height: 125px;\n  }\n'], ['\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  margin-bottom: .5em;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 125px;\n    height: 125px;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 1em;\n  font-weight: 600;\n  text-align: center;\n\n  @media (max-width: ', ') {\n    margin-top: .5em;\n    font-size: 1.5em;\n  }\n'], ['\n  margin-top: 1em;\n  font-weight: 600;\n  text-align: center;\n\n  @media (max-width: ', ') {\n    margin-top: .5em;\n    font-size: 1.5em;\n  }\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 1;\n  padding: 1em;\n  label: signup-hero-text-cntr;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    flex: none;\n    margin-top: 1em;\n  }\n'], ['\n  flex: 1;\n  padding: 1em;\n  label: signup-hero-text-cntr;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    flex: none;\n    margin-top: 1em;\n  }\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-bottom: 1em;\n'], ['\n  margin-bottom: 1em;\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 1;\n  padding: 4em 4em 4em 2em;\n  align-items: center;\n  justify-content: center;\n  label: signup-hero-image-cntr;\n'], ['\n  flex: 1;\n  padding: 4em 4em 4em 2em;\n  align-items: center;\n  justify-content: center;\n  label: signup-hero-image-cntr;\n']),
    _templateObject11 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n  margin-bottom: 1em;\n  label: home-hero-header-text;\n'], ['\n  font-weight: 500;\n  margin-bottom: 1em;\n  label: home-hero-header-text;\n']),
    _templateObject12 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  line-height: 1.5em;\n  font-weight: 400;\n  margin-bottom: 1.5em;\n  label: home-hero-header-subtext;\n'], ['\n  line-height: 1.5em;\n  font-weight: 400;\n  margin-bottom: 1.5em;\n  label: home-hero-header-subtext;\n']),
    _templateObject13 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  max-width: 100%;\n  height: auto;\n  label: home-hero-image;\n'], ['\n  max-width: 100%;\n  height: auto;\n  label: home-hero-image;\n']),
    _templateObject14 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  display: inline-block;\n  text-decoration: none;\n  color: ', ';\n  padding: .3em;\n  border-radius: .1em;\n  label: signup-login-link;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\n  &:hover {\n    background-color: ', ';\n    color: ', ';\n  }\n'], ['\n  font-weight: 600;\n  display: inline-block;\n  text-decoration: none;\n  color: ', ';\n  padding: .3em;\n  border-radius: .1em;\n  label: signup-login-link;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\n  &:hover {\n    background-color: ', ';\n    color: ', ';\n  }\n']);




var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var bodyContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroLogoContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4);

var logoImageStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5);

var signupAvatarIconStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroTextContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroFooterContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9);

var heroImageContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10);

var heroHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject11);

var heroSubHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12);

var heroImage = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject13);

var LoginLink = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject14, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary);

var styles = {
  mainContainer: mainContainer,
  bodyContainer: bodyContainer,
  heroContainer: heroContainer,
  heroLogoContainer: heroLogoContainer,
  logoImageStyle: logoImageStyle,
  heroTextContainer: heroTextContainer,
  heroText: heroText,
  heroFooterContainer: heroFooterContainer,
  signupAvatarIconStyle: signupAvatarIconStyle,
  heroImageContainer: heroImageContainer,
  heroHeaderText: heroHeaderText,
  heroSubHeaderText: heroSubHeaderText,
  heroImage: heroImage,
  LoginLink: LoginLink
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/SignupConfirmation/index.js":
/*!*************************************************!*\
  !*** ./src/screens/SignupConfirmation/index.js ***!
  \*************************************************/
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../store/actions/auth */ "./src/store/actions/auth.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./styles */ "./src/screens/SignupConfirmation/styles.js");







var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/SignupConfirmation/index.js';

















var SignupConfirming = function SignupConfirming(_ref) {
  var hostRef = _ref.hostRef;

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
    { hostRef: hostRef, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    },
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationHeaderText, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      },
      'We are confirming your email...'
    )
  );
};

var SignupConfirmationError = function SignupConfirmationError(_ref2) {
  var hostRef = _ref2.hostRef,
      isAuthenticated = _ref2.isAuthenticated,
      handleVerify = _ref2.handleVerify,
      resentVerification = _ref2.resentVerification;

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
    { hostRef: hostRef, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    },
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationHeaderText, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      },
      'Something went wrong'
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h5', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      },
      'Something went wrong while verifying your email. ',
      isAuthenticated ? 'Try resending the verification email' : 'Login to resend the verification email.'
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].buttonContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      },
      isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_16__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], to: '/address/new', primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].submitButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        },
        'Resend Verifcation'
      ) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_16__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], to: '/login', primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].submitButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        'Login Now'
      ),
      isAuthenticated && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_16__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], to: '/profile', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].cancelButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        },
        'Skip'
      )
    ),
    resentVerification.action && resentVerification.success && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].resentVerificationText, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      },
      'Verification mail sent successfully.'
    )
  );
};

var SignupConfirmed = function SignupConfirmed(_ref3) {
  var hostRef = _ref3.hostRef,
      isAuthenticated = _ref3.isAuthenticated;

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
    { hostRef: hostRef, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      }
    },
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationHeaderText, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      },
      'Woohoo! You\'re all set.'
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationInfoText, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      },
      'Thank you for verifying your account. ',
      isAuthenticated ? 'You can now start adding your addresses.' : 'You need to login to start adding your addresses.'
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].buttonContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      },
      isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_16__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], to: '/address/new', primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].submitButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        },
        'Add an Address'
      ) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_16__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], to: '/login', primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].submitButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        },
        'Login Now'
      ),
      isAuthenticated && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_16__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], to: '/profile', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].cancelButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        },
        'Skip'
      )
    )
  );
};

var SignupConfirmationExpired = function SignupConfirmationExpired(_ref4) {
  var hostRef = _ref4.hostRef,
      isAuthenticated = _ref4.isAuthenticated,
      handleVerify = _ref4.handleVerify,
      resentVerification = _ref4.resentVerification;
  var action = resentVerification.action,
      success = resentVerification.success,
      error = resentVerification.error;

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
    { hostRef: hostRef, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      }
    },
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationHeaderText, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      },
      'Something went wrong'
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h5', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      },
      'Your verification email is expired. ',
      isAuthenticated ? 'Try resending the verification email' : 'Login to resend the verification email.'
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].buttonContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      },
      isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_16__["default"],
        { onClick: handleVerify, primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].submitButton, disabled: action && !(success || error), __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        },
        'Resend Verifcation'
      ) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_16__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], to: '/login', primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].submitButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        },
        'Login Now'
      )
    ),
    action && success && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].resentVerificationText, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      },
      'Verification mail sent successfully.'
    )
  );
};

var SignupConfirmation = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(SignupConfirmation, _Component);

  function SignupConfirmation(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, SignupConfirmation);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (SignupConfirmation.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(SignupConfirmation)).call(this, props));

    _this.state = {
      isConfirmed: false,
      isConfirming: false,
      isExpired: false,
      isError: false,
      resentVerification: false,
      resentVerificationSuccess: false,
      resentVerificationError: false
    };

    _this.resendVerificationMail = _this.resendVerificationMail.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(SignupConfirmation, [{
    key: 'componentDidMount',
    value: function () {
      var _ref5 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var query, response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = qs__WEBPACK_IMPORTED_MODULE_13___default.a.parse(this.props.location.search.split('?')[1]);
                _context.prev = 1;
                _context.next = 4;
                return _api__WEBPACK_IMPORTED_MODULE_18__["default"].confirmEmail(query.confirmationCode);

              case 4:
                response = _context.sent;

                this.setState({ isConfirming: false });
                if (response) {
                  this.setState({ isConfirmed: true });
                  this.props.confirmEmailAction(true);
                }
                _context.next = 14;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](1);

                this.setState({ isConfirming: false });
                if (_context.t0.response.status === 410) {
                  this.setState({ isExpired: true });
                }
                this.setState({ isError: true });

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 9]]);
      }));

      function componentDidMount() {
        return _ref5.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'resendVerificationMail',
    value: function () {
      var _ref6 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _api__WEBPACK_IMPORTED_MODULE_18__["default"].verifyEmail();

              case 3:
                this.setState({ resentVerification: true });
                _context2.next = 10;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2['catch'](0);

                console.log(_context2.t0);
                this.setState({ resentVerification: true, resentVerificationError: true });

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 6]]);
      }));

      function resendVerificationMail() {
        return _ref6.apply(this, arguments);
      }

      return resendVerificationMail;
    }()
  }, {
    key: 'render',
    value: function render() {
      var PoseSignupConfirming = react_pose__WEBPACK_IMPORTED_MODULE_11___default()(SignupConfirming)({
        visible: { opacity: 1 },
        invisible: { opacity: 0, display: 'none' }
      });

      var PoseSignupConfirmed = react_pose__WEBPACK_IMPORTED_MODULE_11___default()(SignupConfirmed)({
        visible: { opacity: 1 },
        invisible: { opacity: 0, display: 'none' }
      });

      var PoseSignupConfirmError = react_pose__WEBPACK_IMPORTED_MODULE_11___default()(SignupConfirmationError)({
        visible: { opacity: 1 },
        invisible: { opacity: 0, display: 'none' }
      });

      var PoseSignupConfirmExpired = react_pose__WEBPACK_IMPORTED_MODULE_11___default()(SignupConfirmationExpired)({
        visible: { opacity: 1 },
        invisible: { opacity: 0, display: 'none' }
      });

      var resentVerification = {
        action: true,
        success: this.state.resentVerificationSuccess,
        error: this.state.resentVerificationError
      };
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
        { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroLogoContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 157
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'a',
              { href: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 158
                }
              },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'bitcharge-logo', className: Object(emotion__WEBPACK_IMPORTED_MODULE_12__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].logoImageStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1532990484/icons/bitcharge-logo-white.png', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 158
                }
              })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroTextContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 160
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { className: Object(emotion__WEBPACK_IMPORTED_MODULE_12__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroAvatarIconStyle), alt: 'signup-confirmation-avatar', src: 'https://res.cloudinary.com/bitcharge/image/upload/v1535940306/fox-avatar.png', __source: {
                fileName: _jsxFileName,
                lineNumber: 161
              }
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
              { tag: 'h3', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroText, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 162
                }
              },
              'You\'re almost there.'
            )
          ),
          !this.props.isAuthenticated && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroFooterContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 165
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
              { tag: 'h6', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 166
                }
              },
              'Already have an account. ',
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"],
                { to: '/login', className: Object(emotion__WEBPACK_IMPORTED_MODULE_12__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].LoginLink), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 166
                  }
                },
                'Login'
              )
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].bodyContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 171
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PoseSignupConfirming, { pose: this.state.isConfirming ? 'visible' : 'invisible', __source: {
              fileName: _jsxFileName,
              lineNumber: 172
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PoseSignupConfirmed, { pose: this.state.isConfirmed ? 'visible' : 'invisible', isAuthenticated: this.props.isAuthenticated, __source: {
              fileName: _jsxFileName,
              lineNumber: 173
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PoseSignupConfirmError, { pose: this.state.isError ? 'visible' : 'invisible', isAuthenticated: this.props.isAuthenticated, handleVerify: this.resendVerificationMail, resentVerification: resentVerification, __source: {
              fileName: _jsxFileName,
              lineNumber: 174
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PoseSignupConfirmExpired, { pose: this.state.isExpired ? 'visible' : 'invisible', isAuthenticated: this.props.isAuthenticated, handleVerify: this.resendVerificationMail, resentVerification: resentVerification, __source: {
              fileName: _jsxFileName,
              lineNumber: 175
            }
          })
        )
      );
    }
  }]);

  return SignupConfirmation;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

SignupConfirmed.propTypes = {
  hostRef: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
};

SignupConfirming.propTypes = {
  hostRef: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any
};

SignupConfirmationError.propTypes = {
  hostRef: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  handleVerify: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  resentVerification: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};

SignupConfirmationExpired.propTypes = {
  hostRef: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  handleVerify: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  resentVerification: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};

SignupConfirmation.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  confirmEmailAction: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, { confirmEmailAction: _store_actions_auth__WEBPACK_IMPORTED_MODULE_17__["confirmEmail"] })(SignupConfirmation));

/***/ }),

/***/ "./src/screens/SignupConfirmation/styles.js":
/*!**************************************************!*\
  !*** ./src/screens/SignupConfirmation/styles.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  label: signup-cnf-main-cntr;\n  flex-direction: row;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n'], ['\n  background-color: ', ';\n  label: signup-cnf-main-cntr;\n  flex-direction: row;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 2;\n  background-color: ', ';\n  color: ', ';\n  padding: 0 2em;\n  label: signup-cnf-hero-cntr;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n'], ['\n  flex: 2;\n  background-color: ', ';\n  color: ', ';\n  padding: 0 2em;\n  label: signup-cnf-hero-cntr;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 5;\n  align-items: center;\n  justify-content: center;\n  padding: 2em;\n  height: 100vh;\n  label: signup-cnf-body-cntr;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n    height: auto;\n  }\n'], ['\n  flex: 5;\n  align-items: center;\n  justify-content: center;\n  padding: 2em;\n  height: 100vh;\n  label: signup-cnf-body-cntr;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n    height: auto;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-top: 1em;\n'], ['\n  padding-top: 1em;\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 150px;\n  height: auto;\n'], ['\n  width: 150px;\n  height: auto;\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  margin-bottom: .5em;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 125px;\n    height: 125px;\n  }\n'], ['\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  margin-bottom: .5em;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 125px;\n    height: 125px;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 1em;\n  font-weight: 600;\n\n  @media (max-width: ', ') {\n    font-size: 1.5em;\n    text-align: center;\n  }\n'], ['\n  margin-top: 1em;\n  font-weight: 600;\n\n  @media (max-width: ', ') {\n    font-size: 1.5em;\n    text-align: center;\n  }\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 1;\n  padding: 1em;\n  label: signup-hero-text-cntr;\n  align-items: center;\n  justify-content: center;\n'], ['\n  flex: 1;\n  padding: 1em;\n  label: signup-hero-text-cntr;\n  align-items: center;\n  justify-content: center;\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-bottom: 1em;\n'], ['\n  margin-bottom: 1em;\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  display: inline-block;\n  text-decoration: none;\n  color: ', ';\n  padding: .3em;\n  border-radius: .1em;\n  label: signup-login-link;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\n  &:hover {\n    background-color: ', ';\n    color: ', ';\n  }\n'], ['\n  font-weight: 600;\n  display: inline-block;\n  text-decoration: none;\n  color: ', ';\n  padding: .3em;\n  border-radius: .1em;\n  label: signup-login-link;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\n  &:hover {\n    background-color: ', ';\n    color: ', ';\n  }\n']),
    _templateObject11 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 0 4em;\n  width: 100%;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n  }\n'], ['\n  padding: 0 4em;\n  width: 100%;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n  }\n']),
    _templateObject12 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  text-align: left;\n  font-weight: 600;\n  margin-bottom: 2em;\n\n  @media (max-width: ', ') {\n    font-size: 1.5em;\n    margin-bottom: 1em;\n  }\n'], ['\n  text-align: left;\n  font-weight: 600;\n  margin-bottom: 2em;\n\n  @media (max-width: ', ') {\n    font-size: 1.5em;\n    margin-bottom: 1em;\n  }\n']),
    _templateObject13 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n@media (max-width: ', ') {\n  font-size: 1em;\n}\n'], ['\n@media (max-width: ', ') {\n  font-size: 1em;\n}\n']),
    _templateObject14 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 1em;\n  flex-direction: row;\n  justify-content: left;\n  padding-top: 1em;\n'], ['\n  margin-top: 1em;\n  flex-direction: row;\n  justify-content: left;\n  padding-top: 1em;\n']),
    _templateObject15 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-size: 1.3em;\n  label: signup-confirm-submit-button;\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n    padding-left: .75em;\n    padding-right: .75em;\n  }\n'], ['\n  font-size: 1.3em;\n  label: signup-confirm-submit-button;\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n    padding-left: .75em;\n    padding-right: .75em;\n  }\n']),
    _templateObject16 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: transparent;\n  color: ', ';\n  label: login-cancel-button;\n\n  &:hover {\n    color: ', ';\n  }\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n'], ['\n  background-color: transparent;\n  color: ', ';\n  label: login-cancel-button;\n\n  &:hover {\n    color: ', ';\n  }\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n']),
    _templateObject17 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 1.5em;\n  font-weight: 500;\n'], ['\n  margin-top: 1.5em;\n  font-weight: 500;\n']);





var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var bodyContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroLogoContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4);

var logoImageStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5);

var heroAvatarIconStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroTextContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8);

var heroFooterContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9);

var LoginLink = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary);

var confirmationContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject11, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var confirmationHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var confirmationInfoText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject13, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var buttonContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject14);

var submitButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject15, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var cancelButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject16, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.4, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText), _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var resentVerificationText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject17);

var styles = {
  mainContainer: mainContainer,
  heroContainer: heroContainer,
  bodyContainer: bodyContainer,
  heroText: heroText,
  heroAvatarIconStyle: heroAvatarIconStyle,
  heroTextContainer: heroTextContainer,
  heroFooterContainer: heroFooterContainer,
  heroLogoContainer: heroLogoContainer,
  logoImageStyle: logoImageStyle,
  LoginLink: LoginLink,
  confirmationContainer: confirmationContainer,
  confirmationHeaderText: confirmationHeaderText,
  confirmationInfoText: confirmationInfoText,
  buttonContainer: buttonContainer,
  submitButton: submitButton,
  cancelButton: cancelButton,
  resentVerificationText: resentVerificationText
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/Terms/index.js":
/*!************************************!*\
  !*** ./src/screens/Terms/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-media */ "react-media");
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_media__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Navbar */ "./src/components/Navbar/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _components_Scroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Scroll */ "./src/components/Scroll/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles */ "./src/screens/Terms/styles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");





var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Terms/index.js';















var Privacy = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Privacy, _Component);

  function Privacy() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Privacy);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Privacy.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Privacy)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Privacy, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
        { fluid: true, fullHeight: true, style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Scroll__WEBPACK_IMPORTED_MODULE_13__["ScrollToTopOnMount"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
          { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
            { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].headerContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
              { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].headerTextStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                }
              },
              'Terms of Use'
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              react_media__WEBPACK_IMPORTED_MODULE_8___default.a,
              { query: '(max-width: ' + _styles__WEBPACK_IMPORTED_MODULE_15__["breakpoints"].tablet + ')', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25
                }
              },
              function (matches) {
                return matches ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_9__["default"], { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].workItemTextBorder, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  }
                }) : null;
              }
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].detailsContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              }
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  }
                },
                'Welcome to Bitcharge!'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                  }
                },
                'By using Bitcharge, you are allowing to be bound by our website\u2019s Terms and Conditions, all relevant laws and regulations, and you are liable to agree with any applicable local laws. These are Bitcharge\u2019s terms of use and apply to all users of this website and mobile applications.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                  }
                }),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                  }
                }),
                '\u2018We\u2019, \u2018our\u2019 or \u2018us\u2019 refers to Bitcharge. You will be forbidden from using this site if you do not agree with any of these terms. Copyright and trademark law protects all materials used on this website.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                  }
                }),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                  }
                }),
                'You also agree to our ',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"],
                  { to: '/', className: '' + Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].linkText), __source: {
                      fileName: _jsxFileName,
                      lineNumber: 37
                    }
                  },
                  'privacy policy'
                ),
                '. We are not accountable for the quality, timing or legitimacy of content. We may make changes to these terms: if these changes are substantial and affect your privileges unfavourably, we will let you know by announcing the details on the site or via email before the changes come into effect.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  }
                }),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  }
                }),
                'If you continue to use Bitcharge after any modifications to the terms, it will indicate that you have accepted the revised terms.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                  }
                },
                'Use License'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                  }
                },
                'You are liable for all the activity on your profile. We can terminate your account if we find any breach in terms.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  }
                }),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  }
                }),
                'You should not break any law or prompt others to break the law.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  }
                }),
                'We reserve the right to force forfeiture of any username under circumstances that we deem necessary.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                  }
                }),
                'Do not vex or bully others, or support violence or hatred towards others.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  }
                }),
                'Do not share others\u2019 personal information or differently abuse it. Users with access to their Bitcharge personal information should not use it for anything irrelevant to Bitcharge.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  }
                }),
                'Do not post messages that are false or differently misleading.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                  }
                }),
                'Do not generate an account to stop others from using the name or to trade the name.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                  }
                }),
                'Do not modify or copy the materials on this website. You can only utilise the materials for any commercial purpose, or for any public display.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                  }
                }),
                'Do not attempt to decompile or modify engineer any software included on Bitcharge site.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                  }
                }),
                'You are not supposed to spam others and cannot use Bitcharge to host or distribute, malicious or destructive software.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                  }
                }),
                'Do not use the public details of a user or a business found on Bitcharge for anything illegal or malicious.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                  }
                }),
                'This license will automatically terminate if you infringe any of these restrictions and may be terminated by Bitcharge at any time.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                  }
                },
                'Indemnity'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                  }
                },
                'You have to reimburse us for all damages and liabilities, including legal fees, which may result from these terms or relate to your use of Bitcharge. We maintain the right to exclusive control over the defense of a claim included in this clause. If we exercise this right, then you have to assist us in our defense. Your responsibility to indemnify under this clause also refers to our affiliates, officers, directors, agents, employees, and third-party service providers.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 68
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                  }
                },
                'Disclaimer'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                  }
                },
                'Bitcharge is presented \u201Cas is\u201D and without warranty of any sort. Any warranty of merchantability, fitness for a specific purpose, non-infringement, and any other warranty is eliminated to the greatest extent as authorised by law. Besides, Bitcharge does not warrant or present any representations concerning the correctness, possible results, or authenticity of the use of the elements on its Internet web site or otherwise compared to such materials or on any sites associated with this site.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                  }
                }),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                  }
                }),
                'Bitcharge does not take responsibility for the accuracy or precision of user-generated content. Bitcharge does not directly or indirectly endorse or support any word or claim made by any of its users.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 77
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                  }
                },
                'Limitations'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                  }
                },
                'Bitcharge is not accountable to you for any concomitant, consequential or vindictive damages resulting out of these terms, or attempted use or your use of Bitcharge. We will not be responsible for any damages arising out of the inability to use the materials on Bitcharge\'s site even if Bitcharge representative has been informed orally or in writing of the occurrence of such damage. For this clause \u201Cwe\u201D and \u201Cour\u201D is established to include our members, officers, agents, directors, employees, and third-party service providers.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 85
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                  }
                },
                'Revisions and Errata'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                  }
                },
                'Bitcharge website may contain elements which comprise of technical, typographical, or sometimes photographic errors. We do not guarantee that any of the contents on our site are genuine, comprehensive, or contemporary.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                  }
                }),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                  }
                }),
                'Bitcharge can make changes to the materials received on its website at any time without notification. However, we do not make any commitment to refresh the contents.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 94
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                  }
                },
                'Links'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                  }
                },
                'Bitcharge has not studied all of the sites associated with its Internet web site and is not liable for the elements of any such linked site. The addition of any link does not indicate approval by Bitcharge site. Handling of any such linked web site is at the user\'s own risk.'
              )
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        })
      );
    }
  }]);

  return Privacy;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Privacy);

/***/ }),

/***/ "./src/screens/Terms/styles.js":
/*!*************************************!*\
  !*** ./src/screens/Terms/styles.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  label: home-main-cntr;\n\n  @media (max-width: ', ') {\n    background-color: ', ';\n  }\n'], ['\n  background-color: ', ';\n  label: home-main-cntr;\n\n  @media (max-width: ', ') {\n    background-color: ', ';\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  min-height: calc(100vh - 4.5em);\n  border-top: 2px solid ', ';\n  align-items: center;\n  label: home-body-cntr;\n\n  @media (max-width: ', ') {\n    border-bottom: 1px solid ', ';\n  }\n'], ['\n  min-height: calc(100vh - 4.5em);\n  border-top: 2px solid ', ';\n  align-items: center;\n  label: home-body-cntr;\n\n  @media (max-width: ', ') {\n    border-bottom: 1px solid ', ';\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  height: 7px;\n  width: 60%;\n  margin-top: .5em;\n  background-color: ', ';\n\n  @media (max-width: ', ') {\n    height: 6px;\n  }\n'], ['\n  height: 7px;\n  width: 60%;\n  margin-top: .5em;\n  background-color: ', ';\n\n  @media (max-width: ', ') {\n    height: 6px;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 5em;\n  margin-bottom: 3em;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    margin-top: 3em;\n    margin-bottom: 0;\n  }\n'], ['\n  margin-top: 5em;\n  margin-bottom: 3em;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    margin-top: 3em;\n    margin-bottom: 0;\n  }\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n\n  @media (max-width: ', ') {\n    font-weight: 500;\n    font-size: 2em;\n  }\n'], ['\n  font-weight: 600;\n\n  @media (max-width: ', ') {\n    font-weight: 500;\n    font-size: 2em;\n  }\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 65%;\n  margin-top: 3em;\n  margin-bottom: 5em;\n  background-color: ', ';\n  border-radius: 5px;\n  border: 1px solid ', ';\n  padding: 4em 5em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    padding: 1.5em;\n    border: 0;\n  }\n'], ['\n  width: 65%;\n  margin-top: 3em;\n  margin-bottom: 5em;\n  background-color: ', ';\n  border-radius: 5px;\n  border: 1px solid ', ';\n  padding: 4em 5em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    padding: 1.5em;\n    border: 0;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 2em 0;\n  border-bottom: 1px dashed ', ';\n\n  &:last-child {\n    border-bottom: 0;\n  }\n'], ['\n  padding: 2em 0;\n  border-bottom: 1px dashed ', ';\n\n  &:last-child {\n    border-bottom: 0;\n  }\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n  margin: 1em 0 1.5em 0;\n'], ['\n  font-weight: 500;\n  margin: 1em 0 1.5em 0;\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  color: ', ';\n  line-height: 1.5;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    font-size: 1em;\n  }\n'], ['\n  color: ', ';\n  line-height: 1.5;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    font-size: 1em;\n  }\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  color: ', ';\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.15s ease-out;\n\n  &:hover {\n    color: ', ';\n  }\n'], ['\n  color: ', ';\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.15s ease-out;\n\n  &:hover {\n    color: ', ';\n  }\n']);





var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].background, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white);

var bodyContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder);

var workItemTextBorder = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var headerContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var headerTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var detailsContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.1, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder), _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var sectionContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder);

var sectionHeader = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8);

var bodyText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText), _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var linkText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].linkText, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].linkText));

var styles = {
  mainContainer: mainContainer,
  bodyContainer: bodyContainer,
  detailsContainer: detailsContainer,
  headerContainer: headerContainer,
  workItemTextBorder: workItemTextBorder,
  headerTextStyle: headerTextStyle,
  sectionContainer: sectionContainer,
  sectionHeader: sectionHeader,
  bodyText: bodyText,
  linkText: linkText
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/UserProfile/EditProfileForm/index.js":
/*!**********************************************************!*\
  !*** ./src/screens/UserProfile/EditProfileForm/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Input */ "./src/components/Input/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Spinner */ "./src/components/Spinner/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles */ "./src/screens/UserProfile/EditProfileForm/styles.js");
var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/UserProfile/EditProfileForm/index.js';














var validationSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2),
  intro: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(1)
});

var EditProfileForm = function EditProfileForm(_ref) {
  var onSubmit = _ref.onSubmit,
      user = _ref.user;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: { name: user.name, intro: user.intro || null },
    onSubmit: onSubmit,
    validationSchema: validationSchema,
    render: function render(_ref2) {
      var values = _ref2.values,
          handleChange = _ref2.handleChange,
          handleSubmit = _ref2.handleSubmit,
          handleBlur = _ref2.handleBlur,
          handleReset = _ref2.handleReset,
          errors = _ref2.errors,
          touched = _ref2.touched,
          isValid = _ref2.isValid,
          isSubmitting = _ref2.isSubmitting;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formBodyContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formItemContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_6__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formItemLabel, __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              }
            },
            'Full Name'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
            name: 'name',
            inputContainerStyle: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].inputContainerStyle,
            noErrorText: true,
            inputStyle: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].textInputStyle,
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.name,
            error: touched.name && errors.name,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formItemContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_6__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formItemLabel, __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            },
            'Intro'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
            name: 'intro',
            noErrorText: true,
            type: 'textarea',
            inputContainerStyle: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].inputContainerStyle,
            inputStyle: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].textInputStyle,
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.intro,
            error: touched.intro && errors.intro,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
          { style: Object(emotion__WEBPACK_IMPORTED_MODULE_4__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].formItemContainer, _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formButtonContainer), __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
            {
              primary: true,
              disabled: !isValid || isSubmitting,
              onClick: handleSubmit,
              style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formButtonStyle,
              type: 'submit',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              }
            },
            'Save ',
            isSubmitting && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'span',
              { className: Object(emotion__WEBPACK_IMPORTED_MODULE_4__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].spinnerIcon), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 76
                }
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_9__["default"], { size: 20, width: 4, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 76
                }
              })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
            {
              onClick: handleReset,
              style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formButtonStyle,
              link: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 78
              }
            },
            'Cancel'
          )
        )
      );
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  });
};

EditProfileForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/* harmony default export */ __webpack_exports__["default"] = (EditProfileForm);

/***/ }),

/***/ "./src/screens/UserProfile/EditProfileForm/styles.js":
/*!***********************************************************!*\
  !*** ./src/screens/UserProfile/EditProfileForm/styles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 1em;\n'], ['\n  margin-top: 1em;\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 2em 0 2em 0;\n  border-bottom: .5px dotted ', ';\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  &:last-child {\n    border-bottom: 0;\n  }\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 1em 0;\n  }\n'], ['\n  padding: 2em 0 2em 0;\n  border-bottom: .5px dotted ', ';\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  &:last-child {\n    border-bottom: 0;\n  }\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 1em 0;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-right: 2em;\n  font-weight: 500;\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n}\n\n'], ['\n  margin-right: 2em;\n  font-weight: 500;\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n}\n\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  margin-top: 0.6em;\n\n  @media (max-width: ', ') {\n    flex-direction: row;\n    align-items: flex-start;\n    padding: 1em 0;\n  }\n'], ['\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  margin-top: 0.6em;\n\n  @media (max-width: ', ') {\n    flex-direction: row;\n    align-items: flex-start;\n    padding: 1em 0;\n  }\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  font-size: 1em;\n'], ['\n  font-weight: 600;\n  font-size: 1em;\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-left: auto;\n  margin-right: -1em;\n\n  @media (max-width: ', ') {\n    margin-right: 0;\n  }\n'], ['\n  margin-left: auto;\n  margin-right: -1em;\n\n  @media (max-width: ', ') {\n    margin-right: 0;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 70%;\n\n  @media (max-width: ', ') {\n    width: 100%;\n  }\n'], ['\n  width: 70%;\n\n  @media (max-width: ', ') {\n    width: 100%;\n  }\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-left: 0.2em;\n'], ['\n  margin-left: 0.2em;\n']);




var formBodyContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject);

var formItemContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var formItemLabel = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var formButtonContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var formButtonStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5);

var textInputStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var inputContainerStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var spinnerIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8);

var styles = {
  formBodyContainer: formBodyContainer,
  formItemContainer: formItemContainer,
  formButtonContainer: formButtonContainer,
  formItemLabel: formItemLabel,
  textInputStyle: textInputStyle,
  formButtonStyle: formButtonStyle,
  inputContainerStyle: inputContainerStyle,
  spinnerIcon: spinnerIcon
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

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
            lineNumber: 102
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].avatarContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 103
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].editImageContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'user-avatar', className: Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].avatarIconStyle), src: _this.getUserImage(user), __source: {
                fileName: _jsxFileName,
                lineNumber: 105
              }
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('input', { type: 'file', id: 'profileImage', accept: 'image/*', className: Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].inputStyle), onChange: _this.fileChangeHandler, __source: {
                fileName: _jsxFileName,
                lineNumber: 106
              }
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'label',
              { htmlFor: 'profileImage', className: Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].editImageIconContainer), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 107
                }
              },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                'svg',
                { className: 'mdi-icon ', width: '14', height: '14', fill: 'white', viewBox: '0 0 24 24', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('path', { d: 'M4,4H7L9,2H15L17,4H20C21.1,4 22,4.9 22,6V18C22,19.1 21.1,20 20,20H4C2.9,20 2,19.1 2,18V6C2,4.9 2.9,4 4,4M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7M12,9C13.66,9 15,10.34 15,12C15,13.66 13.66,15 12,15C10.34,15 9,13.66 9,12C9,10.34 10.34,9 12,9Z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
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
              lineNumber: 110
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_14__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].headerNameTextStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 111
              }
            },
            user.name
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_14__["default"],
            { tag: 'h6', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].headerUsernameTextStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 112
              }
            },
            user.username
          )
        ),
        _this.state.selectedProfileImage && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].editAvatarOptionsContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 115
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
                lineNumber: 116
              }
            },
            'Save ',
            _this.state.isSubmittingAvatar && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'span',
              { className: Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].spinnerIcon), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 123
                }
              },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_13__["default"], { size: 18, width: 4, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 123
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
                lineNumber: 125
              }
            },
            'Cancel'
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].detailsContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].profileHeaderContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 136
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_14__["default"],
              { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].profileHeaderTextStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 137
                }
              },
              'My Profile'
            ),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_15__["default"],
              { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Link"], to: '/' + user.username, target: '_blank', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].editProfileButton, secondary: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 138
                }
              },
              'View Profile',
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('i', { className: 'icon ion-md-person ' + Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].editIcon), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 138
                }
              })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_EditProfileForm__WEBPACK_IMPORTED_MODULE_16__["default"], { user: user, onSubmit: _this.handleProfileSubmit, __source: {
              fileName: _jsxFileName,
              lineNumber: 140
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
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](1);

                this.setState({ isSubmittingAvatar: false });
                console.log(_context.t0);

              case 15:
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
            lineNumber: 147
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].cardContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 148
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

/***/ }),

/***/ "./src/screens/UserProfile/styles.js":
/*!*******************************************!*\
  !*** ./src/screens/UserProfile/styles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 100%;\n  align-items: center;\n  min-height: calc(100vh - 4.5em);\n  border-bottom: 1px solid ', ';\n'], ['\n  width: 100%;\n  align-items: center;\n  min-height: calc(100vh - 4.5em);\n  border-bottom: 1px solid ', ';\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 45em;\n  margin-top: 3em;\n  margin-bottom: 3em;\n  background-color: ', ';\n  border-radius: 4px;\n  padding: 2em 3em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    padding: 1.5em;\n  }\n'], ['\n  width: 45em;\n  margin-top: 3em;\n  margin-bottom: 3em;\n  background-color: ', ';\n  border-radius: 4px;\n  padding: 2em 3em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    padding: 1.5em;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  align-items: center;\n  justify-content: center;\n  padding: 5em;\n'], ['\n  align-items: center;\n  justify-content: center;\n  padding: 5em;\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n'], ['\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  display: block;\n  position: relative;\n'], ['\n  display: block;\n  position: relative;\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 125px;\n  height: 125px;\n  border-radius: 50%;\n  display: inline-block;\n  object-fit: cover;\n  border: 2px solid ', ';\n'], ['\n  width: 125px;\n  height: 125px;\n  border-radius: 50%;\n  display: inline-block;\n  object-fit: cover;\n  border: 2px solid ', ';\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n'], ['\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  display: flex;\n  width: 32px;\n  height: 32px;\n  border-radius: 100%;\n  border: 1px solid white;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  bottom: 2px;\n  right: 2px;\n  background: ', ';\n  transition: all 0.15s ease-out;\n\n  &:hover {\n    background-color: ', ';\n  }\n'], ['\n  display: flex;\n  width: 32px;\n  height: 32px;\n  border-radius: 100%;\n  border: 1px solid white;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  bottom: 2px;\n  right: 2px;\n  background: ', ';\n  transition: all 0.15s ease-out;\n\n  &:hover {\n    background-color: ', ';\n  }\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-top: 1.5em;\n  text-align: center;\n'], ['\n  padding-top: 1.5em;\n  text-align: center;\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n'], ['\n  font-weight: 500;\n']),
    _templateObject11 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  color: ', ';\n'], ['\n  color: ', ';\n']),
    _templateObject12 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-top: 0.6em;\n'], ['\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-top: 0.6em;\n']),
    _templateObject13 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 2em;\n'], ['\n  margin-top: 2em;\n']),
    _templateObject14 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 1em;\n  border-bottom: .5px dashed ', ';\n'], ['\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 1em;\n  border-bottom: .5px dashed ', ';\n']),
    _templateObject15 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  margin-bottom: -0.4em;\n'], ['\n  font-weight: 600;\n  margin-bottom: -0.4em;\n']),
    _templateObject16 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  font-size: 1em;\n\n  @media (max-width: ', ') {\n    padding-left: .8em;\n    padding-right: .8em;\n  }\n'], ['\n  font-weight: 600;\n  font-size: 1em;\n\n  @media (max-width: ', ') {\n    padding-left: .8em;\n    padding-right: .8em;\n  }\n']),
    _templateObject17 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-left: 0.75em;\n'], ['\n  margin-left: 0.75em;\n']),
    _templateObject18 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-left: 0.3em;\n'], ['\n  margin-left: 0.3em;\n']),
    _templateObject19 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-left: 0.2em;\n'], ['\n  margin-left: 0.2em;\n']);





var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray);

var cardContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var loadingContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3);

var avatarContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4);

var editImageContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5);

var avatarIconStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white);

var inputStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7);

var editImageIconContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText));

var headerTextContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9);

var headerNameTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10);

var headerUsernameTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject11, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightText);

var editAvatarOptionsContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12);

var detailsContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject13);

var profileHeaderContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject14, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder);

var profileHeaderTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject15);

var editProfileButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject16, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var editIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject17);

var verifiedIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject18);

var spinnerIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject19);

var styles = {
  mainContainer: mainContainer,
  cardContainer: cardContainer,
  loadingContainer: loadingContainer,
  avatarContainer: avatarContainer,
  editImageContainer: editImageContainer,
  avatarIconStyle: avatarIconStyle,
  inputStyle: inputStyle,
  headerTextContainer: headerTextContainer,
  headerNameTextStyle: headerNameTextStyle,
  editAvatarOptionsContainer: editAvatarOptionsContainer,
  headerUsernameTextStyle: headerUsernameTextStyle,
  editImageIconContainer: editImageIconContainer,
  detailsContainer: detailsContainer,
  profileHeaderContainer: profileHeaderContainer,
  profileHeaderTextStyle: profileHeaderTextStyle,
  editProfileButton: editProfileButton,
  editIcon: editIcon,
  verifiedIcon: verifiedIcon,
  spinnerIcon: spinnerIcon
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

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

  if (matches.length === 0) {
    res.status(404).send('Not found');
  }
  var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_5__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
    react_router_dom__WEBPACK_IMPORTED_MODULE_3__["StaticRouter"],
    { context: context, location: req.url, __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      }
    },
    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      }
    })
  ));

  if (context.url) {
    res.redirect(context.url);
  } else {
    res.status(200).send('<!doctype html>\n    <html lang="">\n    <head>\n        <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n        <meta charset="utf-8" />\n        <link rel="manifest" href="/manifest.json">\n        <link rel="shortcut icon" href="/favicon.png">\n        <link href="https://unpkg.com/ionicons@4.0.0/dist/css/ionicons.min.css"rel="stylesheet"/>\n        <title>Bitcharge</title>\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        ' + (assets.client.css ? '<link rel="stylesheet" href="' + assets.client.css + '">' : '') + '\n        ' + ( false ? undefined : '<script src="' + assets.client.js + '" defer crossorigin></script>') + '\n    </head>\n    <body>\n        <div id="root">' + markup + '</div>\n    </body>\n</html>');
  }
});

/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ }),

/***/ "./src/store/actions/address.js":
/*!**************************************!*\
  !*** ./src/store/actions/address.js ***!
  \**************************************/
/*! exports provided: fetchAddresses, addAddress, updateAddress, deleteAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAddresses", function() { return fetchAddresses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAddress", function() { return addAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAddress", function() { return updateAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAddress", function() { return deleteAddress; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/store/constants.js");


var fetchAddresses = function fetchAddresses() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["FETCH_ADDRESSES"]
  };
};

var addAddress = function addAddress(address) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["ADD_ADDRESS"],
    payload: {
      address: address
    }
  };
};

var updateAddress = function updateAddress(address) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_ADDRESS"],
    payload: {
      address: address
    }
  };
};

var deleteAddress = function deleteAddress(address, params) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["DELETE_ADDRESS"],
    payload: {
      address: address,
      params: params
    }
  };
};



/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("emotion");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "polished":
/*!***************************!*\
  !*** external "polished" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "qrcode.react":
/*!*******************************!*\
  !*** external "qrcode.react" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("qrcode.react");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "react-copy-to-clipboard":
/*!******************************************!*\
  !*** external "react-copy-to-clipboard" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-copy-to-clipboard");

/***/ }),

/***/ "react-media":
/*!******************************!*\
  !*** external "react-media" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-media");

/***/ }),

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),

/***/ "react-pose":
/*!*****************************!*\
  !*** external "react-pose" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-pose");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "react-select/lib/Async":
/*!*****************************************!*\
  !*** external "react-select/lib/Async" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select/lib/Async");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

};
//# sourceMappingURL=main.e7638281173dcc8c7f9e.hot-update.js.map