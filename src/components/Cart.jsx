import React from 'react'
import ItemList from './ItemList'
import { useDispatch, useSelector } from 'react-redux' 
import { clearCart } from '../utils/cartSlice'

function Cart() {
    const cartItems = useSelector((store)=> store.cart.items)
    const dispatch = useDispatch();
  return (
    <div className='w-6/12 m-auto'>
        <h1 className='font-bold text-2xl mb-4 text-center'>Cart</h1>
        <button className='text-black bg-red-300 p-2 rounded-lg font-medium ml-[330px]' onClick={()=>dispatch(clearCart())}>Empty Cart</button>
        <div className=''>
        <ItemList items={cartItems} className='text-left'/>
        </div>
    </div>
  )
}

export default Cart