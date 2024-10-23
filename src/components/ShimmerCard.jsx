
const ShimmerCard = () => {
  return (
  <div className="card p-4 mb-6 bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg transition-transform transform hover:scale-105 relative overflow-hidden animate-pulse">
    <div className="res-logo w-full h-40 bg-gray-300 dark:bg-gray-700 rounded-t-lg"></div>
    <div className="mt-2 h-6 bg-gray-300 dark:bg-gray-700 rounded-sm w-3/4 mb-2 sm:w-2/3 md:w-1/2 lg:w-3/4 xl:w-full"></div>
    <div className="mt-1 h-5 bg-gray-300 dark:bg-gray-700 rounded-sm w-1/2 mb-2 sm:w-3/8 md:w-1/3 lg:w-1/2 xl:w-3/4"></div>
    <div className="mt-2 h-5 bg-gray-300 dark:bg-gray-700 rounded-sm w-1/3 mb-2 sm:w-1/4 md:w-1/5 lg:w-1/3 xl:w-1/4"></div>
    <div className="mt-1 h-5 bg-gray-300 dark:bg-gray-700 rounded-sm w-1/4 sm:w-1/6 md:w-1/5 lg:w-1/4 xl:w-1/5"></div>
  </div>
  
  );
};

export default ShimmerCard;
