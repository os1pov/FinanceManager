const Router = require("express")
const categoryController = require("../controllers/categoryController")
const authMiddleware = require("../middleware/authMiddleware")

const router = new Router()

router.post("", authMiddleware, categoryController.createCategory)
router.get("", authMiddleware, categoryController.getCategories)
router.put("", authMiddleware, categoryController.update)

module.exports = router