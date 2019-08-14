"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var data = _ref.pageContext;
  return _react["default"].createElement("div", {
    className: "row"
  }, _react["default"].createElement("div", {
    dangerouslySetInnerHTML: {
      __html: data.html
    }
  }), _react["default"].createElement("div", {
    dangerouslySetInnerHTML: {
      __html: data.tableOfContents
    }
  }));
};

exports["default"] = _default;