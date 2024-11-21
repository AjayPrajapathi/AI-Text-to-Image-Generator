import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import {userRouter} from "./routes/userRoutes.js"
import { imageRouter } from "./routes/imageRoutes.js";

const PORT = process.env.PORT || 4000;
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Function to start the server
const startServer = async () => {
  try {
    // Connect to the database
    await connectDB();


    // userRouter
    app.use('/api/user',userRouter)
    app.use('/api/image',imageRouter)
    // Routes
    app.get("/", (req, res) => res.send(`Server ${PORT} is now activated`));

    // Start the server
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.error("Failed to start the server:", error.message);
    process.exit(1); // Exit the process with failure
  }
};

// Start the server
startServer();
