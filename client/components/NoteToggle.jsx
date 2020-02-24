import React, { useState } from 'react';
import NoteList from './NoteList';

const NoteToggle = ({ bookId }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <button onClick={() => setIsExpanded(true)}>Show Notes</button>
      {isExpanded ? <NoteList bookId={bookId} /> : null}
    </>
  );
};

export default NoteToggle;
