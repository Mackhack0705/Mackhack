// Import mongoose library
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const admin = require('firebase-admin');
const serviceAccount = {
  "type": process.env.type,
  "project_id": process.env.project_id,
  "private_key_id": process.env.private_key_id,
  "private_key": process.env.private_key.replace(/\\n/g, '\n'),
  "client_email": process.env.client_email,
  "client_id": process.env.client_id,
  "auth_uri": process.env.auth_uri,
  "token_uri": process.env.token_uri,
  "auth_provider_x509_cert_url": process.env.auth_provider_x509_cert_url,
  "client_x509_cert_url": process.env.client_x509_cert_url,
  "universe_domain": process.env.universe_domain
}
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
  instructorId: {
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