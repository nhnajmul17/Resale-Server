const express = require("express")
const app = express()
const cors = require("cors")
const productRouter = require("./Routes/Product.routes")
const categoryRouter = require("./Routes/Category.routes")
const bookingRouter = require("./Routes/booking.routes")


app.use(cors())
app.use(express.json())


app.use('/api/v1/product', productRouter)
app.use('/api/v1/category', categoryRouter)
app.use('/api/v1/booking', bookingRouter)


app.get('/', (req, res) => {
    res.send("Welcome to Resale Shop Server")
})

module.exports = app