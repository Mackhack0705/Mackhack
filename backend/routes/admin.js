const { Router } = require('express');
const adminMiddleware = require('../middlewares/admin');
const router = Router();
const inputValidation = require('../middlewares/inputValidation');
const { Admin } = require('../db/index');

router.post('/signup',inputValidation, async (req, res) => {
    const body = req.body;
    try {
        const response = await Admin.create(body);
        res.json({
            msg: "Admin created successfully"
        })
    } catch(err) {
        res.status(403).json({
            msg: "Something went wrong"
        })
    }
})

router.post('/signin', (req, res) => {
    const body = req.body;
    
})

router.get('/users/purchasedCourses', adminMiddleware, (req, res) => {

})

router.post('/courses/add', adminMiddleware, (req, res) => {

})

router.get('/courses', (req, res) => {

})

router.delete('/courses/remove', adminMiddleware, (req, res) => {

})

router.put('/courses/update', adminMiddleware, (req, res) => {

})

module.exports = router;