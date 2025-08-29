import { useNavigate } from "react-router-dom";
import { getData } from "../context/DataContext";

export const Category = () => {
  const navigate = useNavigate();
  const { data } = getData();

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((currElem) => {
      return currElem[property];
    });
    newVal = [...new Set(newVal)];
    return newVal;
  };

  const categoryOnlyData = getUniqueCategory(data, "category");

  return (
    <div className="bg-[#101829] px-4 md:px-0">
      <div className="container mx-auto flex gap-4 items-center justify-around py-7 px-4">
        {categoryOnlyData?.map((item, idx) => {
          return (
            <button
              onClick={() => navigate(`/category/${item}`)}
              key={idx}
              className="bg-gradient-to-r from-red-500 to-purple-500 text-white uppercase px-3 py-1 rounded-md cursor-pointer mt-2"
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};
