const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
    try {

        const {
            name,
            email,
            password
        } = req.body;

        // Extra Step to Secure our Application



        const hashedPassword = bcrypt.hashSync(password, 10)

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
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
                email: userFound.email
            }, "this-is-super-secret-string-which-can-be-anything", {
                expiresIn: "2h"
            });



            res.json({
                message: "User is Logged in Successfully",
                data: {
                    name: userFound.name,
                    email: userFound.email
                },
                token
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


module.exports = { createUser, loginUser };