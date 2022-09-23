import React from 'react';
import { useDispatch } from 'react-redux';
import { BOOK_DELETED } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleDeleteBook = () => {
    dispatch(BOOK_DELETED(book.id));
  };

  return (
    <>
      <li className="book-container">
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <button type="button" onClick={handleDeleteBook}>
          delete
        </button>
      </li>
    </>
  );
};

export default Book;
