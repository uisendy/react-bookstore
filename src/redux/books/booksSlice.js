import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import urlMAP from '../../data/bookStoreAPI';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(urlMAP.getURL);
    const data = Object.entries(response.data).map(([key, value]) => ({
      id: key,
      title: value[0].title,
      author: value[0].author,
    }));
    console.log(data);
    return data;
  } catch (err) {
    throw new Error(err);
  }
});

export const postNewBook = createAsyncThunk('books/postNewBook', async () => {
  try {
    const response = await axios.post(urlMAP.getURL);
  } catch (error) {
    throw new Error(err);
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    BOOK_ADDED: {
      reducer(state, action) {
        console.log(action.payload);
        state.books.push(action.payload);
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
        console.log(action.payload);
        const bookId = action.payload;
        console.log(typeof bookId);
        return state.books.filter((book) => book.id !== bookId);
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
        state.books = state.books.concat(action.payload);
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';

        state.error = action.error.message;
      });
  },
});

export const getAllBooks = (state) => state.books.books;
export const getStatus = (state) => state.books.status;
export const getError = (state) => state.books.error;

export const { BOOK_ADDED, BOOK_DELETED } = booksSlice.actions;

export default booksSlice.reducer;
