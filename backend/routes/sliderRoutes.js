import express from "express";
import { authorized, authorizedAdmin } from "../middleware/authorization.js";
import {
  allSliders,
  createSlider,
  deleteSlider,
  sliderById,
  updateSlider,
} from "../controllers/sliderController.js";

const router = express.Router();

router.post("/", createSlider);
router.route("/allSliders").get(allSliders);
// router
//   .route("/:id")
//   .put(authorized, authorizedAdmin, updateSlider)
//   .delete(authorized, authorizedAdmin, deleteSlider)
//   .get(sliderById);

router.route("/:id").put(updateSlider).delete(deleteSlider).get(sliderById);

export default router;
