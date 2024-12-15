import React, { useState } from "react";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import useTotalCartItems from "../utils/useTotalCartItems";
import { PLATFORM_FEE, PACKAGING_CHARGE } from "../utils/constants";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const [isNoContact, setIsNoContact] = useState(false);
  const [,totalPrice] = useTotalCartItems();
  const gstAndRestaurantCharges = PACKAGING_CHARGE + Math.round(totalPrice*18)/100 + Math.round(PLATFORM_FEE*18)/100;
  const toPayAmount = totalPrice + PLATFORM_FEE + gstAndRestaurantCharges;

  
  if(cartItems.length===0){
    return (
      <EmptyCart/>
    )
  }

  return (
    <div className="h-full min-h-screen bg-gray-200 dark:bg-gray-900 dark:text-white flex max-[470px]:flex-col-reverse items-start justify-center ">
      {/* Cart Items Card */}
      <div className="cart-container max-w-[500px] mx-4 my-4 py-4 bg-gray-100 dark:bg-gray-800  shadow-lg">
        {/* Cart Heading */}
        <div className="flex flex-col justify-center ">
          <h1 className="font-bold text-3xl mb-4 text-center">Cart</h1>
          <button
            className="text-white bg-red-500 p-2 mb-4 mx-auto rounded-lg font-medium w-[100px]"
            onClick={() => dispatch(clearCart())}
          >
            Empty Cart
          </button>
        </div>

        {/* Cart Items list */}
        <div className="cart-container-items pt-4 bg-gray-100 dark:bg-gray-900 rounded-lg max-h-[450px] overflow-y-auto">
          {cartItems.map((item) => (
            <Item key={item.card.info.id} item={item}  />
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
              className="h-4 w-4 mt-1 mr-4 cursor-pointer opacity-70"
            />
            <label htmlFor="nocontact-delivery-checkbox">
              <p>
                <span className=" text-base font-medium block">
                  Opt in for No-contact Delivery
                </span>
                {isNoContact ? (
                  <span className="opacity-60">
                    Our delivery partner will call to confirm. Please ensure
                    that your address has all the required details.
                  </span>
                ) : (
                  <span className="opacity-60">
                    Unwell, or avoiding contact? Please select no-contact
                    delivery. Partner will safely place the order outside your
                    door (not for COD)
                  </span>
                )}
              </p>
            </label>
          </div>

          {/* Bill Details Div */}

          <div className="text-[13px] font-[550] text-[#282c3f] my-[10px] mx-6">
            Bill Details
          </div>

          {/* Item total Div */}
          <div className="text-[13px] font-[510] text-[#282c3f] my-[10px] mx-6 opacity-70 flex justify-between">
            Item Total{" "}
            <span className="text-green-700 font-[510] text-[13px] opacity-100">
              {totalPrice}
            </span>
          </div>
          {/* border div */}
          <div className="border-b-[1px] mt-[17px] mb-[15px] mx-6"></div>

          {/* Platform fee with info button */}
          <div className="text-[13px] font-[510] text-[#282c3f] mt-[10px] mx-6 opacity-70 flex justify-between items-center">
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
                >
                  <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
                </svg>
                <div className="absolute left-[-20px] bottom-full mb-2 w-[250px] bg-gray-100 text-black text-[12px] rounded-md px-3 py-2 shadow-md opacity-0 hidden group-hover:opacity-100  group-hover:block group-hover:translate-y-0 transition-transform duration-200 translate-y-1">
                  <p>
                    <span className="font-semibold">Platform fee</span>
                    <br></br>
                    This fee helps us operate and improve our<br></br>
                    platform, delivering a seamless app experience.<br></br>
                  </p>
                </div>
              </div>
            </div>
            <span className="font-[510] text-[13px] opacity-100">{"₹ "+PLATFORM_FEE}</span>
          </div>

          {/* GST and Restaurant Charges with info button */}
          <div className="text-[13px] font-[510] text-[#282c3f] mt-[10px] mx-6 opacity-70 flex justify-between items-center">
            <div className="flex">
              GST and Restaurant Charges&nbsp;
              <div className="relative group flex items-center">
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
                <div className="absolute left-[-70px] bottom-full mb-2 w-[220px] bg-gray-100 text-black text-[12px] rounded-md px-3 py-2 shadow-md opacity-0 hidden group-hover:opacity-100  group-hover:block group-hover:translate-y-0 transition-transform duration-200 translate-y-1">
                  <div>
                    <span className="font-semibold">
                      GST and Restaurant Charges
                    </span>
                    <br />
                    <div className="flex justify-between items-center">
                    Restaurant Packaging
                    <span className="font-[510] text-[12px] opacity-100">
                      {"₹ "+PACKAGING_CHARGE}
                    </span> 
                    </div>
                    <div className="flex justify-between items-center">
                    Restaurant GST
                    <span className="font-[510] text-[12px] opacity-100">
                      {"₹ "+Math.round(totalPrice*18)/100}
                    </span> 
                    </div>
                    <div className="flex justify-between items-center">
                    GST on Platform fee 
                    <span className="font-[510] text-[12px] opacity-100">
                      {"₹ "+Math.round(PLATFORM_FEE*18)/100}
                    </span> 
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <span className="font-[510] text-[13px] opacity-100">{"₹ "+Math.round(gstAndRestaurantCharges*100)/100}</span>
          </div>
          {/* Bottom dark border Div */}
          <div className="border-b-[2px] mt-[17px] mx-6 border-black"></div>
        </div>

        <div className="total-price-container flex items-center justify-between text-md px-8 h-16 font-semibold">
          <span className="tracking-wider">TO PAY</span>
          <span className="tracking-normal">{"₹ "+toPayAmount}</span>
        </div>

        <div className="cart-container my-2 mx-6 p-2 bg-gray-100 dark:bg-gray-800   border-[1px] border-gray-300">
          <div className="p-4 text-[#282c3f]">
              <p className="font-semibold text-base pb-2">
                Review your order and address<br/> 
                details to avoid cancellations</p>
              <p className="text-[13px]">
                <strong>Note</strong><span className="font-[510] opacity-80">: Please ensure your address and order<br/> details are correct. This order, if cancelled, is non-<br/>refundable.</span>
              </p>
          </div>
      </div>
      </div>

      

    </div>
  );
}

export default Cart;
