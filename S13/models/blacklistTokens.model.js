const mongoose = require("mongoose");

const blackListTokenSchema = new mongoose.Schema({
    token:{
        type:String,
        required:true
    }
},{
    timestamps:true,
    versionKey:false
})

const BlacklistToken = mongoose.model("Blacklisttoken",blackListTokenSchema);

module.exports = BlacklistToken;