const mongoose = require("mongoose")
const app = require("./app")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000

mongoose.connect(`${process.env.DB_URL}`).then(() => {
    console.log("Server Connceted with MongoDB")
})


app.listen(port, () => {
    console.log(`Listening Resale Server at ${port}`)
})