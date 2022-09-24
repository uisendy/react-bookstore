import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

const Book = ({ bookId, title, author, category }) => {
  const dispatch = useDispatch();

  const handleDeleteBook = () => {
    dispatch(deleteBook({ item_id: bookId }));
  };

  return (
    <>
      <li className="book-container bg-white rounded border-solid border h-52 md:h-40 mx-[6.5%] md:mx-[8.5%] mb-0 mt-10 pb-4 pt-4 px-6 md:pb-6 md:pt-6 md:pr-40">
        <div>
          <small className=" opacity-50 font-Montserrat text-sm font-bold tracking-normal text-secondary-gray mb-10">
            {category}
          </small>
          <h2 className=" font-RobotoSlab text-xl font-bold mb-0 ml-0 mt-1 not-italic tracking-tight text-secondary-gray">
            {title}
          </h2>
          <p className="font-RobotoSlab font-light text-sm mx-0 mb-0 mt-1 text-secondary-blue">
            {author}
          </p>
        </div>
      </li>
    </>
  );
};

export default Book;
