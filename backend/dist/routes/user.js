"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("../db/index"));
const router = (0, express_1.Router)();
router.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const user = yield index_1.default.user.findFirst({
            where: {
                email: body.email
            }
        });
        if (!user) {
            const userProfile = yield index_1.default.user.create(body);
            res.json({
                msg: "User is created successfully",
                userId: userProfile.id
            });
        }
        else {
            res.json({
                msg: "A User already exists with this username"
            });
        }
    }
    catch (err) {
        res.status(500).json({
            msg: "Something went wrong"
        });
    }
}));
router.post('/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.username;
    const password = req.body.password;
    try {
    }
    catch (err) {
        res.status(500).json({
            msg: "Something went wrong"
        });
    }
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.query.userId;
    try {
        const user = yield index_1.default.user.findFirst({
            where: {
                id: userId === null || userId === void 0 ? void 0 : userId.toString()
            }
        });
        res.json({
            user
        });
    }
    catch (err) {
        res.status(500).json({
            msg: "Something went wrong"
        });
    }
}));
router.get('/courses', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield index_1.default.course.findMany({});
        res.json({
            courses
        });
    }
    catch (err) {
        res.status(500).json({
            msg: "Something went wrong"
        });
    }
}));
// router.post('/courses/:courseId', userMiddleware, async (req, res) => {
//     const courseId = req.params.courseId;
//     const username = req.username;
//     try {
//         await prisma.user.update({
//             where: {
//                 email: username
//             },
//             data: {
//                 enrolledIn: {
//                     connect: {
//                         id: courseId
//                     }
//                 }
//             }
//         })
//         res.json({
//             msg: "Course purchased successfully",
//             courseId
//         })
//     } catch (err) {
//         res.status(500).json({
//             msg: "User not found"
//         })
//     }
// })
// router.get('/purchasedCourses', userMiddleware, async (req, res) => {
//     try {
//         const purchasedCourses = await prisma.course.findMany({
//             where: {
//                 enrolledUsers: {
//                     some: {
//                         user: {
//                             email: req.username
//                         }
//                     }
//                 }
//             }
//         });
//         res.json({
//             purchasedCourses
//         })
//     } catch(err) {
//         res.json({
//             msg: "Something went wrong"
//         })
//     }
// })
exports.default = router;
