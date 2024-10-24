import React, { useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:4000/categories");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {categories
        .filter((category) => category.id !== 9) // Filter out the category with id 9
        .map((category) => (
          <CategoriesCard key={category.id} categories={category} />
        ))}
    </div>
  );
};

export default CategoriesList;
