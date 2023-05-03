const { default: mongoose } = require("mongoose");

const bookingProduct = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: String,
        required: true,
    },
    productId: {
        type: String,
        required: true
    },
    buyerName: {
        type: String
    },
    buyerEmail: {
        type: String,
        required: true
    }
})
const bookProduct = mongoose.model('bookingProduct', bookingProduct)
module.exports = bookProduct