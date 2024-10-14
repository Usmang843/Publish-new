import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <>
       <div className="fixed top-16 left-0 w-full bg-gray-300 h-2 z-50">
      <div
        className="bg-blue-500 h-full"
        style={{ width: `${progress}%` }}
      />
    </div>
    </>
  );
};

export default ProgressBar;
