/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import {
  getAllBooks,
  getError,
  getStatus,
  fetchBooks,
} from '../redux/books/booksSlice';
import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector(getAllBooks);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  let content;
  if (status === 'Loading') {
    content = <p>&quot,loading...&quot,</p>;
  } else if (status === 'succeeded') {
    content = (
      <ul>
        {Object.entries(books).map(([key, value]) => (
          <Book
            key={nanoid()}
            bookId={key}
            title={value[0].title}
            author={value[0].author}
          />
        ))}
      </ul>
    );
  } else if (status === 'failed') {
    content = <p>{error}</p>;
  }

  return <div>{content}</div>;
};
export default BookList;
