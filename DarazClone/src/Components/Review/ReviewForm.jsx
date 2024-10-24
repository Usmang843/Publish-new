// src/components/ReviewForm.jsx
import React, { useState } from "react";
import ReviewStars from "./ReviewStars";

const ReviewForm = ({ onAddReview }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddReview({ text, rating });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 p-2">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your review..."
        className="w-full p-2 border border-gray-300 rounded"
        rows="4"
        required
      />
      <div className="mt-2">
        <label className="mr-2">Rating:</label>
        <ReviewStars rating={rating} onChangeRating={setRating} />
      </div>
      <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded">
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
