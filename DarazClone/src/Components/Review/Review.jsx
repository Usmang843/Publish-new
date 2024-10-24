// src/components/Review.jsx
import React from 'react';
import ReviewStars from './ReviewStars';

const Review = ({ name, text, rating }) => {
  return (
    <div className="p-4 border-b border-gray-200">
      <h4 className="font-semibold">{name}</h4>
      <ReviewStars rating={rating} />
      <p className="mt-2 text-gray-600">{text}</p>
    </div>
  );
};

export default Review;
