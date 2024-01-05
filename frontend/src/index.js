import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import MyAccount from "./pages/MyAccount";
import MyCart from "./pages/MyCart";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import WishList from "./pages/WishList";
import { AppProvider } from "./context/productContext";
import { FilterContextProvider } from "./context/filterContext";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/userContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="contact" element={<Contact />} />
      <Route path="account" element={<MyAccount />} />
      <Route path="/cart" element={<MyCart />} />
      <Route path="product" element={<ProductDetails />} />
      <Route path="shop" element={<Shop />} />
      <Route path="wishlist" element={<WishList />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <AppProvider>
        <FilterContextProvider>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </FilterContextProvider>
      </AppProvider>
    </UserProvider>
  </React.StrictMode>
);

reportWebVitals();
