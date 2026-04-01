const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.send('Welcome to the SuppOps API!');
});

module.exports = router;