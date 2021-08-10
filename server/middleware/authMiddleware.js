const jwt = require("jsonwebtoken")
const confiq = require("../confiq")
const SECRET_KEY = confiq.secretKey

const authMiddleware = (req, res, next) => {
    if (req.method === "OPTIONS") {
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(400).json({message: "Пользователь не авторизован"})
        }
        const decodeData = jwt.verify(token, SECRET_KEY)
        req.user = decodeData
        next()
    }catch (e) {
        console.log(e)
        return res.status(400).json({message: "Пользователь не авторизован"})
    }
}

module.exports = authMiddleware