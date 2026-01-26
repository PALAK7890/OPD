import express from "express"
import { getAppointments } from "../controllers/doctor.controller.js"
import { protect } from "../middleware/auth.middleware.js"

const router = express.Router();

router.get(
  "/appointments",
  protect(["doctor"]),
  getAppointments
);

export default router
