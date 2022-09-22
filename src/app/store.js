import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../redux/books/booksSlice';
import categoriesReducer from '../redux/categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
