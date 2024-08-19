const { Router } = require('express');
const { Course } = require('../db');

const router = Router();

// router.post('/:courseTitle', async (req, res) => {
//     const courseTitle = req.params.courseTitle;

//     try {
//         const response = await Course.find({
//             title: {$regex: courseTitle, $options: 'i'}
//         });
//         res.json({
//             response
//         })
//     } catch (err) {
//         console.log(err);
//     }
// })

router.post('/suggestions', async (req, res) => {
    const title = req.query.q;
    console.log(title);
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