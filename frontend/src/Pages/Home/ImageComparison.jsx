import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import two from "../../../../assets/two.png";
import one from "../../../../assets/one.png";

const ImageComparison = () => {
  return (
    <>
      <div className="w-full flex h-max justify-center items-center mt-[3rem] bg-gray-50 py-[50px]">
        <div className="w-[80%] h-max vsm:w-[90%]flex flex-col gap-[40px] slg:w-[90%] pdsm:w-[80%]">
          <div className="w-full h-full flex justify-between items-center  gap-[40px] max-h-[90vh] rounded-xl overflow-hidden text-[14px] font2 font-[400]  tracking-widest leading-[30px] big-wrapper pdsm:flex-col pdsm:w-[100%] pdsm:max-h-max">
            <div className="w-[50%] h-[60vh] flex justify-start flex-col  gap-[50px] pdsm:w-[100%] pdsm:h-max  ">
              <div className="text-[30px] font2 font-[600] usm:text-[25px] text-left w-full">
                Excellence in Electrical Engineering
              </div>
              <div className="text-sm md:text-base lg:text-lg font-light tracking-wide leading-6 md:leading-8 text-gray-700 text-left">
                Discover the precision and craftsmanship behind our
                state-of-the-art distribution boards. The exterior view
                showcases the robust and sleek design that ensures durability
                and easy integration into any system. The interior view reveals
                the meticulous busbar arrangement and high-quality components
                that guarantee reliable performance and safety. We take as much
                pride in manufacturing the functional internals, that may not
                always be seen, as we do in crafting the external enclosures. At
                Distribution Boards SA, we are committed to delivering
                cutting-edge electrical solutions that meet the highest
                standards of efficiency and innovation.
              </div>
            </div>
            <div className="w-[40%] h-full  pdsm:flex pdsm:justify-center pdsm:items-center pdsm:w-full">
              <ReactCompareSlider
                boundsPadding={0}
                itemOne={<ReactCompareSliderImage alt="Image one" src={one} />}
                itemTwo={
                  <ReactCompareSliderImage
                    alt="Image two"
                    src={two}
                    style={{
                      backgroundColor: "white",
                      backgroundImage:
                        "\n linear-gradient(45deg, #ccc 25%, transparent 25%),\n linear-gradient(-45deg, #ccc 25%, transparent 25%),\n linear-gradient(45deg, transparent 75%, #ccc 75%),\n linear-gradient(-45deg, transparent 75%, #ccc 75%)",
                      backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
                      backgroundSize: "20px 20px",
                    }}
                  />
                }
                keyboardIncrement="5%"
                className="h-[60vh] w-max usm:w-max usm:h-full"
                position={50}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageComparison;
