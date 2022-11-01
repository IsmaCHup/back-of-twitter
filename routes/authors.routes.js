const { Router } = require("express");
const { authorsControllers } = require("../controllers/authors.controllers");

const router = Router();

router.post("/author", authorsControllers.addAuthor);
router.delete("/author/:id", authorsControllers.deleteAuthor);
router.patch("/author/twitter/:id", authorsControllers.saveTwitter);

module.exports = router;

