const express = require('express');
const UserService = require('../users/UsersService');
const UserRouter = express.Router();
const bodyParser = express.json();

UserRouter
  .route('/api/users')
  .get((req, res, next) => {
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
    })
  })
  .post(bodyParser, (req, res, next) => {
    const knexInstance = req.app.get('db')
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password

    }
    UserService.createUser(knexInstance, newUser)
      .then(newUser => res.status(201).send(newUser))
      .catch(next)
  })

UserRouter
  .route('/api/users/:id')
  .get((req, res, next) => {
    const { id } = req.params;
    const knexInstance = req.app.get('db');
    UserService.getUsersById(knexInstance, id)
      .then(user => {
        if(!user) {
          res
            .status(404)
            .json({
              error: {
                message: `User with ${id} cannot be found`
              }
            })
        }
        res.json(user)
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    const { id } = req.params;
    const knexInstance = req.app.get('db');
    UserService.deleteUser(knexInstance, id)
      .then((user) => {
        res
          .status(204)
          .end();
      })
      .catch(next);
  })
  .patch((req, res, next) => {
    const { id } = req.params;
    const knexInstance = req.app.get('db');
    const newFields = {
      company: req.body.company,
      website: req.body.website,
      location: req.body.location,
      bio: req.body.bio,
      twitter_url: req.body.twitter_url,
      youtube_url: req.body.youtube_url,
      facebook_url: req.body.facebook_url,
      linkedin_url: req.body.linkedin_url,
      instagram_url: req.body.instagram_url,
    }
    UserService.updateUser(knexInstance, id, newFields)
      .then((user) => {
        res
          .status(204)
          .json(user);
      })
      .catch(next);
  })

module.exports = UserRouter;
