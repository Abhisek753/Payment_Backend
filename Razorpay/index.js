const express=require("express");
const { connection } = require("./db");
require("dotenv").config();
const { userRouter } = require("./Routes/userRouter");
const { paymentRouter } = require("./Routes/paymentRouter");
const cors = require("cors");
const app=express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>
res.send("Home page")
);
app.use("/users", userRouter);
app.use("/payment",paymentRouter)

app.listen(8080,()=>{
    try{
    connection
      console.log("connected to db");
    }catch(err){
        console.log("error message",err.message);
    }
    console.log(`server is running at port ${process.env.PORT}`);
});