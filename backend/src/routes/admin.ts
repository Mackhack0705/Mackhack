// import { Router } from "express";
// // import signupValidation from '../middlewares/signupValidation';
// // import courseValidation from '../middlewares/courseValidation';
// // import { User, Course, upload, bucket } from '../db/index';
// // import jwt from 'jsonwebtoken';
// // import { JWT_SECRET } from '../config';
// import userMiddleware from '../middlewares/user';
// import prisma from "../db/index";

// const router = Router();


// router.put('/teaching', async (req, res) => {
//     const body = req.body;
//     try {
//         const admin = await prisma.user.update(body);
//         res.json({
//             msg: "You registered as a instructor successfully"
//         })
//     } catch(err) {
//         res.status(403).json({
//             msg: "Something went wrong"
//         })
//     }
// })


// // router.post('/upload-image', (req, res) => {
// //     const file = req.file;

// //     const output = bucket.file(`images/${Date.now()}_${file.originalname}`);

// //     const stream = output.createWriteStream({
// //         metadata: {
// //           contentType: req.file.mimetype,
// //         },
// //     });

// //     stream.on('error', (err) => {
// //         return res.status(500).json({ err });
// //     });
    
// //     stream.on('finish', async () => {
// //         const publicUrl = `https://storage.googleapis.com/${bucket.name}/${output.name}`;
// //         const fileName = output.name.split('/')[1];
// //         const imageFile = {
// //             fileName: fileName,
// //             path: publicUrl
// //         }
// //         res.status(200).json({ 
// //             msg: 'file uploaded successfully',
// //             imageFile
// //          });
// //     });
    
// //     stream.end(req.file.buffer);

// // })

// // router.post('/upload-video', upload.single('videoFile'), (req, res) => {
// //     const file = req.file;
// //     const output = bucket.file(`videos/${Date.now()}_${file.originalname}`);

// //     const stream = output.createWriteStream({
// //         metadata: {
// //         contentType: file.mimetype,
// //         },
// //     });

// //     stream.on('error', (err) => {
// //         return res.status(500).json({ err });
// //     });
    
// //     stream.on('finish', async () => {
// //         const publicUrl = `https://storage.googleapis.com/${bucket.name}/${output.name}`;
// //         const fileName = output.name.split('/')[1];
// //         const videoFile = {
// //             fileName: fileName,
// //             path: publicUrl
// //         }
// //         res.status(200).json({ 
// //             msg: 'file uploaded successfully',
// //             videoFile
// //          });
// //     });
    
// //     stream.end(req.file.buffer);

// // })

// router.post('/courses/add', async (req, res) => {
//     const body = req.body;
    
//     try {
//         const course = await prisma.course.create({
//             data: body
//         });
//         res.status(200).json({
//             msg: "Course created successfully"
//         })
//     } catch (err) {
//         res.status(200).json({
//             msg: "Course already exists"
//         })
//     }
// })

// router.get('/courses', async (req, res) => {
//     const instructorId = req.query.instructorId;
//     try {
//         const courses = await prisma.course.findMany({
//             where: {
//                 instructorId: instructorId?.toString()
//             }
//         });
//         res.json({
//             courses
//         })
//     } catch (err) {
//         res.status(500).json({
//             msg: "Something went wrong"
//         })
//     }
// })

// router.delete('/courses/remove/:courseId', async (req, res) => {
//     const courseId = req.params.courseId;
//     try {
//         const course = await prisma.course.delete({
//             where: {
//                 id: courseId
//             }
//         });
//         res.json({
//             msg: "Course removed successfully"
//         })
//     } catch (err) {
//         res.status(500).json({
//             msg: "Something went wrong"
//         })
//     }
// })

// router.put('/courses/update/:courseId', async (req, res) => {
//     const body = req.body;
//     const courseId = req.params.courseId;
//     try {
//         const course = await prisma.course.update({
//             where: {
//                 id: courseId
//             },
//             data: body
//          });
//         console.log(course);
//         res.json({
//             msg: "Course updated successfully"
//         })
//     } catch (err) {
//         res.status(500).json({
//             msg: "Something went wrong"
//         })
//     }
// })

// export default router;