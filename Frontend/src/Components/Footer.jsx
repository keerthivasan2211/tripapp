import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      id="app-footer"
      className="bg-gray-900 text-gray-300 pt-10 pb-6 mt-10"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* CONTACT DETAILS */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Contact Us</h2>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">📧 support@tripplanner.com</p>
          <p className="text-sm">
            📍 42, Temple Street, Royapettah, Chennai - 600014
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                🏠 Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                📞 Contact
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-white transition">
                👤 Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* TRIP CATEGORIES */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">
            Trip Categories
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/oneday" className="hover:text-white transition">
                🚗 One Day Trips
              </Link>
            </li>
            <li>
              <Link to="/twoday" className="hover:text-white transition">
                🚌 Two Day Trips
              </Link>
            </li>
            <li>
              <Link to="/withchennai" className="hover:text-white transition">
                🏙️ Chennai Local Trips
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="text-center mt-10 pt-4 border-t border-gray-700">
        <p className="text-sm">
          © {new Date().getFullYear()} TripPlanner. All rights reserved.
        </p>
        <p className="text-xs mt-1 text-gray-400">Designed with ❤️ by Sachin</p>
      </div>
    </footer>
  );
};

export default Footer;
