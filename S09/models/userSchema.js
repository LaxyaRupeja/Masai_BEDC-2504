const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    isAlive: Boolean
});

const userModel = mongoose.model("user",userSchema);

module.exports = {
    userModel
}
