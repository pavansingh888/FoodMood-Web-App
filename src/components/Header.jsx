import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  //Subscribing to store using selector - useSelector() gives access to our whole store, and we access part of the store. we need to tell it what part of store we need access to. (store.SliceName.StateValueNamePresentInThatSliceStateObject)
  const cartItems = useSelector((store) => store.cart.items); //Here cartItems will be value of items which is an empty array for now.
  // console.log(cartItems);

  const [loginBtnName,setLoginBtnName] = useState("Login")
  const onlineStatus = useOnlineStatus()
  const {loggedInUser} = useContext(UserContext) 
  // console.log(UserData );//{loggedInUser: 'Default User'}

    return (
      <div className='header flex justify-between items-center py-4 px-4 bg-teal-500 dark:bg-gray-800 shadow-md dark:shadow-lg'>
        <div className='logo h-20 w-20 overflow-hidden rounded-full bg-gray-200 flex items-center justify-center'>
          <img className="logoimg h-full w-full object-cover" src={LOGO_URL}/>
        </div>
        <div className='nav-items'>
          <ul className="flex space-x-4">
           <Link to={'/'}><button className="nav-btns px-3 py-2 text-sm md:text-base bg-orange-600 text-white rounded-md hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700">Home</button></Link>
           <Link to={'/about'}><button className="nav-btns px-3 py-2 text-sm md:text-base bg-orange-600 text-white rounded-md hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700">About us</button></Link>
           <Link to={'/contact'}><button className="nav-btns px-3 py-2 text-sm md:text-base bg-orange-600 text-white rounded-md hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700">Contact us</button></Link>
            
           {/* Cart */}
           <Link to={'/cart'}><button className="nav-btns px-3 py-2 text-sm md:text-base bg-orange-600 text-white rounded-md hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700">Cart ({cartItems.length})</button></Link>
           
           <Link to={'/instamart'}><button className="nav-btns px-3 py-2 text-sm md:text-base bg-orange-600 text-white rounded-md hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700">InstaMart</button></Link>
            <button className="nav-btns px-3 py-2 text-sm md:text-base bg-orange-600 text-white rounded-md hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700" onClick={()=>{loginBtnName === 'Login' ? setLoginBtnName('Logout') : setLoginBtnName('Login')}}>
              {loginBtnName}
              {onlineStatus ? <span class="login-btn-green text-green-500 text-base"> ●</span> : <span class="login-btn-red text-red-800 text-base"> ●</span>} 
              </button>
            <li className="px-3 py-2 text-sm md:text-base text-gray-800 dark:text-gray-200">{loggedInUser}</li>

          </ul>
           
        </div>
      </div>
  
    )
  }

  export default Header;