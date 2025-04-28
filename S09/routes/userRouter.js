const express = require("express");
const { createUser, createMultipleUsers, getAllUsers, updateUserByName, updateUserById } = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/", createUser)

userRouter.post("/multiple", createMultipleUsers)

userRouter.get("/", getAllUsers)

userRouter.patch("/updateByName/:name",updateUserByName)

userRouter.patch("/updateById/:id",updateUserById)


module.exports = {
    userRouter
}