// 読み込む設定ファイルを環境変数に応じて切り替える
const process = require('process');

const configFilename =
  process.env.NODE_CONFIG_ENV || process.env.NODE_ENV || 'local';

module.exports = Object.assign(
  {
    _configFilename: configFilename,
  },
  require(`./${configFilename}.env.js`)
);
