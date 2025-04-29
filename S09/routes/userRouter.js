const express = require("express");
const { createUser, createMultipleUsers, getAllUsers,deleteUserByName, updateUserByName, updateUserById, deleteUserById, findUserById } = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/", createUser)

userRouter.post("/multiple", createMultipleUsers)


userRouter.get("/", getAllUsers)

userRouter.get("/:id",findUserById)

userRouter.patch("/updateByName/:name",updateUserByName)

userRouter.patch("/updateById/:id",updateUserById);

userRouter.delete("/deleteByName/:name",deleteUserByName);

userRouter.delete("/deleteById/:id",deleteUserById);



module.exports = {
    userRouter
}