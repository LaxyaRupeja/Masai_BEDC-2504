const checkRole = (roles = []) => {
    return (req,res,next) => {
        if(roles.includes(req.user.role)){
            next()
        } else{
            res.status(403).json({
                message:`You're not authorized to access this only ${roles.join(",")}`
            })
        }
    }
}

module.exports = checkRole;