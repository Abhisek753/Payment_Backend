const express = require("express");
const { userController } = require("../controller/userController");
const userRouter = express.Router();

userRouter.post("/register", userController);


module.exports = {
  userRouter,
};
