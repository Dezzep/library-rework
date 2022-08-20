const Lib = require('../models/library');
const User = require('../models/user');

const initialBooks = [
  {
    title: 'Susans Story',
    author: 'Susan Ofcourse',
    date: new Date(),
    pages: 102,
    stars: 4,
  },
  {
    title: 'Susans Second Story',
    author: 'Susan Ofcourse',
    date: new Date(),
    pages: 46,
    stars: 5,
    userId: '62fbc540b91336d08e9a8e6e',
  },
];

module.exports = {
  initialBooks,
};
