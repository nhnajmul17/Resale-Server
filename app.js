const express = require("express")
const app = express()
const cors = require("cors")
const productRouter = require("./Routes/Product.routes")


app.use(cors())
app.use(express.json())


app.use('/api/v1/product', productRouter)


app.get('/', (req, res) => {
    res.send("Welcome to Resale Shop Server")
})

module.exports = app