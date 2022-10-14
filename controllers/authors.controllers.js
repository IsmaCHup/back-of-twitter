const Author = require("../models/Author.model");

module.exports.authorsControllers = {
  addAuthor: async (req, res) => {
    const { name } = req.body;
    try {
      const newAuthor = await Author.create({
        name,
      });
      res.json(`${newAuthor.name} added`);
    } catch (e) {
      console.log(e.message);
    }
  },
  deleteAuthor: async (req, res) => {
    try {
      const deletedAuthor = await Author.findByIdAndDelete(req.params.id, {
        new: true,
      });
      res.json(`${deletedAuthor.name} deleted`);
    } catch (e) {
      console.log(e.message);
    }
  },
  saveTwitter: async (req, res) => {
    try {
      const savedTwit = Author.findByIdAndUpdate(
        req.params.id,
        { $push: { saved: req.body.id } },
        { new: true }
      );
      res.json(`${savedTwit}`);
    } catch (e) {
      console.log(e.message);
    }
  },
  likeTwit: async (req, res) => {
    try {
      const likeTwitter = Author.findByIdAndUpdate(
        req.params.id,
        { $push: { like: req.body.id } },
        { new: true }
      );
      res.json(`Вам понравился твит`);
    } catch (e) {
      console.log(e.message);
    }
  },
};