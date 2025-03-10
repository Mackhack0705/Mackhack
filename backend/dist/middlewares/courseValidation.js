"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = courseValidation;
const zod_1 = __importDefault(require("zod"));
const courseSchema = zod_1.default.object({
    title: zod_1.default.string(),
    description: zod_1.default.string(),
    price: zod_1.default.number(),
    imageLink: zod_1.default.string()
});
function courseValidation(req, res, next) {
    const body = req.body;
    const response = courseSchema.safeParse(body);
    if (!response.success) {
        return res.status(411).json({
            msg: "Incorrect type of input"
        });
    }
    next();
}
