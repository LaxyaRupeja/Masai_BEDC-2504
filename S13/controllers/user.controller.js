const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const BlacklistToken = require("../models/blacklistTokens.model");
const createUser = async (req, res) => {
    try {

        const {
            name,
            email,
            password,
            role
        } = req.body;

        // Extra Step to Secure our Application



        const hashedPassword = bcrypt.hashSync(password, 10)

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });

        res.status(201).json(
            {
                data: newUser
            }
        )

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Something went wrong"
        })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Step 1.

        const userFound = await User.findOne({ email });

        if (!userFound) {
            res.status(404).json({
                message: "User Not Found"
            })
        }

        // User is fouund

        // Step 2.
        const isPasswordCorrect = bcrypt.compareSync(password, userFound.password);
        // true / false

        if (isPasswordCorrect) {


            // Create a token
            const token = jwt.sign({
                id: userFound._id,
                email: userFound.email,
                role: userFound.role
            }, "this-is-super-secret-string-which-can-be-anything", {
                expiresIn: 60
            });
            // Create a Refresh token
            const refreshToken = jwt.sign({
                id: userFound._id
            }, "this-is-super-secret-string-which-can-be-anything", {
                expiresIn: "1d"
            });

            res.json({
                message: "User is Logged in Successfully",
                data: {
                    name: userFound.name,
                    email: userFound.email
                },
                token,
                refreshToken
            })
        } else {
            res.status(404).json({
                message: "Invalid Credentials"
            })
        }



    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        })
    }
}

const logout = async (req, res) => {

    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[1];

    const newToken = await BlacklistToken.create({
        token
    });

    res.status(200).json({
        message: "Logged out successfully"
    })
}

const refreshToken = async (req, res) => {
    const {
        refreshToken
    } = req.body;

    jwt.verify(refreshToken, "this-is-super-secret-string-which-can-be-anything", async (err, decoded) => {
        if (err) {
            res.status(401).send("Your token is not valid")
        }

        const userFound = await User.findById(decoded.id);

        if (!userFound) {
            res.status(404).json({
                message: "User not found or wrong token"
            })
        }

        const token = jwt.sign({
            id: userFound._id,
            email: userFound.email,
            role: userFound.role
        }, "this-is-super-secret-string-which-can-be-anything", {
            expiresIn: 60
        });
        // Create a Refresh token
        const refreshtoken = jwt.sign({
            id: userFound._id
        }, "this-is-super-secret-string-which-can-be-anything", {
            expiresIn: "1d"
        });

        res.status(200).json({
            accessToken: token,
            refreshtoken
        })


    })
}

module.exports = { createUser, loginUser, logout, refreshToken };