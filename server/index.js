const express = require('express');
const path = require('path');
const app = express();
const { PORT } = process.env; // access PORT environment variable (check docker-compose.yml to change)

// Serving static files
app.use(express.static(path.join(__dirname, '../dist')));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
