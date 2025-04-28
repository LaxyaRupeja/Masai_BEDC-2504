const express = require("express");
const { connectToMongoDB } = require("./config/databaseConnection");
const { userRouter } = require("./routes/userRouter");

const app = express();

app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Hi from server")
})

app.use("/users",userRouter)




app.listen(8080,()=>{
    console.log("Server is Running")
    connectToMongoDB();
})