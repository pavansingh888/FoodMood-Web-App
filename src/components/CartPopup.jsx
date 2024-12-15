import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useTotalCartItems from "../utils/useTotalCartItems";

const CartPopup = () => {
  
  const navigate = useNavigate();
  const location = useLocation();

  // Show popup only on the restaurant menu route
  const isMenuPage = location.pathname.startsWith("/restaurant/");

  // Calculate total items in the cart
  const [totalItems] = useTotalCartItems();

  if (!isMenuPage || totalItems === 0) return null; // Hide if not on menu page or cart is empty

  return (
    <div
      className="fixed bottom-0 w-[650px] max-[650px]:w-full left-1 right-1 justify-self-center bg-green-600 text-white px-6 py-3 shadow-md flex justify-between items-center z-50 cursor-pointer"
      onClick={() => navigate("/cart")} // Make entire popup clickable
    >
      <span className="font-bold">{totalItems} item(s) in cart</span>
      <span className="font-semibold">View Cart</span>
    </div>
  );
};

export default CartPopup;
