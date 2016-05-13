var mongoose = require('mongoose');

// Enum for status
var status = 'approved unapproved'.split(' ');

// Create the CommentSchema
var CommentSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: status,
    required: true
  }
});

module.exports = mongoose.model('comment', CommentSchema);