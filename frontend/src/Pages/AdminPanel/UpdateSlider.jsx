import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useUploadProductImageMutation } from "../../Redux/Api/productSlice";
import axios from "axios";
import { BASE_URL } from "../../Redux/constant";

const UpdateSlider = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(null);
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [link, setLink] = useState("");
  const [uploadImage] = useUploadProductImageMutation();

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/slider/allSliders`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        setSlides(res.data.slides);
      } catch (error) {
        toast.error("Failed to load slides.");
      }
    };
    fetchSlides();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleEditSlide = (slide) => {
    setCurrentSlide(slide._id);
    setIsEditing(true);
    setText(slide.text);
    setImage(slide.image);
    setButtonText(slide.button);
    setLink(slide.link);
  };

  const handleDeleteSlide = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/api/slider/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setSlides(slides.filter((slide) => slide.id !== id));
      toast.success("Slide deleted successfully");
    } catch (error) {
      toast.error("Failed to delete slide");
    }
  };

  const uploadImageHandler = async (e) => {
    try {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      toast.loading("Uploading Image...");
      const res = await uploadImage(formData).unwrap();
      toast.dismiss();
      toast.success("Image uploaded successfully!");
      setImage(res.image);
    } catch (error) {
      toast.dismiss();
      toast.error("Image upload failed.");
    }
  };

  const handleSaveSlide = async () => {
    try {
      await axios.put(
        `${BASE_URL}/api/slider/${currentSlide}`,
        {
          text,
          image,
          buttonText,
          link,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setSlides(
        slides.map((slide) =>
          slide.id === currentSlide
            ? { ...slide, text, image, buttonText, link }
            : slide
        )
      );
      toast.success("Slide updated successfully");
      resetForm();
    } catch (error) {
      toast.error("Failed to update slide");
    }
  };

  const resetForm = () => {
    setIsEditing(false);
    setCurrentSlide(null);
    setText("");
    setImage("");
    setButtonText("");
    setLink("");
  };

  return (
    <div className="min-h-screen w-[90%] mx-auto px-5 py-4 font-sans flex flex-col items-center gap-6">
      <h1 className="text-gray-700 font-bold text-3xl tracking-wide mb-8">
        Manage Your Slider
      </h1>

      {!isEditing && slides.length > 0 && (
        <div className="relative w-full max-w-2xl overflow-hidden rounded-lg shadow-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="min-w-full flex flex-col items-center gap-4 p-4"
              >
                <img
                  src={slide.image}
                  alt="Slide"
                  className="w-full h-72 object-cover rounded-lg"
                />
                <div className="flex gap-4 mt-2">
                  <button
                    onClick={() => handleEditSlide(slide)}
                    className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white font-semibold"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteSlide(slide._id)}
                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white font-semibold"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full"
          >
            &#9664;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full"
          >
            &#9654;
          </button>
        </div>
      )}

      {isEditing && (
        <div className="w-[80%] bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Edit Slide
          </h2>
          <div
            onClick={() => document.querySelector("#slide-image").click()}
            className="w-full h-72 bg-gray-200 cursor-pointer rounded-lg flex items-center justify-center text-gray-600 font-bold mb-6"
          >
            {image ? (
              <img
                src={image}
                alt="Slide"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              "Upload Image"
            )}
            <input
              id="slide-image"
              type="file"
              accept="image/*"
              onChange={uploadImageHandler}
              hidden
            />
          </div>

          <div className="flex flex-col gap-4 mb-4">
            <label className="text-gray-700 font-semibold">Title</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="border-2 border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col gap-4 mb-4">
            <label className="text-gray-700 font-semibold">Button Text</label>
            <input
              type="text"
              value={buttonText}
              onChange={(e) => setButtonText(e.target.value)}
              className="border-2 border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col gap-4 mb-6">
            <label className="text-gray-700 font-semibold">Link</label>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="border-2 border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            onClick={handleSaveSlide}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition"
          >
            Save Slide
          </button>
        </div>
      )}
    </div>
  );
};

export default UpdateSlider;
