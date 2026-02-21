import React, { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [activePage, setActivePage] = useState("logs");
  const [logs, setLogs] = useState([]);

  const [tripData, setTripData] = useState({
    location: "",
    type: "",
    dates: [],
  });

  // Fetch Login Logs
  const fetchLogs = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("https://tripapp-backend-24jx.onrender.com/api/admin/LSlogs", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setLogs(res.data.logs || []);
      setActivePage("logs");

    } catch (error) {
      console.log("Error fetching logs:", error);
      alert("Failed to load logs");
    }
  };

  // Handle input change
  const handleTripChange = (e) => {
    setTripData({ ...tripData, [e.target.name]: e.target.value });
  };

  // Submit Trip to Backend
  const handleTripSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/trips/add",
        tripData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Trip added successfully!");
      console.log(res.data);

      // Reset form
      setTripData({
        location: "",
        type: "",
        dates: [],
      });

    } catch (error) {
      console.log("Error adding trip:", error);
      alert("Failed to add trip");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-indigo-700 text-white flex flex-col p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>

        <nav className="flex flex-col gap-4 font-medium">
          {/* LOGIN LOGS */}
          <button
            className="text-left bg-indigo-600 px-3 py-2 rounded-lg hover:bg-indigo-500"
            onClick={fetchLogs}
          >
            Login Logs
          </button>

          {/* ADD TRIP */}
          <button
            className="text-left bg-indigo-600 px-3 py-2 rounded-lg hover:bg-indigo-500"
            onClick={() => setActivePage("addTrip")}
          >
            Add Trip
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Welcome Admin 👑</h2>

          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
          >
            Logout
          </button>
        </div>

        {/* ---------------------- LOGIN LOGS ------------------------ */}
        {activePage === "logs" && (
          <div>
            <h3 className="text-2xl font-bold mb-4">User Login Logs</h3>

            <table className="w-full bg-white shadow rounded-xl border">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="py-3 px-4">Username</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">User Type</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Time</th>
                  <th className="py-3 px-4">Activity</th>
                </tr>
              </thead>

              <tbody>
                {logs.map((log, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-2 px-4">{log.username}</td>
                    <td className="py-2 px-4">{log.email}</td>
                    <td className="py-2 px-4">{log.userType}</td>
                    <td className="py-2 px-4">{log.loginDate}</td>
                    <td className="py-2 px-4">{log.loginTime}</td>
                    <td className="py-2 px-4">{log.activityType}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {logs.length === 0 && (
              <p className="text-gray-600 mt-4">No logs available.</p>
            )}
          </div>
        )}

        {/* ---------------------- ADD TRIP FORM ------------------------ */}
        {activePage === "addTrip" && (
          <div className="max-w-lg mx-auto bg-white shadow p-8 rounded-xl border">
            <h3 className="text-2xl font-bold mb-6">Add New Trip</h3>

            <form onSubmit={handleTripSubmit} className="space-y-4">

              {/* Location */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Trip Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={tripData.location}
                  onChange={handleTripChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              {/* Trip Type */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Trip Type
                </label>
                <select
                  name="type"
                  value={tripData.type}
                  onChange={handleTripChange}
                  className="w-full p-2 border rounded-lg"
                  required
                >
                  <option value="">Select Trip Type</option>
                  <option value="oneday">One Day Trip</option>
                  <option value="twoday">Two Day Trip</option>
                  <option value="WithinChennai">Within Chennai</option>
                </select>
              </div>

              {/* Multiple Dates */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Trip Dates (Add Multiple)
                </label>

                <div className="flex gap-3">
                  <input
                    type="date"
                    id="tripDateInput"
                    className="w-full p-2 border rounded-lg"
                  />

                  <button
                    type="button"
                    onClick={() => {
                      const input = document.getElementById("tripDateInput");
                      if (input.value) {
                        setTripData({
                          ...tripData,
                          dates: [...tripData.dates, input.value],
                        });
                        input.value = "";
                      }
                    }}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500"
                  >
                    Add
                  </button>
                </div>

                {/* Display Dates */}
                <div className="mt-3 space-y-2">
                  {tripData.dates.map((d, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between bg-gray-100 px-3 py-2 rounded-lg"
                    >
                      <span>{d}</span>

                      <button
                        type="button"
                        onClick={() => {
                          setTripData({
                            ...tripData,
                            dates: tripData.dates.filter((_, i) => i !== idx),
                          });
                        }}
                        className="text-red-500 hover:text-red-700 font-semibold"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-500 transition"
              >
                Add Trip
              </button>

            </form>
          </div>
        )}

      </main>
    </div>
  );
};

export default Admin;
