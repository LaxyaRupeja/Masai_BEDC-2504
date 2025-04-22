const entryMiddleware = (req,res,next) => {
    
    // if(req.method == "GET"){
    //     next()
    // } else {
    //     res.send("I need only GET Routes")
    // }

    console.log("METHOD",req.method,"URL",req.url,"Tiemstamp",Date.now(),"IP",req.ip)
    
    next();
    
}

module.exports = {
    entryMiddleware
}