import React from 'react';
import { useDispatch } from 'react-redux';
import { BOOK_DELETED } from '../redux/books/booksSlice';
const dispatch = useDispatch();

const handleDeleteBook = () => {
  dispatch(BOOK_DELETED({ bookId }));
};
const Book = ({ bookId, title, author }) => {
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
