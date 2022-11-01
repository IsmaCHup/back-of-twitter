const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
  name: String,
  saved: []
});

const Author = mongoose.model("Author", authorSchema);
module.exports = Author;
