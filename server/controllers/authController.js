const User = require('../models/User')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const confiq = require("../confiq")
const SECRET_KEY = confiq.secretKey

class authController {
    async registration(req, res) {
        try {
            const {userLogin, password} = req.body
            const candidate = await User.findOne({userLogin})
            if (candidate) {
                return res.status(400).json({message: `Пользователь ${userLogin} уже существует`})
            }
            const hashPassword = await bcrypt.hash(password, 8)
            const user = new User({userLogin, password: hashPassword})
            await user.save()
            res.json({message: "Пользователь создан"})
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    }

    async login(req, res) {
        try {
            const {userLogin, password} = req.body
            const user = await User.findOne({userLogin})
            if (!user) {
                res.status(400).json({message: `Пользователя ${userLogin} не существует`})
            }
            const isPasswordValid = bcrypt.compareSync(password, user.password)
            if (!isPasswordValid) {
                res.status(400).json({message: "Неверный пароль"})
            }
            const token = jwt.sign({id: user._id}, SECRET_KEY, {expiresIn: "1h"})
            res.json({
                token,
                user: {
                    id: user._id,
                    userLogin: user.userLogin
                }
            })
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    }

    async auth(req, res) {
        try {
            const user = await User.findOne({_id: req.user.id})
            const token = jwt.sign({id: user._id}, SECRET_KEY, {expiresIn: "1h"})
            res.json({
                token,
                user: {
                    id: user._id,
                    userLogin: user.userLogin
                }
            })
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    }
}

module.exports = new authController()