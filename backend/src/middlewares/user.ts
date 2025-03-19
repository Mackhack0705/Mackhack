// import { Request, Response, NextFunction } from 'express';

// // User Middlewar for handling authentication
// const jwt = require('jsonwebtoken');
// const { JWT_SECRET } = require('../config');

// export default function userMiddleware(req: Request, res: Response, next: NextFunction) {
//     // Implement authentication logic
//     // You need to check the headers and validate the admin from the admin DB. Check README file for exact headers to be expected.
//     const token = req.headers.authorization;
//     if (!token) {
//         return res.status(401).json({
//             msg: "Authorization header missing"
//         });
//     }
//     const originalToken = token.split(" ")[1];
//     try {
//         const decodedValue = jwt.verify(originalToken, JWT_SECRET) as { username: string };
//         (req as any).username = decodedValue.username;
//         next();
//     } catch (err) {
//         res.status(401).json({
//             msg:"User Token is invalid"
//         })
//     }
// }
