import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { DataProvider } from "./context/DataContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "react-scroll-to-top";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

createRoot(document.getElementById("root")).render(
  <DataProvider>
    <CartProvider>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
        <ScrollToTop
          smooth
          className="bg-[#fa2d37] flex items-center justify-center text-white"
          style={{
            backgroundColor: "#fa2d37",
            alignItems: "center",
            color: "#fff",
          }}
        />
        <Toaster />
      </ClerkProvider>
    </CartProvider>
  </DataProvider>
);
