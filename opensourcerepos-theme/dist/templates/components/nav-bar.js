"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NavBar;

var _react = _interopRequireDefault(require("react"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import MenuIcon from '@material-ui/icons/Menu';
function NavBar() {
  return _react["default"].createElement("div", null, _react["default"].createElement(_AppBar["default"], {
    position: "static",
    className: "appbar"
  }, _react["default"].createElement(_Toolbar["default"], null, _react["default"].createElement(_Typography["default"], {
    variant: "h6"
  }, "OpenSourceRepos"), _react["default"].createElement(_Button["default"], {
    color: "inherit"
  }, "Login"))));
}