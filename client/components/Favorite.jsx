import React from 'react';
import { deleteBook } from '../api';

const Favorite = ({
  title,
  author,
  genre,
  description,
  updateFavorites,
  id
}) => {
  const deleteFavorite = () => {
    deleteBook(id).then(() => updateFavorites());
  };

  return (
    <div className="favorite card">
      <h3>{title}</h3>
      <h4>{description}</h4>
      <h5>{author}</h5>
      <h5>{genre}</h5>
      <button onClick={deleteFavorite}>Delete</button>
    </div>
  );
};

export default Favorite;
