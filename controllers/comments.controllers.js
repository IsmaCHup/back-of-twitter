const Comment = require("../models/Comment.model");

module.exports.commentsControllers = {
  addComment: async (req, res) => {
    try {
      const { authorTwit, author, text, twit } = req.body;
      await Comment.create({
        authorTwit,
        twit,
        author,
        text,
      });
      res.json(`Комментарий добавлен`);
    } catch (e) {
      console.log(e.message);
    }
  },
  deletedComment: async (req, res) => {
    try {
      const deletedComment = await Comment.findByIdAndDelete(
        req.params.id
      ).populate("author", "name -_id", "Author");
      res.json(`Комментарий ${deletedComment.author.name}(-а) удален`);
    } catch (e) {
      console.log(e.message);
    }
  },
  showComment: async (req, res) => {
    try {
      const showComment = await Comment.find({"twit": req.params.id})
        .populate("authorTwit", "name -_id", "Author")
        .populate("twit", "twit -_id", "Twitter")
        .populate("author", "name -_id", "Author")
        .select("text -_id");
      res.json(showComment);
    } catch (e) {
      console.log(e.message);
    }
  },
  editComments: async (req, res) => {
    try {
      const editedComment = await Comment.findByIdAndUpdate(
        req.params.id,
        { text: req.body.text },
        { new: true }
      );
      res.json("Комментарий изменен");
    } catch (e) {
      console.log(e.message);
    }
  },
};
