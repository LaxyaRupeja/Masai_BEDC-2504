const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    courseCode: {
        type: String,
        required: true,
        unique: true,
    },
    studentsCount: {
        type: Number,
        min: 0,
        max: 500
    },
    subjects: {
        type: [String],
        enum: ["HTML", "CSS", "JS", "ARRAY", "BACKTRACKING"]
    },
    instructorName: {
        type: String,
        enum: ["Laxya", "Venu"]
    },
    mentorName: {
        type: String
    }
})

const Courses = mongoose.model("courses", courseSchema);

module.exports = {
    Courses
}