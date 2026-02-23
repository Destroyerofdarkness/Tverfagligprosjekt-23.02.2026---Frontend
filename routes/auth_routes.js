const router = require("express").Router();

const controller = require("../controllers/auth_routes")

router.get("/registrer",controller.render_sign_up)

module.exports = router