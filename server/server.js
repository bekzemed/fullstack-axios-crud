const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
// routes
const book = require('./routes/book');
const config = require('./key/config');

// cors
app.use(cors());

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connection
mongoose
  .connect(config, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('Mongo connect sucessfully'))
  .catch(err => console.log(err));

app.use('/book', book);

const port = process.env.PORT || 5000;
app.listen(5000, () => console.log(`server started at port ${port}`));
