"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _RedirectsController = _interopRequireDefault(require("../controllers/RedirectsController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const redirectRouter = (0, _express.Router)();
const redirectsController = new _RedirectsController.default();
redirectRouter.get('/:url_short', redirectsController.show);
var _default = redirectRouter;
exports.default = _default;