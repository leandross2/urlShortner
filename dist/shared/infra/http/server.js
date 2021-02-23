"use strict";

require("reflect-metadata");

require("express-async-errors");

require("dotenv/config");

require("../typeorm");

require("../../container");

var _express = _interopRequireDefault(require("express"));

var _AppError = _interopRequireDefault(require("../../errors/AppError"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
app.use(_routes.default);
app.use((err, request, response, _) => {
  if (err instanceof _AppError.default) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  }

  console.error(err);
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  });
});
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`rodando na ${port}`);
});