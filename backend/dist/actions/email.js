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
exports.sendEmail = sendEmail;
const mail_1 = __importDefault(require("@sendgrid/mail"));
function sendEmail(_a) {
    return __awaiter(this, arguments, void 0, function* ({ to, subject, text, }) {
        if (!process.env.SENDGRID_API_KEY) {
            throw new Error("SENDGRID_API_KEY environment variable is not set");
        }
        if (!process.env.EMAIL_FROM) {
            throw new Error("EMAIL_FROM environment variable is not set");
        }
        mail_1.default.setApiKey(process.env.SENDGRID_API_KEY);
        const message = {
            to: to.toLowerCase().trim(),
            from: process.env.EMAIL_FROM,
            subject: subject.trim(),
            text: text.trim(),
        };
        try {
            const [response] = yield mail_1.default.send(message);
            if (response.statusCode === 202) {
                throw new Error(`SendGrid API returned status code ${response.statusCode}`);
            }
            return {
                success: true,
                messageId: response.headers['x-message-id'],
            };
        }
        catch (error) {
            console.error("Error sending email: ", error);
            return {
                success: false,
                message: "Failed to send email. Please try again later.",
            };
        }
    });
}
