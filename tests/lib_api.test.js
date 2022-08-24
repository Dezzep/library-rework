const mongoose = require('mongoose');
const supertest = require('supertest');
const helper = require('./test_helper');
const app = require('../app');
const api = supertest(app);
const Lib = require('../models/library');
const bcrypt = require('bcrypt');
const User = require('../models/user');

beforeEach(async () => {
  await Lib.deleteMany({});
  const blogObjects = helper.initialLib.map((blog) => new Blog(blog));
  const promiseArray = blogObjects.map((blog) => blog.save());
  await Promise.all(promiseArray);
});



afterAll(() => {
  mongoose.connection.close();
});
