import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import { Category } from "./Category";

export const Carousel = () => {
  const { data, fetchAllProducts } = useContext(DataContext);
  console.log(data);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{ zIndex: 3 }}
      >
        <AiOutlineArrowLeft
          className="arrows"
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "2px",
            left: "50px",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#555")}
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#f53347")
          }
        />
      </div>
    );
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{ zIndex: 3 }}
      >
        <AiOutlineArrowRight
          className="arrows"
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "2px",
            right: "50px",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#555")}
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#f53347")
          }
        />
      </div>
    );
  };

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    pauseOnHover: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
  };

  return (
    <div>
      <Slider {...settings} className="">
        {data?.slice(0, 7)?.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10"
            >
              <div className="flex flex-col md:flex-row items-center justify-center h-[600px] gap-10 px-4">
                <div className="space-y-6">
                  <h3 className="text-red-500 font-semibold font-sans text-sm md:text-xl">
                    Powering Your World with the Best in Electronics
                  </h3>
                  <h1 className="text-2xl md:text-3xl font-bold uppercase line-clamp-3 md:w-[500px] text-white">
                    {item.title}
                  </h1>
                  <p className=" md:w-[500px] pr-7 line-clamp-3 text-gray-400">
                    {item.description}
                  </p>
                  <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer mt-2">
                    Shop Now
                  </button>
                </div>
                <div>
                  <img
                    src={item?.image}
                    alt={item?.title}
                    className="rounded-full w-70 md:w-[500px] hover:scale-105 transition-all shadow-2xl shadow-red-400"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
