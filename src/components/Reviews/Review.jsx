import React from 'react';
import './Reviews.css';

const Review = ({ review }) => {
  const { author, rating, comment } = review;

  return (
    <div className="review">
      <div className="author">{author}</div>
      <div className="rating">
        {'⭐'.repeat(rating)}<span>({rating})</span>
      </div>
      <div className="comment">{comment}</div>
    </div>
  );
};

export default Review;
