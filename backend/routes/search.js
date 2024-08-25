const { Router } = require('express');
const { Course } = require('../db');

const router = Router();

router.post('/courses', async (req, res) => {
    const courseTitle = req.query.q;
    try {
        const response = await Course.find({
            title: {$regex: courseTitle, $options: 'i'}
        });
        res.json({
            response
        })
    } catch (err) {
        res.status(500).json({
            msg: "something went wrong",
            err
        })
    }
})

router.post('/suggestions', async (req, res) => {
    const title = req.query.q;
    try {
        const output = await Course.find({
            title: { $regex: title, $options: 'i' }
        }, 'title');
        res.json({
            output
        })
    } catch (err) {
        res.status(404).json({
            msg: "No results"
        })
    }
})

module.exports = router;