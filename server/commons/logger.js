const winston = require('winston');
const _ = require('lodash');
const config = require('../config');

function format(loggerLabel) {
  return winston.format.combine(
    winston.format.json(),
    winston.format.colorize({ all: true }),
    winston.format.timestamp({ format: 'YYYY-MM-DD hh:mm:ss.SSS' }),
    winston.format.label({ label: loggerLabel }),
    winston.format.printf(({ level, message, label, timestamp }) => {
      return `${timestamp} [${level}](${label}) ${message}`;
    })
  );
}

const loggers = _.reduce(
  config.loggers,
  (loggersObj, loggerConfig, loggerName) => {
    loggersObj[loggerName] = winston.createLogger({
      level: loggerConfig.level,
      format: format(loggerName),
      transports: [new winston.transports.Console()],
    });
    return loggersObj;
  },
  {}
);

module.exports = loggers;
