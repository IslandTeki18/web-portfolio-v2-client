import express from "express";
const router = express.Router();
import {
  getAdminProfile,
  postAuthUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.post("/admin/login", postAuthUser);
router.route("/profile").get(protect, admin, getAdminProfile);

export default router;
