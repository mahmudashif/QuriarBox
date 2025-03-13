import React from "react";

const Footer = () => {
  return (
    <div className="bg-footerPrimary pt-20 pb-20">
      <div className="max-w-max-width mx-auto flex justify-between items-center">
        <div className="text-white">
          <h4 className="font-Raleway font-bold text-4xl pb-5">
            Get an update every week
          </h4>
          <p className="font-Raleway text-[16px] w-[500px]">
            We ensure that your product is delivered in the safest possible
            manner, at the correct location, at the right time.
          </p>
        </div>
        <div>
          <p className="font-bold font-Oxanium text-lg text-BasicOrange">
            SUBSCRIBE TO NEWSLETTER
          </p>
          <input
            type="email"
            placeholder="Enter your mail"
            className="flex-1 bg-transparent border border-gray-500 rounded-md px-4 py-4 text-white outline-none w-[386px] mt-5"
          />
          <button className="bg-[#F26522] text-white font-bold px-6 py-4 rounded-md ml-2 font-Oxanium">
            Subscribe
          </button>
        </div>
      </div>
      {/* ---------- Footer second layer ---------- */}
      <div className="bg-footerSecondary mt-20">
        <div className="max-w-max-width mx-auto">
          <div>
            <img src="/public/TypographyLogo.svg" alt="logo" />
          </div>
          <p>
            The most trusted Courier
            <br />
            company in your area.
          </p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
