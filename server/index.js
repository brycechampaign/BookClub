const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes');
const app = express();
const { PORT } = process.env; // Access PORT environment variable (check docker-compose.yml to change)

// Serving static files
app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());

// Configure router as middleware for handling all endpoints
app.use('/', router);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
