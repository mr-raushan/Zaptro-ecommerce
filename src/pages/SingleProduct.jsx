import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../assets/Loading4.webm";
import { BreadCrumbs } from "../components/BreadCrumbs";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/cartContext";

export const SingleProduct = () => {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const fetchSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.in/api/products/${params.id}`
      );
      const product = res.data.product;
      setSingleProduct(product);
      console.log(product);
    } catch (error) {
      console.log("error in singleProduct", error);
    }
  };

  const OriginalPrice = Math.round(
    singleProduct?.price +
      (singleProduct?.price * singleProduct?.discount) / 100
  );

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="bg-red-500 ml-60 hover:bg-red-600 text-white py-2 px-4 rounded-lg "
      >
        Back
      </button>
      {singleProduct ? (
        <div className="px-4 pb-4 md:px-0">
          <BreadCrumbs title={singleProduct?.title} />
          <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-2 gap-6">
            <div className="w-full">
              <img
                src={singleProduct?.image}
                alt={singleProduct?.title}
                className="rounded-2xl w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="md:text-4xl text-lg font-semibold text-gray-800">
                {singleProduct.title}
              </h1>
              <div className="text-xl font-semibold text-gray-700">
                {singleProduct?.brand?.toUpperCase()}/
                {singleProduct?.category?.toUpperCase()}/
                {singleProduct?.model?.toUpperCase()}
              </div>
              <div className="text-2xl font-semibold flex items-center gap-4 text-red-600">
                ${singleProduct?.price}{" "}
                <span className="line-through text-gray-700">
                  {OriginalPrice}
                </span>{" "}
                <span className="py-1 px-6 rounded-lg bg-red-500 text-white hover:bg-red-600 cursor-pointer">
                  {singleProduct?.discount} % off{" "}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-500">
                {singleProduct?.description}
              </p>
              <div className="flex items-center gap-4">
                <label htmlFor="" className="text-sm font-medium text-gray-700">
                  Quantity:
                </label>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 foucs:ring-red-500"
                />
              </div>
              <button
                onClick={() => addToCart(singleProduct, quantity)}
                className="bg-red-500 -mt-10 flex items-center gap-2 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg absolute bottom-2 cursor-pointer"
              >
                <ShoppingCart className="w-6 h-6" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <video muted autoPlay loop>
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </div>
  );
};
