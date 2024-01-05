

const express = require('express');
const router = express.Router();
const database = require('../database'); // Update the path accordingly

router.post('/register', async (req, res) => {
  try {
    const user = req.body;
    const result = await database.registerUser(user);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    console.log("req body : "+ req.body);
    const { loginEmail, loginPassword } = req.body;
    console.log(loginEmail + loginPassword);
    const user = await database.loginUser(loginEmail, loginPassword);
    if (user) {
      // User logged in successfully
      res.status(200).json({ message: 'User logged in successfully', user: user });
    } else {
      // Invalid credentials
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/getUser', async (req, res) => {
  try {
    const { userEmail } = req.query; // Change this line
    console.log(userEmail);
    const userData = await database.getSingleUser(userEmail);

    if (userData) {
      res.send(userData[0]);
    } else {
      // User not found
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
