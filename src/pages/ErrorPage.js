import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Lost } from '../images/illustrations/image1.svg';

const ErrorPage = () => (
  <main className=" h-[87.5vh] bg-blue-200 overflow-hidden relative  ">
    <div className="container mx-auto pt-32 md:pt-0 px-6 z-10 flex items-center justify-between">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-between items-center relative">
        <div className="w-full mb-16 md:mb-8 text-center lg:text-left">
          <h1 className="font-light font-sans text-center lg:text-left text-5xl lg:text-8xl mt-12 md:mt-0 text-gray-700">
            Sorry, this page isn&#x27;t available
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
        <div className="block w-full mx-auto md:mt-0 relative max-w-md lg:max-w-2xl">
          <Lost />
        </div>
      </div>
    </div>
  </main>
);

export default ErrorPage;
