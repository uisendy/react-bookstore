import React from 'react';

const Book = ({ title, author }) => (
  <div className="book-container">
    <h2>{title}</h2>
    <p>{author}</p>
    <button type="submit">delete</button>
  </div>
);

export default Book;
