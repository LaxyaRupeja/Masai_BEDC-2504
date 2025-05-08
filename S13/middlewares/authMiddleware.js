const jwt = require("jsonwebtoken");
const BlacklistToken = require("../models/blacklistTokens.model")
const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];

        const token = authHeader.split(" ")[1];

        if (!token) {
            res.status(401).send("Please Login First");
        }


        const tokenExists = await BlacklistToken.findOne({
            token
        });

        if(tokenExists){
            res.status(403).json({
                message:"You're logged out. Please generate a new token"
            })
        }

        const decoded = jwt.verify(token, "this-is-super-secret-string-which-can-be-anything", (err, decoded) => {
            if (err) {
                res.status(401).send("Your token is not valid")
            }
            req.user = decoded;
            next();
        })


    } catch (error) {
        console.log(error);
        res.status(404).json({
            message: "Something went wrong"
        }
        )
    }
}



module.exports = authMiddleware