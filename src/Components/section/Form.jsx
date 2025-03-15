import React from "react";
import ladisIcon from "/public/Illustration.svg";

const Form = () => {
  return (
    <div className="bg-BackgroundColor pt-24 md:pt-36 lg:pt-48 pb-16 md:pb-20 px-4">
      <div className="max-w-max-width mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-12">
        {/* Left Section (Image & Text) */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start mb-5">
            <img src={ladisIcon} alt="" className="w-40 md:w-56 lg:w-auto" />
          </div>
          <div className="lg:ml-10">
            <h3 className="text-BasicOrange font-Oxanium font-bold text-xl md:text-2xl">
              REQUEST A CALLBACK
            </h3>
            <h2 className="font-extrabold text-[28px] md:text-[34px] lg:text-[40px] text-[#222132] font-Raleway max-w-[452px] mt-4 md:mt-5 leading-9 md:leading-10">
              We will contact in the shortest time.
            </h2>
            <p className="text-lg md:text-xl font-semibold text-[#9291A1] mt-4 md:mt-5 font-Raleway">
              Monday to Friday, 9am-5pm.
            </p>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="lg:w-1/2 w-full space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="bg-transparent border-[2px] border-[#C5C5D2] rounded-md w-full px-5 py-3 md:px-6 md:py-4 font-Raleway"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border-[2px] border-[#C5C5D2] rounded-md w-full px-5 py-3 md:px-6 md:py-4 font-Raleway"
          />
          <textarea
            placeholder="Message"
            className="bg-transparent border-[2px] border-[#C5C5D2] rounded-md w-full px-5 pt-3 pb-24 md:pb-36 font-Raleway"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
