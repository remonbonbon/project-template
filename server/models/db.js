const Datastore = require('nedb');
const path = require('path');

const dbFilepath = path.join(__dirname, '../../tmp/database');
const db = new Datastore({
  filename: dbFilepath,
  autoload: true,
});

function makeAsync(funcName) {
  return function(query) {
    return new Promise((resolve, reject) => {
      db[funcName](query, function(err, results) {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };
}

module.exports.find = makeAsync('find');
