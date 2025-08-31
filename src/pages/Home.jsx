import { Carousel } from "../components/Carousel";
import { Banner } from "../components/Banner";
import { Category } from "../components/Category";
import { Feature } from "../components/Feature";

export const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Carousel />
      <Category />
      <Banner />
      <Feature />
    </div>
  );
};
