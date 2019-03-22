const db = require('../../models/db');

module.exports.list = async function() {
  return await db.find({});
};
