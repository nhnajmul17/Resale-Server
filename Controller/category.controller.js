const Category = require("../Model/category.model")

exports.getAllCategory = async (req, res) => {
    try {
        const result = await Category.find({})
        res.status(200).json({
            success: "sucess",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            success: "Failed",
            error: error.message
        })
    }
}

exports.createCategory = async (req, res) => {
    try {
        const data = await Category.create(req.body)
        res.status(200).json({
            success: "sucess",
            message: "New category created",
            data: data
        })

    } catch (error) {
        res.status(400).json({
            success: "Failed",
            error: error.message
        })
    }

}