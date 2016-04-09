var mongoose = require('mongoose');
var Comment = require('./Comment');

// Enum for status
var status = 'draft published outdated'.split(' ');

// Create the PostSchema
var PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: status,
    required: true
  },
  comments: {
    type: [Comment]
  },
  tags: {
    type: [String],
    required: false
  }
});

module.exports = mongoose.model('post', PostSchema);