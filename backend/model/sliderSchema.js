import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema({
  text: { type: String, required: true },
  description: { type: String },
  image: { type: String, required: true },
  button: { type: String, required: true },
  link: { type: String, required: true },
});

const slider = mongoose.model("Slider", sliderSchema);
export default slider;
