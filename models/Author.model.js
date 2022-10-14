const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
  name: String,
  saved: Array
});

const Author = mongoose.model("Author", authorSchema);
module.exports = Author;
