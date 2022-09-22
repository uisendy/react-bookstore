import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

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
