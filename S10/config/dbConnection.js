const mongoose = require("mongoose");

const connectToDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://ishaan:lFm5zd35sJUkQQLl@test.j6qmfgv.mongodb.net/lms",{
            
        });
    } catch (error) {
        console.log(error);
        console.log("Something went wrong in database connection");
    }
}

module.exports = {
    connectToDb
}