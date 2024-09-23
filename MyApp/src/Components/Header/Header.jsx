import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link to='/' className="text-xl font-bold"> Daraz</Link>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search in Daraz"
              className="border border-gray-300 rounded-l-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
            />
            <Link to='/search' className="bg-blue-500 text-white rounded-r-md px-4 py-2 hover:bg-blue-600">Search</Link>
          </div>
          <div className="space-x-4">
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
            <Link  to='/signup' className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> Sign Up</Link>
            
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;