// Import mongoose library
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const admin = require('firebase-admin');
const serviceAccount = require('../course-selling-app-83a6b-firebase-adminsdk-t8xer-9f3aff58e0.json');
const multer = require('multer');
const crypto = require('crypto');
const path = require('path');


const upload = multer({ storage: multer.memoryStorage() });


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.STORAGE_BUCKET
})

const bucket = admin.storage().bucket();

// Connect to the mongodb instance
mongoose.connect(process.env.MONGO_URL)


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
  imageFile: {
    fileName: String,
    path: String
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  lessons: [{
    lessonTitle: String,
    videoFile: {
      fileName: String,
      path: String
    },
    duration: String
  }]
});

const User = mongoose.model('user', userSchema);
const Course = mongoose.model('course', courseSchema);

module.exports = {
    User,
    Course,
    upload,
    bucket
}