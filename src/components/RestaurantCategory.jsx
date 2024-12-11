import React, { useState } from 'react'
import Item from './Item';

function RestaurantCategory({data, showItems, setShowIndex}) {
//    const [showItems, setShowItems] = useState(false);
   const handleClick = () => {
        setShowIndex();
    }
    
  return (
    <div>
       {/* Accordian Header */}
         <div className='my-4 py-4 px-4 rounded-none w-full text-gray-900 bg-gray-50 dark:bg-gray-900 dark:text-white shadow-lg cursor-pointer' >
            <div className='flex justify-between ' onClick={handleClick} >
                 <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
                 <span>▼</span>    
            </div>
            {/* Accordian Body  - create another component - ItemList */} 
          {showItems && 
          (<div>
            {
            data.itemCards.map((item) => (
            <Item key={item.card.info.id} item={item}/>
            ))
            }
        </div>)}
      </div>
    </div>
    
  )
}

export default RestaurantCategory