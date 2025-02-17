import express from 'express';
import specimensRouter from './routes/specimens.js';
import mongoose from 'mongoose'; // used to interfact with db
import dotenv from 'dotenv';

dotenv.config(); // load environment variables

const app = express();
const PORT = process.env.PORT;

// middleware: log requests to the console
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// middleware to parse JSON request bodies
app.use(express.json());

// routes
app.use('/api/specimens', specimensRouter);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(PORT, () => {
            console.log("MongoDB connected successfully!");
            console.log(`listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error(error);
    });