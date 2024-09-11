import React from 'react';
import Review from './review';

const classReviews = ({ reviews }) => {
  return (
    <div className="class-reviews">
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
};

export default classReviews;
