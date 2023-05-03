const express = require("express")
const { createBookProduct } = require("../Controller/booking.controller")

const bookingRouter = express.Router()

bookingRouter.route('/').post(createBookProduct)

module.exports = bookingRouter