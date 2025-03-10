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
router.put('/teaching', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const admin = yield index_1.default.user.update(body);
        res.json({
            msg: "You registered as a instructor successfully"
        });
    }
    catch (err) {
        res.status(403).json({
            msg: "Something went wrong"
        });
    }
}));
// router.post('/upload-image', (req, res) => {
//     const file = req.file;
//     const output = bucket.file(`images/${Date.now()}_${file.originalname}`);
//     const stream = output.createWriteStream({
//         metadata: {
//           contentType: req.file.mimetype,
//         },
//     });
//     stream.on('error', (err) => {
//         return res.status(500).json({ err });
//     });
//     stream.on('finish', async () => {
//         const publicUrl = `https://storage.googleapis.com/${bucket.name}/${output.name}`;
//         const fileName = output.name.split('/')[1];
//         const imageFile = {
//             fileName: fileName,
//             path: publicUrl
//         }
//         res.status(200).json({ 
//             msg: 'file uploaded successfully',
//             imageFile
//          });
//     });
//     stream.end(req.file.buffer);
// })
// router.post('/upload-video', upload.single('videoFile'), (req, res) => {
//     const file = req.file;
//     const output = bucket.file(`videos/${Date.now()}_${file.originalname}`);
//     const stream = output.createWriteStream({
//         metadata: {
//         contentType: file.mimetype,
//         },
//     });
//     stream.on('error', (err) => {
//         return res.status(500).json({ err });
//     });
//     stream.on('finish', async () => {
//         const publicUrl = `https://storage.googleapis.com/${bucket.name}/${output.name}`;
//         const fileName = output.name.split('/')[1];
//         const videoFile = {
//             fileName: fileName,
//             path: publicUrl
//         }
//         res.status(200).json({ 
//             msg: 'file uploaded successfully',
//             videoFile
//          });
//     });
//     stream.end(req.file.buffer);
// })
router.post('/courses/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const course = yield index_1.default.course.create({
            data: body
        });
        res.status(200).json({
            msg: "Course created successfully"
        });
    }
    catch (err) {
        res.status(200).json({
            msg: "Course already exists"
        });
    }
}));
router.get('/courses', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const instructorId = req.query.instructorId;
    try {
        const courses = yield index_1.default.course.findMany({
            where: {
                instructorId: instructorId === null || instructorId === void 0 ? void 0 : instructorId.toString()
            }
        });
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
router.delete('/courses/remove/:courseId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const courseId = req.params.courseId;
    try {
        const course = yield index_1.default.course.delete({
            where: {
                id: courseId
            }
        });
        res.json({
            msg: "Course removed successfully"
        });
    }
    catch (err) {
        res.status(500).json({
            msg: "Something went wrong"
        });
    }
}));
router.put('/courses/update/:courseId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const courseId = req.params.courseId;
    try {
        const course = yield index_1.default.course.update({
            where: {
                id: courseId
            },
            data: body
        });
        console.log(course);
        res.json({
            msg: "Course updated successfully"
        });
    }
    catch (err) {
        res.status(500).json({
            msg: "Something went wrong"
        });
    }
}));
exports.default = router;
