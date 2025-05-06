const { createUser, loginUser } = require("../controllers/user.controller");

const userRouter = require("express").Router();


userRouter.post("/sign-up", createUser);

userRouter.post("/login", loginUser)

module.exports = userRouter;