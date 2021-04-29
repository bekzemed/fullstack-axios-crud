import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const EditBooks = props => {
  const id = props.match.params.id;
  const history = useHistory();

  useEffect(() => {
    async function fetchBook() {
      await axios
        .get(`http://localhost:5000/book/${id}`)
        .then(book => {
          setBook(book.data);
        })
        .catch(err => console.log(err));
    }

    fetchBook();
  });

  const [book, setBook] = useState({});

  const handleSubmit = async e => {
    e.preventDefault();
    const data = {
      name: book.name,
      author: book.author,
      pages: book.pages,
    };
    await axios.put(`http://localhost:5000/book/update/${id}`, data);
    history.goBack();
  };

  return (
    <div>
      <h2 className="header-text">Edit Book</h2>
      <form
        noValidate
        autoComplete="off"
        onSubmit={e => handleSubmit(e)}
        className="input-container"
      >
        <TextField
          label="Name"
          value={book.name || ''}
          variant="outlined"
          style={{ marginBottom: '25px' }}
          onChange={e => setBook({ ...book, name: e.target.value })}
        />
        <TextField
          label="Author"
          value={book.author || ''}
          variant="outlined"
          style={{ marginBottom: '25px' }}
          onChange={e => setBook({ ...book, author: e.target.value })}
        />
        <TextField
          label="Pages"
          value={book.pages || ''}
          variant="outlined"
          style={{ marginBottom: '25px' }}
          onChange={e => setBook({ ...book, pages: e.target.value })}
        />
        <Button variant="outlined" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
