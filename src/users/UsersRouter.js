const express = require('express');
const UserService = require('../users/UsersService');
const UserRouter = express.Router();

UserRouter.route('/api/users').get((req, res, next) => {
  const knexInstance = req.app.get('db');
  UserService.getAllUsers(knexInstance)
    .then(users => {
      if (!users) {
        return res.status(400).json({ error: 'Did not find users' });
      }
      return res.json(users);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = UserRouter;
