const express = require("express");
const paymentController =require("../controller/paymentController")
const paymentRouter = express.Router();

paymentRouter.post("/orders",paymentController.orders)
paymentRouter.post("/verify", paymentController.verify);

module.exports = {
  paymentRouter
};
