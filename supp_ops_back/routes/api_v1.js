const config = require('../config/envConfig');

const express = require('express');
const router = express.Router();

// base route
router.get('/', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Welcome to the SuppOps backend!' });
});

// route to expose health/status
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'SuppOps API is running smoothly.', environment: config.env, uptime: process.uptime(), timestamp: new Date().toISOString() });
});

module.exports = router;