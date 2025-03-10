import { Router } from 'express';
import prisma from '../db/index';
// import { Course } from '../db';

const router = Router();

router.post('/courses', async (req, res) => {
    const courseTitle = req.query.q;
    try {
        const response = await prisma.course.findMany({
            where: {
                title: {
                    contains: courseTitle?.toString(),
                    mode: 'insensitive'
                }
            }
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
        const output = await prisma.course.findMany({
            where: {
                title: {
                    contains: title?.toString(),
                    mode: 'insensitive'
                }
            }
        });
        res.json({
            output
        })
    } catch (err) {
        res.status(404).json({
            msg: "No results"
        })
    }
})

export default router;