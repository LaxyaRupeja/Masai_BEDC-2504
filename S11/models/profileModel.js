const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

const Profile = mongoose.model("Profile",profileSchema);

module.exports = {
    Profile
}