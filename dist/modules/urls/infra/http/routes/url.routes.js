"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _UrlsController = _interopRequireDefault(require("../controllers/UrlsController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const urlRoutes = (0, _express.Router)();
const urlsController = new _UrlsController.default();
urlRoutes.post('/new', urlsController.create);
var _default = urlRoutes;
exports.default = _default;