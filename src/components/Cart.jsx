import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";
import toast from "react-hot-toast";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // Calculate total safely
  const totalPrice = cart.filter(Boolean).reduce((acc, item) => {
    const price = item?.price ?? item?.defaultPrice ?? 0;
    return acc + price / 100;
  }, 0);

  if (!cart || cart.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[60vh] bg-gray-100 p-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-4">
          Your Cart is Empty
        </h1>
        <p className="text-gray-500 text-lg">
          Add some delicious items to your cart!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 pt-32">
      <h1 className="flex items-center text-3xl md:text-4xl font-bold mb-6 text-gray-900">
        <span className="mr-3 text-orange-500">🛒</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
          Your Cart ({cart.length} {cart.length === 1 ? "item" : "items"})
        </span>
      </h1>

      {/* Cart Items */}
      <ul className="space-y-6">
        {cart.map((item, index) => (
          <li
            key={index}
            className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-md"
          >
            {/* Item Info */}
            <div className="flex items-center gap-4 w-full md:w-2/3">
              {item?.imageId && (
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_80,c_fill/${item.imageId}`}
                  alt={item?.name}
                  className="w-24 h-20 rounded object-cover"
                />
              )}
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {item?.name || "Unnamed Item"}
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  {item?.description || "No description available"}
                </p>
              </div>
            </div>

            {/* Price & Remove */}
            <div className="flex items-center gap-4 mt-3 md:mt-0">
              <span className="text-lg font-bold text-gray-900">
                ₹{((item?.price ?? item?.defaultPrice ?? 0) / 100).toFixed(2)}
              </span>
              <button
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                onClick={() => {
                  dispatch(removeItem(index));
                  toast.success(`${item?.name || "Item"} removed!`);
                }}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Total & Clear Cart */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center bg-gray-100 p-6 rounded-lg shadow">
        <span className="text-2xl font-semibold text-gray-800">
          Total: ₹{totalPrice.toFixed(2)}
        </span>
        <button
          className="mt-4 md:mt-0 px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
          onClick={() => {
            dispatch(clearCart());
            toast.success("Cart cleared successfully!");
          }}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
