const express = require('express');
const router = express.Router();
const { signup, login } = require('../utils/userFileAuth');

// Signup route
router.post('/signup', (req, res) => {
  const { email, password, firstName, lastName, isAdmin } = req.body;
  try {
    const result = signup({ email, password, firstName, lastName, isAdmin });
    if (!result.success) {
      return res.status(422).json({ errors: [result.message] });
    }
    return res.status(201).json({ user: result.user });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

// Login route
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  try {
    const result = login({ email, password });
    if (!result.success) {
      return res.status(401).json({ errors: [result.message] });
    }
    const user = { ...result.user };
    delete user.password;
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

module.exports = router;
