const { Router } = require('express');
const router = Router();
const signupValidation = require('../middlewares/signupValidation');
const courseValidation = require('../middlewares/courseValidation');
const { User, Course } = require('../db/index');
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




router.post('/courses/add', userMiddleware, courseValidation, async (req, res) => {
    const body = req.body;
    try {
        const course = await Course.findOne(body);
        if(!course) {
            await Course.create(body);
            res.json({
                msg: "Course created successfully"
            })
        } else {
            res.json({
                msg: "Course already exists"
            })
        }
    } catch (err) {
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