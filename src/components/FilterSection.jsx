import { getData } from "../context/DataContext";

export const FilterSection = ({
  search,
  setSearch,
  brand,
  category,
  handleCategoryChange,
  handleBrandChange,
  priceRange,
  setPriceRange,
  setCategory,
  setBrand,
}) => {
  const { categoryOnlyData, brandOnlyData } = getData();

  return (
    <div className="hidden md:flex flex-col w-[20%] bg-gray-100 mt-10 p-6 rounded-md h-max">
      <input
        type="text"
        placeholder="Search..."
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 w-full bg-white outline-none rounded-md border"
      />
      <h1 className="text-xl font-semibold mb-4 border-b border-gray-400">
        Category
      </h1>
      {/* category data  */}
      <div className="flex flex-col space-y-2">
        {categoryOnlyData?.map((item, idx) => {
          const checkboxId = `category-${idx}`;
          return (
            <div key={idx} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={item}
                checked={category === item}
                name={item}
                onChange={handleCategoryChange}
                id={checkboxId}
              />
              <label htmlFor={checkboxId} className="uppercase cursor-pointer">
                {item}
              </label>
            </div>
          );
        })}
      </div>
      {/* brand data  */}
      <div>
        <h2 className="text-xl font-semibold mt-4 mb-4 border-b border-gray-400">
          Brand
        </h2>
        <div>
          <select className="border rounded px-3 py-2 w-full">
            {brandOnlyData?.map((item, idx) => (
              <option
                name={item}
                key={idx}
                value={item}
                checked={brand === item}
                onChange={handleBrandChange}
              >
                {item.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* price range  */}
      <h2 className="text-xl font-semibold mt-6 border-b border-gray-400">
        Price Range
      </h2>
      <div className="mt-4">
        <p className="mb-2 font-medium text-sm">
          Price Range: ${priceRange[0]} - ${priceRange[1]}
        </p>
        <input
          type="range"
          min="0"
          max="5000"
          step="100"
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
          className="w-full accent-red-500 cursor-pointer"
        />
      </div>
      <button
        onClick={() => {
          setSearch("");
          setCategory("ALL");
          setBrand("ALL");
          setPriceRange([0, 5000]);
        }}
        className="mt-4 bg-red-500 cursor-pointer hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md"
      >
        Reset Filters
      </button>
    </div>
  );
};
