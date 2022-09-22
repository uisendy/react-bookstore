import React from 'react';

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
