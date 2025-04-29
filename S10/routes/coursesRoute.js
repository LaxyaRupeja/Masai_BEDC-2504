const express = require("express");
const { createCourse } = require("../controllers/courseController");

const courseRouter = express.Router();

courseRouter.post("/",createCourse)


module.exports = {
    courseRouter
}