// src/components/ReviewsList.jsx
import React from 'react';
import Review from './Review';

const ReviewsList = ({ reviews }) => {
 
  return (
    <div className="mt-4">
      {reviews.map((review, index) => (
        <Review
          key={index}
          name={review.name}
          text={review.text}
          rating={review.rating}
        />
      ))}
    </div>
  );
};

export default ReviewsList;
