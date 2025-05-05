const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profileId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Profile"
    },
    postIds:{
        type: [mongoose.Schema.Types.ObjectId],
        ref:"Post"
    },
    coursesIds:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"Course"
    }
})

const User = mongoose.model("User", userSchema);


module.exports = {
    User
}