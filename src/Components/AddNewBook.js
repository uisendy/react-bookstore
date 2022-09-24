import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postNewBook } from '../redux/books/booksSlice';
import { selectAllCategories } from '../redux/categories/categoriesSlice';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const allCategory = useSelector(selectAllCategories);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onAuthorChanged = (e) => setAuthor(e.target.value);
  const onCategoryChanged = (e) => setCategory(e.target.value);

  const categoryOptions = allCategory.map((category) => (
    <option value={category.category} key={category.id}>
      {category.category}
    </option>
  ));
  const ableToSave =
    [title, author, category].every(Boolean) && addRequestStatus === 'idle';

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ran');

    if (ableToSave) {
      try {
        setAddRequestStatus('pending');
        dispatch(
          postNewBook({
            item_id: nanoid(),
            title: title,
            author: author,
            category: category,
          }),
        ).unwrap();

        setTitle('');
        setAuthor('');
        setCategory('');
      } catch (err) {
        throw new Error(err);
      } finally {
        setAddRequestStatus('idle');
      }
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
      <select value={category} onChange={(e) => onCategoryChanged(e)}>
        <option value=""></option>
        {categoryOptions}
      </select>
      <button type="submit" className="addBtn" disabled={!ableToSave}>
        add book
      </button>
    </form>
  );
};

export default AddNewBook;
