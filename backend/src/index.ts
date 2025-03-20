import express from 'express';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './auth';
import bodyParser from 'body-parser';
// import adminRoute from './routes/admin';
// import userRoute from './routes/user';
// import searchRoute from './routes/search';
// import courseRoute from './routes/course';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8080 || 3000;
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.all("/api/auth/*", toNodeHandler(auth), (req, res) => {
    console.log('Request reached auth handler:', req.method, req.url);
    console.log('Request body:', req.body); // Verify payload
});

app.use(bodyParser.json());
// app.use('/admin', adminRoute);
// app.use('/user', userRoute);
// app.use('/search', searchRoute);
// app.use('/course', courseRoute);


app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})


// app.timeout = 600000;