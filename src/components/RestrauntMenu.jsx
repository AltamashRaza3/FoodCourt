import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestrauntMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]); // 🛒 Local cart state

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API(resId));
      const json = await data.json();

      // Extract restaurant info
      const resMenuCard = json?.data?.cards?.find(
        (card) =>
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      );
      if (resMenuCard) {
        setResInfo(resMenuCard?.card?.card?.info);
      }

      // Extract menu items
      const menuCards =
        json?.data?.cards?.find((card) => card.groupedCard)?.groupedCard
          ?.cardGroupMap?.REGULAR?.cards || [];

      const items = menuCards.flatMap(
        (card) =>
          card?.card?.card?.itemCards?.map((item) => item.card?.info) || []
      );

      // Remove duplicates
      const uniqueItems = items.filter(
        (item, index, self) =>
          index === self.findIndex((t) => t?.id === item?.id)
      );

      setMenuItems(uniqueItems);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  // 🛒 Add to cart handler
  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    alert(`${item?.name} added to cart!`);
  };

  if (!resInfo) {
    return <Shimmer />;
  }

  return (
    <div className="menu px-6 md:px-20 lg:px-40 pt-28 pb-10">
      {/* Restaurant Info Card */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
        <h1 className="text-3xl text-gray-900 font-bold mb-2">
          {resInfo.name || "Restaurant"}
        </h1>
        <p className="text-gray-600">
          {resInfo.cuisines?.join(", ") || "No cuisines listed"}
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-gray-700">
          <span>⭐ {resInfo.avgRating || "N/A"}</span>
          <span>{resInfo.costForTwoMessage || "Cost info not available"}</span>
          <span>⏱ {resInfo?.sla?.deliveryTime || "--"} mins</span>
          <span>
            📍 {resInfo.locality || ""}, {resInfo.areaName || ""}
          </span>
          <button className="bg-red-500 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            Buy Now
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <h2 className="text-2xl font-semibold mb-6">Menu</h2>
      {menuItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={`${item?.id}-${index}`}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col"
            >
              {/* Image with custom fallback */}
              {item?.imageId ? (
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/${item.imageId}`}
                  alt={item?.name || "Menu Item"}
                  className="rounded-md object-cover w-full h-40 mb-4"
                />
              ) : (
                <div className="w-full h-40 mb-4 flex items-center justify-center bg-gray-100 text-gray-400 text-sm rounded-md border border-gray-200">
                  No Image Available
                </div>
              )}

              {/* Name */}
              <h3 className="text-lg text-gray-800 font-semibold mb-1">
                {item?.name || "Unnamed Item"}
              </h3>

              {/* Description with fallback */}
              <p className="text-gray-500 text-sm flex-grow">
                {item?.description || "Description not available"}
              </p>

              {/* Price */}
              <p className="text-gray-800 font-bold mt-3">
                ₹
                {item?.price
                  ? (item.price / 100).toFixed(2)
                  : item?.defaultPrice
                  ? (item.defaultPrice / 100).toFixed(2)
                  : "—"}
              </p>

              <button
                onClick={() => handleAddToCart(item)}
                className="mt-4 bg-green-500 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No menu items available</p>
      )}


      {cart.length > 0 && (
        <div className="mt-10 bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-black mb-3">
            Cart ({cart.length})
          </h3>
          <ul className="list-disc pl-6">
            {cart.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item?.name} – ₹
                {item?.price
                  ? (item.price / 100).toFixed(2)
                  : item?.defaultPrice
                  ? (item.defaultPrice / 100).toFixed(2)
                  : "—"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RestrauntMenu;
