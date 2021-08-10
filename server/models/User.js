const {Schema, model, ObjectId} = require("mongoose")

const User = new Schema({
    userLogin: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    categories: [{type: ObjectId, ref: 'Category'}]
})

module.exports = model("User", User)