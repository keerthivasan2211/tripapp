import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

// Temples for 1-day trip from Chennai
const temples = [
  {
    name: "Tiruttani Murugan Temple",
    location: "Tiruttani (90 km from Chennai)",
    timing: "5:45 AM – 9:00 PM",
  },
  {
    name: "Ekambareswarar Temple",
    location: "Kanchipuram (75 km from Chennai)",
    timing: "6:00 AM – 12:30 PM, 4:00 PM – 8:30 PM",
  },
  {
    name: "Kamakshi Amman Temple",
    location: "Kanchipuram (75 km from Chennai)",
    timing: "5:30 AM – 12:30 PM, 4:00 PM – 8:30 PM",
  },
  {
    name: "Mahabalipuram Shore Temple",
    location: "Mahabalipuram (60 km from Chennai)",
    timing: "6:00 AM – 6:00 PM",
  },
  {
    name: "Thiruporur Murugan Temple",
    location: "Thiruporur (45 km from Chennai)",
    timing: "6:00 AM – 8:00 PM",
  },
];

const Oneday = () => {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-indigo-50 min-h-screen flex flex-col">

      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT WRAPPER */}
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-6 py-12">

          {/* TITLE */}
          <h1 className="text-3xl font-bold text-center text-indigo-700 tracking-wide drop-shadow mb-12">
            One Day Temple Trip From Chennai
          </h1>

          {/* CARD GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {temples.map((temple, index) => (
              <div
                key={index}
                className="
                  bg-white 
                  rounded-2xl 
                  border 
                  border-gray-200 
                  shadow-lg 
                  hover:shadow-2xl 
                  hover:-translate-y-1 
                  transition-all 
                  duration-300 
                  p-6 
                  flex 
                  flex-col 
                  justify-between 
                  h-full
                "
                style={{ minHeight: "260px" }}
              >
                <div>
                  {/* TEMPLE NAME */}
                  <h2 className="text-xl font-semibold text-indigo-800 mb-3 leading-tight">
                    {temple.name}
                  </h2>

                  {/* LOCATION */}
                  <p className="text-gray-700 text-sm mb-3">
                    📍 <b>Location:</b> {temple.location}
                  </p>

                  {/* TIMINGS */}
                  <p className="text-gray-700 text-sm mb-6">
                    🕒 <b>Darshan Timings:</b> {temple.timing}
                  </p>
                </div>

                {/* BUTTON */}
                <Link
                  to="/display/oneday"
                  className="
                    block 
                    text-center 
                    py-2 
                    rounded-xl 
                    font-semibold 
                    bg-indigo-600 
                    text-white 
                    hover:bg-indigo-700 
                    transition
                  "
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

export default Oneday;
