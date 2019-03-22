const messages = require('../messages');

/**
 * 業務エラー
 */
class AppErrror extends Error {
  constructor(code, opt) {
    opt = opt || {};
    if (!code) throw new Error('Missing code');
    const messageFunc = messages[code];
    if (!messageFunc) throw new Error(`Invalid code ${code}`);
    const message = messageFunc.apply(null, opt.args || []);

    super(message);
    this.code = code;
    this.message = message;
    this.statusCode = opt.statusCode; // HTTPステータスコード
  }

  toJSON() {
    return {
      code: this.code,
      message: this.message,
    };
  }

  toString() {
    return `[${this.code}] ${this.message}`;
  }
}

module.exports = AppErrror;
