import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  books: {},
  status: 'idle',
  error: null,
};

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
});

export const selectAllBooks = (state) => state.books;

export const { BOOK_ADDED, BOOK_DELETED } = booksSlice.actions;

export default booksSlice.reducer;
