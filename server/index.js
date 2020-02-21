const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serving static files
app.use(express.static(path.join(__dirname, '../dist')));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));