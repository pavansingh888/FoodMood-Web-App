import React from "react";

const CartResetPopup = ({ showPopup, noResetHandler, setResetFlag}) => {
  if (!showPopup) return null; // Don't render anything if `showPopup` is false
  console.log(showPopup);   
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-md"
      onClick={noResetHandler} // Clicking the blurred area triggers the cancel action
    >
      {/* Prevent click propagation to the backdrop */}
      <div
        className="bg-white dark:bg-gray-800 p-6 mx-2 rounded-lg shadow-lg max-w-sm w-full text-center"
        onClick={(e) => e.stopPropagation()} // Stops event from bubbling up
      >
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Items already in cart
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Your cart contains items from another restaurant. Would you like to
          reset your cart for adding items from this restaurant?
        </p>
        <div className="flex justify-around">
          {/* No Button */}
          <button
            onClick={noResetHandler}
            className="bg-gray-300 text-gray-800 px-4 py-2  w-[40%] rounded-md hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          >
            No
          </button>
          {/* Yes Button */}
          <button
            onClick={setResetFlag}
            className="bg-orange-500 text-white px-4 py-2 w-[40%] rounded-md hover:bg-orange-600"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartResetPopup;
