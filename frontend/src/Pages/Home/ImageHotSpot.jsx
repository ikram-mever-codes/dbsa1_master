import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import Annotation from "react-image-annotation";
import "../../assets/createToolTip.css";
import { IoIosArrowForward, IoIosArrowBack, IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

import { BASE_URL } from "../../Redux/constant";

const AnnotBox = ({ setShowAnnotBox, annotData }) => {
  return (
    <div className="fixed w-full h-full top-0 left-0 bg-[#0d0b0be9] z-[10000] flex justify-center items-center">
      <button
        className="absolute top-0 right-0 text-[50px] m-[20px]"
        onClick={() => {
          setShowAnnotBox(false);
        }}
      >
        <IoIosClose color="red" />
      </button>
      <div className="relative w-[70vw] h-max flex justify-start items-center flex-col gap-[20px]">
        {annotData?.image ? (
          <img
            className="w-max h-max max-h-[70vh] rounded-lg object-cover object-center"
            src={annotData.image}
            alt="Annotation Image"
          />
        ) : (
          <div className="w-full overflow-hidden h-[70vh] rounded-lg flex justify-center items-center text-[30px] font-semibold shadow-md shadow-slate-400 bg-[#EDEBE9] smd:bg-transparent flex-wrap text-black ">
            No Image Found!
          </div>
        )}
        <Link
          target="_blank"
          to={annotData?.redirectUrl || "#"}
          className="w-[8rem] h-[3rem] border-none outline-none flex justify-center items-center bg-[#525CEB] capitalize text-[18px] tracking-wider font-[350] rounded-lg text-white "
        >
          Visit
        </Link>
      </div>
    </div>
  );
};

const ImageHotSpot = () => {
  const [imageHotSpots, setImageHotSpots] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const [showAnnotBox, setShowAnnotBox] = useState(false);
  const [annotData, setAnnotData] = useState(null);

  const getAllToolTipImages = useCallback(async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/tooltipimages/all`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setImageHotSpots(res.data.imageHotspots);
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  useEffect(() => {
    getAllToolTipImages();
  }, [getAllToolTipImages]);

  useEffect(() => {
    if (autoSlide) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex < imageHotSpots.length - 1 ? prevIndex + 1 : 0
        );
      }, 5000);
      return () => clearInterval(intervalId);
    }
  }, [autoSlide, imageHotSpots.length]);

  const handlePrevious = () => {
    setAutoSlide(false);
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : imageHotSpots.length - 1
    );
  };

  const handleNext = () => {
    setAutoSlide(false);
    setCurrentIndex((prevIndex) =>
      prevIndex < imageHotSpots.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleAnnotationClick = (annotation) => {
    if (annotation?.data?.redirectUrl) {
      setAnnotData({
        redirectUrl: annotation.data.redirectUrl,
        image: annotation.data.image,
      });
      setShowAnnotBox(true);
    }
  };

  const renderAnnotation = () => {
    if (!imageHotSpots[currentIndex]) return null;
    const currentAnnotations = imageHotSpots[currentIndex].annotations || [];

    return currentAnnotations.map((annotation, index) => (
      <div
        key={index}
        className="annotation-marker"
        onClick={() => handleAnnotationClick(annotation)}
        style={{
          position: "absolute",
          fontSize: "30px",
          width: "20px",
          height: "25px",
          top: `${annotation.geometry.y - 3}%`,
          left: `${annotation.geometry.x - 2}%`,
        }}
      >
        <span className="marker-icon"></span>
      </div>
    ));
  };

  return (
    <div className="w-full flex justify-center mt-8 relative">
      {showAnnotBox && (
        <AnnotBox setShowAnnotBox={setShowAnnotBox} annotData={annotData} />
      )}
      <div className="w-[80%] max-w-screen-xl flex flex-col items-center gap-[30px]">
        <div className="w-full text-[35px] font-bold text-left">Tool Tips</div>
        <div className="relative w-full overflow-hidden">
          {imageHotSpots.length === 0 ? (
            <h1 className="text-xl text-gray-500">No ToolTips Found!</h1>
          ) : (
            <div className="w-full flex items-center justify-center ">
              <button className="slider-button prev" onClick={handlePrevious}>
                <IoIosArrowBack />
              </button>
              <div className="relative w-max flex justify-center items-center wrapper">
                <Annotation
                  src={imageHotSpots[currentIndex].image}
                  alt="Annotatable"
                  annotations={imageHotSpots[currentIndex].annotations}
                  type="None"
                  value={imageHotSpots[currentIndex].annotation}
                />
                {renderAnnotation()}
              </div>
              <button className="slider-button next" onClick={handleNext}>
                <IoIosArrowForward />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageHotSpot;
