import React from "react";
import { useRouteError } from "react-router-dom";
import FMLogo from "../assets/images/FMLogo.jpg";

function Error() {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">

      <div className="mb-6">
        <img
          src={FMLogo}
          alt="Food App Logo"
          className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
        />
      </div>

      <h1 className="text-3xl md:text-5xl font-bold text-red-600 dark:text-red-400 mb-4 text-center">
        Oops! Something went wrong.
      </h1>

      <div className="text-center text-gray-700 dark:text-gray-300">
        <h2 className="text-lg md:text-xl font-medium">
          We're sorry for the inconvenience.
        </h2>
        <h2 className="text-lg md:text-xl font-medium">
          {error?.status}
        </h2>
        <p className="mt-2 text-sm md:text-base">If you are experiencing this issue, please let us know by <a href="https://www.linkedin.com/in/-pavansingh" target="_blank" rel='noreferrer noopener' className="text-blue-500 hover:underline hover:dark:underline" ><i>clicking here.</i></a></p>
      </div>

      <button
        onClick={() => window.location.href = "/"}
        className="mt-6 px-6 py-2 bg-orange-600 text-white text-sm md:text-base font-semibold rounded-md shadow-md hover:bg-orange-500 focus:ring-2 focus:ring-orange-300 dark:bg-orange-500 dark:hover:bg-orange-400"
      >
        Go Back to Home
      </button>
    </div>
  );
}

export default Error;
