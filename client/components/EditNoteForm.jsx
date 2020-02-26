import React, { useState } from 'react';
import Modal from 'react-modal';
import { editNote } from '../api';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

// Binding Modal to root element
Modal.setAppElement('#root');

const EditNoteForm = ({ id, page, content, updateNotes }) => {
  // Modal is initially closed/hidden
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Note field state set to current values in database
  const [newContent, setNewContent] = useState(content);
  const [newPage, setNewPage] = useState(page);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Send request to server to edit the note entry
    // then close the modal
    editNote(id, newPage, newContent)
      .then(updateNotes)
      .then(() => closeModal());
  };

  return (
    <div>
      <button onClick={openModal} style={{ width: '100%' }}>
        Edit Note
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edit a Favorite Book"
      >
        <div>Add Note</div>
        {/* Render form for editing note in the modal*/}
        <form onSubmit={e => handleSubmit(e)}>
          <div className="form-container">
            <label htmlFor="page">Page Number (Optional)</label>
            <input
              type="number"
              name="page"
              id="page"
              value={newPage}
              onChange={e => setNewPage(e.target.value)}
            />

            <label htmlFor="content">Content</label>
            <input
              type="textArea"
              name="content"
              id="content"
              value={newContent}
              onChange={e => setNewContent(e.target.value)}
            />

            <input type="submit" value="Save" />
            <button onClick={() => setModalIsOpen(false)}>Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditNoteForm;
