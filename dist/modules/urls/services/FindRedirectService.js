"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _UrlRespoitory = _interopRequireDefault(require("../infra/typeorm/repositories/UrlRespoitory"));

var _IUrlRepository = _interopRequireDefault(require("../IRepositories/IUrlRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let FindRedirectService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UrlRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUrlRepository.default === "undefined" ? Object : _IUrlRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class FindRedirectService {
  constructor(UrlRepository) {
    this.UrlRepository = UrlRepository;
  }

  async execute(shortUrl) {
    const urlExist = await this.UrlRepository.findUrlByShortUrl(shortUrl);

    if (!urlExist) {
      throw new _AppError.default('url not found', 404);
    }

    const fullUrl = `http://${urlExist.url}`;
    console.log();
    return fullUrl;
  }

}) || _class) || _class) || _class) || _class);
var _default = FindRedirectService;
exports.default = _default;