import React, { useState, useEffect } from 'react';

const Button = ({ name, allRestaurants, setFilteredRestaurants,isActive,setIsActive }) => {
    const [activeFilter, setActiveFilter] = useState(null);

    // Update filteredRestaurants when active filter changes
    useEffect(() => {
        if (activeFilter === null) {
            setFilteredRestaurants(allRestaurants);
        } else {
            const filtered = allRestaurants.filter(res =>
                res?.info?.name.toLowerCase().includes(activeFilter.toLowerCase()) ||
                res?.info?.cuisines.join(", ").toLowerCase().includes(activeFilter.toLowerCase())
            );
            setFilteredRestaurants(filtered);
        }

        return ()=> {}
    }, [activeFilter, allRestaurants, setFilteredRestaurants]);

    const handleClick = () => {
        // Toggle isActive state
        setIsActive(!isActive);

        // Update active filter
        if (!isActive) {
            setActiveFilter(name);
        } else {
            setActiveFilter(null);
        }
    };

    return (
        <div onClick={handleClick}
             className={`flex whitespace-nowrap items-center h-6 px-5 border border-solid rounded-xl text-sm cursor-pointer w-auto text-center 
                         ${isActive ? 'bg-yellow-400 text-white' : 'border-black hover:bg-gray-300'}`}>
            {name}
        </div>
    );
};

export default Button;
