import React, { useState } from "react";

const Dropdown = () => {
  const [isMultiDropdownOpen, setMultiDropdownOpen] = useState(false);

  const handleMouseOver = () => {
    setMultiDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setMultiDropdownOpen(false);
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseLeave={handleMouseLeave} // Close dropdown on mouse leave
    >
      <button
        onMouseOver={handleMouseOver} // Open dropdown on mouse over
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
      >
        Dropdown button
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
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
