// https://mongoosejs.com/docs/validation.html#the-unique-option-is-not-a-validator


const express = require("express");
const cors = require("cors");
const { courseRouter } = require("./routes/coursesRoute");
const {connectToDb} = require("./config/dbConnection");
const app = express();

app.use(express.json())
app.use(cors())

app.use("/course",courseRouter)


app.listen(8080,(req,res)=>{
    console.log("Server is started on PORT 8080");
    connectToDb();

})