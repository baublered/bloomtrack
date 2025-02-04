const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Assuming you have a User model

// GET user data
router.get('/', async (req, res) => {
  try {
    const user = await User.findById(req.user.id); // Assuming user ID is stored in req.user
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user data' });
  }
});

module.exports = router;
