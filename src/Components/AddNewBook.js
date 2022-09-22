import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BOOK_ADDED } from '../redux/books/booksSlice';

const AddNewBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onAuthorChanged = (e) => setAuthor(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(BOOK_ADDED(title, author));

      setTitle('');
      setAuthor('');
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3>Add new book</h3>
      <input
        type="text"
        className="title"
        placeholder="book title"
        value={title.value}
        onChange={(e) => onTitleChanged(e)}
      />
      <input
        type="text"
        className="author"
        placeholder="book author"
        value={author}
        onChange={(e) => onAuthorChanged(e)}
      />
      <button type="submit" className="addBtn">
        add book
      </button>
    </form>
  );
};

export default AddNewBook;
