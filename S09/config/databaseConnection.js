const mongoose = require("mongoose")

const connectToMongoDB = async () => {
    try {
        await mongoose.connect("");
        console.log("Database is connected successfully")
    }
    catch (err) {
        console.log(err)
        console.log("Database is not connected, something went wrong")
    }
}

module.exports = {
    connectToMongoDB
}