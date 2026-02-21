import User from "../Models/userModel.js";
import bcrypt from "bcryptjs";
import LoginLog from "../Models/Log.js";
import Trip from "../Models/Tripdetails.js";
// Manual creation of admin user
export const createAdmin = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // 1️⃣ Check if admin already exists
    const existingAdmin = await User.findOne({ email });

    if (existingAdmin) {
      return res.status(400).json({
        message: "Admin with this email already exists"
      });
    }

    // 2️⃣ Hash password
    const hashed = await bcrypt.hash(password, 10);

    // 3️⃣ Create new admin
    const user = await User.create({
      username,
      email,
      password: hashed,
      userType: "admin"
    });

    // 4️⃣ Response
    res.status(201).json({
      message: "Admin created successfully",
      user
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server error",
    });
  }
};




// 📌 Get all login logs
export const getAllLogs = async (req, res) => {
  try {
    console.log("vasan")
    const logs = await LoginLog.find().sort({ loginDate: -1, loginTime: -1 });

    res.status(200).json({
      message: "Login logs fetched successfully",
      logs,
    });

  } catch (error) {
    console.log("Error fetching logs:", error);
    res.status(500).json({ message: "Server error" });
  }
};




export const addTrip = async (req, res) => {
  try {
    const { location, type, dates } = req.body;

    // Validation
    if (!location || !type || !dates || dates.length === 0) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create trip
    const trip = await Trip.create({
      location,
      type,
      dates,
      createdBy: req.user.id,   // admin ID from JWT
    });

    res.status(201).json({
      message: "Trip added successfully",
      trip,
    });

  } catch (error) {
    console.error("Add trip error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
