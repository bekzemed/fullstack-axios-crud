const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
});

const Book = mongoose.model('book', BookSchema);
module.exports = Book;
