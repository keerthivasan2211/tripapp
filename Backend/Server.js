import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./Routes/userRoutes.js";
import adminRoutes from "./Routes/adminRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI ="mongodb+srv://KeerthiVasan:VasanKeerthi@cluster0.mpvz5ch.mongodb.net/?appName=Cluster0";

// 🧠 Middleware
app.use(cors());
app.use(express.json());

// 🚀 Connect MongoDB directly here
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  
  .catch((error) => {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  });

  

// 📦 Routes
app.use("/api/users", userRoutes);
app.use("/api/admin",adminRoutes)


// 🧭 Test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀 and MongoDB connected");
});

// 🚀 Start Server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
