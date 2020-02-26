import React from 'react';
import { deleteNote } from '../api';
import EditNote from './EditNoteForm';

// Renders an individual note component
const Note = ({ id, page, content, updateNotes }) => {
  console.log(page);

  const handleDelete = () => {
    deleteNote(id).then(() => updateNotes());
  };

  return (
    <div className="note card">
      <p>{content}</p>

      {/* If there is no page value, render N/A*/}
      <p>Page: {page === null ? 'N/A' : page}</p>

      {/* Deletes the note when clicked*/}
      <button onClick={handleDelete}>Delete</button>

      {/* Render button which, when clicked, reveals a modal with a form
      for editing the note*/}
      <EditNote
        id={id}
        page={page}
        content={content}
        updateNotes={updateNotes}
      />
    </div>
  );
};

export default Note;
