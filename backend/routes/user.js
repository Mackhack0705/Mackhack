const { Router } = require('express');
const userMiddleware = require('../middlewares/user');
const router = Router();
const zod = require('zod');

const userSchema = zod.object({
    firstName: zod.string(),
    lastName: zod.string(),
    username: zod.string().email(),
    password: zod.string().min(6)
})

router.post('/signup', (req, res) => {

})

router.post('/signin', (req, res) => {

})

router.get('/courses', (req, res) => {

})

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    const courseId = req.params.courseId;
})

router.get('/purchasedCourses', userMiddleware, (req, res) => {

})

module.exports = router;