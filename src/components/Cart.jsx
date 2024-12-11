import React from 'react'
import Item from './Item'
import { useDispatch, useSelector } from 'react-redux' 
import { clearCart } from '../utils/cartSlice'

function Cart() {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();
  return (
    <div className='h-full min-h-screen bg-gray-200 dark:bg-gray-900 dark:text-white  flex flex-col items-center'> 
    <div className='w-6/12 mx-auto p-6 bg-gray-100 dark:bg-gray-800 rounded-lg my-4 shadow-lg'> 
      <div className='flex flex-col justify-center '>
        <h1 className='font-bold text-3xl mb-4 text-center'>Cart</h1>
        <button className='text-white bg-red-500 p-2 mb-4 mx-auto rounded-lg font-medium w-[100px]' onClick={()=>dispatch(clearCart())}>Empty Cart</button>
    </div>
    <div className='cart-container py-4 bg-gray-100 dark:bg-gray-900 rounded-lg min-h-96'>
    {cartItems.map((item) => (
        <Item key={item.card.info.id} item={item}/>
        ))}
    </div>
    </div>
     
    </div>
   
  )
}

export default Cart