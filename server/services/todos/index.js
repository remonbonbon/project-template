const todosModel = require('../../models/todos');

module.exports.save = async function(todo) {
  await todosModel.save(todo);
  return this.list();
};

module.exports.list = async function() {
  return await todosModel.list();
};

module.exports.remove = async function(id) {
  await todosModel.remove(id);
  return this.list();
};
