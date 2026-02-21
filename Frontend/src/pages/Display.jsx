import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import templeImg from "../assets/1000_F_485386674_ims92ryguzaDNWlDB9lcqSdkyTY3BfTn.jpg";
import tempalate2 from "../assets/c15040f935ef3c95005f2e60c6f8526d.jpg"
import template3 from "../assets/tiru.webp"

// Custom close icon
const CloseIcon = ({ size = 26 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Display = ({ type }) => {
  const [showPayment, setShowPayment] = useState(false);

  // ------------------------ TRIP DATA ------------------------

const oneDay = {
  title: "Tiruttani Murugan Temple — 1 Day Trip",
  subtitle: "A Sacred Pilgrimage to One of the Arupadai Veedu",
  boarding: "Egmore / Koyambedu (CMBT)",
  departure: "05:00 AM",
  freshup: "Fresh-up available at Tiruttani lodge / nearby hotel",
  image:
   template3,

  itinerary: [
    {
      time: "05:00 AM",
      title: "Departure from Chennai",
      details: "Start from Egmore / CMBT (2–2.5 hr travel).",
    },
    {
      time: "07:30 AM",
      title: "Arrival at Tiruttani",
      details: "Fresh-up available at nearby lodges/hotels.",
    },
    {
      time: "08:00 AM",
      title: "Tiruttani Murugan Temple Darshan",
      details:
        "Main hill temple darshan. Temple Timings: 5 AM – 9 PM. (Peak hours may vary)",
    },
    {
      time: "10:30 AM",
      title: "Breakfast",
      details: "Nearby veg hotel at Tiruttani town.",
    },
    {
      time: "11:30 AM",
      title: "Hill Viewpoint Walk",
      details: "Optional: Enjoy panoramic view of Tiruttani hills.",
    },
    {
      time: "01:00 PM",
      title: "Lunch",
      details: "Local veg restaurant near bus stand.",
    },
    {
      time: "02:30 PM",
      title: "Return Journey to Chennai",
      details: "Depart after lunch.",
    },
    {
      time: "05:00 PM",
      title: "Reach Chennai",
      details: "Trip ends — drop at Egmore / CMBT.",
    },
  ],
};


  const twoDay = {
    title: "Brihadeeswarar + Vadapalani — 2 Day Trip",
    subtitle: "A Divine Temple Trail in Tamil Nadu",
    boarding: "Central Railway / CMBT",
    departure: "05:00 AM",
    freshup: "Fresh-up available at Thanjavur hotel",
    image:
      templeImg,
    itinerary: [
      { day: "DAY 1" },
      { time: "05:00 AM", title: "Depart from Chennai", details: "Breakfast en-route." },
      { time: "12:00 PM", title: "Brihadeeswarar Temple", details: "Darshan in Thanjavur." },
      { time: "01:00 PM", title: "Lunch", details: "Hotel stay." },
      { time: "06:00 PM", title: "Local Sightseeing", details: "Night stay at hotel." },

      { day: "DAY 2" },
      { time: "06:00 AM", title: "Breakfast", details: "Hotel breakfast." },
      { time: "01:00 PM", title: "Vadapalani Temple", details: "Darshan in Chennai." },
      { time: "05:00 PM", title: "End of Trip", details: "Return home." },
    ],
  };

 const withinChennai = {
  title: "Vadapalani Murugan Temple — 1 Day Trip",
  subtitle: "A Divine Chennai Pilgrimage to Lord Murugan",
  boarding: "Egmore / T. Nagar / Vadapalani Junction",
  departure: "06:00 AM",
  freshup: "Fresh-up available at Vadapalani hotel / nearby lodge",
  image:tempalate2,

  itinerary: [
    {
      time: "06:00 AM",
      title: "Departure from Chennai",
      details: "Pickup from Egmore / T. Nagar / Vadapalani (15–25 mins travel).",
    },
    {
      time: "06:30 AM",
      title: "Vadapalani Murugan Temple Darshan",
      details:
        "Early morning darshan. Temple Timings: 5:00 AM – 12:30 PM & 4:00 PM – 9:00 PM.",
    },
    {
      time: "08:00 AM",
      title: "Breakfast",
      details:
        "Nearby veg restaurants available (A2B, Hot Chips, Saravana Bhavan).",
    },
    {
      time: "09:30 AM",
      title: "Arulmigu Periya Nachiyar Temple (Optional)",
      details:
        "Short spiritual stop near Vadapalani for peaceful darshan.",
    },
    {
      time: "11:00 AM",
      title: "Shopping / Temple Street Walk",
      details:
        "Explore local stores for pooja items, kumkum, vibuthi, and souvenirs.",
    },
    {
      time: "12:30 PM",
      title: "Lunch",
      details:
        "South Indian meals at Vadapalani restaurants (Nandhini, Sri Krishnas, A2B).",
    },
    {
      time: "02:00 PM",
      title: "Forum Vijaya Mall Visit (Optional)",
      details:
        "Relax, enjoy snacks, or do light shopping (5 mins from temple).",
    },
    {
      time: "04:00 PM",
      title: "Evening Darshan (Optional)",
      details: "Revisit Vadapalani temple during evening pooja time.",
    },
    {
      time: "05:00 PM",
      title: "Return Trip",
      details: "Drop-off at Egmore / T. Nagar / Vadapalani. Trip ends.",
    },
  ],
};


  const selected =
    type === "oneday" ? oneDay : type === "twoday" ? twoDay : withinChennai;

  // ------------------------ PAYMENT MODAL ------------------------
  const PaymentModal = () => (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex justify-center items-center z-[200]">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg relative">
        <button
          className="absolute right-5 top-5 text-gray-600 hover:text-red-600"
          onClick={() => setShowPayment(false)}
        >
          <CloseIcon />
        </button>

        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-4">
          Booking Payment
        </h2>

        <p className="text-center text-gray-600 mb-4">
          ⚠️ Payment is <b>Non-Refundable</b>
        </p>

        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=230x230&data=GPay9876543210"
          className="mx-auto rounded-xl shadow-lg"
        />

        <p className="text-center font-semibold mt-3 text-indigo-700 text-lg">
          GPay Number: 9234567890
        </p>
      </div>
    </div>
  );

  // ------------------------ PAGE RENDER ------------------------
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {/* HEADER */}
      <Header />

      {/* BANNER */}
      <div className="bg-indigo-700 text-white text-center py-10 shadow-lg">
        <h1 className="text-4xl font-extrabold">{selected.title}</h1>
        <p className="text-lg opacity-90 mt-2">{selected.subtitle}</p>
      </div>

      {/* MAIN CONTENT LAYOUT */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-10 py-12 px-4">

        {/* ---------------- LEFT PANEL ---------------- */}
        <div className="bg-white rounded-2xl shadow-xl p-6 border h-fit sticky top-24">

          {/* IMAGE */}
          <img
            src={selected.image}
            alt="Temple"
            className="w-full h-60 object-cover rounded-2xl shadow mb-6"
          />

          {/* TRIP DETAILS */}
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">⏱ Trip Details</h2>

          <p className="text-gray-700 mb-3">
            <b>Boarding:</b> {selected.boarding}
          </p>

          <p className="text-gray-700 mb-3">
            <b>Departure:</b> {selected.departure}
          </p>

          <p className="text-gray-700 mb-4">
            <b>Fresh-up:</b> {selected.freshup}
          </p>

          {/* BOOK NOW */}
          <button
            onClick={() => setShowPayment(true)}
            className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold shadow-lg transition"
          >
            Book Now
          </button>
        </div>

        {/* ---------------- RIGHT PANEL : ITINERARY ---------------- */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 border">

          <h2 className="text-2xl font-bold text-indigo-700 mb-6">🧭 Trip Itinerary</h2>

          <div className="space-y-6">
            {selected.itinerary.map((step, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-gray-50 border shadow-sm hover:shadow-md transition"
              >
                {step.day && (
                  <p className="text-indigo-600 font-bold text-lg mb-2">{step.day}</p>
                )}

                {step.time && (
                  <p className="text-indigo-700 font-semibold">{step.time}</p>
                )}

                {step.title && (
                  <p className="text-xl font-bold text-gray-800">{step.title}</p>
                )}

                {step.details && (
                  <p className="text-gray-700">{step.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />

      {showPayment && <PaymentModal />}
    </div>
  );
};

export default Display;
