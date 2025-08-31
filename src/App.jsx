import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Cart } from "./pages/Cart";
import { Navbar } from "./components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import { SingleProduct } from "./pages/SingleProduct";
import { ProductCategory } from "./pages/ProductCategory";
import { useCart } from "./context/cartContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

export const App = () => {
  const [location, setLocation] = useState();
  const [openDropDown, setOpenDropDown] = useState(false);

  const { cartItem, setCartItem } = useCart();

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
      try {
        const location = await axios.get(url);
        const exactLocation = location.data.address;
        setOpenDropDown(false);
        setLocation(exactLocation);
      } catch (error) {
        console.log("error aa gya", error);
      }
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  // load cart from local storage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItem");
    if (storedCart) {
      setCartItem(JSON.parse(storedCart));
    }
  }, []);

  // save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  return (
    <BrowserRouter>
      <Navbar
        location={location}
        getLocation={getLocation}
        openDropDown={openDropDown}
        setOpenDropDown={setOpenDropDown}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/category/:category" element={<ProductCategory />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element=<ProtectedRoute>
            <Cart location={location} getLocation={getLocation} />
          </ProtectedRoute>
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
