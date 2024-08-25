// Import mongoose library
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// Connect to the mongodb instance
mongoose.connect(process.env.MONGO_URL);

// Create Schema


const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    isAdmin: Boolean,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'course'
    }]
})

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String
})

const User = mongoose.model('user', userSchema);
const Course = mongoose.model('course', courseSchema);

module.exports = {
    User,
    Course
}