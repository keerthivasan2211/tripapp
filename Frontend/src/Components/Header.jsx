// Header.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ username }) => {
  const navigate = useNavigate();

  // Smooth scroll to footer
  const scrollToFooter = () => {
    const footer = document.getElementById("app-footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      
      {/* Logo → Scroll to Footer */}
      <h1
        onClick={scrollToFooter}
        className="text-2xl font-bold text-indigo-600 cursor-pointer"
      >
        TripPlanner
      </h1>

      <div className="flex items-center gap-6 text-gray-700 font-medium">

        {/* CONTACT → Scroll to Footer  */}
        <button
          onClick={scrollToFooter}
          className="text-indigo-600 hover:text-indigo-800 transition font-semibold"
        >
          Contact
        </button>

        {/* USERNAME */}
        <span className="text-indigo-600 font-semibold">{username}</span>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
