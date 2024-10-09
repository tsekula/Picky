require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000; // Use PORT from environment variables

// Middleware to parse JSON requests
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
