const Datastore = require('nedb');
const path = require('path');

const dbFilepath = path.join(__dirname, '../../tmp/database');
const db = new Datastore({
  filename: dbFilepath,
  autoload: true,
});

function makeAsync(funcName) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      db[funcName](...args, function(err, results) {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };
}

module.exports.insert = makeAsync('insert');
module.exports.find = makeAsync('find');
module.exports.update = makeAsync('update');
module.exports.remove = makeAsync('remove');
