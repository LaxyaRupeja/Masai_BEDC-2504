const express = require("express");
const { userRouter } = require("./routes/userRoute");
const { productRouter } = require("./routes/productsRoute");
const { entryMiddleware } = require("./middlewares/entryMiddleware");
const morgon = require("morgan");
const { rateLimit } = require('express-rate-limit')

const app = express();

app.use(express.json())


const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minutes
	limit: 1, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
})

// const customerLimiter = (req,res,next) => {
//     if(requestDefined < requestDone){
//         res.send("TOo many request")
//     } else{
//         next()
//     }
// }


// Global Middleware -> Apply to All Router
// app.use(entryMiddleware)


// app.use(morgon.token('type', function (req, res) { return req.headers['content-type'] }))
app.use(limiter)

app.use("/users",userRouter)

// It will only to only /products router
app.use("/products",productRouter)



app.listen(8080, () => {
    console.log("Server running port 8080")
})