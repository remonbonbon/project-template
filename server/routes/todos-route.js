const express = require('express');
const router = express.Router();

const todosService = require('../services/todos');

router.get('/', async (req, res) => {
  const todos = await todosService.list();
  res.json({ todos });
});

router.post('/new', async (req, res) => {
  const todos = await todosService.save(req.body);
  res.json({ todos });
});

router.put('/:id', async (req, res) => {
  const todos = await todosService.save(req.body);
  res.json({ todos });
});

router.delete('/:id', async (req, res) => {
  const todos = await todosService.remove(req.params.id);
  res.json({ todos });
});

module.exports = router;
