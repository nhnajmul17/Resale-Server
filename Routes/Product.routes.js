const express = require("express")
const { getAllProducts, createProduct } = require("../Controller/product.controller")

const productRouter = express.Router()

productRouter.route('/').get(getAllProducts)
    .post(createProduct)

module.exports = productRouter