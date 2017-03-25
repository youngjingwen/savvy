const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
  {
    title: { type: String },
    subTitle: { type: String },
    summary: { type: String },
    digest: { type: String },
    author: { type: String },
    content: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);
