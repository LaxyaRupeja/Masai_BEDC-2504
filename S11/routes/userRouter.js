const { Post } = require("../models/postModel");
const { Profile } = require("../models/profileModel");
const { User } = require("../models/userModel");
const { Course } = require("../models/courseModel");

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
    const users = await User.find().populate(["profileId", "postIds","coursesIds"]);

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


userRouter.post("/course", async (req, res) => {
    try {
        

    const newCourse = await Course.create({
        ...req.body
    })

    res.json(newCourse);
} catch (error) {
 console.log(error);
 res.send("Something went wrong")       
}
})

userRouter.post("/applyToCourse", async (req, res) => {
    const {
        courseId,
        userId
    } = req.body;

    const course = await Course.findById(courseId);

    const user = await User.findById(userId);

    course.users.push(userId);

    user.coursesIds.push(courseId);

    await user.save();
    await course.save();

    res.json({
        course,
        user
    })

})



module.exports = {
    userRouter
}
