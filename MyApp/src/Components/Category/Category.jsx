import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../Products/ProductCard";
import { useParams } from "react-router-dom";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    fetch("/flashSale.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));

    fetch("/categories.json")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
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
