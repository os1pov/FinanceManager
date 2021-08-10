const Router = require("express")
const itemController = require("../controllers/itemController")
const authMiddleware = require("../middleware/authMiddleware")

const router = new Router()

router.post("", authMiddleware, itemController.createItem)
router.get("", authMiddleware, itemController.getItems)

module.exports = router