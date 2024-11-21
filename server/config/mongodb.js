import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    await mongoose.connect(process.env.MONGODB_URI);

    mongoose.connection.on("connected", () => {
      console.log("Database Connected");
    });
    console.log("database is connected")
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1); // Exit the process if the connection fails
  }
};

export default connectDB;
