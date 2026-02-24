const router = require("express").Router();

const controller = require("../controllers/default_controllers");



router.get("/" ,controller.render_homepage);

router.use(controller.render_404)


module.exports = router;
