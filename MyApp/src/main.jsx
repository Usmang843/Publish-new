import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Login/Login.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import Search from "./Components/Search/Search.jsx";
import AddCart from "./Components/AddCart/AddCart.jsx";
import Category from "./Components/Category/Category.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Checkout from "./Components/Checkout/Checkout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home  />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="search" element={<Search />} />
      <Route path="cart" element={<Cart />} />
      <Route path="addToCart/:id" element={<AddCart />} />
      <Route path="category/:title" element={<Category />} />
      <Route path='/checkout' element={<Checkout />} />

    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
