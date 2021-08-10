const express = require("express")
const mongoose = require("mongoose")
const authRouter = require("./routes/authRouter")
const categoryRouter = require("./routes/categoryRouter")
const itemRouter = require("./routes/itemRouter")
const corsMiddleware = require("./middleware/corsMiddleware")
const confiq = require("./confiq")

const app = express()
const PORT = confiq.serverPort || 8000
const DB_URL = confiq.dbUrl

app.use(corsMiddleware)
app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/categories", categoryRouter)
app.use("/api/items", itemRouter)

const startApp = async () => {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}...`)
    })
}

startApp()