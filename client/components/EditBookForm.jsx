import React, { useState } from 'react';
import Modal from 'react-modal';
import { editBookProperty } from '../api';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    height: '60%'
  }
};

// Binding Modal to root element
Modal.setAppElement('#root');

const EditBookForm = ({
  id,
  title,
  author,
  genre,
  description,
  updateFavorites
}) => {
  // Modal is initially closed/hidden
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Set metadata state values to current values in database
  const [newTitle, setTitle] = useState(title);
  const [newAuthor, setAuthor] = useState(author);
  const [newGenre, setGenre] = useState(genre);
  const [newDescription, setDescription] = useState(description);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleTitleSave = e => {
    e.preventDefault();

    // Make request to server to edit book title
    editBookProperty('title', id, newTitle).then(() => updateFavorites());
  };

  const handleAuthorSave = e => {
    e.preventDefault();

    // Make a request to server to edit book author
    editBookProperty('author', id, newAuthor).then(() => updateFavorites());
  };

  const handleGenreSave = e => {
    e.preventDefault();

    // Make a request to server to edit book genre
    editBookProperty('genre', id, newGenre).then(() => updateFavorites());
  };

  const handleDescriptionSave = e => {
    e.preventDefault();

    // Make a request to server to edit book description
    editBookProperty('description', id, newDescription).then(() =>
      updateFavorites()
    );
  };

  // Each book metadata field has an input for modifying the current field value
  // and a button for saving the new value to the database
  return (
    <div>
      <button onClick={openModal} style={{ width: '100%' }}>
        Edit Book
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edit a Favorite Book"
      >
        <div>
          <span className="modal-header">Edit Book</span>
          <form>
            <div className="form-container">
              <div className="label-input-pair">
                <label htmlFor="title">Title</label>
                <input
                  name="title"
                  id="title"
                  value={newTitle}
                  onChange={e => setTitle(e.target.value)}
                />
                <button onClick={e => handleTitleSave(e)}>Save</button>
              </div>

              <div className="label-input-pair">
                <label htmlFor="author">Author</label>
                <input
                  name="author"
                  id="author"
                  value={newAuthor}
                  onChange={e => setAuthor(e.target.value)}
                />
                <button onClick={e => handleAuthorSave(e)}>Save</button>
              </div>

              <div className="label-input-pair">
                <label htmlFor="genre">Genre</label>
                <input
                  name="genre"
                  id="genre"
                  value={newGenre}
                  onChange={e => setGenre(e.target.value)}
                />
                <button onClick={e => handleGenreSave(e)}>Save</button>
              </div>

              <div className="label-input-pair">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  rows="4"
                  cols="50"
                  value={newDescription}
                  onChange={e => setDescription(e.target.value)}
                />
                <button onClick={e => handleDescriptionSave(e)}>Save</button>
              </div>

              {/* Done button for closing modal, does not submit the form */}
              <button onClick={closeModal}>Done</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EditBookForm;
