import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import URL from '../../data/bookStoreAPI';

const initialState = {
  books: {},
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    BOOK_ADDED: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, author) {
        return {
          payload: {
            id: nanoid(),
            title,
            author,
          },
        };
      },
    },
    BOOK_DELETED: {
      reducer(state, action) {
        const { bookId } = action.payload;
        return state.filter((book) => book.id !== bookId);
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const data = action.payload;
        state.books = data;
      });
  },
});

export const selectAllBooks = (state) => state.books;

export const { BOOK_ADDED, BOOK_DELETED } = booksSlice.actions;

export default booksSlice.reducer;
