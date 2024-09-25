import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../Products/ProductCard";
import { Link, useParams } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

const Category = () => {
  const [products, setProducts] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    fetch("/flashSale.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="mt-2 mx-60">
        <Dropdown />
      </div>
      <div className="mt-4 mx-60 text-blue-600 flex">
        <Link to="/">Home</Link>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
        </svg>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {products
              .filter((product) => product.Category === title) // Filter products by category
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
