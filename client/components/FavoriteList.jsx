import React from 'react';
import Favorite from './Favorite';
import AddBookForm from './AddBookForm';

// Displays a list of the current user's favorite books
const FavoriteList = ({ favorites, updateFavorites, user }) => {
  return (
    <div id="favorite-list" className="card">
      <h2>Favorite Books</h2>
      <div id="favorites-container">
        {favorites.map(book => {
          const { id, title, author, genre, description } = book;
          return (
            <Favorite
              key={id}
              id={id}
              title={title}
              author={author}
              genre={genre}
              description={description}
              updateFavorites={updateFavorites}
            />
          );
        })}
      </div>
      <AddBookForm user={user} updateFavorites={updateFavorites} />
    </div>
  );
};

export default FavoriteList;
