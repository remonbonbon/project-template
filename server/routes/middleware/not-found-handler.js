const AppError = require('../../../commons/exceptions/app-error');

module.exports = function notFoundHandler(req, res, next) {
  throw new AppError('pageNotFound', {
    statusCode: 404,
  });
};
