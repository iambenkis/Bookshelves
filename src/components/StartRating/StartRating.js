import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = (props) => {
  const { star, id } = props;
  return (
    <div>
      {[...Array(5)].map((s, i) => (
        <FaStar
          className="star"
          color={star <= i + 1 ? '#777' : '#ffc107'}
          key={id}
        />
      ))}
    </div>
  );
};

export default StarRating;
