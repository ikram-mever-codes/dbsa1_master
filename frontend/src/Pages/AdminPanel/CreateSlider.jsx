import React, { useState } from "react";
import { FaArrowRight, FaCamera } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useUploadProductImageMutation } from "../../Redux/Api/productSlice";
import axios from "axios";
import { BASE_URL } from "../../Redux/constant";

const CreateSlider = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [uploadImage] = useUploadProductImageMutation();

  const [buttonText, setButtonText] = useState("");
  const [link, setLink] = useState("");

  const uploadSlideHandle = async () => {
    if (!buttonText || !image || !text || !link) {
      return toast.error("Incomplete Fields");
    }
    toast.loading("Uplading Slide...");
    try {
      const res = await axios.post(
        `${BASE_URL}/api/slider`,
        {
          link,
          button: buttonText,
          description,
          image,
          text,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.dismiss();

      toast.success(res.data.message);
      setImage("");
      setText("");
      setButtonText("");
      setLink("");
      setDescription("");
    } catch (error) {
      toast.dismiss();
      toast.error(error.response.data.error || "Unexpected Error");
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
      return toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen px-5 w-full font2 flex flex-col items-center gap-4 py-4">
      <div className="text-gray-500 font2 text-3xl mt-5 tracking-wider">
        Create Slider
      </div>
      <div className="w-[75%]">
        {image === "" ? (
          <div
            onClick={() => {
              document.querySelector("#slide-image").click();
            }}
            className="w-full px-8 py-4 h-[18rem] bg-gray-400 cursor-pointer rounded-xl flex justify-center text-black text-[30px] gap-[10px] font-bold items-center mb-[20px]"
          >
            <FaCamera /> Upload Image
            <input
              id="slide-image"
              type="file"
              accept="image/*"
              name="image"
              onChange={uploadImageHandler}
              hidden
            />
          </div>
        ) : (
          <div className="w-full px-8 py-4 h-[18rem] bg-black rounded-xl flex justify-between items-center mb-[20px] text-white">
            <div className="w-max flex h-full justify-start items-center">
              <div className="flex justify-center gap-5 h-full items-center flex-col">
                <h1 className="text-3xl font-[600] text-center w-[20vw] text-white font2 flex">
                  {text || "Title Comes Here"}
                </h1>
                <img
                  src="/logo2.png"
                  className="w-[130px] h-[130px] border border-solid border-black rounded-full bg-white object-contain object-center"
                />
              </div>
              <Link
                to={"#"}
                className="bg-[#282a3a] text-[16px] flex justify-start items-center gap-[12px] rounded-md px-[32px] py-4 font2 uppercase font-[700]"
              >
                {buttonText || "Button Text"}
                <span>
                  <FaArrowRight />
                </span>
              </Link>
            </div>
            <div className="w-max h-full">
              <img
                className="object-cover object-center h-[15rem] w-max"
                src={image}
                alt="DBSA"
              />
            </div>
          </div>
        )}
        <div className="flex justify-start items-center gap-[1rem] flex-col">
          <div className="w-full flex justify-between items-center gap-4">
            <div className="flex flex-col w-[45%] sm:w-full gap-2">
              <label htmlFor="text" className="text-gray-500 text-lg">
                Title
              </label>
              <input
                type="text"
                name="text"
                id="text"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                className="px-5 py-3 border-2 border-gray-400 focus:outline-none rounded-md"
              />
            </div>
            <div className="flex flex-col w-[45%] sm:w-full gap-2">
              <label htmlFor="buttonText" className="text-gray-500 text-lg">
                Button Text
              </label>
              <input
                type="text"
                name="buttonText"
                id="buttonText"
                value={buttonText}
                onChange={(e) => {
                  setButtonText(e.target.value);
                }}
                className="px-5 py-3 border-2 border-gray-400 focus:outline-none rounded-md"
              />
            </div>
            <div className="flex flex-col w-[45%] sm:w-full gap-2">
              <label htmlFor="link" className="text-gray-500 text-lg">
                Link
              </label>
              <input
                type="text"
                name="link"
                id="link"
                value={link}
                onChange={(e) => {
                  setLink(e.target.value);
                }}
                className="px-5 py-3 border-2 border-gray-400 focus:outline-none rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col w-full sm:w-full gap-2">
            <button
              onClick={uploadSlideHandle}
              className="w-[160px] bg-[#525CEB] h-[50px] mx-auto capitalize text-[18px] tracking-wider font-[350] rounded-lg text-white"
            >
              Create Slide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSlider;
