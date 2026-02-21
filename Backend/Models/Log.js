import mongoose from "mongoose";

const loginLogSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  loginDate: {
    type: String, // DD/MM/YYYY
    required: true,
  },

  loginTime: {
    type: String, // HH:MM:SS
    required: true,
  },

  activityType: {
    type: String,
    enum: ["signup", "login"], // allowed values
    required: true,
  },

  userType: {
    type: String,
    enum: ["admin", "user"], // role stored here
    required: true,
  }
});

export default mongoose.model("LoginLog", loginLogSchema);
