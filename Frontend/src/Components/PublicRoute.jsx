import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // If no token → allow access to public pages
  if (!token) return children;

  try {
    const decoded = jwtDecode(token);

    // Admin should NOT see login/signup → redirect to /admin
    if (decoded.userType === "admin") {
      return <Navigate to="/admin" replace />;
    }

    // Normal user should NOT see login/signup → redirect to /home
    return <Navigate to="/home" replace />;

  } catch (error) {
    localStorage.removeItem("token");
    return children;
  }
};

export default PublicRoute;
