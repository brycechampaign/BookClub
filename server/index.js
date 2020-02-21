const express = require('express');
const path = require('path');
const app = express();
const { PORT } = process.env; // access PORT environment variable (check docker-compose.yml to change)
const router = require('./routes');

// Serving static files
app.use(express.static(path.join(__dirname, '../dist')));

// Configure router as middleware for handling all endpoints
app.use('/', router);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
