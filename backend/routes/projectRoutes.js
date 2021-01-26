import express from "express";
const router = express.Router();
import {
  getAllProjects,
  getProjectById,
  postNewProject,
  putProjectById,
  deleteProjectById,
} from "../controllers/projectController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getAllProjects).post(protect, admin, postNewProject);
router
  .route("/:id")
  .get(getProjectById)
  .delete(protect, admin, deleteProjectById)
  .put(protect, admin, putProjectById);

export default router;
