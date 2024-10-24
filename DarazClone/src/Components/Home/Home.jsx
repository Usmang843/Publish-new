import React from "react";
import ProductList from "../Products/ProductList";
import CategoriesList from "../Categories/CategoriesList";
import { Link } from "react-router-dom";
import FlashSale from "../flashSale/FlashSale"
const Home = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-4">
        {/* Top Banner Section */}
        <div className="py-4">
          <Link to="/flashSale">
            <img
              src="https://img.lazcdn.com/us/domino/3ef3942f-6c4f-4da8-8a5f-8215f7199b31_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
              alt="Top Banner"
            />
          </Link>
        </div>
        {/* Best Selling Products Section */}
        <div className="best-selling-products-section py-8 ">
          <h2 className="text-2xl font-bold text-gray-900">
            Best Selling Products
          </h2>
          {/* <FlashSale /> */}
        </div>

        {/* Best Selling Products Section */}
        <div className="best-selling-products-section py-8 ">
          <h2 className="text-2xl font-bold text-gray-900">
            Best Selling Products
          </h2>
          <CategoriesList />
        </div>

        {/* Flash Sale Section */}
        <div className="flash-sale-section py-8">
          <h2 className="text-2xl font-bold text-gray-900">Flash Sale</h2>
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Home;
