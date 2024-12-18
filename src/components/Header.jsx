import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../assets/images/FMLogo.jpg";
import useTotalCartItems from "../utils/useTotalCartItems";
import ThemeToggleBtn from "./ThemeToggleBtn";

const Header = () => {
  //Subscribing to store using selector - useSelector() gives access to our whole store, and we access part of the store. we need to tell it what part of store we need access to. (store.SliceName.StateValueNamePresentInThatSliceStateObject)
  //  const cartItems = useSelector((store) => store.cart.items); //Here cartItems will be value of items which is an empty array for now.
  // console.log(cartItems);

  const [totalCartItems] = useTotalCartItems();
  const [loginBtnName, setLoginBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  // console.log(UserData );//{loggedInUser: 'Default User'}

  return (
    <div className="header flex justify-between items-center bg-teal-500 dark:bg-gray-800 shadow-md dark:shadow-lg overflow-hidden h-[80px] max-[350px]:h-[50px] max-[470px]:h-[60px] max-[650px]:h-[70px] sticky top-0 z-20">
      <div className="logo py-[10px] pl-[15px] max-[470px]:pl-[5px] dark:bg-gray-800 flex items-center ">
        <Link to="/">
          <img
            className="logoimg w-10 h-10 rounded-full "
            src={Logo}
            alt="FoodMood"
            title="FoodMood"
          />
        </Link>
      </div>
      <div className="nav-items flex items-center mr-[30px] max-[470px]:mr-[10px] max-[320px]:mr-[5px]">
        <Link to={"/"}>
          <button className="nav-btns p-[10px] font-bold text-[16px] max-[320px]:text-[10px] max-[470px]:text-[13px] max-[470px]:p-[6px] hover:bg-orange-600 text-white rounded-md dark:hover:bg-orange-600">
            Home
          </button>
        </Link>
        <Link to={"/about"}>
          <button className="nav-btns p-[10px] font-bold text-[16px] max-[320px]:text-[10px] max-[470px]:text-[13px] max-[470px]:p-[6px]  hover:bg-orange-600 text-white rounded-md   dark:hover:bg-orange-600">
            About
          </button>
        </Link>
        <Link to={"/contact"}>
          <button className="nav-btns p-[10px] font-bold text-[16px] max-[320px]:text-[10px] max-[470px]:text-[13px] max-[470px]:p-[6px] hover:bg-orange-600 text-white rounded-md   dark:hover:bg-orange-600">
            Contact
          </button>
        </Link>

        {/* Cart */}
        <Link
          to={"/cart"}
          className="cart hover:bg-orange-600 text-white rounded-md dark:hover:bg-orange-600 text-[16px] max-[320px]:text-[10px] max-[470px]:text-[13px] py-[10px] pl-[14px] pr-[5px] max-[470px]:p-[6px] "
        >
          <i className="fa badge fa-l" value={totalCartItems}>
            &#xf07a;
          </i>
        </Link>

        <ThemeToggleBtn />

        <Link to={"/login"}>
          <button className="nav-btns text-nowrap p-[10px] font-bold text-[16px] max-[320px]:text-[10px] max-[470px]:text-[13px] max-[470px]:p-[6px] hover:bg-orange-600 text-white rounded-md   dark:hover:bg-orange-600">
            {loginBtnName}
            {onlineStatus ? (
              <span className="login-btn-green text-green-500 max-[320px]:text-xs ">
                {" "}
                ●
              </span>
            ) : (
              <span class="login-btn-red text-red-800 max-[320px]:text-xs">
                {" "}
                ●
              </span>
            )}
          </button>
        </Link>

        {/* <li className="px-3 py-2 text-sm md:text-base lg:text-lg text-gray-800 dark:text-gray-200">{loggedInUser}</li> */}
      </div>
    </div>
  );
};

export default Header;
