const router = require("express").Router();

const { checkAdmin } = require("../middleware/authorization");

const controller = require("../controllers/default_controllers");

router.get("/", controller.render_homepage);

router.get("/admin", checkAdmin, controller.render_admin_page);

router.get("/FAQ", controller.render_FAQ);

router.use(controller.render_404);

module.exports = router;
