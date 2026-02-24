const router = require("express").Router();

const controller = require("../controllers/review_controllers");

const { authenticate } = require("../middleware/authMiddleware");

router.get("/publiser", authenticate, controller.render_review_publish);

router.get("/:id",controller.render_review_page)

module.exports = router;
