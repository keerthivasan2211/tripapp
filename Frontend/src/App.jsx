import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./Components/ProtectedRoute";
import PublicRoute from "./Components/PublicRoute";
import Home from "./pages/Home";
import Oneday from "./pages/Oneday";
import Admin from "./pages/Admin";
import Twoday from "./pages/twoday";
import Withchennai from "./pages/Withchennai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Display from "./pages/Display"; 

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" />

      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Public routes */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route path="/display" element={<Display/>} />

        {/* Protected routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/oneday"
          element={
            <ProtectedRoute>
              <Oneday />
            </ProtectedRoute>
          }
        />

        <Route
          path="/twoday"
          element={
            <ProtectedRoute>
              <Twoday />
            </ProtectedRoute>
          }
        />

        <Route
          path="/withchennai"
          element={
            <ProtectedRoute>
              <Withchennai />
            </ProtectedRoute>
          }
        />

        {/* Admin-only route */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly={true}>
              <Admin />
            </ProtectedRoute>
          }
        />
<Route path="/display/oneday" element={<Display type="oneday" />} />
<Route path="/display/twoday" element={<Display type="twoday" />} />
<Route path="/display/withinchennai" element={<Display type="withinchennai" />} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
};

export default App;
