import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CATEGORY,
  selectAllCategories,
} from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();

  const categories = useSelector(selectAllCategories);

  const handleCheckStatus = () => {
    dispatch(
      CATEGORY({
        value: 'Under Construction',
      }),
    );
  };
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
