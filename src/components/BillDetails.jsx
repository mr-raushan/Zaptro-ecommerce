import { LuNotebook } from "react-icons/lu";
import { useCart } from "../context/cartContext";
import { MdDeliveryDining } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";

export const BillDetails = () => {
  const { cartItem } = useCart();

  const totalPrice = cartItem.reduce((total, item) => total + item.price, 0);

  return (
    <form>
      <h1 className="font-bold text-2xl">Bill Details</h1>
      <div className="flex items-center justify-between mt-2">
        <div className="flex gap-1 items-center text-gray-700 font-medium">
          {" "}
          <LuNotebook className="" /> Items Total
        </div>
        <p>${totalPrice}</p>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-1 text-gray-700 font-medium">
          {" "}
          <MdDeliveryDining /> Delivery Charge
        </div>
        <p className="text-red-500 font-bold">
          <span className="font-semibold line-through">$25</span> FREE
        </p>
      </div>
      <div className="flex items-center justify-between mt-2 mb-2">
        <div className="flex items-center gap-1 text-gray-700 font-medium">
          {" "}
          <GiShoppingBag /> Handling Charge
        </div>
        <p>$5</p>
      </div>
      <hr />
      <div className="flex items-center justify-between mt-2">
        <h2 className="font-bold">Grand Totoal</h2>
        <p>${totalPrice + 5}</p>
      </div>

      <form className="mt-2">
        <p className="font-semibold text-lg mb-2">Apply Promo Code</p>
        <input
          type="text"
          placeholder="Promo Code"
          className="w-1/2 px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
        />
        <button className="border ml-6 border-gray-800 py-1 px-4 rounded-lg text-center cursor-pointer">
          Apply
        </button>
      </form>
      <button className="w-full bg-red-600 py-2 px-4 rounded-lg text-center cursor-pointer mt-4 text-white">
        Proceed to CheckOut
      </button>
    </form>
  );
};
