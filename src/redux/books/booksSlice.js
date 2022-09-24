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

export const postNewBook = createAsyncThunk(
  'books/postNewBook',
  async (postData) => {
    try {
      await axios.post(URL, postData);
      return postData;
    } catch (err) {
      throw new Error(err);
    }
  },
);

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
        console.log(action.payload);
        delete state.books[action.payload.bookId];
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
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';

        state.error = action.error.message;
      })
      .addCase(postNewBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const data = action.payload;
        const entries = Object.fromEntries(
          new Map([
            [
              data.item_id,
              [
                {
                  title: data.title,
                  author: data.author,
                  category: data.category,
                },
              ],
            ],
          ]),
        );
        state.books = { ...state.books, ...entries };
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log(action.payload.item_id);
        delete state.books[action.payload.item_id];
      });
  },
});

export const getAllBooks = (state) => state.books.books;
export const getStatus = (state) => state.books.status;
export const getError = (state) => state.books.error;

export const { BOOK_ADDED, BOOK_DELETED } = booksSlice.actions;

export default booksSlice.reducer;
