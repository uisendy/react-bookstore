import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CATEGORY,
  selectAllCategories,
} from '../redux/categories/categoriesSlice';

const Categories = () => {
  return (
    <div>
      <button type="button" onClick={handleCheckStatus}>
        Check status
      </button>
      <p>{categories[0]?.value}</p>
    </div>
  );
};

export default Categories;
