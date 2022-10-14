const Twitter = require("../models/Twitter.model");

module.exports.twitterControllers = {
  addTwit: async (req, res) => {
    try {
      const { author, twit } = req.body;
      const newTwit = await Twitter.create({
        author,
        twit,
      });
      res.json(`твит: ${newTwit.twit} добавлен`);
    } catch (e) {
      console.log(e.message);
    }
  },
  deleteTwit: async (req, res) => {
    try {
      const deletedTwit = await Twitter.findByIdAndDelete(req.params.id, {
        new: true,
      }).populate("author", "name -_id", "Author");
      res.json(`твит от ${deletedTwit.author.name} удален`);
    } catch (e) {
      console.log(e.message);
    }
  },
  showTwit: async (req, res) => {
    try {
      const getTwitt = await Twitter.findById(req.params.id).populate(
        "author",
        "name -_id",
        "Author"
      );
      res.json(`${getTwitt.author.name}: ${getTwitt.twit}`);
    } catch (e) {
      console.log(e.message);
    }
  },
};