import React from "react";
import { certificates } from "../../data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Certificates = () => {
  return (
    <div className="w-full flex gap-6 mt-20  py-[30px]  justify-center md:justify-start  bg-[#F3F3F3] h-[419px]  overflow-scroll flex-row items-center">
      {certificates.map((data, index) => {
        return (
          <div
            key={index}
            className="min-w-[350px] w-[100%] flex flex-col gap-5 items-center justify-start h-full"
          >
            <LazyLoadImage
              src={data.image}
              alt={"Certificate"}
              className="w-[160px] h-[160px]"
              effect="blur"
            />
            <div className="text-[18px] font2 text-center font-[600]">
              {data.title}
            </div>
            <div className="text-[14px] font2 font-[400] text-[#414141]">
              {data.caption}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Certificates;
