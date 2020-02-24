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
    transform: 'translate(-50%, -50%)'
  }
};

// Binding Modal to root element
Modal.setAppElement('#root');

const AddNoteForm = ({ bookId, updateNotes }) => {
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
        contentLabel="Edit a Favorite Book"
      >
        <div>Add Note</div>
        <form onSubmit={e => handleSubmit(e)}>
          <div className="form-container">
            <label htmlFor="page">Page Number (Optional)</label>
            <input
              type="number"
              name="page"
              id="page"
              value={page}
              onChange={e => setPage(e.target.value)}
            />

            <label htmlFor="page">Content</label>
            <input
              type="textArea"
              name="content"
              id="content"
              value={content}
              onChange={e => setContent(e.target.value)}
            />

            <input type="submit" value="Add Note" />
            <button onClick={() => setModalIsOpen(false)}>Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddNoteForm;
