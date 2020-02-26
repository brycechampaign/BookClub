import React, { useState } from 'react';
import Modal from 'react-modal';
import { addFavorite } from '../api';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '60%'
  }
};

// Binding Modal to root element
Modal.setAppElement('#root');

const AddBookForm = ({ user, updateFavorites }) => {
  // Modal is initially closed/hidden
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Add favorite book and close the modal
    addFavorite(user, title, author, genre, description)
      .then(() => updateFavorites())
      .then(() => closeModal());
  };

  return (
    <div>
      {/* Click button to open the Add Book modal */}
      <button onClick={openModal}>Add Book</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add a Favorite Book"
      >
        <div className="modal-header">Add a Favorite Book</div>
        <form onSubmit={e => handleSubmit(e)} className="book-form">
          <div className="form-container" style={{ height: '100%' }}>
            <div className="label-input-pair">
              <label htmlFor="title">Title</label>
              <input
                name="title"
                id="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>

            <div className="label-input-pair">
              <label htmlFor="author">Author</label>
              <input
                name="author"
                id="author"
                value={author}
                onChange={e => setAuthor(e.target.value)}
              />
            </div>

            <div className="label-input-pair">
              <label htmlFor="genre">Genre</label>
              <input
                name="genre"
                id="genre"
                value={genre}
                onChange={e => setGenre(e.target.value)}
              />
            </div>

            <div className="label-input-pair">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                rows="4"
                cols="50"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>

            <div className="button-group">
              <input type="submit" value="Add" />
              <button onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddBookForm;
