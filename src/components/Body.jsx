import React, { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [listOfRestraunts, setListOfRestraunts] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5399241&lng=88.3874402&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();

    const restaurantCards = json?.data?.cards?.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );

    const restaurants = restaurantCards?.map((card) => card?.card?.card?.info);

    // Set both all and filtered restaurants
    setAllRestaurants(restaurants);
    setListOfRestraunts(restaurants);
  };
  if(listOfRestraunts.length === 0){
    return <Shimmer/>
  }

  const handleFilter = () => {
    if (isFiltered) {
      setListOfRestraunts(allRestaurants);
      setIsFiltered(false);
    } else {
      const filteredList = allRestaurants.filter((res) => res.avgRating > 4.3);
      setListOfRestraunts(filteredList);
      setIsFiltered(true);
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

      {/* Search Bar (non-functional for now) */}
      <div className="Search mb-6">
        <input
          type="text"
          placeholder="Search restaurants..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white-800 mb-1">
          {isFiltered
            ? "Top Rated Restaurants"
            : "Popular Restaurants Near You"}
        </h2>
        <p className="text-sm text-gray-500">
          {isFiltered
            ? `Showing ${listOfRestraunts.length} restaurants with rating above 4.3`
            : "Browse top-rated places to eat in your area."}
        </p>
      </div>

      {/* Render cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listOfRestraunts.map((info, i) => {
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
              time={`${info?.sla?.deliveryTime || "--"} mins`}
              locality={info.locality}
              areaName={info.areaName}
              costForTwo={info.costForTwo}
            />
          );
        })}
      </div>

      {/* No data fallback */}
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
