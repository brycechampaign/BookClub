const { Pool } = require('pg');

// Get user, password, and host values for database from environment variables configured in docker-compose
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const db = new Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD
});

module.exports = db;
