import React from 'react';
import Favorite from './Favorite';

// Displays a list of the current user's favorite books
const FavoriteList = ({ favorites }) => {
  return (
    <div id="favorite-list" className="card">
      <h2>Favorite Books</h2>
      <div id="favorites-container">
        {favorites.map(book => {
          const { id, title, author, genre, description } = book;
          return (
            <Favorite
              key={id}
              title={title}
              author={author}
              genre={genre}
              description={description}
            />
          );
        })}
      </div>
      <button>Add Book</button>
    </div>
  );
};

export default FavoriteList;
