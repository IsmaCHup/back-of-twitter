const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  authorTwit: {
    ref: "Author",
    type: mongoose.Schema.Types.ObjectId,
  },
  twit: {
    ref: "Twitter",
    type: mongoose.Schema.Types.ObjectId,
  },
  author: {
    ref: "Author",
    type: mongoose.Schema.Types.ObjectId,
  },
  text: String,
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;