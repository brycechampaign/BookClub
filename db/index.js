const { Pool } = require('pg');

// Create a Pool instance
// Uses PG environment variables found in docker-compose file
const db = new Pool();

module.exports = db;
