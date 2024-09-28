import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ToastContainer />
      <Footer />
    </>
  );
};
export default Layout;
