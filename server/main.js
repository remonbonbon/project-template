const path = require('path');
const express = require('express');
require('express-async-errors');
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require('./config');
const logger = require('./commons/logger').system;
logger.debug(`Config file: ${config._configFilename}`);

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.use('/api', require('./routes'));
app.use('/api', require('./routes/middleware/not-found-handler'));
app.use('/api', require('./routes/middleware/error-handler'));

app.listen(config.server.port, () =>
  logger.info(`Start server http://localhost:${config.server.port}`)
);
