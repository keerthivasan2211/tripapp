import jwt from "jsonwebtoken";

export const adminAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
console.log(authHeader)
    // No token
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    // Decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
console.log(decoded.userType)
    // Check if user is admin
    if (decoded.userType !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    // Append user data to request
    req.user = decoded;

    next();

  } catch (error) {
    console.log("Admin auth error:", error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
