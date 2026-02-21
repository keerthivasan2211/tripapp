import express from "express";
import { signupUser,loginUser,getUserDetails} from "../Controllers/userController.js";
import { authMiddleware } from "../Middleware/authMiddleware.js";

const router = express.Router();

// POST /api/users/signup
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/userdetails", authMiddleware,getUserDetails);

export default router;
