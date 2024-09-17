const express = require('express');
const router = express.Router();
const signupValidation = require('../middlewares/signupValidation');
const courseValidation = require('../middlewares/courseValidation');
const { User, Course, upload, bucket } = require('../db/index');
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


router.post('/upload-image', upload.single('imageFile'), (req, res) => {
    const file = req.file;

    const output = bucket.file(`images/${Date.now()}_${file.originalname}`);

    const stream = output.createWriteStream({
        metadata: {
          contentType: req.file.mimetype,
        },
    });

    stream.on('error', (err) => {
        return res.status(500).json({ err });
    });
    
    stream.on('finish', async () => {
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${output.name}`;
        const fileName = output.name.split('/')[1];
        const imageFile = {
            fileName: fileName,
            path: publicUrl
        }
        res.status(200).json({ 
            msg: 'file uploaded successfully',
            imageFile
         });
    });
    
    stream.end(req.file.buffer);

})

router.post('/upload-video', upload.single('videoFile'), (req, res) => {
    const file = req.file;
    const output = bucket.file(`videos/${Date.now()}_${file.originalname}`);

    const stream = output.createWriteStream({
        metadata: {
        contentType: file.mimetype,
        },
    });

    stream.on('error', (err) => {
        return res.status(500).json({ err });
    });
    
    stream.on('finish', async () => {
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${output.name}`;
        const fileName = output.name.split('/')[1];
        const videoFile = {
            fileName: fileName,
            path: publicUrl
        }
        res.status(200).json({ 
            msg: 'file uploaded successfully',
            videoFile
         });
    });
    
    stream.end(req.file.buffer);

})

router.post('/courses/add', userMiddleware, async (req, res) => {
    const body = req.body;
    
    try {
        const course = await Course.create(body);
        res.status(200).json({
            msg: "Course created successfully"
        })
    } catch (err) {
        res.status(200).json({
            msg: "Course already exists"
        })
    }
})

router.get('/courses', async (req, res) => {
    const instructorId = req.query.instructorId;
    try {
        const courses = await Course.find({ instructorId });
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