const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const todoRoutes = require('./routes/todoRoutes');
const errorMiddleware = require('../src/middleware/errorHandler');

dotenv.config();  // Load environment variables

const app = express();

// Middleware
app.use(express.json());  // Parse incoming JSON requests
app.use(morgan('dev'));  // Log HTTP requests

// Routes
app.use('/api/todos', todoRoutes);

// Error handling middleware
app.use(errorMiddleware);

module.exports = app;
