import React, { useState } from 'react'
import ItemList from './ItemList';

function RestaurantCategory({data, showItems, setShowIndex}) {
//    const [showItems, setShowItems] = useState(false);
   const handleClick = () => {
        setShowIndex();
    }
    
  return (
    <div>
       {/* Accordian Header */}
         <div className='my-4 py-4 px-4 rounded-none w-full text-gray-900 bg-gray-50 dark:bg-gray-900 dark:text-white shadow-lg'>
            <div className='flex justify-between cursor-pointer' onClick={handleClick}>
                 <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
                 <span>▼</span>    
            </div>
            {/* Accordian Body  - create another component - ItemList */} 
            {showItems && <ItemList items = {data.itemCards} />}
         </div>
             
    </div>
    
  )
}

export default RestaurantCategory