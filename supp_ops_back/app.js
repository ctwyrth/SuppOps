// create the server
const express = require('express');
const app = express();

// add JSON parsing middleware
app.use(express.json());

// integrate cors-origin resource sharing (CORS) middleware
const cors = require('cors');
app.use(cors());

// integrate external route files & mount routes
const baseRoutes = require('./routes/api_v1');
app.use('/api/v1', baseRoutes);

// adding error handling middleware
const errorHandler = require('./middleware/errorHandling');
app.use(errorHandler);

console.log("[APP] SuppOps Express server initialized successfully with routes and middleware");

// export the server for use in server.js
module.exports = app;
