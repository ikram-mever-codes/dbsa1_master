import React from "react";
import { useGetAllBrandQuery } from "../../Redux/Api/brandSlice";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Brands = () => {
  const { data: brands, isLoading, error } = useGetAllBrandQuery();

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="error">{error?.data?.error || error?.error}</Message>
  ) : (
    <div className="w-full flex flex-col items-center mt-20">
      <div className="flex w-[90%] max-w-7xl gap-10 justify-between items-center mb-8">
        <div className="text-[30px] font2 font-[600] sm:text-[20px]">
          Verified Brands
        </div>
      </div>
      <div className="w-[90%] max-w-7xl flex flex-wrap gap-8 justify-center">
        {brands?.allBrand.map((brand, index) => (
          <div
            key={index}
            className="min-w-[150px] max-w-[200px] p-4 border border-gray-200 rounded-lg shadow-lg"
          >
            <div className="w-full h-[8rem] flex items-center justify-center overflow-hidden">
              <LazyLoadImage
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-contain object-center"
                effect="blur"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
