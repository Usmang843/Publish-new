import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../Products/ProductCard";
import { Link, useParams } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

const Category = () => {
  const [products, setProducts] = useState([]);
  const { title } = useParams();
  const Items = products.filter((product) => product.Category === title);
  const [isMultiDropdownOpen, setMultiDropdownOpen] = useState(false);

  const handleClick = () => {
    setMultiDropdownOpen(!isMultiDropdownOpen);
  };

  let item;
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
        {title}
      </div>
      <hr className="mt-4 mb-2 mx-60" />
      <div className="mt-2 mx-60">Category</div>
      <div className="text-sm flex">
        <div className="mt-2 mx-60 text-orange-500 ">{title}</div>
        <div className="mx-40 text-zinc-500">
          {Items.length} items found in {title}
        </div>
        <div className="mx-40 text-zinc-500">
          Sort By:
          <button
            className="mx-2 text-black font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
            onClick={handleClick} // Open dropdown on mouse over
          >
            Best Match
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {isMultiDropdownOpen && (
            <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-black-200">
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Best Match
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Price low to high
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Price high to low
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <hr className="mt-4 mb-2 mx-60" />
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
