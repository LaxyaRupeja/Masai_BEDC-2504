const express = require("express");
const { userRouter } = require("./routes/userRoute");
const { productRouter } = require("./routes/productsRoute");
const { entryMiddleware } = require("./middlewares/entryMiddleware");


const app = express();

app.use(entryMiddleware)
app.use(express.json())



app.use("/users",userRouter)

app.use("/products",productRouter)



app.listen(8080, () => {
    console.log("Server running port 8080")
})