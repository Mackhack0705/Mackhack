// Import mongoose library
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

// Connect to the mongodb instance
mongoose.connect(process.env.MONGO_URL)
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'courseContent',
    allowed_formats: ['jpg', 'png', 'mp4', 'avi', 'mkv'],
    public_id: (req, file) => file.originalname.split('.')[0],
  },
});

const upload = multer({ storage });

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
  imageFileId: mongoose.Schema.Types.ObjectId,
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  lessons: [{
    lessonTitle: String,
    videoFileId: mongoose.Schema.Types.ObjectId, // Store GridFS file ID or URL here
    duration: Number
  }]
});

const User = mongoose.model('user', userSchema);
const Course = mongoose.model('course', courseSchema);

module.exports = {
    User,
    Course,
    upload
}