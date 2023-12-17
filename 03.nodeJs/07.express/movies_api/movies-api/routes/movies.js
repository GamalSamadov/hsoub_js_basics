const express = require("express");
const router = express.Router();
const controller = require("../controllers/moviesController");
const auth = require("../middlewares/auth");
const admin = require("../middlewares/admin");

router.post("/", [auth.check, admin.check], controller.create); // create
router.get("/:id", auth.check, controller.find); // read one
router.put("/:id", [auth.check, admin.check], controller.update); // update
router.delete("/:id", [auth.check, admin.check], controller.delete); // delete

router.get("/", auth.check, controller.list); // list all movies

router.post("/:id/reviews", auth.check, controller.addReview); // Add Review
router.get("/:id/reviews", controller.reviews); // Show All Reviews

module.exports = router;
