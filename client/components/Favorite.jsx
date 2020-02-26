import React, { useState } from 'react';
import { deleteBook } from '../api';
import EditBookForm from './EditBookForm';
import NoteToggle from './NoteToggle';
import AddNoteForm from './AddNoteForm';
import { getBookNotes } from '../api';

const Favorite = ({
  title,
  author,
  genre,
  description,
  updateFavorites,
  id
}) => {
  const [notes, setNotes] = useState([]);

  const updateNotes = () => {
    getBookNotes(id).then(newNotes => setNotes(newNotes));
  };

  // Sends a request to server to delete the note
  const deleteFavorite = () => {
    deleteBook(id).then(() => updateFavorites());
  };

  return (
    <div className="favorite card">
      <h3>{title}</h3>
      <h4>{description}</h4>
      <h5>{author}</h5>
      <h5>{genre}</h5>

      {/* button for deleting note */}
      <button onClick={deleteFavorite}>Delete</button>

      {/* Render button which, when clicked, reveals a modal with a form
      for editing the book*/}
      <EditBookForm
        id={id}
        title={title}
        author={author}
        genre={genre}
        description={description}
        updateFavorites={updateFavorites}
      />

      {/* Render button which, when clicked, reveals a modal with a form
      for adding a note*/}
      <AddNoteForm updateNotes={updateNotes} bookId={id} />

      {/* Button for showing/hiding the list of notes assocaited with the book */}
      <NoteToggle notes={notes} updateNotes={updateNotes} />
    </div>
  );
};

export default Favorite;
