/*eslint-disable*/
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";

export const ProductListView = ({ item }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  return (
    <div className="space-y-4 mt-2 rounded-md">
      <div className="bg-gray-200 flex gap-7 items-center p-2 rounded-md">
        <img
          onClick={() => navigate(`/products/${item.id}`)}
          src={item.image}
          alt={item.title.slice(0, 10) + "..."}
          className="w-30 h-30 rounded-lg cursor-pointer"
        />
        <div className="space-y-2">
          <h1 className="font-semibold text-xl hover:text-red-400">
            {item.title.slice(0, 60) + "..."}
          </h1>
          <p>{item.description.slice(0, 120) + "..."}</p>
          <p className="font-semibold flex gap-2 items-center">
            <span className="text-red-600">${item.price}</span> ({item.discount}
            )% off{" "}
          </p>
          <p className="text-gray-800 font-semibold">
            Free delivery -{" "}
            {new Date(
              Date.now() + 2 * 24 * 60 * 60 * 1000 // 2 din ke milliseconds add kiye
            ).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
          <button
            onClick={() => addToCart(item)}
            className="bg-red-500 cursor-pointer w-fit flex items-center gap-2 hover:bg-red-600 text-white 
          font-semibold py-1 px-2 rounded-lg "
          >
            <ShoppingCart className="w-6 h-6" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
