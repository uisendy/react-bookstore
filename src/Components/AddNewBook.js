import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postNewBook } from '../redux/books/booksSlice';
import { selectAllCategories } from '../redux/categories/categoriesSlice';
import './addbook.css';

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

  const categoryOptions = allCategory.categories.map((category) => (
    <option value={category.category} key={category.id}>
      {category.category}
    </option>
  ));
  const ableToSave = [title, author, category !== 'select category'].every(Boolean)
    && addRequestStatus === 'idle';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ableToSave) {
      try {
        setAddRequestStatus('pending');
        dispatch(
          postNewBook({
            item_id: nanoid(),
            title,
            author,
            category,
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
    <div>
      <span className="border-solid border h-px w-20 ml-0 mb-8 mt-10 mr-px bg-secondary-gray opacity-10" />
      <h3 className=" px-[8.5%] h-6 text-xl ml-0 mb-5 mt-8 not-italic tracking-normal font-Montserrat uppercase font-bold opacity-70 text-secondary-gray">
        Add new book
      </h3>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="px-[8.5%] mb-52 mt-10 flex gap-6"
      >
        <input
          type="text"
          className="title__input"
          placeholder="book title"
          value={title}
          onChange={(e) => onTitleChanged(e)}
        />
        <input
          type="text"
          className="author"
          placeholder="book author"
          value={author}
          onChange={(e) => onAuthorChanged(e)}
        />
        <select
          value={category}
          onChange={(e) => onCategoryChanged(e)}
          className="category__select"
        >
          <option>select category</option>
          {categoryOptions}
        </select>
        <button
          type="submit"
          disabled={!ableToSave}
          className="add__button rounded-sm py-2 px-5 w-52 bg-primary-blue hover:opacity-90 font-light text-center text-white tracking-wide uppercase"
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddNewBook;
