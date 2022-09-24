import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineUserCircle } from 'react-icons/hi';

const Header = () => (
  <nav className="bg-white h-24 w-full mt-0 pb-10 py-6 px-[6.5%] md:px-[8.5%] flex justify-between shadow-gray-400 bg-white">
    <div className="items-center md:gap-7 md:flex">
      <h1 className=" font-Montserrat font-bold tracking-normal text-3xl text-primary-blue hover:text-gray-700  ">
        <Link to="/">Bookstore CMS</Link>
      </h1>
      <Link
        className="h-4 font-Montserrat text-sm uppercase tracking-[1.9px] text-secondary-gray mt-3 mr-5 md:mr-0 md:mt-0"
        to="/"
      >
        Books
      </Link>
      <Link
        className="h-4 font-Montserrat text-sm uppercase tracking-[1.9px] text-secondary-gray mt-3 md:mt-0"
        to="/Categories"
      >
        Categories
      </Link>
    </div>
    <HiOutlineUserCircle className="h-12 w-12 text-secondary-gray" />
  </nav>
);

export default Header;
