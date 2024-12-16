import React, { useEffect, useState } from "react";
import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import CartResetPopup from "./CartResetPopup";
import CartPopup from "./CartPopup";
import { useSelector, useDispatch } from "react-redux";
//3. import that action from cartSlice that you want to dispatch
import {
  addItem,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  updateCurrentCartRestaurantInfo,
  clearCart,
  clearCurrentCartRestaurantInfo,
} from "../utils/cartSlice";


function RestaurantMenu() {
  // const [resMenu, setResMenu] = useState(null)
  const { resId } = useParams(); //it will give the resId in form of object from the dynamic route we created in router.
  const [showPopup, setShowPopup] = useState(false);
  const [resetWithItem, setResetWithItem] = useState({});
  const [resetFlag, setResetFlag] = useState(false);
  const [showIndex, setShowIndex] = useState([0]);
  
  const currentCartRestaurantInfo = useSelector(
    (store) => store.cart.currentCartRestaurantInfo
  );
  const currentRestaurantInfo = useSelector(
    (store) => store.cart.currentRestaurantInfo
  );
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(()=>{
    if(resetFlag){
      handleAddItem(resetWithItem,resetFlag)
    }
  },[resetFlag])

  const resMenu = useRestaurantMenu(resId); //Implementing Single responsibility of RestaurantMenu.jsx -Using Custom hook to fetch Res-Menu data.
  // console.log(resMenu);

  if (resMenu === null) return <ShimmerMenu />;

  const { name, avgRating, cuisines, costForTwoMessage, id } =
    resMenu?.cards[2]?.card?.card?.info;

  const Category =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //  console.log(Category);
  const isDifferentRestaurant = id !== currentCartRestaurantInfo?.id ? true : false;

  const handleAddItem = (item, resetFlag) => {
    //1.On click of button we will dispatch an action with 'item' that we get from  items.map((item)=>{}) in JSX to add it in items array of cartSlice in our store. for that we will need access to dispatch
    // dispatch(addItem("pasta"))
    //4.When we dispatch, redux will create object like (not exactly): And this object will action. So that we can access it as action.payload
    /*
     * {
     *  payload:"pizza",
     * }
     */
    if (
      Object.keys(currentCartRestaurantInfo).length === 0 ||
      !isDifferentRestaurant || resetFlag
    ) {

      if(resetFlag){
         dispatch(clearCart());
         dispatch(clearCurrentCartRestaurantInfo());
         setShowPopup(false);
         dispatch(updateCurrentCartRestaurantInfo({ currentRestaurantInfo }));
      }

      if (Object.keys(currentCartRestaurantInfo).length === 0) {
        dispatch(updateCurrentCartRestaurantInfo({ currentRestaurantInfo }));
      }

      dispatch(addItem({ item }));
      
    } else {
      setShowPopup(true);
      setResetWithItem(item);
    }
  };

  const handleIncrease = (itemId) => {
    dispatch(incrementQuantity({ id: itemId }));
  };

  const handleDecrease = (itemId, quantity) => {
    if (quantity > 1) {
      dispatch(decrementQuantity({ id: itemId }));
    } else {
      dispatch(removeItem({ id: itemId }));
    }
  };


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
              data={category?.card?.card}
              showItems={showIndex.includes(index) ? true : false}
              setShowIndex={() => {
                showIndex.includes(index)
                  ? setShowIndex(() => {
                      return showIndex.filter((i) => i != index);
                    })
                  : setShowIndex([...showIndex, index]);
              }}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
              handleAddItem={handleAddItem}
            />
          );
        })}
      </div>

      <CartPopup />
      <CartResetPopup
        showPopup={showPopup}
        noResetHandler={() => {
          setShowPopup(false);
          setResetWithItem({});
        }}
        handleAddItem
        resetFlag
        setResetFlag = {() => setResetFlag(true)}
      />
    </div>
  );
}

export default RestaurantMenu;
