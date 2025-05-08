const { createUser, loginUser, logout, refreshToken } = require("../controllers/user.controller");

const userRouter = require("express").Router();


userRouter.post("/sign-up", createUser);

userRouter.post("/login", loginUser);

userRouter.post("/logout", logout);

userRouter.post("/refresh-token", refreshToken)

module.exports = userRouter;