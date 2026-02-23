const router = require("express").Router();

const controller = require("../controllers/auth_routes")

router.get("/registrer",controller.render_sign_up)

router.get("/loggInn", controller.render_sign_in)

module.exports = router