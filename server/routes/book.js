const express = require('express');
const router = express.Router();

const Book = require('../model/book');

router.get('/', (req, res) => {
  Book.find()
    .then(book => {
      res.json(book);
    })
    .catch(error => res.json(error));
});

router.get('/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(book => {
      res.json(book);
    })
    .catch(error => res.json(error));
});

router.post('/add', (req, res) => {
  const books = new Book({
    name: req.body.name,
    author: req.body.author,
    pages: req.body.pages,
  });

  books
    .save()
    .then(book => res.json(book))
    .catch(err => res.json(err));
});

router.put('/update/:id', (req, res) => {
  const book = {};
  if (req.body.name) book.name = req.body.name;
  if (req.body.author) book.author = req.body.author;
  if (req.body.pages) book.pages = req.body.pages;
  Book.findOneAndUpdate(req.params.id, { $set: book }, { new: true })
    .then(book => {
      res.json(book);
    })
    .catch(err => res.json(err));
});

router.delete('/delete/:id', (req, res) => {
  Book.findById(req.params.id).then(book => {
    book.remove().then(() => res.json({ message: 'sucessfully deleted' }));
  });
});

module.exports = router;
