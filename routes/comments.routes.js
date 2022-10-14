const { Router } = require("express");
const { commentsControllers } = require("../controllers/comments.controllers");

const router = Router();

router.post("/comment", commentsControllers.addComment);
router.delete("/comment/:id", commentsControllers.deletedComment);
router.get("/comment/:id", commentsControllers.showComment);
router.patch("/comment/:id", commentsControllers.editComments);

module.exports = router;