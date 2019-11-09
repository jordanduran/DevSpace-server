const express = require('express');
const PostService = require('../post/PostService');
const PostRouter = express.Router();
const bodyParser = express.json();

PostRouter.route('/api/post')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db');
    PostService.getAllPosts(knexInstance)
      .then(post => {
        if (!post) {
          return res.status(400).json({ error: 'Did not find post' });
        }
        return res.json(post);
      })
      .catch(err => {
        next(err);
      });
  })
  .post(bodyParser, (req, res, next) => {
    const knexInstance = req.app.get('db');
    const newPost = {
      users: req.body.users,
      post: req.body.post,
      avatar: req.body.avatar
    };
    console.log(newPost);
    PostService.createPost(knexInstance, newPost)
      .then(newPost => res.status(201).json(newPost))
      .catch(next);
  });

PostRouter.route('/api/post/:userid').get((req, res, next) => {
  const { userid } = req.params;
  const knexInstance = req.app.get('db');
  PostService.getPostByUserId(knexInstance, userid)
    .then(post => {
      if (!post) {
        res.status(404).json({
          error: {
            message: `Post cannot be found`
          }
        });
      }
      res.json(post);
    })
    .catch(next);
});

PostRouter.route('/api/post/:id').delete((req, res, next) => {
  const { id } = req.params;
  const knexInstance = req.app.get('db');
  PostService.deletePost(knexInstance, id)
    .then(post => {
      res.status(204).end();
    })
    .catch(next);
});

module.exports = PostRouter;
