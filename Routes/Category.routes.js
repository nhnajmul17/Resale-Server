const express = require("express")
const { createCategory, getAllCategory } = require("../Controller/category.controller")
const categoryRouter = express.Router()

categoryRouter.route("/").get(getAllCategory).post(createCategory)

module.exports = categoryRouter