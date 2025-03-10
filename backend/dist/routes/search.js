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
// import { Course } from '../db';
const router = (0, express_1.Router)();
router.post('/courses', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const courseTitle = req.query.q;
    try {
        const response = yield index_1.default.course.findMany({
            where: {
                title: {
                    contains: courseTitle === null || courseTitle === void 0 ? void 0 : courseTitle.toString(),
                    mode: 'insensitive'
                }
            }
        });
        res.json({
            response
        });
    }
    catch (err) {
        res.status(500).json({
            msg: "something went wrong",
            err
        });
    }
}));
router.post('/suggestions', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const title = req.query.q;
    try {
        const output = yield index_1.default.course.findMany({
            where: {
                title: {
                    contains: title === null || title === void 0 ? void 0 : title.toString(),
                    mode: 'insensitive'
                }
            }
        });
        res.json({
            output
        });
    }
    catch (err) {
        res.status(404).json({
            msg: "No results"
        });
    }
}));
exports.default = router;
