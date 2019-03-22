const express = require('express');
const router = express.Router();

const todosService = require('../services/todos');

router.get('/', async (req, res) => {
  const result = await todosService.list();
  res.json({
    todos: result,
  });
});

module.exports = router;
