const db = require('../db/index');

module.exports.createUser = async (username, password) => {
  const client = await db.connect();

  return client
    .query('INSERT INTO users (username, password) VALUES ($1, $2)', [
      username,
      password
    ])
    .then(() => client.release())
    .catch(err => {
      client.release();
      throw new Error(err);
    });
};

module.exports.getUserByUsername = async username => {
  const client = await db.connect();

  return client
    .query('SELECT * FROM users WHERE username = $1', [username])
    .then(result => {
      client.release();
      return result.rows[0];
    })
    .catch(err => {
      client.release();
      throw new Error(err);
    });
};

module.exports.createBook = async (
  userId,
  title,
  author,
  genre,
  description
) => {
  const client = await db.connect();
  const query =
    'INSERT INTO books (user_id, title, author, genre, description) VALUES ($1, $2, $3, $4, $5)';

  return client
    .query(query, [userId, title, author, genre, description])
    .then(() => client.release())
    .catch(err => {
      client.release();
      throw new Error(err);
    });
};

module.exports.getBooksByUserId = async userId => {
  const client = await db.connect();
  const query = 'SELECT * FROM books WHERE user_id = $1';

  return client
    .query(query, [userId])
    .then(results => {
      client.release();
      return results.rows;
    })
    .catch(err => {
      client.release();
      throw new Error(err);
    });
};

module.exports.removeBookById = async id => {
  const client = await db.connect();
  const notesQuery = client.query('DELETE FROM notes WHERE book_id = $1', [id]);
  const booksQuery = client.query('DELETE FROM books WHERE id = $1', [id]);

  return Promise.all([notesQuery, booksQuery])
    .then(() => {
      client.release();
    })
    .catch(err => {
      client.release();
      throw new Error(err);
    });
};

module.exports.updateBookColumn = async (id, column, newValue) => {
  const client = await db.connect();
  const query = `UPDATE books SET ${column} = $1 WHERE id = $2 RETURNING id`;

  return client
    .query(query, [newValue, id])
    .then(updatedIds => {
      // Throw an error if no book entry associated
      // with the id argument is found
      if (updatedIds.rows.length === 0) {
        throw new Error('Invalid book id');
      }

      client.release();
    })
    .catch(err => {
      client.release();
      throw new Error(err);
    });
};

module.exports.getBookNotes = async bookId => {
  const client = await db.connect();
  const query = 'SELECT * FROM notes WHERE book_id = $1';

  return client
    .query(query, [bookId])
    .then(notes => {
      client.release();
      return notes.rows;
    })
    .catch(err => {
      client.release();
      throw new Error(err);
    });
};

module.exports.createNote = async (bookId, page, content) => {
  const client = await db.connect();
  const query =
    'INSERT INTO notes (book_id, page, content) VALUES ($1, $2, $3)';

  return client.query(query, [bookId, page, content]);
};

module.exports.updateNoteColumn = async (id, column, newValue) => {
  const client = await db.connect();
  const query = `UPDATE notes SET ${column} = $1 WHERE id = $2 RETURNING id`;

  return client
    .query(query, [newValue, id])
    .then(updatedIds => {
      // Throw an error if no book entry associated
      // with the id argument is found
      if (updatedIds.rows.length === 0) {
        throw new Error('Invalid book id');
      }

      client.release();
    })
    .catch(err => {
      client.release();
      throw new Error(err);
    });
};

module.exports.deleteNoteById = async id => {
  const client = await db.connect();
  const query = 'DELETE FROM notes WHERE id = $1';

  return client
    .query(query, [id])
    .then(() => {
      client.release();
    })
    .catch(err => {
      client.release();
      throw new Error(err);
    });
};
