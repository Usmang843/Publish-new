import React from "react";
import ProductList from "../Products/ProductList";
import CategoriesList from "../Categories/CategoriesList";

const Home = () => {
  return (
    <div>
      <div className="container mx-auto p-4">
        {/* Top Banner Section */}
        <div className="  bg-gray-100 py-4">
          <img
            src="https://img.lazcdn.com/us/domino/071c3c3a-4f39-4a66-b4b6-597335fa2967_PK-1976-688.jpg_1200x1200q80.jpg_.webp"
            alt="Top Banner"
          />
        </div>

        {/* Best Selling Products Section */}
        <div className="best-selling-products-section py-8">
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
