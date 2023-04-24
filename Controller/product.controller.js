const Product = require("../Model/Product.model")

exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json({
            sucess: "success",
            message: "Product inserted Successfully",
            data: product,
        })
    } catch (error) {
        res.status(400).json({
            success: "Failed",
            error: error.message
        })
    }
}

exports.getAllProducts = async (req, res) => {
    try {

        const result = await Product.find({})
        res.status(200).json({
            sucess: "success",
            message: "Products Gets Successfully",
            data: result
        }
        )
    } catch (error) {
        res.status(400).json({
            success: "Failed to Load products",
            error: error.message
        })
    }
}