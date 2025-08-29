import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../assets/Loading4.webm";
import { ChevronLeft } from "lucide-react";
import { ProductListView } from "../components/ProductListView";

export const ProductCategory = () => {
  const [searchCategory, setSearchCategory] = useState([]);
  const params = useParams();
  const category = params.category;
  console.log(category);

  const navigate = useNavigate();

  const getFiltetCategory = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.in/api/products/category?type=${category}`
      );
      const data = res.data.products;
      setSearchCategory(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFiltetCategory();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      {searchCategory.length > 0 ? (
        <div className="mt-10 mb-10 px-4 md:px-0 grid grid-cols-1 md:grid-cols-1 gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-gray-800 mb-5 text-white px-3 py-1 rounded-md cursor-pointer w-fit"
          >
            <ChevronLeft className="w-6 h-6 " />
            Back
          </button>
          {searchCategory?.map((item) => {
            return <ProductListView key={item.id} item={item} />;
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center ">
          <video loop autoPlay muted src={Loading}></video>
        </div>
      )}
    </div>
  );
};
