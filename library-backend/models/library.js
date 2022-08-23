const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  pages: { type: Number, required: true },
  date: {
    type: Date,
    required: true,
  },
  stars: { type: Number },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  username: { type: String },
});

bookSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    returnedObject.stars ? returnedObject.stars : (returnedObject.stars = 0);
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Book', bookSchema);
