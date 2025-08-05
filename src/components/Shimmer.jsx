import React from "react";

const Shimmer = () => {
  return (
    <div className="min-h-screen w-full bg-white px-6 py-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="bg-gray-100 animate-pulse rounded-2xl shadow-md overflow-hidden"
          >
            {/* Image Skeleton */}
            <div className="h-44 bg-gray-300 w-full"></div>

            {/* Content Skeleton */}
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
