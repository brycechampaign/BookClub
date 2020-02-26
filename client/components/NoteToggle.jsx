import React, { useState } from 'react';
import NoteList from './NoteList';

// Button for showing/hiding note list for a favorite book
const NoteToggle = ({ notes, updateNotes }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {/* Change button label depending on if the list is hidden or rendered */}
        {isExpanded ? 'Hide Notes' : 'Show Notes'}
      </button>

      {/* If isExpanded is true, the list of notes is rendered
      Otherwise the list is hidden*/}
      {isExpanded ? <NoteList notes={notes} updateNotes={updateNotes} /> : null}
    </>
  );
};

export default NoteToggle;
