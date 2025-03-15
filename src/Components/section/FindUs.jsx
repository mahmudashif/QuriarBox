import React from "react";
import cellicon from "/public/callIcon.svg";
import clockIcon from "/public/clockIcon.svg";
import locationIcon from "/public/locationIcon.svg";
import map from "/public/map.svg";
import messageIcon from "/public/messageIcon.svg";

const FindUs = () => {
  return (
    <div className="bg-BackgroundColor pt-10 pb-10">
      <div className="max-w-max-width mx-auto">
        <div className="text-center">
          <p className="uppercase font-bold font-Oxanium text-BasicOrange text-3xl">
            find us
          </p>
          <p className="font-extrabold text-[40px] font-Raleway text-[#261134]">
            Access us easily
          </p>
        </div>
        <div className="mt-16 flex justify-between">
          <div className="w-[48%]">
            <img src={map} alt="map" />
          </div>
          <div className="bg-white pl-20 py-14 w-[48%]">
            <div>
              <p className="text-[#464558] font-bold text-xl font-Raleway">
                Contact with us
              </p>
            </div>
            <div className="flex gap-x-3 mt-5 items-center">
              <div>
                <img src={locationIcon} alt="" />
              </div>
              <p className="font-Raleway text-[#5C5B6C] text-lg">
                2277 Lorem Ave, San Diego, CA 22553
              </p>
            </div>
            <div className="flex gap-x-3 mt-5 items-center">
              <div>
                <img src={clockIcon} alt="" />
              </div>
              <p className="font-Raleway text-[#5C5B6C] text-lg">
                2277 Lorem Ave, San Diego, CA 22553
              </p>
            </div>
            <div className="flex gap-x-3 mt-5 items-center">
              <div>
                <img src={messageIcon} alt="" />
              </div>
              <p className="font-Raleway text-[#5C5B6C] text-lg">
                2277 Lorem Ave, San Diego, CA 22553
              </p>
            </div>
          </div>
        </div>
        <div>
          <button className="text-white font-Oxanium bg-BasicOrange flex items-center gap-x-3 py-5 px-40 font-bold text-xl rounded-md mt-10 mx-auto transition duration-300 hover:bg-orange-600 hover:scale-105">
            <img src={cellicon} alt="" />
            Call us to delivery 123-456789
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
