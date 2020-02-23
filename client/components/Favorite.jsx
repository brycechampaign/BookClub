import React from 'react';

const Favorite = ({ title, author, genre, description }) => {
  return (
    <div className="favorite card">
      <h3>{title}</h3>
      <h4>{description}</h4>
      <h5>{author}</h5>
      <h5>{genre}</h5>
    </div>
  );
};

export default Favorite;
