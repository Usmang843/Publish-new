import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const checkVal = () => {
    !inputValue && alert('Please enter Catogery');
  }

  return (
    <div>
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link to="/" className="text-xl font-bold">
            {" "}
            Daraz
          </Link>
          <div className="flex items-center">
            <input
              type="text"
              value={inputValue}
              placeholder="Search in Daraz"
              onChange={handleChange}
              className="border border-gray-300 rounded-l-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
            />
            <Link
              to= {inputValue ? `/search/${inputValue}` : ``}
              className="bg-blue-500 text-white rounded-r-md px-4 py-2 hover:bg-blue-600"
              onClick={checkVal}
            >
              Search
            </Link>
          </div>
          <div className="space-x-4">
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {" "}
              Sign Up
            </Link>
            <Link
              to={"/cart"}
              className="inline-flex items-center bg-black border-0 py-2 px-4 text-white focus:outline-none hover:bg-white hover:text-black rounded text-base mt-4 md:mt-0"
            >
              Go To Cart
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
