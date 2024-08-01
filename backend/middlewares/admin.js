// Admin Middleware for handling authentication
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

function adminMiddleware(req, res, next) {
    // Implement authentication logic
    // You need to check the headers and validate the admin from the admin DB. Check README file for exact headers to be expected.
    const token = req.headers.authorization;
    const originalToken = token.split(" ")[1];
    try {
        jwt.verify(originalToken, JWT_SECRET);
        next();
    } catch(err) {
        console.log(err);
    }
}

module.exports = adminMiddleware;