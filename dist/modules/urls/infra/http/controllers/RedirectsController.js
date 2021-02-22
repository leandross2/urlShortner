"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _FindRedirectService = _interopRequireDefault(require("../../../services/FindRedirectService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RedirectsController {
  async show(request, response) {
    const {
      url_short
    } = request.params;

    const findRedirect = _tsyringe.container.resolve(_FindRedirectService.default);

    const redirect = await findRedirect.execute(url_short);
    console.log(redirect);
    return response.redirect(301, redirect);
    response.send();
  }

}

var _default = RedirectsController;
exports.default = _default;