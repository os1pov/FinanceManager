const {Schema, model, ObjectId} = require("mongoose")

const Category = new Schema({
    name: {type: String, required: true},
    expensesOrIncome: {type: String, default: "Expenses"},
    user: {type: ObjectId, ref: 'User'}
})

module.exports = model("Category", Category)