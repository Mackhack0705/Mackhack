// import { NextFunction, Request, Response } from "express";

// import zod from 'zod';

// const courseSchema = zod.object({
//     title: zod.string(),
//     description: zod.string(),
//     price: zod.number(),
//     imageLink: zod.string()
// })

// export default function courseValidation(req: Request, res: Response, next: NextFunction) {
//     const body = req.body;
//     const response = courseSchema.safeParse(body);
//     if(!response.success) {
//         return res.status(411).json({
//             msg: "Incorrect type of input"
//         })
//     }
//     next();
// }