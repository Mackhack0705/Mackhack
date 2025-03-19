// import { Router } from 'express';
// import prisma from '../db/index';
// // import { Course } from '../db';


// const router = Router();

// router.get('/:courseId', async (req, res) => {
//     const courseId = req.params.courseId;
//     try {
//         const output = await prisma.course.findFirst({
//             where: {
//                 id: courseId
//             }
//         });
//         res.json({
//             output
//         })
//     } catch (err) {
//         res.status(404).json({
//             msg: "Course doesn't exists"
//         })
//     }
// })

// export default router;