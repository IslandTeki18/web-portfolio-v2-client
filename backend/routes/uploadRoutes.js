import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
import { uploadImages } from "../middleware/uploadMiddleware.js";
import { uploadProductImage } from "../controllers/uploadControler.js";

const router = express.Router();

router
  .route("/")
  .post(protect, admin, uploadImages.single("image"), uploadProductImage);

export default router;
