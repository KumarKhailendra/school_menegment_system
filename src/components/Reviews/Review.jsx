import React from 'react'

const Review = ({ review }) => {
    return (
      <div className="review">
        <h3>{review.author}</h3>
        <div className="rating">Rating: {review.rating}/5</div>
        <p>{review.comment}</p>
      </div>
    );
  };

export default Review
