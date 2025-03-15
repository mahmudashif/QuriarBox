import React from "react";
import cellicon from "/public/callIcon.svg";
import clockIcon from "/public/clockIcon.svg";
import locationIcon from "/public/locationIcon.svg";
import map from "/public/map.svg";
import messageIcon from "/public/messageIcon.svg";

const FindUs = () => {
  return (
    <div className="bg-BackgroundColor pt-10 pb-10 px-4">
      <div className="max-w-max-width mx-auto">
        {/* Section Title */}
        <div className="text-center">
          <p className="uppercase font-bold font-Oxanium text-BasicOrange text-2xl md:text-3xl">
            find us
          </p>
          <p className="font-extrabold text-[28px] md:text-[40px] font-Raleway text-[#261134]">
            Access us easily
          </p>
        </div>

        {/* Content Section */}
        <div className="mt-12 lg:mt-16 flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
          {/* Map Image */}
          <div className="lg:w-[48%] w-full flex justify-center">
            <img
              src={map}
              alt="map"
              className="w-full max-w-lg lg:max-w-full"
            />
          </div>

          {/* Contact Information */}
          <div className="bg-white p-6 md:p-10 lg:pl-20 lg:py-14 lg:w-[48%] rounded-lg shadow-md">
            <div>
              <p className="text-[#464558] font-bold text-lg md:text-xl font-Raleway">
                Contact with us
              </p>
            </div>

            <div className="flex gap-x-3 mt-5 items-center">
              <img src={locationIcon} alt="" className="w-6 md:w-8" />
              <p className="font-Raleway text-[#5C5B6C] text-base md:text-lg">
                2277 Lorem Ave, San Diego, CA 22553
              </p>
            </div>

            <div className="flex gap-x-3 mt-5 items-center">
              <img src={clockIcon} alt="" className="w-6 md:w-8" />
              <p className="font-Raleway text-[#5C5B6C] text-base md:text-lg">
                Monday - Friday, 9am - 5pm
              </p>
            </div>

            <div className="flex gap-x-3 mt-5 items-center">
              <img src={messageIcon} alt="" className="w-6 md:w-8" />
              <p className="font-Raleway text-[#5C5B6C] text-base md:text-lg">
                support@example.com
              </p>
            </div>
          </div>
        </div>

        {/* Call Button - Fixed Size */}
        <div className="mt-10 flex justify-center">
          <button className="text-white font-Oxanium bg-BasicOrange flex items-center gap-x-3 py-4 px-6 font-bold text-lg md:text-xl max-md:text-sm rounded-md transition duration-300 hover:bg-orange-600 hover:scale-105 w-full max-w-md">
            <img src={cellicon} alt="" className="w-6 md:w-8" />
            Call us to deliver 123-456789
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
