"use strict";

var _tsyringe = require("tsyringe");

require("../../modules/urls/providers/hashProvider");

var _UrlRespoitory = _interopRequireDefault(require("../../modules/urls/infra/typeorm/repositories/UrlRespoitory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tsyringe.container.registerSingleton('UrlRepository', _UrlRespoitory.default);