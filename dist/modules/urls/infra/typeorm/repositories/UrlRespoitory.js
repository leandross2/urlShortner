"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Url = _interopRequireDefault(require("../entities/Url"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UrlRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Url.default);
  }

  async create(urlData) {
    const url = this.ormRepository.create(urlData);
    await this.ormRepository.save(url);
    return url;
  }

  async findUrlByShortUrl(endUrl) {
    const urlFinded = this.ormRepository.findOne({
      where: {
        url_short: endUrl
      }
    });
    return urlFinded;
  }

  async findUrlByUrl(url) {
    const urlFinded = this.ormRepository.findOne({
      where: {
        url
      }
    });
    return urlFinded;
  }

}

var _default = UrlRepository;
exports.default = _default;