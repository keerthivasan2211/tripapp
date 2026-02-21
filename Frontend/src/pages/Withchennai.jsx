import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const temples = [
  {
    name: "Vadapalani Murugan Temple",
    location: "Vadapalani, Chennai",
    timing: "5:00 AM – 9:00 PM",
  },
  {
    name: "Kapaleeswarar Temple",
    location: "Mylapore, Chennai",
    timing: "6:00 AM – 12:00 PM, 4:00 PM – 9:00 PM",
  },
  {
    name: "Parthasarathy Temple",
    location: "Triplicane, Chennai",
    timing: "5:30 AM – 12:00 PM, 4:00 PM – 9:00 PM",
  },
  {
    name: "Ashtalakshmi Temple",
    location: "Besant Nagar, Chennai",
    timing: "6:30 AM – 12:00 PM, 4:00 PM – 9:00 PM",
  },
  {
    name: "Marundeeswarar Temple",
    location: "Thiruvanmiyur, Chennai",
    timing: "7:00 AM – 12:00 PM, 4:00 PM – 8:30 PM",
  },
];

const Withchennai = () => {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-indigo-50 min-h-screen flex flex-col">
      
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-6 py-12">

          {/* TITLE */}
          <h1 className="text-3xl font-bold text-center text-indigo-700 drop-shadow mb-12">
            Chennai One-Day Temple Tour
          </h1>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {temples.map((temple, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <h2 className="text-xl font-semibold text-indigo-800 mb-3">
                  {temple.name}
                </h2>

                <p className="text-sm text-gray-700 mb-2">
                  📍 <b>Location:</b> {temple.location}
                </p>

                <p className="text-sm text-gray-700 mb-6">
                  🕒 <b>Darshan Timings:</b> {temple.timing}
                </p>

                <Link
                  to="/display/withinchennai"
                  className="block text-center bg-indigo-600 text-white py-2 rounded-xl font-semibold hover:bg-indigo-700 transition"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Withchennai;
