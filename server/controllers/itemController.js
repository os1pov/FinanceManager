const Item = require("../models/Item")

class itemController {
    async createItem(req, res) {
        try {
            const {categoryId, date, score, comment, expensesOrIncome} = req.body
            const item = new Item({user: req.user.id, category: categoryId, date, score, comment, expensesOrIncome})
            console.log(date)
            await item.save()
            res.json(item)
        } catch (e) {
            console.log(e)
        }
    }

    async getItems(req, res) {
        try {
            const {firstDate, lastDate} = req.query
            if (!firstDate) {
                const items = await Item.find({user: req.user.id})
                res.json(items)
            } else {
                const items = await Item.find({
                    user: req.user.id,
                    date: {
                        $gte: firstDate,
                        $lt: lastDate
                    }
                })
                res.json(items)
            }
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new itemController()