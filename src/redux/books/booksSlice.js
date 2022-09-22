import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: nanoid(), title: 'Mallam Idris', author: 'Kenneth Abas' },
  {
    id: nanoid(),
    title: 'Ibibio: The people and Culture',
    author: 'Ekpo Otu',
  },
  { id: nanoid(), title: 'The Cold War', author: 'Koloviski Kollon' },
];

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
  },
});

export const selectAllBooks = (state) => state.books;

export const { BOOK_ADDED } = booksSlice.actions;

export default booksSlice.reducer;
