/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllBooks } from '../redux/books/booksSlice';
import Book from './Book';

const BookList = () => {
  const books = useSelector(selectAllBooks);

  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.id}
          bookId={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </ul>
  );
};
export default BookList;
