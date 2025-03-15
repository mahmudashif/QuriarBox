import React from "react";
import banner from "/public/banner_image.svg";

const Hero = () => {
  return (
    <div className="bg-BackgroundColor">
      <div className="max-w-max-width mx-auto pt-16 sm:pt-20 md:pt-28 lg:pt-40 pb-10 md:pb-16 lg:pb-20 flex flex-col lg:flex-row justify-between items-center px-4">
        {/* ---------- Heading ---------- */}
        <div className="lg:w-2/5 w-full text-center lg:text-left">
          <h1 className="font-Raleway text-4xl lg:text-5xl">
            A trusted provider of{" "}
            <span className="font-bold">courier services.</span>
          </h1>
          <p className="text-[#4D4D4D] text-lg lg:text-xl pt-3 lg:pt-4 mx-auto lg:mx-0 w-full lg:w-[320px] font-Raleway">
            We deliver your products safely to your home in a reasonable time.
          </p>
          <button className="font-bold text-lg lg:text-xl font-Oxanium mt-8 md:mt-10 lg:mt-14 px-6 py-3 text-white rounded-md bg-[#f95c19]">
            Get started
          </button>
        </div>

        {/* ---------- Banner Image ---------- */}
        <div className="lg:w-3/5 w-full mt-10 lg:mt-0 flex justify-center">
          <img
            src={banner}
            alt="Courier Banner"
            className="w-full max-w-[550px] lg:max-w-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
