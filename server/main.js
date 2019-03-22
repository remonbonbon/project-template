const path = require('path');
const express = require('express');
require('express-async-errors');

const config = require('./config');
const logger = require('./commons/logger').system;
logger.debug(`Config file: ${config._configFilename}`);

const app = express();
app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.use(require('./routes'));
app.use(require('./routes/middleware/not-found-handler'));
app.use(require('./routes/middleware/error-handler'));

app.listen(config.server.port, () =>
  logger.info(`Start server http://localhost:${config.server.port}`)
);
