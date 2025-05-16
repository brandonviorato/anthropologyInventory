const express = require("express");
const fileUpload = require("express-fileupload");
const specimensRouter = require('./routes/specimens.js');
const authRouter = require("./routes/auth.js");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // load environment variables

const app = express();
const PORT = 3001;

//allow cross origin script requests for all routes (for development purposes)
app.use(cors({
    origin: "*"
}));

// default options
app.use(fileUpload());

// middleware: log requests to the console
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// middleware to parse JSON request bodies
app.use(express.json());

// serve the uploads folder statically at /uploads
app.use("/uploads", express.static("../uploads")); // path needs to be hardcoded for deployment

// serve the svg folder statically at /svg
app.use("/svg", express.static("../svg")); // path needs to be hardcoded for deployment

// routes
app.use('/api/specimens', specimensRouter);
app.use('/api', authRouter);

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