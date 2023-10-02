const express = require('express');
const router = express.Router();
const passport = require('passport');
const usersController = require('../controllers/usersController');

// Register User
router.post('/register', usersController.registerUser);

// Authenticate User
router.post('/authenticate', usersController.authenticateUser);

// Get User Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), usersController.getUserProfile);

module.exports = router;