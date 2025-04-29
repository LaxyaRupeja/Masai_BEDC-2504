const { Courses } = require("../models/coursesModel");

const createCourse = async (req, res) => {
    try {

        const {
            title,
            studentsCount,
            subjects,
            instructorName,
            courseCode,
            mentorName
        } = req.body;

        const newCourse = await Courses.create({
            title,
            studentsCount,
            subjects,
            instructorName,
            mentorName,
            courseCode
        })

        res.json({
            newCourse
        })


    } catch (error) {
        console.log(error)
        res.status(404).json({
            message: "Something went wrong"
        })
    }
}


module.exports = {
    createCourse
}