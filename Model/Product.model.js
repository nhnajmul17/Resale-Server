const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
        maxLength: 50
    },
    productImage: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    resalePrice: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    brand: {
        type: String,
        required: true
    },
    yearUsed: {
        type: Number
    },
    sellerName: {
        type: String
    },
    location: {
        type: String,
    },
    phoneNumber: {
        type: String
    },

}, {
    timestamps: true
})

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product