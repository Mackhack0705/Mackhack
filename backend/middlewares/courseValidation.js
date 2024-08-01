const zod = require('zod');

const courseSchema = zod.object({
    title: zod.string(),
    description: zod.string(),
    price: zod.number(),
    imageLink: zod.string()
})

function courseValidation(req, res, next) {
    const body = req.body;
    const response = courseSchema.safeParse(body);
    if(!response.success) {
        return res.status(411).json({
            msg: "Incorrect type of input"
        })
    }
    next();
}

module.exports = courseValidation;