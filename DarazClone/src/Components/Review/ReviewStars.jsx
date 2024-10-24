// src/components/ReviewStars.jsx
import React from "react";

const ReviewStars = ({ rating, onChangeRating }) => {
  const totalStars = 5;

  const handleStarClick = (index) => {
    onChangeRating(index + 1); // Update rating on star click
  };

  const stars = Array.from({ length: totalStars }, (_, index) =>
    index < rating ? "★" : "☆"
  );

  return (
    <div className="text-yellow-500">
      {stars.map((star, index) => (
        <span key={index} onClick={() => handleStarClick(index)} className="text-xl cursor-pointer">
          {star}
        </span>
      ))}
      
    </div>
  );
};

export default ReviewStars;
