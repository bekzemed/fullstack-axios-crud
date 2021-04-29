import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router';

const AddBook = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const data = {
      name,
      author,
      pages,
    };

    await axios.post('http://localhost:5000/book/add', data);
    history.goBack();
  };
  return (
    <div>
      <h2 className="header-text">Add Book</h2>
      <form
        noValidate
        autoComplete="off"
        onSubmit={e => handleSubmit(e)}
        className="input-container"
      >
        <TextField
          label="Name"
          value={name || ''}
          variant="outlined"
          style={{ marginBottom: '25px' }}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          label="Author"
          value={author || ''}
          variant="outlined"
          style={{ marginBottom: '25px' }}
          onChange={e => setAuthor(e.target.value)}
        />
        <TextField
          label="Pages"
          value={pages || ''}
          variant="outlined"
          style={{ marginBottom: '25px' }}
          onChange={e => setPages(e.target.value)}
        />
        <Button variant="outlined" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddBook;
