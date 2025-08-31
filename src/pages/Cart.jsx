import { Trash } from "lucide-react";
import { useCart } from "../context/cartContext";
import { useNavigate } from "react-router-dom";
import { DeliveryInfo } from "../components/DeliveryInfo";
import { BillDetails } from "../components/BillDetails";
import emptyCart from "../assets/empty-cart.png";

export const Cart = ({ location, getLocation }) => {
  const { cartItem, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto mt-10 mb-10">
      {cartItem.length > 0 ? (
        <div>
          <h1 className="font-bold text-2xl ml-6 md:ml-0">
            My Cart <span className="text-red-500 ">({cartItem.length})</span>{" "}
          </h1>
          <div>
            <div className="mt-10 px-4">
              {cartItem?.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="bg-gray-200 p-5 rounded-lg flex items-center justify-between mt-3 w-full"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        className="w-20 h-20 text-center object-cover rounded-md"
                        alt={item.title.slice(0, 20) + "..."}
                      />
                      <div>
                        <h1 className="w-[200px] md:w-[300px]">
                          {item.title.slice(0, 60) + "..."}
                        </h1>
                        <p className="font-bold mt-4 md:mt-0 text-red-500 text-lg">
                          ${item.price}
                        </p>
                      </div>
                    </div>
                    <div className="bg-red-500 mt-16 md:mt-0 -ml-60 md:-ml-0 p-1 rounded-lg text-white py-1 px-2 md:py-2 md:px-6 flex items-center gap-4">
                      <button
                        onClick={() => updateQuantity(item.id, "decrease")}
                        className="cursor-pointer text-lg font-semibold"
                      >
                        -
                      </button>
                      <span>{item?.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, "increase")}
                        className="cursor-pointer text-lg font-semibold"
                      >
                        +
                      </button>
                    </div>
                    <div className="mt-16 md:mt-0">
                      <Trash
                        onClick={() => removeFromCart(item)}
                        className="w-6 h-6 cursor-pointer text-red-500"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
            <div className="bg-gray-200 rounded-md p-7 mt-4 space-y-2">
              <DeliveryInfo location={location} getLocation={getLocation} />
            </div>
            <div className="bg-gray-200 rounded-md p-7 mt-4 space-y-2">
              <BillDetails />
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center font-bold text-3xl">
          <h1 className="text-5xl text-red-600 font-bold text-center">
            Oh no! 😲 Your cart is empty
          </h1>
          <div className="flex items-center justify-center">
            <img
              src={emptyCart}
              className="h-[400px] text-center object-cover"
              alt="djfh"
            />
          </div>
          <button
            onClick={() => navigate("/products")}
            className="bg-red-500 py-2 px-6 rounded-lg text-white font-medium mt-5 text-center hover:bg-red-600 shadow-md hover:shadow-lg transition-all ease-in-out duration-300 cursor-pointer"
          >
            Shop Now
          </button>
        </div>
      )}
    </div>
  );
};
