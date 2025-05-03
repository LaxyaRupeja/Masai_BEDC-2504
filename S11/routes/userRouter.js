const { Post } = require("../models/postModel");
const { Profile } = require("../models/profileModel");
const { User } = require("../models/userModel");

const userRouter = require("express").Router();



userRouter.post("/", async (req, res) => {
    const {
        name,
        email,
        password
    } = req.body;

    const newUser = await User.create({
        name,
        email,
        password
    });
    res.json(newUser)
});

userRouter.post("/profile/:userId", async (req, res) => {
    const {
        username,
        address,
        photo
    } = req.body;

    const { userId } = req.params;

    const newProfile = await Profile.create({
        username,
        address,
        photo,
        userId
    });

    const updatedUser = await User.findByIdAndUpdate(userId, {
        profileId: newProfile._id
    }, {
        new: true
    })


    res.json(newProfile, updatedUser)
});

userRouter.get("/", async (req, res) => {
    // Sigle
    // const users = await User.find().populate("profileId");
    // Multiple 
    const users = await User.find().populate(["profileId","postIds"]);

    res.json(users);
})

userRouter.post("/post/:userId", async (req, res) => {
    const {
        title,
        image
    } = req.body;

    const {
        userId
    } = req.params;

    const newPost = await Post.create({
        image,
        title,
        userId
    })

    // Get User

    const user = await User.findById(userId);

    // Update User

    user.postIds.push(newPost._id);

    await user.save();

    res.json(
        newPost
    )

})




module.exports = {
    userRouter
}
