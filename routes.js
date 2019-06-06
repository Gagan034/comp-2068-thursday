const express = require('express');
const app = express();

// Import our Page Routes
const pageRoutes = require('./routes/pages');

// Register our Page Routes with our app
app.use('/', pageRoutes);

// Export our changes
module.exports = app;