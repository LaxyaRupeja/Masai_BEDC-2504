const mongoose = require("mongoose");

const connectToDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/lms")
    } catch (error) {
        console.log(error);
        console.log("Something went wrong in database connection");
    }
}

module.exports = {
    connectToDb
}