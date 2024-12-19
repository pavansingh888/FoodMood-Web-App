import React, { useState, useEffect } from "react";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import useTotalCartItems from "../utils/useTotalCartItems";
import { PLATFORM_FEE, PACKAGING_CHARGE } from "../utils/constants";
import EmptyCart from "./EmptyCart";
import { CART_IMG_CDN_URL } from "../utils/constants";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearCart,
  clearCurrentCartRestaurantInfo,
} from "../utils/cartSlice";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const areaName = useSelector(
    (store) => store.cart.currentCartRestaurantInfo?.areaName
  );
  const cartRestaurantName = useSelector(
    (store) => store.cart.currentCartRestaurantInfo?.name
  );
  const cartRestaurantCloudinaryImageId = useSelector(
    (store) => store.cart.currentCartRestaurantInfo?.cloudinaryImageId
  );

  const dispatch = useDispatch();
  const [isNoContact, setIsNoContact] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (cartItems.length === 0) dispatch(clearCurrentCartRestaurantInfo());
  }, [cartItems, dispatch, clearCurrentCartRestaurantInfo]);

  const [, totalPrice] = useTotalCartItems();
  const gstAndRestaurantCharges =
    PACKAGING_CHARGE +
    Math.round(totalPrice * 18) / 100 +
    Math.round(PLATFORM_FEE * 18) / 100;
  const toPayAmount = totalPrice + PLATFORM_FEE + gstAndRestaurantCharges;

  const handleIncrease = (itemId) => {
    dispatch(incrementQuantity({ id: itemId }));
  };

  const handleDecrease = (itemId, quantity, cartItems) => {
    if (quantity > 1) {
      dispatch(decrementQuantity({ id: itemId }));
    } else {
      dispatch(removeItem({ id: itemId }));
    }
  };

  const handleEmptyCart = () => {
    dispatch(clearCart());
    dispatch(clearCurrentCartRestaurantInfo());
  };

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="h-full min-h-screen bg-gray-200 dark:bg-gray-900 dark:text-white flex max-[470px]:flex-col-reverse items-start justify-center ">
      {/* Cart Items Card */}
      <div className="cart-container max-w-[500px] mx-4 my-4 py-4 bg-gray-100 dark:bg-gray-800  shadow-lg">
        {/* Cart Heading */}
        <div className="flex flex-row justify-between mb-4 mx-4 max-[470px]:flex-col max-[470px]:items-start">
          <div className="flex items-center justify-center">
            <img
              height="50"
              width="50"
              className="rounded-sm self-start pt-2"
              alt="cart-restaurant-image"
              src={CART_IMG_CDN_URL + cartRestaurantCloudinaryImageId}
            />
            <div className="flex flex-col justify-start items-start ml-2">
              <h1 className="font-medium text-lg text-left text-wrap ">
                {cartRestaurantName}
              </h1>
              <p className="text-sm opacity-70 dark:opacity-80 text-left text-wrap">
                {areaName}
              </p>
            </div>
          </div>
          <div className="flex justify-center self-center">
            <button
              className="text-red-500 bg-inherit py-[8px] px-[16px] mx-1 h-14 self-top rounded-lg font-medium max-[470px]:mt-4 ring-red-500 focus:ring-4 hover:ring-2"
              onClick={handleEmptyCart}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-2 14H7L5 7M10 4V3a1 1 0 1 1 2 0v1h6a2 2 0 0 1 2 2v1H4V7a2 2 0 0 1 2-2h6z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Cart Items list */}
        <div className="cart-items-container pt-4 mx-4 bg-gray-100 dark:bg-gray-900 rounded-sm max-h-[450px] overflow-y-auto border-2 dark:border-gray-700 ">
          {cartItems.map((item) => (
            <Item
              key={item.card.info.id}
              item={item}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
            />
          ))}

          {/* nocontact-delivery-check */}
          <div className="nocontact-delivery-check flex items-start justify-between text-xs tracking-wide px-4 h-full py-1 mx-6 my-4 border-[1px] border-solid border-[#a9abb2]">
            <input
              type="checkbox"
              id="nocontact-delivery-checkbox"
              name="DELIVERY_INSTRUCTION_CHK_BOX"
              value="DELIVERY_INSTRUCTION_CHK_BOX_INSTRUCTION_CHK_BOX"
              defaultChecked={isNoContact}
              onChange={() =>
                isNoContact ? setIsNoContact(false) : setIsNoContact(true)
              }
              className="h-4 w-4 mt-1 mr-4 cursor-pointer opacity-70 dark:opacity-90"
            />
            <label htmlFor="nocontact-delivery-checkbox">
              <p>
                <span className=" text-base font-medium block">
                  Opt in for No-contact Delivery
                </span>
                {isNoContact ? (
                  <span className="opacity-60 dark:opacity-90">
                    Our delivery partner will call to confirm. Please ensure
                    that your address has all the required details.
                  </span>
                ) : (
                  <span className="opacity-60 dark:opacity-90">
                    Unwell, or avoiding contact? Please select no-contact
                    delivery. Partner will safely place the order outside your
                    door (not for COD)
                  </span>
                )}
              </p>
            </label>
          </div>

          {/* Bill Details Div */}

          <div className="text-[13px] font-[550] text-[#282c3f] dark:text-white my-[10px] mx-6">
            Bill Details
          </div>

          {/* Item total Div */}
          <div className="text-[13px] font-[510] text-[#282c3f] dark:text-white  my-[10px] mx-6 opacity-70 dark:opacity-90 flex justify-between">
            Item Total{" "}
            <span className="text-green-600 dark:text-green-500  font-[510] text-[13px]">
              {totalPrice}
            </span>
          </div>
          {/* border div */}
          <div className="border-b-[1px] mt-[17px] mb-[15px] mx-6"></div>

          {/* Platform fee with info button */}
          <div className="text-[13px] font-[510] text-[#282c3f] dark:text-white mt-[10px] mx-6 opacity-70 dark:opacity-90 flex justify-between items-center fill-white">
            <div className="flex">
              Platform fee&nbsp;
              <div className="relative group flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="12"
                  height="12"
                  viewBox="0 0 50 50"
                  className=""
                >
                  <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
                </svg>
                <div className="absolute left-[-20px] bottom-full mb-2 w-[250px] bg-gray-100 dark:bg-gray-800 text-black dark:text-white text-[12px] rounded-md px-3 py-2 shadow-md opacity-0 hidden group-hover:opacity-100  group-hover:block group-hover:translate-y-0 transition-transform duration-200 translate-y-1">
                  <p>
                    <span className="font-semibold">Platform fee</span>
                    <br></br>
                    This fee helps us operate and improve our<br></br>
                    platform, delivering a seamless app experience.<br></br>
                  </p>
                </div>
              </div>
            </div>
            <span className="font-[510] text-[13px] opacity-100">
              {"₹ " + PLATFORM_FEE}
            </span>
          </div>

          {/* GST and Restaurant Charges with info button */}
          <div className="text-[13px] font-[510] text-[#282c3f] dark:text-white mt-[10px] mx-6 opacity-70 dark:opacity-90 flex justify-between items-center">
            <div className="flex justify-left">
              GST and Restaurant Charges&nbsp;
              <div className="relative group flex items-center fill-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="12"
                  height="12"
                  viewBox="0 0 50 50"
                >
                  <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
                </svg>
                <div className="absolute left-[-70px] bottom-full mb-2 w-[220px] bg-gray-100 dark:bg-gray-800 text-black dark:text-white text-[12px] rounded-md px-3 py-2 shadow-md opacity-0 hidden group-hover:opacity-100  group-hover:block group-hover:translate-y-0 transition-transform duration-200 translate-y-1">
                  <div>
                    <span className="font-semibold">
                      GST and Restaurant Charges
                    </span>
                    <br />
                    <div className="flex justify-between items-center">
                      Restaurant Packaging
                      <span className="font-[510] text-[12px] opacity-100">
                        {"₹ " + PACKAGING_CHARGE}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      Restaurant GST
                      <span className="font-[510] text-[12px] opacity-100">
                        {"₹ " + Math.round(totalPrice * 18) / 100}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      GST on Platform fee
                      <span className="font-[510] text-[12px] opacity-100">
                        {"₹ " + Math.round(PLATFORM_FEE * 18) / 100}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span className="font-[510] text-[13px] opacity-100">
              {"₹ " + Math.round(gstAndRestaurantCharges * 100) / 100}
            </span>
          </div>
          {/* Bottom dark border Div */}
          <div className="border-b-[2px] mt-[17px] mx-6 border-black dark:border-white"></div>
        </div>

        <div className="total-price-container flex items-center justify-between text-md px-8 h-16 font-semibold">
          <span className="tracking-wider">TO PAY</span>
          <span className="tracking-normal">{"₹ " + toPayAmount}</span>
        </div>

        <div className="cart-container my-2 mx-6 p-2 bg-gray-100 dark:bg-gray-800   border-[1px] border-gray-300">
          <div className="p-4 text-[#282c3f] dark:text-white">
            <p className="font-semibold text-base pb-2">
              Review your order and address
              <br />
              details to avoid cancellations
            </p>
            <p className="text-[13px]">
              <strong>Note</strong>
              <span className="font-[510] opacity-80 dark:opacity-90">
                : Please ensure your address and order
                <br /> details are correct. This order, if cancelled, is non-
                <br />
                refundable.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
