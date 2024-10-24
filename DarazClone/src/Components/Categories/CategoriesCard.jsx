import React from "react";
import { Link } from "react-router-dom";

const CategoriesCard = ({ categories }) => {
  return (
    <>
      <div className="p-2 m-1 w-36 bg-white flex flex-col items-center hover:shadow-2xl"
      >
        <Link to={`/category/${categories.id}`} className="text-center">
          <img
            className="w-full"
            src={categories.image}
            alt={categories.title}
          />
          <h3 className="font-canada">{categories.title}</h3>
        </Link>
      </div>
    </>
  );
};

export default CategoriesCard;
