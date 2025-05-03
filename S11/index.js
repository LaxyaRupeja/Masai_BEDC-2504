const express = require("express");
const { connectToDb } = require("./config/dbConnect");
const { userRouter } = require("./routes/userRouter");


const app = express();


app.use(express.json())



app.use("/users",userRouter)






app.listen(8080,()=>{
    console.log("Server is started at the port 8080");
    connectToDb();

})