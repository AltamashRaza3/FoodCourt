import React from "react";
import SwiggyMockData from "./SwiggyMockData";
import MockData from "./mockdata";

const Body = () => {
  return (
    <div className="body px-4 sm:px-6 md:px-10 pt-28">
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
          Popular Restaurants Near You
        </h2>
        <p className="text-sm text-gray-500">
          Browse top-rated places to eat in your area.
        </p>
      </div>

      {/* Render restaurant cards */}
      <SwiggyMockData />
      {/* <MockData/> */}
    </div>
  );
};

export default Body;
