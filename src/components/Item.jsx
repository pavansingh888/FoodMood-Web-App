import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";

const Item = ({
  item,
  isExpanded,
  toggleDescription,
  handleIncrease,
  handleDecrease,
  handleAddItem,
}) => {
  const itemId = item.card.info.id;

  const cartItem = useSelector((store) =>
    store.cart.items.find((cartItem) => cartItem.card.info.id === itemId)
  );
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div key={itemId} className="flex justify-between py-2 mx-6 border-b-[1px]">
      {/* div for both image div and item description div */}

      {/* div for item name price and description */}
      <div className=" py-2 max-w-96">
        <span className="text-base font-medium">{item?.card?.info?.name}</span>
        <p className="text-sm font-medium max-w-96 ">
          ₹{" "}
          {item?.card?.info?.price / 100
            ? item?.card?.info?.price / 100
            : item?.card?.info?.defaultPrice / 100}
        </p>
        {item?.card?.info?.description &&
          (isExpanded ? (
            <p className="text-xs">
              {item?.card?.info?.description}{" "}
              <span
                className="cursor-pointer font-semibold"
                onClick={() => toggleDescription(null)}
              >
                Less
              </span>
            </p>
          ) : (
            <p className="text-xs">
              {item?.card?.info?.description?.slice(0, 80)}...{" "}
              <span
                className="cursor-pointer font-semibold"
                onClick={() => toggleDescription(itemId)}
              >
                More
              </span>
            </p>
          ))}
      </div>

      {/* div for add button & Img both */}
      <div className="flex flex-col justify-self-stretch max-[425px]:items-center ">
        {/* div for image */}
        <div className="w-[100px] h-auto mx-auto py-2">
          {item?.card?.info?.imageId ? (
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="rounded-lg"
            />
          ) : (
            <img src="../assets/images/FMLogo.jpg" className="rounded-lg" />
          )}
        </div>
        {/* div for add button */}

        {quantity === 0 ? (
          <div>
            <button
              onClick={() => handleAddItem(item ,false )}
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold w-[110px] py-2 uppercase text-center rounded-lg transition duration-100 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-orange-500 flex items-center justify-center"
            >
              Add
            </button>
          </div>
        ) : (
          <div className="bg-teal-500  text-white font-bold w-[110px]  uppercase text-center rounded-lg transition duration-100 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-teal-600 dark:focus:ring-orange-500 flex items-center justify-between overflow-hidden">
            <button
              onClick={() => handleDecrease(itemId, quantity)}
              className="hover:bg-teal-600 dark:hover:bg-teal-700  py-2 px-4"
            >
              -
            </button>
            <span className="mx-auto">{quantity}</span>
            <button
              onClick={() => handleIncrease(itemId)}
              className="hover:bg-teal-600 dark:hover:bg-teal-700  py-2 px-4"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
