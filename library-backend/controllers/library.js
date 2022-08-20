const libRouter = require('express').Router();
const Lib = require('../models/library');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

// GET ALL DATA FROM MONGODB/library

libRouter.get('/', async (request, response) => {
  const library = await Lib.find({}).populate('user', { username: 1, name: 1 });
  response.json(library);
});

// GET BY ID
libRouter.get('/:id', async (request, response) => {
  const lib = await Lib.findById(request.params.id);
  lib ? response.json(lib) : response.status(404).end();
});

// CREATE (POST) NEW ENTRY
libRouter.post('/', async (request, response, next) => {
  const body = await request.body;

  const user = request.user;

  const book = new Lib({
    title: body.title,
    author: body.author,
    pages: body.pages,
    date: new Date(),
    stars: body.stars,
    user: user._id,
  });
  const savedBook = await book.save();
  user.books = user.books.concat(savedBook._id);
  await user.save();
  response.status(201).json(savedBook);
});

// DELETE FROM DB
libRouter.delete('/:id', async (request, response, next) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET);
  if (!decodedToken.id) {
    return response
      .status(401)
      .json({ error: 'token missing or invalid permissions' });
  } else {
    await Lib.findByIdAndRemove(request.params.id);
    response.status(204).end();
  }
});

// UPDATE ITEM ON DB
libRouter.put('/:id', async (request, response) => {
  const body = request.body;

  const book = {
    title: body.title,
    author: body.author,
    pages: body.pages,
    stars: body.stars,
    user: body.user,
  };
  const toUpdate = await Lib.findByIdAndUpdate(request.params.id, book, {
    new: true,
  });

  response.json(toUpdate);
});

module.exports = libRouter;
