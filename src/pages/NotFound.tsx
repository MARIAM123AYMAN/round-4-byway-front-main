import React from "react";
import { Link } from "react-router-dom";
import notFound from "../assets/Not-found.avif";

const NotFound: React.FC = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col space-y-6 md:w-1/2">
            <h1 className="text-6xl">Oops...</h1>
            <p className="text-md text-gray-500 mb-6">
              It looks like it may have been moved or deleted, or the URL might
              be incorrect.
            </p>
            <Link
              to="/"
              className="w-fit rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
            >
              Go back home
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src={notFound}
              alt="Byway learning platform"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
