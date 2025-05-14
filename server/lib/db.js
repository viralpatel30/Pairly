import mongoose from "mongoose";

// Function to connect to the  MongoDB database
export const connectDB = async () => {
  try {
    // event 
    mongoose.connection.on("connected", () => {
      console.log("MongoDB Database connected!!");
    });
    await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
