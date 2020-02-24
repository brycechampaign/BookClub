import React, { useState, useEffect } from 'react';
import { getBookNotes } from '../api';
import Note from './Note';

const NoteList = ({ bookId }) => {
  const [notes, setNotes] = useState([]);

  const updateNotes = () => {
    getBookNotes(bookId).then(newNotes => setNotes(newNotes));
  };

  useEffect(() => {
    updateNotes();
  });

  return (
    <div className="note-list">
      {notes.map(note => (
        <Note page={note.page} content={note.content} key={note.id} />
      ))}
    </div>
  );
};

export default NoteList;
