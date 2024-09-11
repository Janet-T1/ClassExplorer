import React from 'react';
import { FaLaptop } from 'react-icons/fa';

const Review = ({ review }) => {
  return (
    <div className="review border p-4 mb-4 rounded-lg shadow-sm">
      <div className="flex items-center mb-2">
        {review.isOnline && (
          <div className="flex items-center">
            <FaLaptop className="mr-2" />
            <span>Online Course</span>
          </div>
        )}
        <span className="ml-4 font-bold">Grade: {review.grade}</span>
        <span className="ml-auto text-gray-500">
          {review.username === 'Anonymous' ? 'Anonymous' : review.username}
        </span>
      </div>

      <div className="flex items-center mb-2">
        <span className="mr-4">Usefulness: {review.usefulness}/5</span>
        <span className="mr-4">Quality: {review.quality}/5</span>
        <span className="ml-auto">Professor: {review.professor}</span>
      </div>

      <div className="mb-2">
        {review.tags.map((tag, index) => (
          <span key={index} className="tag bg-blue-200 text-blue-800 px-2 py-1 rounded-full mr-2">
            {tag}
          </span>
        ))}
      </div>

      <p className="review-text">{review.reviewText}</p>
    </div>
  );
};

export default Review;
