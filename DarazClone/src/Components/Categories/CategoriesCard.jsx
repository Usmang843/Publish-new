import React from "react";
import { Link } from "react-router-dom";

const CategoriesCard = ({ categories }) => {
  return (
    <>
      <div className="p-2.5 m-2 w-36"
      >
        <Link to={`/category/${categories.title}`}>
          <img
            src={categories.image}
            alt={categories.title}
            style={{ width: "100%" }}
          />
          <h3>{categories.title}</h3>
        </Link>
      </div>
    </>
  );
};

export default CategoriesCard;
