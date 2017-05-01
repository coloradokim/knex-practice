const express = require('express');
const router = express.Router();
const db = require('../db/knex.js');

router.get('/', async(req, res, next) => {
  const books = await db('books')
  res.json(books)
});

module.exports = router;
