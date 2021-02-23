"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuidv = require("uuidv4");

var _Url = _interopRequireDefault(require("../../infra/typeorm/entities/Url"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FakeUrlRepository {
  constructor() {
    this.urls = void 0;
  }

  async create(urlData) {
    const url = new _Url.default();
    Object.assign(url, {
      id: (0, _uuidv.uuid)()
    }, urlData);
    this.urls.push(url);
    return url;
  }

  async findUrl(url) {
    const findUrl = this.urls.find(item => item.url === url);
    return findUrl;
  }

}

var _default = FakeUrlRepository;
exports.default = _default;