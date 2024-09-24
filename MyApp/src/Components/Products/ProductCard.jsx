import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          margin: "10px",
          width: "150px",
        }}
      >
        <Link to={`/addToCart/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%" }}
          />
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
