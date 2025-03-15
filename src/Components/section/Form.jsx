import React from "react";
import ladisIcon from "/public/Illustration.svg";

const Form = () => {
  return (
    <div className="bg-BackgroundColor pt-48 pb-20">
      <div className="max-w-max-width mx-auto flex items-center justify-between">
        <div className="w-1/2">
          <div className="flex justify-center mb-5">
            <img src={ladisIcon} alt="" />
          </div>
          <div className="ml-10">
            <h3 className="text-BasicOrange font-Oxanium font-bold text-2xl">
              REQUEST A CALLBACK
            </h3>
            <h2 className="font-extrabold text-[40px] text-[#222132] font-Raleway w-[452px] mt-5 leading-10">
              We will contact in the shortest time.
            </h2>
            <p className="text-2xl font-semibold text-[#9291A1] mt-5 font-Raleway">
              Monday to Friday, 9am-5pm.
            </p>
          </div>
        </div>
        <div className="w-1/2 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="bg-transparent border-[2px] border-[#C5C5D2] rounded-md w-[429px] px-6 py-4 font-Raleway"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border-[2px] border-[#C5C5D2] rounded-md w-[429px] px-6 py-4 font-Raleway"
          />
          <textarea
            placeholder="Message"
            className="bg-transparent border-[2px] border-[#C5C5D2] rounded-md w-[429px] px-6 pt-4 pb-36 font-Raleway"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
