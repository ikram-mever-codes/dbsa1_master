import asyncHandler from "../middleware/ErrorHandler.js";
import Slider from "../model/sliderSchema.js";

// Create Slider
export const createSlider = asyncHandler(async (req, res) => {
  const { text, description, image, button, link } = req.body;
  if (!text || !image || !button || !link) {
    res.status(404);
    throw new Error("Please fill all the required fields");
  } else {
    const newSlider = await new Slider({
      text,
      description,
      image,
      button,
      link,
    }).save();
    if (!newSlider) {
      res.status(404);
      throw new Error("Something went wrong");
    }
    res.status(200).json({ message: "Slide Created Successfully!" });
  }
});

// Update Slider
export const updateSlider = asyncHandler(async (req, res) => {
  const { text, description, image, button, link } = req.body;
  const id = req.params.id;

  const existingSlider = await Slider.findById(id);
  if (!existingSlider) {
    res.status(404);
    throw new Error("Slider not found");
  } else {
    existingSlider.text = text || existingSlider.text;
    existingSlider.description = description || existingSlider.description;
    existingSlider.image = image || existingSlider.image;
    existingSlider.button = button || existingSlider.button;
    existingSlider.link = link || existingSlider.link;

    await existingSlider.save();
    res.status(200).json(existingSlider);
  }
});

// Get Slider by ID
export const sliderById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const slider = await Slider.findById(id);
  if (!slider) {
    res.status(404);
    throw new Error("Slider not found");
  } else {
    res.status(200).json(slider);
  }
});

// Get All Sliders
export const allSliders = asyncHandler(async (req, res) => {
  const sliders = await Slider.find({}).sort("-createdAt");
  res.status(200).json({ slides: sliders });
});

// Delete Slider
export const deleteSlider = asyncHandler(async (req, res) => {
  const id = req.params.id;
  await Slider.findByIdAndDelete(id);
  res.status(200).json("Slider deleted successfully");
});
