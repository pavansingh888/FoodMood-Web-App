import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from '../utils/constants';
//3. import that action from cartSlice that you want to dispatch
import { addItem, incrementQuantity, decrementQuantity, removeItem } from '../utils/cartSlice';

const Item = ({item}) => {

    console.log(item);
    //2.we will get from useDispatch() hook given by 'react-redux'.
    const dispatch = useDispatch();
    const cart = useSelector((store) => store.cart.items)

    const cartItem = cart.find((cartItem) => cartItem.card.info.id === item.card.info.id);
    const quantity = cartItem ? cartItem.quantity : 0;
    
    const handleAddItem = () => {
      //1.On click of button we will dispatch an action with 'item' that we get from  items.map((item)=>{}) in JSX to add it in items array of cartSlice in our store. for that we will need access to dispatch
      // dispatch(addItem("pasta")) 
      dispatch(addItem({item})) 
      //4.When we dispatch, redux will create object like (not exactly): And this object will action. So that we can access it as action.payload
      /*
       * {
       *  payload:"pizza",
       * }
       */
    }

    const handleIncrease = () => {
      dispatch(incrementQuantity({id: item.card.info.id}))
    }

    const handleDecrease = () => {
        if(quantity>1){
           dispatch(decrementQuantity({id: item.card.info.id}))
        }else{
           dispatch(removeItem({id: item.card.info.id}))
        }
    }
    return (
        <div key={item.card.info.id} className='flex justify-between p-2 m-2 border-b-[1px] max-[425px]:flex-col-reverse'>

          {/* div for both image div and item description div */}
           <div className='flex'>

          
           {/* <div className='max-w-20 h-auto mr-3 my-2'>
            {item?.card?.info?.imageId ?  <img src={CDN_URL + item?.card?.info?.imageId} className='rounded-lg'/> : <img src='../assets/images/FMLogo.jpg' className='rounded-lg'/> }  
           </div> */}
           
           {/* div for item name price and description */}
           <div className='py-2 max-w-96'>
            <span className='text-base font-medium'>{item?.card?.info?.name}</span>
            <p className='text-sm font-medium max-w-96 '>₹ { item?.card?.info?.price/100 ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100 }</p> 
            <p className='text-xs'>{item?.card?.info?.description}</p> 
           </div>

           </div>
          
          {/* div for add button & Img both */}
           <div className='flex flex-col justify-self-stretch max-[425px]:items-center '>
             {/* div for image */}
           <div className='w-[100px] h-auto mx-auto py-2'>
            {item?.card?.info?.imageId ?  <img src={CDN_URL + item?.card?.info?.imageId} className='rounded-lg'/> : <img src='../assets/images/FMLogo.jpg' className='rounded-lg'/> }  
           </div>
             {/* div for add button */}
             

             {quantity === 0 ? (
              <div >
        <button onClick={handleAddItem} className="bg-teal-500 hover:bg-teal-600 text-white font-bold w-32 py-2 uppercase text-center rounded-lg transition duration-100 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-orange-500 flex items-center justify-center">
        Add
     </button>
     </div>
      ) : (
        <div className="bg-teal-500  text-white font-bold w-32  uppercase text-center rounded-lg transition duration-100 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-teal-600 dark:focus:ring-orange-500 flex items-center justify-center overflow-hidden">
          <button onClick={handleDecrease} className='hover:bg-teal-600 dark:hover:bg-teal-700  py-2 px-5'>-</button>
          <span className='mx-4'>{quantity}</span>
          <button onClick={handleIncrease} className='hover:bg-teal-600 dark:hover:bg-teal-700  py-2 px-5'>+</button>
        </div>
      )}
             </div>
           
        </div>
    )
}

export default Item;