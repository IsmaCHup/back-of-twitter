const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(require('./routes/authors.routes'));
app.use(require('./routes/comments.routes'));
app.use(require('./routes/twitter.routes'));

mongoose
  .connect("mongodb+srv://Is:lam@cluster0.7eomugg.mongodb.net/twitter")
  .then(() => {
    app.listen(3000, () => {
      console.log("Сервер успешно запущен");
    });
  })
  .catch((e) => console.log(e.message));