/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';

const BookList = () => {
  const [books, setBooks] = useState([
    { id: uuidv4(), title: 'Mallam Idris', author: 'Kenneth Abas' },
    {
      id: uuidv4(),
      title: 'Ibibio: The people and Culture',
      author: 'Ekpo Otu',
    },
    { id: uuidv4(), title: 'The Cold War', author: 'Koloviski Kollon' },
  ]);

  return (
    <ul>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
    </ul>
  );
};
export default BookList;
