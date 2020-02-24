import React from 'react';
import { deleteNote } from '../api';

const Note = ({ id, page, content }) => {
  return (
    <div className="note card">
      <p>{content}</p>
      <p>Page: {page === undefined ? 'N/A' : page}</p>
      <button onClick={() => deleteNote(id)}>Delete</button>
    </div>
  );
};

export default Note;
