const entryMiddleware = (req,res,next) => {
    
    if(req.method == "GET"){
        next()
    } else {
        res.send("I need only GET Routes")
    }
    
}

module.exports = {
    entryMiddleware
}