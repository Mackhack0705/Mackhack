const express = require('express');
const router = express.Router();
const signupValidation = require('../middlewares/signupValidation');
const courseValidation = require('../middlewares/courseValidation');
const { User, Course, upload } = require('../db/index');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const userMiddleware = require('../middlewares/user');

router.put('/teaching', async (req, res) => {
    const body = req.body;
    try {
        const admin = await User.findOneAndUpdate(body);
        res.json({
            msg: "You registered as a instructor successfully"
        })
    } catch(err) {
        res.status(403).json({
            msg: "Something went wrong"
        })
    }
})


router.use(express.urlencoded({extended: false}))

router.post('/courses/add', upload.single('file'), userMiddleware, async (req, res) => {
    const body = req.body;
    console.log(body);
    console.log(req.file);
    res.json({
        file: req.file
    })
    // try {
    //     // const course = await Course.findOne(body);
    //     // console.log(course);
    //     try {
    //         const course = await Course.create(body);
    //         res.status(200).json({
    //             msg: "Course created successfully"
    //         })
    //     } catch(err) {
    //         console.log(err);
    //     }
    // } catch (err) {
    //     res.status(200).json({
    //         msg: "Course already exists"
    //     })
    // }
})

router.get('/courses', async (req, res) => {
    try {
        const courses = await Course.find({});
        res.json({
            courses
        })
    } catch (err) {
        res.status(500).json({
            msg: "Something went wrong"
        })
    }
})

router.delete('/courses/remove/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    try {
        const course = await Course.findOneAndDelete({ _id:courseId });
        res.json({
            msg: "Course removed successfully"
        })
    } catch (err) {
        res.status(500).json({
            msg: "Something went wrong"
        })
    }
})

router.put('/courses/update/:courseId', userMiddleware, async (req, res) => {
    const body = req.body;
    const courseId = req.params.courseId;
    try {
        const course = await Course.findByIdAndUpdate({ _id:courseId }, body);
        console.log(course);
        res.json({
            msg: "Course updated successfully"
        })
    } catch (err) {
        res.status(500).json({
            msg: "Something went wrong"
        })
    }
})

module.exports = router;