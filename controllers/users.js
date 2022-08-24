const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const User = require('../models/user');

usersRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate('books', {
    title: 1,
    author: 1,
    stars: 1,
  });
  response.json(users);
});

usersRouter.post('/', async (request, response) => {
  const { username, name, password } = request.body;

  const invalidChars = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/); //unacceptable

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return response.status(400).json({
      error: 'username must be unique',
    });
  }
  if (username.length < 3) {
    return response.status(400).json({
      error: 'username must be 3 characters or more',
    });
  }
  if (invalidChars.test(username)) {
    return response.status(400).json({
      error: 'username has invalid characters.',
    });
  }

  if (password.length < 3) {
    return response.status(400).json({
      error: 'password must be 3 characters or more',
    });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    name,
    passwordHash,
  });

  const savedUser = await user.save();

  response.status(201).json(savedUser);
});

module.exports = usersRouter;
