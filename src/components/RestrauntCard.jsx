import React from "react";

const RestrauntCard = ({
  resName,
  cuisine,
  imageUrl,
  rating,
  time,
  costForTwo,
  areaName,
  locality,
}) => {
  return (
    <div className="w-full p-4 bg-white shadow-md rounded-lg cursor-pointer transition duration-300 ease-in-out hover:shadow-lg hover:shadow-orange-300 hover:scale-105">
      <img
        src={imageUrl}
        alt={resName}
        className="w-full h-40 object-cover rounded-md mb-4"
        onError={(e) =>
          (e.target.src =
            "https://via.placeholder.com/300x200?text=Image+Not+Found")
        }
      />
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{resName}</h3>
      <p className="text-sm text-gray-600">{cuisine}</p>
      <p className="text-sm text-gray-500">
        ⭐ {rating} • {time}
      </p>
      <p className="text-m text-gray-900">{locality}</p>
      <p className="text-m text-gray-900">{areaName}</p>
      <p className="text-lg font-semibold text-gray-900">{costForTwo}</p>
    </div>
  );
};

export default RestrauntCard;
