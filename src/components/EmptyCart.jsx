import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import lightEmptyImage from "../assets/images/lightEmptyCart.jpg";
import darkEmptyImage from "../assets/images/darkEmptyImage.jpg";

const EmptyCart = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <img
        src={lightEmptyImage}
        alt="Empty cart"
        className="w-1/2 max-w-sm mb-6 dark:hidden"
      />
      <img
        src={darkEmptyImage}
        alt="Empty cart dark mode"
        className="w-1/2 max-w-sm mb-6 hidden dark:block"
      />

      <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>

      <p className="text-sm text-center mb-6 px-4">
        You can go to the home page to view more restaurants.
      </p>

      <button
        onClick={() => navigate("/")}
        className="bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md text-lg transition"
      >
        SEE RESTAURANTS
      </button>
    </div>
  );
};

export default EmptyCart;
