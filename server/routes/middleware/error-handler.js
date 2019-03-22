const logger = require('../../commons/logger').app;
const AppError = require('../../../commons/exceptions/app-error');

module.exports = function errorHandler(err, req, res, next) {
  // ヘッダーがすでにクライアントに送信されているときに、
  // デフォルトのExpressエラーハンドラに委任する必要がある
  if (res.headersSent) {
    return next(err);
  }

  let statusCode = 400;
  if (err instanceof AppError) {
    // 業務エラーの場合
    logger.debug(err.toString());
    statusCode = err.statusCode || statusCode;
  } else {
    logger.error(err.stack || err);
    // 業務エラー以外の場合はシステムエラーに置き換える
    err = new AppError('systemError');
  }

  res.status(statusCode).json({
    error: err.toJSON(),
  });
};
