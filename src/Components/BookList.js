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
    console.log(books);
    console.log(status);
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  let content;
  if (status === 'Loading') {
    console.log('loading');
    content = <p>&quot,loading...&quot,</p>;
  } else if (status === 'succeeded') {
    console.log('succeeded');
    content = (
      <ul>
        {books.map((book) => (
          <Book key={nanoid()} book={book} />
        ))}
      </ul>
    );
    console.log('succeeded DOM');
  } else if (status === 'failed') {
    content = <p>{error}</p>;
  }

  return <div>{content}</div>;
};
export default BookList;
