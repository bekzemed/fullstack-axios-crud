import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Books = () => {
  const [books, getBooks] = useState([]);

  useEffect(() => {
    async function fetchBook() {
      await axios
        .get('http://localhost:5000/book')
        .then(book => {
          getBooks(book.data);
        })
        .then(err => {
          console.log(err);
        });
    }

    fetchBook();
  }, [books]);

  const handleDelete = async id => {
    await axios.delete(`http://localhost:5000/book/delete/${id}`);
  };

  return (
    <>
      <div className="submit-container">
        <h2 className="book-title">Books</h2>
        <Link to="/add/book" style={{ textDecoration: 'none' }}>
          <Button variant="outlined" color="primary">
            ADD BOOKS
          </Button>
        </Link>
      </div>

      <div className="top-container">
        <p>Name</p>
        <p>Author</p>
        <p>Pages</p>
        <p>Edit</p>
        <p>Delete</p>
      </div>
      {books.map(book => (
        <div key={book._id} className="book-container">
          <p>{book.name}</p>
          <p>{book.author}</p>
          <p>{book.pages}</p>
          <Link to={`/book/${book._id}`} style={{ display: 'flex' }}>
            <i className="fas fa-edit"></i>
          </Link>
          <i
            onClick={() => handleDelete(book._id)}
            className="fas fa-times-circle"
          ></i>
        </div>
      ))}
    </>
  );
};

export default Books;
