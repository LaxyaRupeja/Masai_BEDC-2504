const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title:String,
    description:String,
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

const Blog = mongoose.model("Blog",blogSchema)

module.exports = Blog;