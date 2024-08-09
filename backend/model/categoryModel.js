import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 32,
    unique: true,
  },
  startingRate: {
    type: Number,
    required: true,
    default: 0,
  },
  image: {
    type: String,
    required: true,
  },
  subheading: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
  buttonText: {
    type: String,
    default: "",
  },
});

const Category = mongoose.model("Category", categorySchema);
export default Category;
