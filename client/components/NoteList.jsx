import React, { useEffect } from 'react';
import Note from './Note';

const NoteList = ({ notes, updateNotes }) => {
  useEffect(() => {
    updateNotes();
  }, []);

  return (
    <div className="note-list">
      {notes.map(note => (
        <Note
          id={note.id}
          page={note.page}
          content={note.content}
          key={note.id}
          updateNotes={updateNotes}
        />
      ))}
    </div>
  );
};

export default NoteList;
