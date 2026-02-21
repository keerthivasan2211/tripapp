import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
    trim: true,
  },

  type: {
    type: String,
    enum: ["oneday", "twoday", "WithinChennai"],
    required: true,
  },

  dates: {
    type: [String],   // Array of dates (YYYY-MM-DD)
    required: true,
  },

  createdBy: {
    type: String,
    required: true, // Store admin email or ID
  },

}, { timestamps: true });

export default mongoose.model("Trip", tripSchema);
