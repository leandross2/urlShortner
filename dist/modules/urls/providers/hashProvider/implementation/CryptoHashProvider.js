"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CryptoHashProvider {
  async generateStringRandomSize(min, max) {
    const randomSize = _crypto.default.randomInt(5, 10);

    const shortString = _crypto.default.randomBytes(randomSize).toString('hex').slice(0, randomSize);

    return shortString;
  }

}

var _default = CryptoHashProvider;
exports.default = _default;