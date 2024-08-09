import React, { useEffect, useState } from "react";
import {
  useGetAllCategoryQuery,
  useUpdateCategoryMutation,
} from "../../Redux/Api/categorySlice";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import { toast } from "react-toastify";
import { useUploadProductImageMutation } from "../../Redux/Api/productSlice";
import { BASE_URL } from "../../Redux/constant";
import axios from "axios";
import { redirect } from "react-router-dom";

const CategoryList = () => {
  const [categoryId, setCategoryId] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [startingRate, setStartingRate] = useState(0);
  const [subheading, setSubheading] = useState("");
  const [link, setLink] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [uploadImage] = useUploadProductImageMutation();
  const [updateCategory, { isLoading: updateLoading }] =
    useUpdateCategoryMutation();
  const { data: categories, isLoading, error } = useGetAllCategoryQuery();

  const selectedCategory = categories?.allCategory.find(
    (c) => c._id === categoryId
  );

  useEffect(() => {
    if (selectedCategory) {
      setImage(selectedCategory.image);
      setName(selectedCategory.name);
      setStartingRate(selectedCategory.startingRate);
      setSubheading(selectedCategory.subheading || "");
      setLink(selectedCategory.link || "");
      setButtonText(selectedCategory.buttonText || "");
    }
  }, [categoryId, selectedCategory]);

  const uploadImageHandler = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await uploadImage(formData).unwrap();
      setImage(res.image);
    } catch (error) {
      toast.error(error.message || "Failed to upload image");
    }
  };

  const updateCategoryHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${BASE_URL}/api/category/${categoryId}`,
        {
          name,
          startingRate,
          image,
          subheading,
          link,
          buttonText,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success("Successfully updated");
      setCategoryId("");
    } catch (error) {
      const errorMsg =
        error.response?.data?.error || error.message || "An error occurred";
      toast.error(errorMsg);
    }
  };

  const deleteCategory = async (categoryId) => {
    try {
      const res = await axios.delete(`${BASE_URL}/api/category/${categoryId}`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success(res.data.message);
      setCategoryId("");
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || error.message || "An error occurred";
      toast.error(errorMessage);
    }
  };

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="error">
      {error.data?.error || error.error || "An error occurred"}
    </Message>
  ) : (
    <div className="w-full font2 min-h-screen p-6">
      <h1 className="text-gray-600 text-[22px] font-[400] my-4">Categories</h1>
      <div className="w-full mb-4 flex flex-wrap gap-5">
        {categories?.allCategory.map((c) => (
          <button
            key={c._id}
            onClick={() => setCategoryId(c._id)}
            className="border-[#525CEB] font2 uppercase border-[2px] hover:bg-[#525CEB] hover:text-white text-[#525CEB] px-3 py-2 rounded-lg tracking-widest"
          >
            {c.name}
          </button>
        ))}
      </div>
      <div>
        <h1 className="text-gray-600 text-[22px] font-[400] my-6">
          Update Category
        </h1>
        {!categoryId ? (
          <h1 className="text-gray-600 font2 font-[400] uppercase">
            Please click on a category to update
          </h1>
        ) : (
          <div className="w-full min-h-screen flex-wrap flex items-start justify-around smd:justify-center p-7 md:px-4 smd:p-5 gap-10 md:gap-3">
            <div className="flex relative w-[320px] group h-[320px] justify-center items-center bg-[#EDEBE9] rounded-[20px]">
              <img
                src={image}
                alt=""
                className={`w-[250px] h-[250px] object-contain ${
                  image ? "block" : "hidden"
                }`}
              />
              <div className="absolute w-[320px] h-[320px] left-0 top-0">
                <label
                  className={`w-full overflow-hidden h-full shadow-md shadow-slate-400 bg-[#EDEBE9] smd:bg-transparent flex-wrap text-black ${
                    image ? "hidden" : "flex"
                  } rounded-[20px] group-hover:flex justify-center items-center gap-2 flex-col px-10 py-8`}
                >
                  {image ? image.name : "Upload Main Image"}
                  <input
                    type="file"
                    accept="image/*"
                    name="image"
                    onChange={uploadImageHandler}
                    className={`${!image ? "hidden" : "text-black"}`}
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-col w-[320px] md:w-[280px] smd:w-[320px] relative left-0 items-start gap-5">
              <div className="flex flex-col w-full gap-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="focus:outline-none px-3 py-2 border-[2px] border-black rounded-lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full gap-3">
                <label htmlFor="startingRate">Starting Price</label>
                <input
                  type="number"
                  id="startingRate"
                  className="focus:outline-none px-3 py-2 border-[2px] border-black rounded-lg"
                  value={startingRate}
                  onChange={(e) => setStartingRate(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full gap-3">
                <label htmlFor="subheading">Subheading</label>
                <input
                  type="text"
                  id="subheading"
                  className="focus:outline-none px-3 py-2 border-[2px] border-black rounded-lg"
                  value={subheading}
                  onChange={(e) => setSubheading(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full gap-3">
                <label htmlFor="link">Link</label>
                <input
                  type="url"
                  id="link"
                  className="focus:outline-none px-3 py-2 border-[2px] border-black rounded-lg"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full gap-3">
                <label htmlFor="buttonText">Button Text</label>
                <input
                  type="text"
                  id="buttonText"
                  className="focus:outline-none px-3 py-2 border-[2px] border-black rounded-lg"
                  value={buttonText}
                  onChange={(e) => setButtonText(e.target.value)}
                />
              </div>
              <button
                onClick={updateCategoryHandler}
                className={`w-[160px] bg-[#525CEB] ${
                  updateLoading && "cursor-wait"
                } h-[60px] py-2 capitalize text-[18px] tracking-wider font-[350] rounded-lg text-white`}
              >
                Update
              </button>
              <button
                onClick={() => deleteCategory(categoryId)}
                className={`w-[160px] bg-red-500 hover:bg-red-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-600 ${
                  updateLoading && "cursor-wait"
                } h-[60px] py-2 capitalize text-[18px] tracking-wider font-[350] rounded-lg text-white`}
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
