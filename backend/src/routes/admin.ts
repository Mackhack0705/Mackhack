import { Router } from "express";
// import signupValidation from '../middlewares/signupValidation';
// import courseValidation from '../middlewares/courseValidation';
// import { User, Course, upload, bucket } from '../db/index';
// import jwt from 'jsonwebtoken';
// import { JWT_SECRET } from '../config';
// import userMiddleware from '../middlewares/user';
import prisma from "../db/index";
import { v2 as cloudinary } from 'cloudinary';
import { error } from "console";

const router = Router();


router.put('/teaching', async (req, res) => {
    const body = req.body;
    try {
        const admin = await prisma.user.update(body);
        res.json({
            msg: "You registered as a instructor successfully"
        })
    } catch(err) {
        res.status(403).json({
            msg: "Something went wrong"
        })
    }
})

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Click 'View API Keys' above to copy your cloud name
    api_key: process.env.CLOUDINARY_API_KEY, // Click 'View API Keys' above to copy your API key
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

interface CloudinaryImageUploadResponse {
    public_id: string;
    [key: string]: any;
}

interface CloudinaryVideoUploadResponse {
    public_id: string;
    bytes: number;
    duration?: number;
    [key: string]: any;
}


router.post('/upload-image', async (req, res):Promise<any> => {
    const userId = req.headers['userId'] as string | undefined;

    if(!userId) {
        return res.status(403).json({
            msg: "Unauthorized"
        })
    }

    try {
        const formData = await req.body.formData();
        const file = formData.get('imageFile') as File | null;

        if(!file) {
            return res.status(400).json({
                msg: "File not found"
            })
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const result = await new Promise<CloudinaryImageUploadResponse>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                {folder: "lesson-image"},
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result as CloudinaryImageUploadResponse);
                    }
                }
            )
            uploadStream.end(buffer);
        })
        return res.status(200).json({
            publicId: result.public_id,
        })


    } catch (err) {
        console.error("Upload image failed", err);
        return res.status(500).json({
            msg: "Upload image failed"
        })
    }
})

router.post('/upload-video', async (req, res): Promise<any> => {
    const userId = req.headers['userId'] as string | undefined;

    if(!userId) {
        return res.status(403).json({
            msg: "Unauthorized"
        })
    }

    try {
        const formData = await req.body.formData();
        const file = formData.get('imageFile') as File | null;

        if(!file) {
            return res.status(400).json({
                msg: "File not found"
            })
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const result = await new Promise<CloudinaryVideoUploadResponse>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    resource_type: "video",
                    folder: "lesson-video",
                    transformation: [
                        { quality: "auto", fetch_format: "mp4" },
                    ]

                },
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result as CloudinaryVideoUploadResponse);
                    }
                }
            )
            uploadStream.end(buffer);
        })
        return res.status(200).json({
            publicId: result.public_id,
        })


    } catch (err) {
        console.error("Upload image failed", err);
        return res.status(500).json({
            msg: "Upload image failed"
        })
    }

})

router.post('/courses/add', async (req, res) => {
    const body = req.body;
    
    try {
        const course = await prisma.course.create({
            data: body
        });
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
        const courses = await prisma.course.findMany({
            where: {
                instructorId: instructorId?.toString()
            }
        });
        res.json({
            courses
        })
    } catch (err) {
        res.status(500).json({
            msg: "Something went wrong"
        })
    }
})

router.delete('/courses/remove/:courseId', async (req, res) => {
    const courseId = req.params.courseId;
    try {
        const course = await prisma.course.delete({
            where: {
                id: courseId
            }
        });
        res.json({
            msg: "Course removed successfully"
        })
    } catch (err) {
        res.status(500).json({
            msg: "Something went wrong"
        })
    }
})

router.put('/courses/update/:courseId', async (req, res) => {
    const body = req.body;
    const courseId = req.params.courseId;
    try {
        const course = await prisma.course.update({
            where: {
                id: courseId
            },
            data: body
         });
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

export default router;