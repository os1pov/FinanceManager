const Router = require("express")
const authController = require("../controllers/authController")
const authMiddleware = require("../middleware/authMiddleware")

const router = new Router()

router.post("/registration", authController.registration)
router.post("/login", authController.login)
router.get("/auth", authMiddleware, authController.auth)

module.exports = router