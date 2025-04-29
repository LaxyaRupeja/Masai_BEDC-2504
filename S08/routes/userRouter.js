const express = require("express");
const { createUser } = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/", createUser)

userRouter.post("/multiple",)


module.exports = {
    userRouter
}