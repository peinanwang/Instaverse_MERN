import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";
import router from './routes/storyRoutes.js'; 

// initialize the app with express, which is a node.js framework to create routing of the application
const app = express();
dotenv.config();

// set up body-parser so we can properly send and receive requests
app.use(bodyParser.json({ limit: "32mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }));

app.use(cors());

// all the routes in storyRoutes will be prefixed with /stories (e.g., localhost:5001/stories)
app.use("/stories", router);


/*************************** DATABASE CONNECTION ***************************/

// connect app to the database at www.mongodb.com/cloud/atlas
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5001;

// function to connect to the database
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI); // mongoos.connect() returns a promise, so we can use async/await
        app.listen(PORT, () => console.log("Server running on port: " + PORT));
    } catch (err) {
        console.log("Connection to MongoDB failed", err.message);
    }
}

connectDB();

mongoose.connection.on("open", () => console.log("Connection to database has been established"));
mongoose.connection.on("error", (err) => console.log(err));

