import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 0, category: 'sci-fi' },
  { id: 1, category: 'Economy' },
  { id: 2, category: 'Technology' },
];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    CATEGORY: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
  },
});

export const selectAllCategories = (state) => state.categories;

export const { CATEGORY } = categoriesSlice.actions;

export default categoriesSlice.reducer;
