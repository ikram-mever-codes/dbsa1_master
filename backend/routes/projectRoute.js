import express from "express";
import { authorized, authorizedAdmin } from "../middleware/authorization.js";
import {
  allProjects,
  createProject,
  deleteProject,
  projectById,
  updateProject,
} from "../controllers/projectController.js";
const router = express.Router();

router.route("/").post(createProject);
router.route("/allProject").get(allProjects);
router.route("/:id").put(updateProject).delete(deleteProject).get(projectById);

export default router;
