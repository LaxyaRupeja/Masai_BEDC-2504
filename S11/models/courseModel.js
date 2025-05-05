const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    batchName: {
        type: String,
        required: true
    },
    studentsCount: {
        type: Number,
        required: true
    },
    users: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User"
    }
})

const Course = mongoose.model("Course", courseSchema);


module.exports = { Course }