const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin');
const userRoute = require('./routes/user');
const dotenv = require('dotenv').config();

app.use(bodyParser.json());
app.use('/admin', adminRoute);
app.use('/user', userRoute);

const port = process.env.PORT || 8080 || 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})