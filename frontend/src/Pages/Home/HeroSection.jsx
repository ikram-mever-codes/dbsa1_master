import React, { useEffect, useState, useMemo } from "react";
import bg from "../../images/Rectangle 25.png";
import design from "../../images/Mask group.png";
import { GrNext, GrPrevious } from "react-icons/gr";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../Redux/constant";

const HeroSection = () => {
  const [categories, setCategories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getAllSlides = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/slider/allSliders`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setCategories(res.data.slides);
    } catch (error) {
      console.log(error);
    }
  };

  const categorySlides = useMemo(() => {
    return categories ? categories.allCategory : [];
  }, [categories]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, [categories.length]);

  useEffect(() => {
    getAllSlides();
  }, []);

  const nextIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const prevIndex = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex w-[100vw] font2 mt-[3rem] bg-transparent min-h-[320px] smd:min-h-[580px] gap-5 justify-center relative">
      {categories.map((product, index) => {
        let position = "nextSlide";
        const { image, text, link, button } = product;

        if (index === currentIndex) {
          position = "activeSlide";
        } else if (
          index === currentIndex - 1 ||
          (currentIndex === 0 && index === categories.length - 1)
        ) {
          position = "prevSlide";
        }

        return (
          <div
            key={index}
            className={`flex w-[80%] h-full gap-5 flex-col justify-center md:rounded-none rounded-lg items-center absolute transition-all duration-700 text-center ${
              position === "prevSlide" && "translate-x-[-100vw] opacity-0"
            } ${position === "nextSlide" && "translate-x-[100vw] opacity-0"} ${
              position === "activeSlide" && "translate-x-[0vw] opacity-100"
            }`}
          >
            <div className="w-full h-full flex justify-center md:rounded-none rounded-lg absolute left-0 top-0">
              <img
                src={bg}
                alt="banner"
                className="w-full h-full"
                loading="eager"
              />
            </div>
            <div className="w-full flex smd:flex-col px-10 py-4 justify-between items-center h-full absolute left-0 top-0">
              <div className="py-5 h-full justify-start items-start flex flex-col relative gap-6 smd:h-1/2 smd:w-full smd:justify-center smd:items-center smd:gap-4 text-white px-5">
                <div className="text-5xl font-[600] font2 flex text-center smd:text-center sm:text-4xl sm:tracking-wider">
                  {text}
                </div>
                <Link
                  to={link ? link : `/shop?category=${product._id}`}
                  className="bg-[#282a3a] text-[16px] flex justify-center items-center gap-[12px] rounded-md px-[32px] relative left-[250px] py-4 font2 uppercase font-[700]"
                >
                  {button ? button : "Shop Now"}{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </Link>
              </div>
              <div className="h-full min-w-1/3 smd:w-full smd:h-1/2 relative">
                <div className="h-full w-full">
                  <img
                    src={design}
                    alt="Banner design"
                    className="w-full h-full smd:hidden"
                    loading="eager"
                  />
                  <div className="absolute px-3 object-contain left-0 top-0 w-full h-full flex justify-center items-center">
                    <img
                      alt="Project Image"
                      src={image}
                      loading="eager"
                      className="w-[80%] rounded-2xl overflow-hidden max-h-[90%] smd:w-[95%] drop-shadow-[0_35px_35px_rgba(0,0,0,0.75)] object-contain"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              </div>
              <img
                src="/logo2.png"
                className="w-[200px] h-[200px] absolute bottom-[-20%] z-[10000] border-2 border-solid border-black rounded-full bg-white object-contain object-center"
              />
            </div>
          </div>
        );
      })}

      <button
        className="absolute right-[91%] border-[2px] z-[0] border-gray-600 rounded-full text-xl p-6 bg-[#f7f4f4] top-1/2 transform -translate-y-1/2 pdusm:right-[2%]"
        onClick={prevIndex}
      >
        <GrPrevious />
      </button>
      <button
        onClick={nextIndex}
        className="absolute z-[1000] border-[2px] border-gray-600 left-[91%] rounded-full text-xl p-6 bg-[#f7f4f4] top-1/2 transform -translate-y-1/2 pdsm:left-[2%]"
      >
        <GrNext />
      </button>
    </div>
  );
};

export default HeroSection;
