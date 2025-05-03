const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:String,
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

const Post = mongoose.model("Post",postSchema);

module.exports = {
    Post
}