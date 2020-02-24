import React from 'react';
import { deleteBook } from '../api';
import EditBookForm from './EditBookForm';
import NoteToggle from './NoteToggle';

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
      <EditBookForm
        id={id}
        title={title}
        author={author}
        genre={genre}
        description={description}
        updateFavorites={updateFavorites}
      />
      <NoteToggle bookId={id} />
    </div>
  );
};

export default Favorite;
