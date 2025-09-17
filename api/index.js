import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";   // ✅ import dotenv
import userRouter from "./routes/user.route.js"

dotenv.config();               // ✅ load .env variables

const app = express();

// Debug to check if env is loaded
console.log("MONGO from env:", process.env.MONGO);

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(3000, () => {
      console.log("🚀 Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

  app.use ('/api/user', userRouter);