const express = require("express");
const router = express.Router();
const controller = require("../controllers/watchlistController");
const auth = require("../middlewares/auth");

router.post("/", auth.check, controller.add); // add new
router.delete("/:movie", auth.check, controller.delete); // delete
router.get("/", auth.check, controller.list); // list all watchlist

module.exports = router;
