import React, { useState } from "react";
import InputField from "../Components/InputField";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // All fields required
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error("All fields are required!");
      return;
    }

    // Email format check (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Enter a valid email address!");
      return;
    }

    // Password length
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters!");
      return;
    }

    // Password match
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("https://tripapp-backend-24jx.onrender.com/api/users/signup", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      toast.success("Signup successful!");
      navigate("/login");
    } catch (error) {
      console.log(error);
      const msg = error.response?.data?.message || "Something went wrong!";
      toast.error(msg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-pink-500 opacity-30 rounded-full blur-3xl top-10 left-20 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-indigo-500 opacity-30 rounded-full blur-3xl bottom-10 right-20 animate-pulse"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl w-[90%] sm:w-[420px] border border-white/20 relative z-10"
      >
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Create Account
        </h1>

        <form onSubmit={handleSubmit}>
          <InputField
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />

          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />

          <InputField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />

          <InputField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter your password"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
          >
            Sign Up
          </motion.button>
        </form>

        <p className="text-center text-gray-300 mt-6 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-white hover:underline cursor-pointer"
          >
            Log in
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
