import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Header = () => {
  const [categories, setCategories] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const sessionDetail = sessionStorage.getItem("currentloggedin");
  const userData = sessionStorage.getItem("userData");

  useEffect(() => {
    fetch("/categories.json")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);
  const categoryExists = categories.some(
    (category) => category.title === inputValue
  );

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const checkVal = () => {
    if (!inputValue) {
      toast.info("Please Enter the Valid CategoryId!", {
        position: "bottom-right",
      });
    } else if (!categoryExists) {
      toast.error("Wrong: Please enter the correct CategoryId!", {
        position: "bottom-right",
      });
    } else {
      navigate(`/search/${inputValue}`);
    }
  };
  const handleLogout = () => {
    sessionStorage.setItem("currentloggedin", "");
    navigate("/login");
  };

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
            <button
              className="bg-blue-500 text-white rounded-r-md px-4 py-2 hover:bg-blue-600"
              onClick={checkVal}
            >
              Search
            </button>
          </div>
          <div className="space-x-4">
            {!sessionDetail && userData && (
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            )}
            {!userData && (
              <Link
                to="/signup"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                {" "}
                Sign Up
              </Link>
            )}
            {sessionDetail && (
              <button
                onClick={handleLogout}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                {" "}
                Logout
              </button>
            )}
            {sessionDetail && (
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
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
