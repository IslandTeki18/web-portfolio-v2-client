import * as React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-white flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
        <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-dark">
          404
        </p>
        <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4 uppercase">
          Page Not Found
        </p>
        <p className="text-gray-500 mt-8 py-2 border-y-2 text-center">
          Whoops, this page doesn't exist...
        </p>
        <Link to="/" className='mt-4'>Go Home</Link>
      </div>
    </div>
  );
};
