import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";

export const ProductCart = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  // console.log(cartItem);
  return (
    <div className="">
      <div className="bg-white rounded-xl mx-auto shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out p-2 relative mt-10 h-max">
        <img
          src={product.image}
          alt={product.title.slice(0, 20) + "..."}
          className="bg-gray-100 object-cover w-40 h-40 text-center rounded-lg mx-auto cursor-pointer"
          onClick={() => navigate(`/products/${product.id}`)}
        />
        <h2 className="text-lg text-center font-semibold mt-2 mb-6">
          {product.title.length > 30
            ? product.title.slice(0, 30) + "..."
            : product.title}
        </h2>

        <p className="font-bold ml-4 mt-2 text-green-600 ">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-red-500 cursor-pointer w-fit flex items-center gap-2 hover:bg-red-600 text-white 
          font-semibold py-1 px-2 rounded-lg absolute bottom-2 right-2"
        >
          <ShoppingCart className="w-6 h-6" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};
