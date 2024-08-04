import express from "express";
import {
  createImageHotSpots,
  deleteAnnotationImage,
  updateAnnotationImage,
} from "../controllers/tooltipController.js";
import { authorized, authorizedAdmin } from "../middleware/authorization.js";

const router = express.Router();

router.post("/create", createImageHotSpots);

router.post("/update", updateAnnotationImage);

router.get("/delete/:id", deleteAnnotationImage);

export default router;
