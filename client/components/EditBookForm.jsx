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
    transform: 'translate(-50%, -50%)'
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
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
    editBookProperty('title', id, newTitle).then(() => updateFavorites());
  };

  const handleAuthorSave = e => {
    e.preventDefault();
    editBookProperty('author', id, newAuthor).then(() => updateFavorites());
  };

  const handleGenreSave = e => {
    e.preventDefault();
    editBookProperty('genre', id, newGenre).then(() => updateFavorites());
  };

  const handleDescriptionSave = e => {
    e.preventDefault();
    editBookProperty('description', id, newDescription).then(() =>
      updateFavorites()
    );
  };

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
        <div>Edit Book</div>
        <form>
          <div className="form-container">
            <label htmlFor="title">Title</label>
            <input
              name="title"
              id="title"
              value={newTitle}
              onChange={e => setTitle(e.target.value)}
            />
            <button onClick={e => handleTitleSave(e)}>Save</button>

            <label htmlFor="author">Author</label>
            <input
              name="author"
              id="author"
              value={newAuthor}
              onChange={e => setAuthor(e.target.value)}
            />
            <button onClick={e => handleAuthorSave(e)}>Save</button>

            <label htmlFor="genre">Genre</label>
            <input
              name="genre"
              id="genre"
              value={newGenre}
              onChange={e => setGenre(e.target.value)}
            />
            <button onClick={e => handleGenreSave(e)}>Save</button>

            <label htmlFor="description">Description</label>
            <input
              name="description"
              id="description"
              type="textarea"
              value={newDescription}
              onChange={e => setDescription(e.target.value)}
            />
            <button onClick={e => handleDescriptionSave(e)}>Save</button>
            <button onClick={closeModal}>Done</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditBookForm;
