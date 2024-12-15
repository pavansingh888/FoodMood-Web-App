import React, { useState } from "react";
import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import CartPopup from "./CartPopup";
import { useSelector } from "react-redux";

function RestaurantMenu() {
  // const [resMenu, setResMenu] = useState(null)
  const [isDifferentRestaurant, setIsDifferentRestaurant] = useState(false);
  const [showIndex, setShowIndex] = useState([0]);
  const { resId } = useParams(); //it will give the resId in form of object from the dynamic route we created in router.
  const currentCartRestaurantInfo = useSelector((store) => store.cart.currentCartRestaurantInfo );
  const currentRestaurantInfo = useSelector((store) => store.cart.currentRestaurantInfo );
  
  const resMenu = useRestaurantMenu(resId); //Implementing Single responsibility of RestaurantMenu.jsx -Using Custom hook to fetch Res-Menu data.
  // console.log(resMenu);

  if (resMenu === null) return <ShimmerCard />;



  const { name, avgRating, cuisines, costForTwoMessage ,id} =
    resMenu?.cards[2]?.card?.card?.info;
  const Category =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //  console.log(Category);

  return (
    <div className="flex flex-col items-stretch min-h-screen p-4 bg-white dark:bg-gray-900  ">
      <div className="w-[620px] max-[650px]:w-full mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg max-[650px]:px-4  p-6  ">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {name}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        {Category.map((category, index) => {
          return (
            <RestaurantCategory
              key={category?.card?.card?.title}
              resId={id}
              currentCartRestaurantInfo={currentCartRestaurantInfo}
              currentRestaurantInfo={currentRestaurantInfo}
              isDifferentRestaurant={isDifferentRestaurant}
              setIsDifferentRestaurant={setIsDifferentRestaurant}
              data={category?.card?.card}
              showItems={showIndex.includes(index) ? true : false}
              setShowIndex={() => {
                showIndex.includes(index)
                  ? setShowIndex(() => {
                      return showIndex.filter((i) => i != index);
                    })
                  : setShowIndex([...showIndex, index]);
              }}
            />
          );
        })}
      </div>

      <CartPopup />
    </div>
  );
}

export default RestaurantMenu;
