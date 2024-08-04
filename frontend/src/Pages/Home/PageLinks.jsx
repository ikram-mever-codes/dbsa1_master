import React, { useState, useEffect, useRef } from "react";
import { pageLinks } from "../../data";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { GrNext, GrPrevious } from "react-icons/gr";

const PageLinks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768); // Adjust breakpoint as needed
  const [slideWidth, setSlideWidth] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const updateScreenWidth = () => {
      setIsWideScreen(window.innerWidth > 768); // Adjust breakpoint as needed
    };

    const updateSlideWidth = () => {
      if (sliderRef.current) {
        setSlideWidth(sliderRef.current.offsetWidth);
      }
    };

    updateSlideWidth();
    window.addEventListener("resize", updateScreenWidth);
    window.addEventListener("resize", updateSlideWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
      window.removeEventListener("resize", updateSlideWidth);
    };
  }, []);

  const nextSlide = () => {
    if (currentIndex < pageLinks.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="relative w-full flex justify-center items-center mt-8 px-4">
      <div className="relative w-full max-w-5xl p-4 overflow-hidden">
        {isWideScreen ? (
          // Display all links for wider screens
          <div className="flex flex-wrap justify-center">
            {pageLinks.map((page, index) => (
              <Link
                to={page.link}
                key={index}
                className="flex-shrink-0 flex flex-col items-center text-center max-w-[200px] w-full mx-2 mb-4"
              >
                <div className="w-32 h-32 flex justify-center items-center border border-gray-300 shadow-lg bg-white rounded-full">
                  <LazyLoadImage
                    src={page.image}
                    alt={page.name}
                    className="w-16 h-16"
                    effect="blur"
                  />
                </div>
                <div className="text-gray-800 font-semibold text-lg mt-4">
                  {page.name}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          // Display slider for smaller screens
          <div
            className="relative flex transition-transform duration-500"
            ref={sliderRef}
          >
            <div
              className="flex"
              style={{
                transform: `translateX(-${currentIndex * slideWidth}px)`,
              }}
            >
              {pageLinks.map((page, index) => (
                <Link
                  to={page.link}
                  key={index}
                  className="flex-shrink-0 flex flex-col items-center text-center max-w-[200px] w-full mx-2"
                >
                  <div className="w-32 h-32 flex justify-center items-center border border-gray-300 shadow-lg bg-white rounded-full">
                    <LazyLoadImage
                      src={page.image}
                      alt={page.name}
                      className="w-16 h-16"
                      effect="blur"
                    />
                  </div>
                  <div className="text-gray-800 font-semibold text-lg mt-4">
                    {page.name}
                  </div>
                </Link>
              ))}
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-600 text-white rounded-full"
              disabled={currentIndex === 0}
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-600 text-white rounded-full"
              disabled={currentIndex === pageLinks.length - 1}
            >
              <GrNext />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageLinks;
