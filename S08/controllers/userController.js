const {
    userModel
} = require("../models/userSchema")


// Create Data Way no 1.
// const createUser = async (req, res) => {
//     try {
//         const {
//             name,
//             age,
//             isAlive
//         } = req.body;

//         const newUser = await userModel.insertOne({
//             name: name,
//             age: age,
//             isAlive: isAlive
//         })

//         res.status(201).json({
//             data:newUser,
//             message:"Data is created"
//         })


//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).send("Something went wrong")
//     }
// }


// Way no 2
// const createUser = async (req, res) => {
//     try {
//         const {
//             name,
//             age,
//             isAlive
//         } = req.body;

//         const newUser = await userModel.create({
//             name,
//             age,
//             isAlive
//         })


//         res.status(201).json({
//             data: newUser,
//             message: "Data is created"
//         })


//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).send("Something went wrong")
//     }
// }

// Way no 3
const createUser = async (req, res) => {
    try {
        const {
            name,
            age,
            isAlive
        } = req.body;

        const newUser = new userModel({
            name,
            age,
            isAlive
        })

        await newUser.save();


        res.status(201).json({
            data: newUser,
            message: "Data is created"
        })


    }
    catch (err) {
        console.log(err)
        res.status(500).send("Something went wrong")
    }
}


module.exports = {
    createUser
}