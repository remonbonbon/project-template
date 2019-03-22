const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'ToDO',
  });
});
router.use('/todos', require('./todos-route'));

module.exports = router;
