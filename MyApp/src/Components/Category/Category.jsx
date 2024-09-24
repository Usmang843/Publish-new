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
      {/* {console.log(categories[0])} */}
      {console.log(products[0])}
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {categories.map((category) => (
          
          <ProductCard key={category.id} product={category} />
        ))}
        {/* {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))} */}
      </div>
    </>
  );
};

export default Category;
