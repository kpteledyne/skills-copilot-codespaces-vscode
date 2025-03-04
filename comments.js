// Create web server with express
const express = require('express');
const app = express();
const path = require('path');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Start server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});