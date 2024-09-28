import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../Products/ProductCard";

const Search = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/flashSale.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));

    
  }, []);

  return (
    <>
      {/* Search */}
      <div className=""
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
              .filter((product) => product.Category === "Flash Sale") // Filter products by category
              .map((product) => (
                <ProductCard key={product.id} product={product} />
                
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
