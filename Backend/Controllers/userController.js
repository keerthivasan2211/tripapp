import User from "../Models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import LoginLog from "../Models/Log.js"

export const signupUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

  
     const now = new Date();

const loginDate = now.toLocaleDateString("en-GB");      // DD/MM/YYYY
const loginTime = now.toLocaleTimeString("en-GB");       // HH:MM:SS

// Save login details to DB
await LoginLog.create({
  username:username,
  email: email,
  loginDate,
  loginTime,
  activityType: "signup",
  userType:"user"
});

  await newUser.save();

   
   await LoginLog.create({
  username: username,
  email: email,
  loginDate,
  loginTime,
  activityType: "signup",
  userType: "user"   
});


    res.status(201).json({
      message: "Signup successful",
      user: { username: newUser.username, email: newUser.email }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const now = new Date();
    const loginDate = now.toLocaleDateString("en-GB");
    const loginTime = now.toLocaleTimeString("en-GB");

   await LoginLog.create({
  username: existingUser.username,
  email: existingUser.email,
  loginDate,
  loginTime,
  activityType: "login",
  userType: existingUser.userType   
});

    // ⭐ Correct userType
    const token = jwt.sign(
      {
        id: existingUser._id,
        userType: existingUser.userType,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      user: {
        username: existingUser.username,
        email: existingUser.email,
        userType: existingUser.userType
      },
      token,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};



export const getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      username: user.username,
      email: user.email,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
