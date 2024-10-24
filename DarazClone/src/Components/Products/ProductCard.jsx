import React from "react";
import { Link } from "react-router-dom";
// import bucketImage from "../../assets/images/Sf592f28454d54fccb187e833dbcb0ba00.jpg_200x200q75.jpg_.webp"
const ProductCard = ({ product }) => {
  return (
    <>
      <div className="border border-gray-300 p-2.5 m-1 w-60 bg-white hover:shadow-2xl">
        <Link to={`/addToCart/${product.id}`}>
          <img
            className="w-full h-60 object-cover"
            src={product.image}
            alt={product.title}
          />
          <h3 className="text-md mt-2 font-canada">{product.title}</h3>
          <p className="text-sm text-orange-400 font-bold">
            Price: ${product.price}
          </p>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
