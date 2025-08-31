import React, { useEffect, useState } from "react";
import { getData } from "../context/DataContext";
import Loading from "../assets/Loading4.webm";
import { FilterSection } from "../components/FilterSection";
import { ProductCart } from "../components/ProductCart";
import { Pagination } from "../components/Pagination";
import notfound from "../assets/notfound.json";
import Lottie from "lottie-react";
import MobileFilter from "../components/MobileFilter";

export const Product = () => {
  const { data, fetchAllProducts } = getData();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");
  const [brand, setBrand] = useState("ALL");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);
  const [openFilter, setOpenFilter] = useState(false);

  useEffect(() => {
    fetchAllProducts();
    window.scrollTo(0, 0);
  }, []);

  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
    window.scrollTo(0, 0);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
    setOpenFilter(false);
  };
  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setPage(1);
    setOpenFilter(false);
  };

  const filterData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "ALL" || item.category === category) &&
      (brand === "ALL" || item.brand === brand) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );

  const dynamicPage = Math.ceil(filterData?.length / 8);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <MobileFilter
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
          search={search}
          setSearch={setSearch}
          brand={brand}
          setBrand={setBrand}
          category={category}
          setCategory={setCategory}
          handleBrandChange={handleBrandChange}
          handleCategoryChange={handleCategoryChange}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
        {data?.length > 0 ? (
          <>
            <div className="flex gap-10">
              <FilterSection
                search={search}
                setSearch={setSearch}
                brand={brand}
                setBrand={setBrand}
                category={category}
                setCategory={setCategory}
                handleBrandChange={handleBrandChange}
                handleCategoryChange={handleCategoryChange}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />
              {filterData?.length > 0 ? (
                <div className="flex flex-col items-center justify-center">
                  <div className="grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
                    {filterData
                      ?.slice(page * 8 - 8, page * 8)
                      ?.map((product) => {
                        return (
                          <ProductCart key={product.id} product={product} />
                        );
                      })}
                  </div>
                  <Pagination
                    pageHandler={pageHandler}
                    page={page}
                    setPage={setPage}
                    dynamicPage={dynamicPage}
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center md:h-[600px] md:w-[900px] mt-10">
                  <Lottie animationData={notfound} classID="w-[500px]" />
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-[400px]">
            <video muted autoPlay loop>
              <source src={Loading} type="video/webm" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};
