import express from "express";
import {
  getAllDocuments,
  updateDocument,
  uploadDocument,
  uploadMiddleware,
  deleteDocument,
} from "../controllers/documentController.js";
import { authorized, authorizedAdmin } from "../middleware/authorization.js";

const router = express.Router();

router.post(
  "/upload",
  authorized,
  authorizedAdmin,
  uploadMiddleware,
  uploadDocument
);

router.get("/all", getAllDocuments);

router.put("/update/:id", uploadMiddleware, updateDocument);

router.delete("/delete/:id", deleteDocument);

export default router;