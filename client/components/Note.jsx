import React from 'react';

const Note = ({ page, content }) => {
  return (
    <div className="note card">
      <p>{content}</p>
      <p>Page: {page === undefined ? 'N/A' : page}</p>
    </div>
  );
};

export default Note;
