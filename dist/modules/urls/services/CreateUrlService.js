"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _UrlRespoitory = _interopRequireDefault(require("../infra/typeorm/repositories/UrlRespoitory"));

var _IUrlRepository = _interopRequireDefault(require("../IRepositories/IUrlRepository"));

var _IHashprovider = _interopRequireDefault(require("../providers/hashProvider/models/IHashprovider"));

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateUrlService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UrlRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('HashProvider')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IUrlRepository.default === "undefined" ? Object : _IUrlRepository.default, typeof _IHashprovider.default === "undefined" ? Object : _IHashprovider.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateUrlService {
  constructor(UrlRepository, HashProvider) {
    this.UrlRepository = UrlRepository;
    this.HashProvider = HashProvider;
  }

  async execute(newUrl) {
    const urlExist = await this.UrlRepository.findUrlByUrl(newUrl);

    if (urlExist) {
      return urlExist;
    }

    const shortString = await this.HashProvider.generateStringRandomSize(5, 10);
    const shortStringExist = await this.UrlRepository.findUrlByShortUrl(shortString);

    if (shortStringExist) {
      throw new _AppError.default('error when generating url, please, try again');
    }

    const newUrlCleaned = newUrl.replace(/http(s)?:\/\//, '');
    const url = await this.UrlRepository.create({
      url: newUrlCleaned,
      url_short: shortString
    });
    return url;
  }

}) || _class) || _class) || _class) || _class) || _class);
var _default = CreateUrlService;
exports.default = _default;