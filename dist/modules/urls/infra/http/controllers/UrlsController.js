"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CreateUrlService = _interopRequireDefault(require("../../../services/CreateUrlService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UrlsController {
  async create(request, response) {
    const {
      newUrl
    } = request.body;

    const createUrl = _tsyringe.container.resolve(_CreateUrlService.default);

    const url = await createUrl.execute(newUrl);
    return response.json(url);
  }

}

var _default = UrlsController;
exports.default = _default;