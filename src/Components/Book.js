import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from '../redux/books/booksSlice';
import ProgressPlaceholder from '../images/illustrations/ProgressPlaceholder.png';

const Book = ({
  bookId, title, author, category,
}) => {
  const dispatch = useDispatch();

  const handleDeleteBook = () => {
    dispatch(deleteBook({ item_id: bookId }));
  };

  return (
    <>
      <li className="book-container grid grid-cols-2 bg-white rounded border-solid border h-52 md:h-40 mx-[6.5%] md:mx-[8.5%] mb-0 mt-10 pb-4 pt-4 px-6 md:pb-6 md:pt-6">
        <div className="flex flex-col justify-center h-full ">
          <small className=" opacity-50 font-Montserrat text-sm font-bold tracking-normal text-secondary-gray">
            {category}
          </small>
          <h2 className=" font-RobotoSlab text-xl font-bold tracking-tight text-secondary-gray">
            {title}
          </h2>
          <p className="font-RobotoSlab font-light text-sm text-secondary-blue">
            {author}
          </p>
          <div className="mt-4">
            <button
              className="font-RobotoSlab font-light text-sm text-secondary-blue hover:text-secondary-gray"
              type="button"
            >
              Comment
            </button>
            <span className="border-solid border h-6 mx-4 mb-0 mt-3 w-px bg-slate-600 opacity-50" />
            <button
              className="font-RobotoSlab font-light text-sm mx-0 mb-0 mt-1 text-secondary-blue hover:text-secondary-gray"
              type="button"
              onClick={handleDeleteBook}
            >
              Remove
            </button>
            <span className="border-solid border h-6 mx-4 mb-0 mt-3 w-px bg-slate-600 opacity-50" />
            <button
              className="font-RobotoSlab font-light text-sm mx-0 mb-0 mt-1 text-secondary-blue hover:text-secondary-gray"
              type="button"
            >
              Edit
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center h-full ">
          <div className="progress__chap ml-10 flex justify-between">
            <div className="flex gap-4">
              <div className="flex flex-col justify-center h-full">
                <img src={ProgressPlaceholder} alt="progress-bar" />
              </div>
              <div className="flex flex-col justify-center h-full">
                <h2 className="percentage font-Montserrat text-secondary-gray text-3xl ">
                  8%
                </h2>
                <p className=" text-sm font-Montserrat text-secondary-gray opacity-50 ">
                  Completed
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center h-full">
              <span className="border-solid border h-16 w-px bg-slate-600 opacity-50" />
            </div>
            <div className="current__chapter font-RobotoSlab text-secondary-gray flex flex-col gap-2 pr-8">
              <h2 className="font-light marker:text-sm uppercase opacity-50">
                Current Chapter
              </h2>
              <p className="font-light text-base tracking-tight">
                Introduction
              </p>
              <Link to="/error">
                <button
                  type="button"
                  className="rounded-sm py-2 px-5 w-52 bg-primary-blue hover:opacity-90 font-light text-center text-white tracking-wide uppercase"
                >
                  Update Progress
                </button>
              </Link>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default Book;
