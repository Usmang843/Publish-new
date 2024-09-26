import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="border border-gray-300 p-2.5 m-1 w-38">
        <Link to={`/addToCart/${product.id}`}>
          <img className="w-full" src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
