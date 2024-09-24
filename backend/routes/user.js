const { Router } = require('express');
const signupMiddleware = require('../middlewares/signupValidation');
const userMiddleware = require('../middlewares/user');
const { User, Course } = require('../db');
const router = Router();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');


router.post('/signup', signupMiddleware, async (req, res) => {
    const body = req.body;
    try {
        const user = await User.findOne(body);
        if(!user) {
            const userProfile = await User.create(body);
            res.json({
                msg: "User is created successfully",
                userId: userProfile._id
            })
        } else {
            res.json({
                msg: "A User already exists with this username"
            })
        }
    } catch (err) {
        res.status(500).json({
            msg: "Something went wrong"
        })
    }
})

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        const user = await User.findOne({
            username,
            password
        });
        if(user) {
            const token = jwt.sign({
                username
            }, JWT_SECRET);
            res.json({
                token,
                userId: user._id
            })
        } else {
            res.json({
                msg: "User doesn't exists"
            })
        }
    } catch (err) {
        res.status(500).json({
            msg: "Something went wrong"
        })
    }
})

router.get("/", userMiddleware, async (req, res) => {
    const userId = req.query.userId;
    try {
        const user = await User.findById(userId, 'firstName lastName username isAdmin');
        res.json({
            user
        })
    } catch(err) {
        res.status(500).json({
            msg: "Something went wrong"
        })
    }
})

router.get('/courses', async (req, res) => {
    try {
        const courses = await Course.find({});
        res.json({
            courses
        })
    } catch(err) {
        res.status(500).json({
            msg: "Something went wrong"
        })
    }
})

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.username;
    try {
        await User.updateOne({
            username,
        },{
            $push: {purchasedCourses: courseId}
        })
        res.json({
            msg: "Course purchased successfully",
            courseId
        })
    } catch (err) {
        res.status(500).json({
            msg: "User not found"
        })
    }
})

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.username
        });
        const purchasedCourses = await Course.find({
            _id: {
                $in:user.purchasedCourses
            }
        });
        res.json({
            purchasedCourses
        })
    } catch(err) {
        res.json({
            msg: "Something went wrong"
        })
    }
})

module.exports = router;