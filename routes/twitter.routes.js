const { Router } = require("express");
const { twitterControllers } = require("../controllers/twitter.controllers");

const router = Router();

router.post("/twitter", twitterControllers.addTwit);
router.patch("/twitter/like/:id", twitterControllers.likeTwit);
router.delete("/twitter/:id", twitterControllers.deleteTwit);
router.get("/twitter/:id", twitterControllers.showTwit);

module.exports = router;
