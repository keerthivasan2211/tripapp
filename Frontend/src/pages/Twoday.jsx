import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const temples = [
  {
    name: "Brihadeeswarar Temple",
    location: "Thanjavur",
    timing: "6:00 AM – 12:30 PM, 4:00 PM – 8:30 PM",
  },
  {
    name: "Sarangapani Temple",
    location: "Kumbakonam",
    timing: "5:00 AM – 12:30 PM, 4:00 PM – 9:00 PM",
  },
  {
    name: "Ranganathaswamy Temple",
    location: "Srirangam (Trichy)",
    timing: "6:00 AM – 1:00 PM, 4:00 PM – 9:00 PM",
  },
  {
    name: "Rockfort Ucchi Pillayar Temple",
    location: "Trichy",
    timing: "6:00 AM – 8:00 PM",
  },
  {
    name: "Thirunageswaram Raghu Temple",
    location: "Kumbakonam",
    timing: "6:00 AM – 12:30 PM, 4:00 PM – 8:30 PM",
  },
];

const Twoday = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-purple-50 min-h-screen flex flex-col">
      
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-6 py-12">

          {/* TITLE */}
          <h1 className="text-3xl font-bold text-center text-indigo-700 drop-shadow mb-12">
            Tamil Nadu 2-Day Temple Trip
          </h1>

          {/* GRID CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {temples.map((temple, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-200"
              >
                <h2 className="text-xl font-bold text-indigo-800 mb-2">
                  {temple.name}
                </h2>

                <p className="text-sm text-gray-700 mb-2">
                  📍 <b>Location:</b> {temple.location}
                </p>

                <p className="text-sm text-gray-700 mb-6">
                  🕒 <b>Darshan Timings:</b> {temple.timing}
                </p>

                <Link
                  to="/display/twoday"
                  className="w-full block bg-indigo-600 text-white py-2 rounded-xl font-semibold text-center hover:bg-indigo-700 transition"
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

export default Twoday;
