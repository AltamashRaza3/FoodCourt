import React, { useState } from "react";
import { resObj } from "../utils/MockData";
import RestrauntCard from "./RestrauntCard";

const Body = () => {
  const allRestaurants = resObj[0]?.card?.restaurants || [];
  const [listOfRestraunts, setListOfRestraunts] = useState(allRestaurants);
  const [isFiltered, setIsFiltered] = useState(false);

  const handleFilter = () => {
    if (isFiltered) {
      // Show all restaurants
      setListOfRestraunts(allRestaurants);
      setIsFiltered(false);
    } else {
      // Filter top-rated restaurants
      const filteredList = allRestaurants.filter(
        (res) => res.info.avgRating > 4.3 // Changed from 4.7 to 4.0 for more results
      );
      setListOfRestraunts(filteredList);
      setIsFiltered(true);
      console.log(filteredList);
    }
  };

  return (
    <div className="body px-4 sm:px-6 md:px-10 pt-28">
      {/* Filter Button */}
      <button
        className={`filter-btn mb-2.5 px-4 py-2 border rounded-md shadow-sm focus:outline-none transition-colors ${
          isFiltered
            ? "bg-orange-500 text-white border-orange-500 hover:bg-orange-600"
            : "border-gray-300 bg-white text-white hover:bg-gray-50"
        }`}
        onClick={handleFilter}
      >
        {isFiltered ? "Show All Restaurants" : "Top Rated Restaurants"}
      </button>

      {/* Search Bar */}
      <div className="Search mb-6">
        <input
          type="text"
          placeholder="Search restaurants..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* Section Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white-800 mb-1">
          {isFiltered
            ? "Top Rated Restaurants"
            : "Popular Restaurants Near You"}
        </h2>
        <p className="text-sm text-gray-500">
          {isFiltered
            ? `Showing ${listOfRestraunts.length} restaurants with rating of 4.3`
            : "Browse top-rated places to eat in your area."}
        </p>
      </div>

      {/* Render restaurant cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listOfRestraunts.map((res, i) => {
          const info = res.info;
          const imageUrl = info.cloudinaryImageId
            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/${info.cloudinaryImageId}`
            : "https://via.placeholder.com/300x200?text=No+Image";

          return (
            <RestrauntCard
              key={info.id || i}
              resName={info.name}
              cusine={info.cuisines?.join(", ")} 
              imageUrl={imageUrl}
              rating={info.avgRating}
              time={`${info.sla?.deliveryTime || "--"} mins`}
              locality={info.locality}
              areaName={info.areaName}
              costForTwo={info.costForTwo}
            />
          );
        })}
      </div>

      {/* Show message if no restaurants found */}
      {listOfRestraunts.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">
            No restaurants found matching your criteria.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Try adjusting your filters or search terms.
          </p>
        </div>
      )}
    </div>
  );
};

export default Body;
