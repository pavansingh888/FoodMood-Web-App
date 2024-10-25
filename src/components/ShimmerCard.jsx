
const ShimmerCard = () => {
  return (
    <div className="card p-4 bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg w-full h-[280px] max-w-xs mx-auto overflow-hidden animate-pulse">
    {/* Image Placeholder */}
    <div className="bg-gray-300 dark:bg-gray-700 h-[120px] rounded-t-lg"></div>
  
    {/* Title Placeholder */}
    <div className="mt-4 h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 "></div>
  
    {/* Cuisines Placeholder */}
    <div className="mt-2 h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 "></div>
  
    {/* Rating and SLA Placeholder */}
    <div className="mt-4 flex gap-2 ">
      <div className="w-5 h-5 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
    </div>
  
    {/* Cost for Two Placeholder */}
    <div className="mt-4 h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4 "></div>
  </div>
  );
};

export default ShimmerCard;
