import express from "express";
import { upload } from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.route("/").post(upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

export default router;
