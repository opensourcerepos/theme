"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _header = require("../components/header");

var _blog = require("../components/blog");

var _footer = require("../components/footer");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NewBlog =
/*#__PURE__*/
function (_Component) {
  _inherits(NewBlog, _Component);

  function NewBlog() {
    _classCallCheck(this, NewBlog);

    return _possibleConstructorReturn(this, _getPrototypeOf(NewBlog).apply(this, arguments));
  }

  _createClass(NewBlog, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_header.Header, null), _react["default"].createElement("div", {
        className: "container-fluid"
      }, _react["default"].createElement("div", {
        className: "card p-3 m-3"
      }, _react["default"].createElement("h4", null, "How to submit new blog?"), _react["default"].createElement("p", null, "In order to submit a new blog to our site, send a pull request to the repository of OpenSourceRepos in github."), _react["default"].createElement("h4", null, "Send a pull request"), _react["default"].createElement("p", null, "In order to send the pull request, follow the following steps"), _react["default"].createElement("ul", null, _react["default"].createElement("li", null, "Clone the repository ", _react["default"].createElement("a", {
        href: "https://github.com/opensourcerepos/blogs",
        target: "blank"
      }, "https://github.com/opensourcerepos/blogs")), _react["default"].createElement("li", null, "Set up the repository in your local machine."), _react["default"].createElement("li", null, "Send the pull request to the repository."), _react["default"].createElement("li", null, "Once the pull request is reviewed and merged by the admins, the blog will be published.")))), _react["default"].createElement(_footer.Footer, null));
    }
  }]);

  return NewBlog;
}(_react.Component);

var _default = NewBlog;
exports["default"] = _default;