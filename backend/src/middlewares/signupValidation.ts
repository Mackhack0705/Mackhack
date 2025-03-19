// // inputValidation for handling input validation
// import { NextFunction, Request, Response } from 'express';
// import zod from 'zod';

// const inputSchema = zod.object({
//     firstName: zod.string(),
//     lastName: zod.string(),
//     username: zod.string().email(),
//     password: zod.string().min(6),
//     provider: zod.string(),
//     isAdmin: zod.boolean()
// })

// export default function inputValidation(req: Request, res: Response, next: NextFunction) {
//     const body = req.body;
//     console.log(body);
//     const response = inputSchema.safeParse(body);
//     console.log(response);
//     if(!response.success) {
//         return res.status(411).json({
//             msg: "Incorrect type of input"
//         })
//     }
//     next();
// }
