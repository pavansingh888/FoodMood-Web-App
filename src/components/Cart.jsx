import React, {useState} from 'react'
import Item from './Item'
import { useDispatch, useSelector } from 'react-redux' 
import { clearCart } from '../utils/cartSlice'

function Cart() {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();
    const [isNoContact,setIsNoContact] = useState(false);

  return (
    <div className='h-full min-h-screen bg-gray-200 dark:bg-gray-900 dark:text-white flex max-[470px]:flex-col-reverse items-start justify-between '> 
    pavan

    {/* Cart Items Card */}
    <div className='cart-container max-w-96 mx-4 mt-2 p-2 bg-gray-100 dark:bg-gray-800  shadow-lg'> 
      
{/* Cart Heading */}
      <div className='flex flex-col justify-center '>
        <h1 className='font-bold text-3xl mb-4 text-center'>Cart</h1>
        <button className='text-white bg-red-500 p-2 mb-4 mx-auto rounded-lg font-medium w-[100px]' onClick={()=>dispatch(clearCart())}>Empty Cart</button>
    </div>

    {/* Cart Items list */}
    <div className='cart-container-items p-4 bg-gray-100 dark:bg-gray-900 rounded-lg max-h-[450px] overflow-y-auto'>
    {cartItems.map((item) => (
        <Item key={item.card.info.id} item={item}/>
        ))}
    </div>
    
    <div className='total-price-container flex items-center justify-between text-md px-8 h-16 font-semibold'>
    <span className='tracking-wider'>TO PAY</span>
    <span className='tracking-normal'>{"₹"}2637</span>

    </div>

    {/* nocontact-delivery-check */}
    <div className='nocontact-delivery-check flex items-start justify-between text-xs tracking-wide px-4 h-full py-1 m-4 border-[1px] border-solid border-[#a9abb2]'>
     <input type='checkbox' id='nocontact-delivery-checkbox' name="DELIVERY_INSTRUCTION_CHK_BOX" value="DELIVERY_INSTRUCTION_CHK_BOX_INSTRUCTION_CHK_BOX"
     defaultChecked={isNoContact} 
     onChange={()=> isNoContact ? setIsNoContact(false) :  setIsNoContact(true)}
     className='h-4 w-4 mt-1 mr-4 cursor-pointer opacity-70' />
     <label for="nocontact-delivery-checkbox">
     <p> 
     <span className=' text-base font-medium block'>Opt in for No-contact Delivery</span>  
     {isNoContact ? 
      <span className='opacity-60'>Our delivery partner will call to confirm. Please ensure that your address has all the required details.</span>
      : 
      <span className='opacity-60'>Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)</span>
     }
     </p>
     </label>
    </div>

    </div>
     
     
    </div>
   
  )
}

export default Cart