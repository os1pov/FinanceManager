const Category = require('../models/Category')

class categoryController {
    async createCategory(req, res) {
        try {
            const {name, expensesOrIncome} = req.body
            const category = new Category({name, expensesOrIncome, user: req.user.id})
            await category.save()
            res.json(category)
        } catch (e) {
            console.log(e)
        }
    }

    async getCategories(req, res) {
        try {
            const categories = await Category.find({user: req.user.id})
            res.json(categories)
        } catch (e) {
            console.log(e)
        }
    }

    async update(req, res) {
        try {
            const updatedPost = await Category.findByIdAndUpdate(req.body.categoryId, {totalScore: req.body.totalScore})
            return res.status(200).json(updatedPost)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new categoryController()