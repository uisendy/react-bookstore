import React from 'react';

const Book = ({ title, author }) => (
  <>
    <li className="book-container">
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="submit">delete</button>
    </li>
  </>
);

export default Book;
