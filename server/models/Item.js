const {Schema, model, ObjectId} = require("mongoose")

const Item = new Schema({
    date: {type: Date, default: Date.now()},
    score: {type: Number, default: 0},
    comment: {type: String, default: ""},
    expensesOrIncome: {type: String, default: "Expenses"},
    user: {type: ObjectId, ref: 'User'},
    category: {type: ObjectId, ref: 'Category'}
})

module.exports = model("Item", Item)