const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin');
const userRoute = require('./routes/user');

app.use(bodyParser.json());
app.use('/admin', adminRoute);
app.use('/user', userRoute);

const port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})