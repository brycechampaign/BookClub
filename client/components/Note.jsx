import React from 'react';
import { deleteNote } from '../api';
import EditNote from './EditNoteForm';

const Note = ({ id, page, content }) => {
  return (
    <div className="note card">
      <p>{content}</p>
      <p>Page: {page === undefined ? 'N/A' : page}</p>
      <button onClick={() => deleteNote(id)}>Delete</button>
      <EditNote id={id} page={page} content={content} />
    </div>
  );
};

export default Note;
