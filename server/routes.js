const express = require('express');
const PostController = require('./controllers/posts');
const UserController = require('./controllers/users');

module.exports = function(app) {
  const apiRoutes = express.Router();

  // setting endpoint for apiRoutes
  app.use('/', apiRoutes);

  apiRoutes.post('/auth/signup', UserController.signup);
  apiRoutes.post('/auth/login', UserController.login);

  // set post routes
  apiRoutes.get('/posts', PostController.getPosts);
  apiRoutes.post('/posts', PostController.addPost);
  apiRoutes.put('/posts/:post_id', PostController.updatePost);
  apiRoutes.delete('/posts/:post_id', PostController.deletePost);
  apiRoutes.get('/posts/:post_id', PostController.getPost);
}
