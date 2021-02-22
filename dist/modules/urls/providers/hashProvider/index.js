"use strict";

var _tsyringe = require("tsyringe");

var _CryptoHashProvider = _interopRequireDefault(require("./implementation/CryptoHashProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tsyringe.container.registerSingleton('HashProvider', _CryptoHashProvider.default);