const express = require('express');
const router = express.Router();
const UserService = require('../users/UsersService');

// Route paths are prepended with /auth

router.get('/', (req, res) => {
  res.json({
    message: 'Locked route'
  });
});

function validUser(user) {
  const validEmail = typeof user.email == 'string' && user.email.trim() != '';
  const validPassword =
    typeof user.password == 'string' &&
    user.password.trim() != '' &&
    user.password.trim().length >= 6;

  return validEmail && validPassword;
}

router.post('/signup', (req, res, next) => {
  const db = req.app.get('db');
  const { email } = req.body;
  if (validUser(req.body)) {
    UserService.getUsersByEmail(db, email).then(user => {
      console.log('user', user);
      // If user not found
      if (!user) {
        // This is a unique email
        res.json({
          message: 'CHECKMARK'
        });
      } else {
        // Email in use!
        next(new Error('Email in use'));
      }
    });
  } else {
    next(new Error('Invalid user'));
  }
});

module.exports = router;
