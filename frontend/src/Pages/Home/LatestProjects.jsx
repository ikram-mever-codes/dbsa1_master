import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useAllProjectQuery } from "../../Redux/Api/projectSlice";
import Message from "../../Components/Message";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./LatestProjects.css"; // Ensure this file exists and is properly configured

const LatestProjects = () => {
  const { data: projects, isLoading, error } = useAllProjectQuery();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : error ? (
    <Message variant="error">{error?.data?.error || error?.error}</Message>
  ) : (
    <div className="flex flex-col items-center w-full mt-20 relative bg-[#F3F3F3] pt-[3rem] pb-[3rem]">
      <div className="flex w-[80%] max-w-screen-xl justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">Our Latest Projects</h2>
        <Link
          className="flex items-center text-lg font-semibold text-gray-800"
          to="/project"
        >
          View All
          <IoIosArrowForward className="text-blue-600 ml-1" />
        </Link>
      </div>
      <div className="slider-container">
        <button className="slider-button prev" onClick={handlePrev}>
          <IoIosArrowBack />
        </button>
        <div className="slider-wrapper">
          {projects.length > 0 && (
            <div className="slide active ">
              <Link
                to={`/project/${projects[currentIndex]._id}`}
                className="project-card"
              >
                <div className="w-full h-full flex items-center justify-center sm:flex-col gap-[20px]">
                  <div className="project-info w-[30%] h-full sm:w-full flex juststify-around flex-col items-center">
                    <h3 className="text-2xl md:text-2xl lg:text-2xl font-semibold text-center mb-8 text-gray-800">
                      {projects[currentIndex].title}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg font-light tracking-wide leading-6 md:leading-8 text-gray-700">
                      {projects[currentIndex].description}
                    </p>
                  </div>
                  <LazyLoadImage
                    src={projects[currentIndex].image}
                    alt="Project Image"
                    effect="blur"
                    className="rounded-lg"
                    style={{
                      maxHeight: "400px",
                      width: "25rem",
                      height: "max-content",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
              </Link>
            </div>
          )}
        </div>
        <button className="slider-button next" onClick={handleNext}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default LatestProjects;
