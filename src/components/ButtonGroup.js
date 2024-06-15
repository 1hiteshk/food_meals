import React, { useState } from 'react';
import Button from './Button';

const ButtonGroup = ({allRestaurants,filteredRestaurants,setFilteredRestaurants}) => {
  const cuisines = [
    "Desserts","Pizzas","Pastas","Chinese","Asian","Italian","American",
    "Beverages","Biryani","Burgers","Ice cream","Sweets","Food","Fast food",
    "Snacks","Coffee","North Indian","South Indian","Veg","Non-Veg",
    "Vegetarian","Non-Vegetarian","Spicy","Non-Spicy"
  ];
  const [activeIndex, setActiveIndex] = useState();
 

  return (
   <div style={{width:"90vw"}} className='pl-10 pr-8 flex justify-center '>
     <div  style={{
        msOverflowStyle: 'none', /* IE and Edge */
        scrollbarWidth: 'none', /* Firefox */
      }} className="flex overflow-x-auto py-2 -mx-4 gap-3">
        <style jsx>{`
    /* Hide scrollbar for Chrome, Safari and Opera */
    .custom-scrollbar::-webkit-scrollbar {
      display: none;
    }
  `}</style>
      {cuisines.map((cuisine, index) => (
        <Button key={index} name={cuisine} 
        index={index}
        allRestaurants={allRestaurants}
        filteredRestaurants={filteredRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
        isActive={index === activeIndex ? true : false}
        setIsActive={() => {
            index === activeIndex? setActiveIndex(null) : setActiveIndex(index)
        }}
        />
      ))}
    </div>
   </div>
  );
};

export default ButtonGroup;
