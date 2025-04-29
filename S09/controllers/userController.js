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


const createMultipleUsers = async (req, res) => {
    try {

        const {
            data
        } = req.body;

        const insertedData = await userModel.insertMany(data);

        res.status(201).json({
            message: "Multiple users is created",
            insertedData
        });



    } catch (error) {
        res.status(404).json({
            message: "Something went wrong"
        })
    }
}

const getAllUsers = async (req, res) => {
    try {

        const {
            startAge,
            endAge
        } = req.query;

        // const {
        //     name
        // } = req.query;

        // const searchTerm = name;

        // const users = await userModel.find({
        //     name:searchTerm
        // });

        // const age = 30;

        // const users = await userModel.find({
        //     age: { $gt: age }
        // })

        // const startAge = 20;
        // const endAge = 40;

        const users = await userModel.find({
            $and: [
                { age: { $gt: startAge } },
                { age: { $lt: endAge } }
            ]
        })

        res.status(200).json({
            users,
            message: "Data is sent successfully"
        })


    } catch (err) {
        console.log(err);
        res.status(404).json({
            message: "Something went wrong"
        })
    }
}

const updateUserByName = async (req, res) => {
    try {


        const { name } = req.params;

        const { age } = req.body;

        const updatedUser = await userModel.updateOne({ name }, { $set: { age } });

        res.status(200).json({
            updatedUser
        })
    }
    catch (error) {

    }
}

const updateUserById = async (req, res) => {
    try {

        const { id } = req.params;

        const { name, age } = req.body;

        const updatedUser = await userModel.findByIdAndUpdate(id, {
            name,
            age
        }, {
            new: true
        });

        res.status(200).json({
            updatedUser
        })

    } catch (error) {
        res.status(404).json({
            message: "Something went wrong"
        })
    }
}

const deleteUserByName = async (req, res) => {
    try {

        const { name } = req.params;

        const deletedUser = await userModel.deleteOne({ name });

        res.status(200).json({
            deletedUser
        })

    } catch (error) {
        res.status(404).json({
            message: "something went wrong"
        })
    }
}

const deleteUserById = async (req,res) => {
    try {

        const { id } = req.params;

        const deleteUser = await userModel.findByIdAndDelete(id);

        res.json({
            deleteUser
        })

        
    } catch (error) {
        res.status(404).json({
            message:"something went wrong"
        })
    }
}

const findUserById = async (req,res) => {
    const { id } = req.params;

    const user = await userModel.findById(id);

    res.json({
        user
    })

}



module.exports = {
    createUser,
    createMultipleUsers,
    getAllUsers,
    updateUserByName,
    updateUserById,
    deleteUserByName,
    deleteUserById,
    findUserById
}