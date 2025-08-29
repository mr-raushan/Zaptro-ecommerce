import { CrossIcon, MapPin, ShoppingCart, X } from "lucide-react";
import { FaCaretDown, FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { useCart } from "../context/cartContext";

export const Navbar = ({
  location,
  getLocation,
  openDropDown,
  setOpenDropDown,
}) => {
  const [open, setOpen] = useState(false);

  const toogleDropDown = () => {
    setOpenDropDown(!openDropDown);
  };

  const { cartItem } = useCart();

  return (
    <div className="bg-white h-16 shadow-2xl py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to={"/"} className="text-3xl font-bold ">
            <span className="text-red-600">Z</span>aptro
          </Link>
          <div className="hidden md:flex items-center gap-2 cursor-pointer text-gray-700">
            <MapPin className="text-red-500 h-8 w-8" />
            <span className="font-semibold">
              {" "}
              {location ? (
                <div className="-space-y-2">
                  <p>{location.suburb}</p>
                  <p>{location.city_district}</p>
                </div>
              ) : (
                "Add Address"
              )}{" "}
            </span>
            <FaCaretDown onClick={toogleDropDown} />
          </div>
          {openDropDown ? (
            <div className="w-[250px] h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-5 border-gray-100 rounded-md">
              <h1 className="font-semibold mb-4 text-xl flex items-center justify-between">
                Change Location{" "}
                <span>
                  {" "}
                  <CgClose
                    onClick={toogleDropDown}
                    className="cursor-pointer"
                  />{" "}
                </span>{" "}
              </h1>
              <button
                onClick={getLocation}
                className="w-full bg-red-500 text-white py-2 cursor-pointer rounded-lg"
              >
                Detect my location
              </button>
            </div>
          ) : null}
        </div>
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex items-center gap-4 text-lg">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-3 transition-all border-red-500"
                      : "text-black"
                  } cursor-pointer`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/products"}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-3 transition-all border-red-500"
                      : "text-black"
                  } cursor-pointer`
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-3 transition-all border-red-500"
                      : "text-black"
                  } cursor-pointer`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-3 transition-all border-red-500"
                      : "text-black"
                  } cursor-pointer`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          {/* cart logo  */}
          <Link to={"/cart"} className="relative">
            <ShoppingCart className="h-8 w-8 cursor-pointer" />
            <span
              className="absolute top-0 right-0 animate-bounce bg-red-500 text-white w-5 h-5 flex items-center
             justify-center rounded-full"
            >
              {cartItem?.length}
            </span>
          </Link>
          <div className="hidden md:flex">
            <SignedOut>
              <SignInButton>
                <button className="bg-red-500 text-white py-1 px-4 rounded-md shadow-md hover:bg-red-600 transition-all duration-300 ease-in-out cursor-pointer">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          {open ? (
            <div>
              <X className="w-8 h-8 md:hidden" onClick={() => setOpen(!open)} />
            </div>
          ) : (
            <div>
              <HiMenuAlt3
                className="w-8 h-8 md:hidden"
                onClick={() => setOpen(!open)}
              />
            </div>
          )}
        </div>
        <ResponsiveMenu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

const ResponsiveMenu = ({ open, setOpen }) => {
  const { user } = useUser();
  return (
    <div
      className={`${
        open ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}
    >
      <div>
        <div className="flex items-center justify-start gap-3">
          {user ? <UserButton size={50} /> : <FaUserCircle size={50} />}
          <div>
            <h1>Hello, {user?.firstName}</h1>
            <h1 className="text-sm text-slate-500">Premium User</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="flex flex-col gap-7 text-2xl font-semibold">
            <Link
              to={"/"}
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            >
              <li>Home</li>
            </Link>
            <Link
              to={"/products"}
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            >
              <li>Products</li>
            </Link>
            <Link
              to={"/about"}
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            >
              <li>About</li>
            </Link>
            <Link
              to={"/contact"}
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            >
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
        <div className="md:hidden">
          <SignedOut>
            <SignInButton>
              <button className="bg-red-500 text-white py-1 px-4 rounded-md shadow-md hover:bg-red-600 transition-all duration-300 ease-in-out cursor-pointer mt-4 w-full">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <p className="mt-4 font-semibold">Made with ❤️ by Raushan</p>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
