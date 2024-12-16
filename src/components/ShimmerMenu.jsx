import React from "react";

function ShimmerMenu() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-white dark:bg-gray-900">
      {/* Container for Restaurant Info */}
      <div className="w-[620px] max-[650px]:w-full mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg max-[650px]:px-4 p-6">
        {/* Restaurant Name Shimmer */}
        <div className="h-8 w-2/3 bg-gray-300 dark:bg-gray-700 rounded-md mb-4 animate-pulse"></div>

        {/* Cuisines and Cost Shimmer */}
        <div className="h-5 w-1/2 bg-gray-300 dark:bg-gray-700 rounded-md mb-6 animate-pulse"></div>

        {/* Categories Placeholder */}
        <div className="space-y-6">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="h-20 w-full bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShimmerMenu;
