"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = inputValidation;
const zod_1 = __importDefault(require("zod"));
const inputSchema = zod_1.default.object({
    firstName: zod_1.default.string(),
    lastName: zod_1.default.string(),
    username: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
    provider: zod_1.default.string(),
    isAdmin: zod_1.default.boolean()
});
function inputValidation(req, res, next) {
    const body = req.body;
    console.log(body);
    const response = inputSchema.safeParse(body);
    console.log(response);
    if (!response.success) {
        return res.status(411).json({
            msg: "Incorrect type of input"
        });
    }
    next();
}
