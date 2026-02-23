const router = require("express").Router();

const controller = require("../controllers/default_controllers");

router.get("/", controller.render_homepage);

module.exports = router;
