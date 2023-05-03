const bookProduct = require("../Model/bookingProduct.model")

exports.createBookProduct = async (req, res) => {
    try {
        const result = await bookProduct.create(req.body)
        res.status(200).json({
            success: "Booked a Product",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            success: "Failed to book product",
            error: error.message
        })
    }

}
