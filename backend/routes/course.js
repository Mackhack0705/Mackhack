const { Router } = require('express');
const { Course } = require('../db');


const router = Router();

router.get('/:courseId', async (req, res) => {
    const courseId = req.params.courseId;
    try {
        const output = await Course.findOne({
            _id: courseId
        });
        res.json({
            output
        })
    } catch (err) {
        res.status(404).json({
            msg: "Course doesn't exists"
        })
    }
})

module.exports = router;