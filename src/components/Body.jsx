import React, { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [listOfRestraunts, setListOfRestraunts] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59430&lng=85.13520&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    console.log(json);
    const restaurantCards = json?.data?.cards?.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );

    const restaurants = restaurantCards?.map((card) => card?.card?.card?.info);

    setAllRestaurants(restaurants || []);
    setListOfRestraunts(restaurants || []);
  };

  if (allRestaurants.length === 0) {
    return <Shimmer />;
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

  const handleSearch = () => {
    const filteredRestraunts = allRestaurants.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRestraunts(filteredRestraunts);
    setIsFiltered(false); // Reset filter when searching
  };

  return (
    <div className="body px-4 sm:px-6 md:px-10 pt-28">
      {/* Filter + Search Row */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
        {/* Filter Button */}

        {/* Search Bar */}
        <div className="flex w-full lg:w-auto gap-2">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="search-box w-full lg:w-94 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-black text-orange-500 font-semibold rounded-md hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-black dark:text-orange-500 dark:hover:text-white dark:hover:bg-black"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <button
          className={`filter-btn px-4 py-2 border rounded-md shadow-sm focus:outline-none transition-colors ${
            isFiltered
              ? "bg-orange-500 text-gray-950 border-orange-500 hover:bg-white hover:text-orange-600"
              : "border-orange-500 bg-white text-orange-600 hover:bg-orange-500 hover:text-gray-950"
          }`}
          onClick={handleFilter}
        >
          {isFiltered ? "Show All Restaurants" : "Top Rated Restaurants"}
        </button>
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

      {/* Render Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listOfRestraunts.map((info, i) => {
          const imageUrl = info.cloudinaryImageId
            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/${info.cloudinaryImageId}`
            : "https://via.placeholder.com/300x200?text=No+Image";

          return (
            <Link key={info.id || i} to={`/restraunts/${info.id}`}>
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
            </Link>
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
