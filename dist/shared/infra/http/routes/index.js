"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _url = _interopRequireDefault(require("../../../../modules/urls/infra/http/routes/url.routes"));

var _redirect = _interopRequireDefault(require("../../../../modules/urls/infra/http/routes/redirect.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use(_redirect.default);
routes.use(_url.default);
routes.get('/', (resquest, response) => {
  return response.json({
    sucesso: true
  });
});
var _default = routes;
exports.default = _default;