import Annotation from "../model/tooltipAnnotation.js";

// Creating and Saving the Image with ToolTip Hotspots
export const createImageHotSpots = async (req, res) => {
  try {
    console.log("WOrked");
    const { image, annotations } = req.body;

    try {
      const newAnnotation = new Annotation({
        image,
        annotations,
      });

      await newAnnotation.save();
      res.status(201).json({ message: "Image Hotspots Created!", annotations });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Updating Annotation Image

export const updateAnnotationImage = async (req, res) => {
  try {
    let { id, image, annotations } = req.body;

    let annotation = await Annotation.findById(id);
    if (!annotation) {
      return res.status(400).json({ message: "Error: Image Not Found" });
    }
    annotation.image = image || annotation.image;
    annotation.annotations = annotations || annotation.annotations;
    await annotation.save();
    return res
      .status(200)
      .json({ message: "Annotations Updated Successfully!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Deleting Annotation

export const deleteAnnotationImage = async (req, res) => {
  try {
    let { id } = req.params;
    let annotation = await Annotation.findByIdAndDelete(id);

    if (!annotation) {
      return res.status(400).json({ message: "Error: Image Not Found" });
    }
    await Annotation.findByIdAndDelete(id);

    return res.status(200).json({ message: "Annotation Image Deleted!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
