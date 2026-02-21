import express from "express";
const router = express.Router();
import { createAdmin } from "../Controllers/AdminController.js";
import { adminAuth } from "../Middleware/AdminAuth.js";
import { getAllLogs } from "../Controllers/AdminController.js";
import { addTrip } from "../Controllers/AdminController.js";

router.post("/adminsignup", createAdmin);
router.get("/LSlogs",adminAuth,getAllLogs)
router.post("/addtrip",adminAuth,addTrip)



export default router;