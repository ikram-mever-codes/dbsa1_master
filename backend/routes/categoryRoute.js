import express from "express";
import formidable from "express-formidable";
const router = express.Router();

import { authorized, authorizedAdmin } from "../middleware/authorization.js";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  readCategory,
  updateCategory,
} from "../controllers/categoryController.js";

router
  .route("/")
  .post(authorized, authorizedAdmin, formidable(), createCategory)
  .get(getAllCategory);
router
  .route("/:id")
  .put(authorized, authorizedAdmin, formidable(), updateCategory)
  .get(authorized, authorizedAdmin, readCategory);

router.delete("/:id", deleteCategory);
export default router;
