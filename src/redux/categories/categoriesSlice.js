import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    { id: nanoid(), category: 'sci-fi' },
    { id: nanoid(), category: 'Economy' },
    { id: nanoid(), category: 'Technology' },
  ],
  underConstruction: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    CATEGORY: {
      reducer(state, action) {
        state.underConstruction.push(action.payload);
      },
    },
  },
});

export const selectAllCategories = (state) => state.categories;

export const { CATEGORY } = categoriesSlice.actions;

export default categoriesSlice.reducer;
