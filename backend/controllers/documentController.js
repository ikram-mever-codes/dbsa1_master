import multer from "multer";
import Doc from "../model/documentModel.js";
import fs from "fs";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "documents/");
  },
  filename: (req, file, cb) => {
    const newFileName = req.body.name || file.originalname;
    cb(null, `${newFileName}`);
  },
});

const upload = multer({ storage });

export const uploadMiddleware = upload.fields([
  { name: "file", maxCount: 1 },
  { name: "name", maxCount: 1 },
]);

export const uploadDocument = async (req, res) => {
  try {
    let { name, tag, image } = req.body;
    const file = req.files["file"][0];

    const fileUrl = `${req.protocol}://${req.get("host")}/documents/${
      file.filename
    }`;

    let doc = await Doc.create({
      name: name,
      url: fileUrl,
      tag: tag,
      image: image,
    });
    return res.status(200).json({ message: "Document Uploaded Successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteDocument = async (req, res) => {
  try {
    let { id } = req.params;

    let doc = await Doc.findById(id);
    if (!doc) {
      return res.status(400).json({
        message: "Error: Document Not Found",
      });
    }

    const filePath = path.join("documents", path.basename(doc.url));
    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    } catch (fsError) {
      console.error("File not found or couldn't be deleted:", fsError.message);
    }

    await Doc.findByIdAndDelete(id);

    return res.status(200).json({ message: "Document Deleted Successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getAllDocuments = async (req, res) => {
  try {
    const { tag } = req.query;
    let query = {};

    if (tag) {
      query.tag = tag;
    }

    let docs = await Doc.find(query);

    if (docs.length === 0) {
      return res
        .status(200)
        .json({ message: "No Documents Found!", docs: docs });
    }

    return res.status(200).json({ docs: docs });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateDocument = async (req, res) => {
  try {
    let { id } = req.params;
    let { name, url, image } = req.body;

    let doc = await Doc.findById(id);

    if (!doc) {
      return res.status(400).json({ message: "Error: Document Not Found" });
    }

    // Handle file upload
    if (req.file) {
      const fileUrl = `${req.protocol}://${req.get("host")}/documents/${
        req.file.filename
      }`;
      doc.url = fileUrl;
    }

    // Update other fields if provided
    if (name) doc.name = name;
    if (image) doc.image = image;

    await doc.save();
    return res
      .status(200)
      .json({ message: "Document Updated Successfully", doc });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
