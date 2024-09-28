// inputValidation for handling input validation
const zod = require('zod');

const inputSchema = zod.object({
    firstName: zod.string(),
    lastName: zod.string(),
    username: zod.string().email(),
    password: zod.string().min(6),
    provider: zod.string()
})

function inputValidation(req, res, next) {
    const body = req.body;
    const response = inputSchema.safeParse(body);
    if(!response.success) {
        return res.status(411).json({
            msg: "Incorrect type of input"
        })
    }
    next();
}

module.exports = inputValidation;