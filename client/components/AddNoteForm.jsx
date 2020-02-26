import React, { useState } from 'react';
import Modal from 'react-modal';
import { addNote } from '../api';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '30%'
  }
};

// Binding Modal to root element
Modal.setAppElement('#root');

const AddNoteForm = ({ bookId, updateNotes }) => {
  // Modal is initially closed
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [content, setContent] = useState('');
  const [page, setPage] = useState('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Send request to API to create a new note and close the modal upon success
    addNote(bookId, content, page).then(() => setModalIsOpen(false));
  };

  return (
    <div>
      <button onClick={openModal} style={{ width: '100%' }}>
        Add Note
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add a Note"
      >
        <div>
          <span className="modal-header">Add Note</span>
          <form onSubmit={e => handleSubmit(e)}>
            <div className="form-container" id="edit-note-container">
              <div className="label-input-pair">
                <label htmlFor="page">Page Number (Optional)</label>
                <input
                  type="number"
                  name="page"
                  id="page"
                  value={page}
                  onChange={e => setPage(e.target.value)}
                />
              </div>
              <div className="label-input-pair">
                <label htmlFor="page">Content</label>
                <textarea
                  name="content"
                  rows="4"
                  cols="50"
                  id="content"
                  value={content}
                  onChange={e => setContent(e.target.value)}
                />
              </div>
              <div className="button-group">
                <input type="submit" value="Add Note" />
                <button onClick={() => setModalIsOpen(false)}>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddNoteForm;
