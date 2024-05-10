import React from 'react';
import './Reviews.css'; 
import Review from './Review';


const reviews = [
  {
    id: 1,
    author: 'John Doe',
    rating: 4,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    author: 'Jane Smith',
    rating: 5,
    comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  // Add more reviews as needed
];

const ReviewsUser = () => {
  return (
    <div className="reviews">
      <h2>Customer Reviews</h2>
      {reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};


export default ReviewsUser;
