"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_1 = require("better-auth/node");
const auth_1 = require("./auth");
const body_parser_1 = __importDefault(require("body-parser"));
const admin_1 = __importDefault(require("./routes/admin"));
const user_1 = __importDefault(require("./routes/user"));
const search_1 = __importDefault(require("./routes/search"));
const course_1 = __importDefault(require("./routes/course"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.all("/api/auth/*", (0, node_1.toNodeHandler)(auth_1.auth));
app.use((0, cors_1.default)({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(body_parser_1.default.json());
app.use('/admin', admin_1.default);
app.use('/user', user_1.default);
app.use('/search', search_1.default);
app.use('/course', course_1.default);
const port = process.env.PORT || 8080 || 3000;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
// app.timeout = 600000;
