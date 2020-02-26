import React from 'react';
import Favorite from './Favorite';
import AddBookForm from './AddBookForm';

// Displays a list of the current user's favorite books
const FavoriteList = ({ favorites, updateFavorites, user }) => {
  return (
    <div id="favorite-list">
      <h2>Favorite Books</h2>
      <div id="favorites-container">
        {/* Render the list of books favorited by the user */}
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

      {/* Render button which, when clicked, reveals a modal with a form
      for adding a favorite book*/}
      <AddBookForm user={user} updateFavorites={updateFavorites} />
    </div>
  );
};

export default FavoriteList;
