// Import mongoose library
const mongoose = require('mongoose');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const crypto = require('crypto');
const path = require('path');
const dotenv = require('dotenv').config();

// Connect to the mongodb instance
mongoose.connect(process.env.MONGO_URL);

const conn = mongoose.connection;

// Init gfs
let gfs;

conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
})

// Create Storage engine
const storage = new GridFsStorage({
    url: process.env.MONGO_URL,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
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
    file: String
})

const User = mongoose.model('user', userSchema);
const Course = mongoose.model('course', courseSchema);

module.exports = {
    User,
    Course,
    upload
}