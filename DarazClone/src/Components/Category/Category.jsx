import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../Products/ProductCard";
import { Link, useParams } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

const Category = () => {
  const [products, setProducts] = useState([]);
  const { title } = useParams();
  const filteredProducts = products.filter(
    (product) => product.Category === title
  );
  const [isMultiDropdownOpen, setMultiDropdownOpen] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"

  const handleClick = () => {
    setMultiDropdownOpen(!isMultiDropdownOpen);
  };
  const handleViewChange = (mode) => {
    setViewMode(mode);
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
        <div className="mt-2 ml-60 text-orange-500">{title}</div>
        <div className="ml-40 text-zinc-500">
          {filteredProducts.length} items found in {title}
        </div>
        <div className="ml-96">
          Sort By:
          <button
            className="ml-2 text-black bg-gray-300 font-medium rounded-lg text-sm px-9 py-2.5 inline-flex items-center"
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
        <div className="mt-2 ml-20 flex items-center">
          <span className="mr-2 "> Views:</span>
          <svg
            onClick={() => handleViewChange("grid")}
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="18px"
            height="18px"
            viewBox="0 0 122.88 122.566"
            enable-background="new 0 0 122.88 122.566"
            xml:space="preserve"
            className="cursor-pointer"
          >
            <g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.78,66.082h47.875c2.045,0,3.717,1.988,3.717,4.414v46.479 c0,2.43-1.671,4.416-3.717,4.416H3.78c-2.043,0-3.717-1.986-3.717-4.416V70.496C0.063,68.07,1.737,66.082,3.78,66.082L3.78,66.082z M71.224,0H119.1c2.046,0,3.717,1.986,3.717,4.415v46.479c0,2.429-1.671,4.413-3.717,4.413H71.224 c-2.045,0-3.714-1.984-3.714-4.413V4.415C67.51,1.986,69.179,0,71.224,0L71.224,0z M3.714,0h47.878 c2.045,0,3.717,1.986,3.717,4.415v46.479c0,2.429-1.671,4.413-3.717,4.413H3.714C1.671,55.307,0,53.323,0,50.894V4.415 C0,1.986,1.671,0,3.714,0L3.714,0z M71.287,67.26h47.876c2.043,0,3.717,1.986,3.717,4.416v46.479c0,2.426-1.674,4.412-3.717,4.412 H71.287c-2.045,0-3.717-1.986-3.717-4.412V71.676C67.57,69.246,69.242,67.26,71.287,67.26L71.287,67.26z"
              />
            </g>
          </svg>
          <svg
            onClick={() => handleViewChange("list")}
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 512 474.051"
            className="ml-3 w-5 h-5 cursor-pointer"
          >
            <path d="M11.216 0H88.37c6.169 0 11.216 5.047 11.216 11.216v70.947c0 6.17-5.047 11.217-11.216 11.217H11.216C5.047 93.38 0 88.333 0 82.163V11.216C0 5.047 5.047 0 11.216 0zm152.662 380.672h336.906c6.169 0 11.216 5.05 11.216 11.216v70.947c0 6.166-5.051 11.216-11.216 11.216H163.878c-6.166 0-11.217-5.046-11.217-11.216v-70.947c0-6.169 5.047-11.216 11.217-11.216zm-152.662 0H88.37c6.169 0 11.216 5.047 11.216 11.216v70.947c0 6.17-5.047 11.216-11.216 11.216H11.216C5.047 474.051 0 469.005 0 462.835v-70.947c0-6.169 5.047-11.216 11.216-11.216zm152.662-190.336h336.906c6.169 0 11.216 5.05 11.216 11.216v70.947c0 6.166-5.051 11.216-11.216 11.216H163.878c-6.166 0-11.217-5.046-11.217-11.216v-70.947c0-6.17 5.047-11.216 11.217-11.216zm-152.662 0H88.37c6.169 0 11.216 5.046 11.216 11.216v70.947c0 6.17-5.047 11.216-11.216 11.216H11.216C5.047 283.715 0 278.669 0 272.499v-70.947c0-6.17 5.047-11.216 11.216-11.216zM163.878 0h336.906C506.953 0 512 5.051 512 11.216v70.947c0 6.166-5.051 11.217-11.216 11.217H163.878c-6.166 0-11.217-5.047-11.217-11.217V11.216C152.661 5.047 157.708 0 163.878 0z" />
          </svg>
        </div>
      </div>
      <hr className="mt-4 mb-2 mx-60" />
      <div className="flex flex-wrap justify-center">
        <div className="ml-60 flex-none w-64 ">
          <span className="mb-8">Brand</span>
          <ul>
            <li>
              <div className="flex items-center  mr-3 mt-4">
                <input
                  id="checkbox1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4"
                />
                <label
                  htmlFor="checkbox1"
                  className="ms-2 text-sm font-medium text-zinc-500 "
                >
                  LouisWill
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center  mr-3">
                <input
                  id="checkbox2"
                  type="checkbox"
                  value=""
                  className="w-4 h-4"
                />
                <label
                  htmlFor="checkbox2"
                  className="ms-2 text-sm font-medium text-zinc-500 "
                >
                  KASHIF LUGGAGE AND BA
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center  mr-3">
                <input
                  id="checkbox3"
                  type="checkbox"
                  value=""
                  className="w-4 h-4"
                />
                <label
                  htmlFor="checkbox3"
                  className="ms-2 text-sm font-medium text-zinc-500 "
                >
                  ARCTIC HUNTER
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center  mr-3">
                <input
                  id="checkbox4"
                  type="checkbox"
                  value=""
                  className="w-4 h-4"
                />
                <label
                  htmlFor="checkbox4"
                  className="ms-2 text-sm font-medium text-zinc-500 "
                >
                  OZUKO
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center  mr-3">
                <input
                  id="checkbox5"
                  type="checkbox"
                  value=""
                  className="w-4 h-4"
                />
                <label
                  htmlFor="checkbox5"
                  className="ms-2 text-sm font-medium text-zinc-500 "
                >
                  MENSPE
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center  mr-3">
                <input
                  id="checkbox6"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 rounded dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="checkbox6"
                  className="ms-2 text-sm font-medium text-zinc-500 "
                >
                  offset
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 flex-wrap justify-center mr-60">
          {viewMode === "grid"
            ? filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            : filteredProducts.map((product) => (
                <div key={product.id} className="w-full flex mb-4">
                  <div className="flex">
                    <Link to={`/addToCart/${product.id}`} className=" h-full">
                      <img
                       className="w-96"
                        src={product.image}
                        alt={product.title}
                      />
                    </Link>
                    <Link to={`/addToCart/${product.id}`}>
                      <h3 className="mt-2 ml-20">
                        {product.title}
                        <br />
                        <span className="text-zinc-500">
                          {product.desc}
                        </span>
                      </h3>
                    </Link>
                    <p className="mt-10 ml-20 text-orange-400 font-bold">Price: ${product.price}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Category;
