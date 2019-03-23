const db = require('../db');

module.exports.save = async function(todo) {
  if (todo.id) {
    // Update todo
    todo._id = todo.id;
    delete todo.id;
    await db.update({ _id: todo._id }, todo, {
      returnUpdatedDocs: true,
    });
  } else {
    // Add new todo
    await db.insert(todo);
  }
};

module.exports.list = async function() {
  return (await db.find({})).map(todo => {
    todo.id = todo._id;
    delete todo._id;
    return todo;
  });
};

module.exports.remove = async function(id) {
  await db.remove({ _id: id });
};
