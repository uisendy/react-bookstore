import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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

  const content = (
    <div className="w-full mb-16 md:mb-8 text-center lg:text-left">
      <h1 className="font-light font-sans text-center lg:text-left text-5xl lg:text-8xl mt-12 md:mt-0 text-gray-700">
        Sorry, this page is still under Construction.
      </h1>
      <Link to="/">
        <button
          type="button"
          className="px-2 py-2 w-36 mt-20 text-white font-light transition ease-in duration-200 hover:bg-yellow-400 border-2 text-lg border-gray-700 bg-blue-500 focus:outline-none"
        >
          Go back home
        </button>
      </Link>
    </div>
  );

  return (
    <div className="px-[8.5%] h-[87vh]">
      <button
        type="button"
        onClick={handleCheckStatus}
        className="px-2 py-2 w-36  text-white font-light transition ease-in duration-200 hover:bg-yellow-400 border-2 text-lg border-gray-700 bg-blue-500 focus:outline-none"
      >
        Check status
      </button>
      {categories.underConstruction[0] !== undefined ? content : null}
    </div>
  );
};

export default Categories;
