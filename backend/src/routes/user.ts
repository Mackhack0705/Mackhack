// import { Router } from 'express';
// import signupMiddleware from '../middlewares/signupValidation';
// import userMiddleware from '../middlewares/user';
// import { JWT_SECRET } from '../config';
// import prisma from '../db/index';
// import { signin, signup } from '../types';

// const router = Router();

// router.post('/signup', async (req, res) => {
//     const body: signup = req.body;
//     try {
//         const user = await prisma.user.findFirst({
//             where: {
//                 email: body.email
//             }
//         });
//         if(!user) {
//             const userProfile = await prisma.user.create(body);
//             res.json({
//                 msg: "User is created successfully",
//                 userId: userProfile.id
//             })
//         } else {
//             res.json({
//                 msg: "A User already exists with this username"
//             })
//         }
//     } catch (err) {
//         res.status(500).json({
//             msg: "Something went wrong"
//         })
//     }
// })

// router.post('/signin', async (req, res) => {
//     const body: signin = req.body;
//     const email = body.username;
//     const password = body.password;
//     try {
        
//     } catch (err) {
//         res.status(500).json({
//             msg: "Something went wrong"
//         })
//     }
// })

// router.get("/", async (req, res) => {
//     const userId = req.query.userId;
//     try {
//         const user = await prisma.user.findFirst({
//             where: {
//                 id: userId?.toString()
//             }
//         });
//         res.json({
//             user
//         })
//     } catch(err) {
//         res.status(500).json({
//             msg: "Something went wrong"
//         })
//     }
// })

// router.get('/courses', async (req, res) => {
//     try {
//         const courses = await prisma.course.findMany({});
//         res.json({
//             courses
//         })
//     } catch(err) {
//         res.status(500).json({
//             msg: "Something went wrong"
//         })
//     }
// })

// // router.post('/courses/:courseId', userMiddleware, async (req, res) => {
// //     const courseId = req.params.courseId;
// //     const username = req.username;
// //     try {
// //         await prisma.user.update({
// //             where: {
// //                 email: username
// //             },
// //             data: {
// //                 enrolledIn: {
// //                     connect: {
// //                         id: courseId
// //                     }
// //                 }
// //             }
// //         })
// //         res.json({
// //             msg: "Course purchased successfully",
// //             courseId
// //         })
// //     } catch (err) {
// //         res.status(500).json({
// //             msg: "User not found"
// //         })
// //     }
// // })

// // router.get('/purchasedCourses', userMiddleware, async (req, res) => {
// //     try {
// //         const purchasedCourses = await prisma.course.findMany({
// //             where: {
// //                 enrolledUsers: {
// //                     some: {
// //                         user: {
// //                             email: req.username
// //                         }
// //                     }
// //                 }
// //             }
// //         });
// //         res.json({
// //             purchasedCourses
// //         })
// //     } catch(err) {
// //         res.json({
// //             msg: "Something went wrong"
// //         })
// //     }
// // })
// export default router;