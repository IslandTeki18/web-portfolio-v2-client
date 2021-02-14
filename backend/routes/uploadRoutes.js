import express from "express";
import { upload } from "../middleware/uploadMiddleware.js";
import { uploadProductImage } from "../controllers/uploadController.js";

const router = express.Router();

router.route("/").post(upload.single("image"), uploadProductImage);

export default router;
