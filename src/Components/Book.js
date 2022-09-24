import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

const Book = ({ bookId, title, author }) => {
  const dispatch = useDispatch();

  const handleDeleteBook = () => {
    dispatch(deleteBook({ item_id: bookId }));
  };

  return (
    <>
      <li className="book-container">
        <h2>{title}</h2>
        <p>{author}</p>
        <button type="button" onClick={handleDeleteBook}>
          delete
        </button>
      </li>
    </>
  );
};

export default Book;
