const express = require('express');
const router = express.Router();

// User Registration Route
router.post('/register', (req, res) => {
  // Sample code for user registration
});

// User Login Route
router.post('/login', (req, res) => {
  // Sample code for user login
});

// User Profile Route
router.get('/profile', (req, res) => {
  // Sample code for user profile
  console.log("profile");
});

module.exports = router;
