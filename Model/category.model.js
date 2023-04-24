const { default: mongoose } = require("mongoose");

const categorySchema = mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    },
    categoryImage: {
        type: String,
        required: true

    }
})

const Category = mongoose.model("Category", categorySchema)
module.exports = Category