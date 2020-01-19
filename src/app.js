require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const UserRouter = require('./users/UsersRouter');
const PostRouter = require('./post/PostRouter');
const auth = require('../src/auth/index');
const cookieParser = require('cookie-parser');

const app = express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';
app.use(morgan(morganOption));
app.use(cors());
app.use(helmet());
app.use(express.json());
// app.use(cookieParser('process.env.COOKIE_SECRET'))

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use('/auth', auth);
app.use('/', UserRouter);
app.use('/', PostRouter);

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;
