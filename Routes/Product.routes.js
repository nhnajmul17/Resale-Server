const express = require("express")

const productRouter = express.Router()

productRouter.route('/').get((req, res) => {
    res.send("this is All Product Routes")
})

module.exports = productRouter