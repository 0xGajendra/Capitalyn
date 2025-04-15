import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log('Hello');

    await mongoose.connect(process.env.MONGODB_URI); // ✅ good, just missing semicolon
    console.log('MongoDB Connected');

  } catch (error) {
    console.log(error.message);
    throw new Error("Error connecting to DB");
  }
};
