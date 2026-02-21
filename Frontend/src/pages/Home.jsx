import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.post(
          "https://tripapp-backend-24jx.onrender.com/api/users/userdetails",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(res.data);
      } catch (error) {
        console.log("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-200 via-purple-100 to-blue-100">

      {/* HEADER */}
      <Header username={user?.username} />

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold text-indigo-700 drop-shadow-lg">
          Plan Your Perfect Journey
        </h1>

        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Welcome,{" "}
          <span className="text-indigo-700 font-semibold">
            {user?.username || "Traveler"}
          </span>{" "}
          👋 — choose your next spiritual adventure!
        </p>
      </section>

      {/* MAIN GRID SECTION */}
      <main className="flex-grow px-6 max-w-6xl mx-auto pb-16">
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-10 
            place-items-stretch
          "
        >
          {/* CARD DATA */}
          {[
            {
              title: "One Day Trip",
              desc: "Short, refreshing getaways perfect for a full day.",
              route: "/oneday",
            },
            {
              title: "Two Days Trip",
              desc: "Weekend temple exploration & spiritual retreats.",
              route: "/twoday",
            },
            {
              title: "Trips Within Chennai",
              desc: "Discover hidden spiritual gems inside the city.",
              route: "/withchennai",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                backdrop-blur-xl 
                bg-white/60 
                border border-white/40 
                p-8 
                rounded-3xl 
                shadow-xl 
                hover:shadow-2xl 
                transition-all 
                hover:-translate-y-1 
                flex 
                flex-col 
                justify-between
              "
            >
              <div>
                <h2 className="text-3xl font-bold text-indigo-700 mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-700 mb-6">{item.desc}</p>
              </div>

              <button
                onClick={() => navigate(item.route)}
                className="
                  w-full 
                  bg-indigo-600 
                  text-white 
                  py-3 
                  rounded-xl 
                  font-semibold 
                  hover:bg-indigo-700 
                  transition
                "
              >
                Explore Now
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;
