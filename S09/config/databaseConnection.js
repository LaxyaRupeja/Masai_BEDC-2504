const mongoose = require("mongoose")

const connectToMongoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://ishaan:lFm5zd35sJUkQQLl@test.j6qmfgv.mongodb.net/mongoose");
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