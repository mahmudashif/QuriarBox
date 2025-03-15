import React from "react";
import logo from "/public/TypographyLogo.svg";

const Footer = () => {
  return (
    <div className="bg-footerPrimary pt-20 pb-10">
      {/* ---------- Footer first layer ---------- */}
      <div className="max-w-max-width mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
        <div className="text-white mb-6 lg:mb-0">
          <h4 className="font-Raleway font-bold text-4xl pb-5">
            Get an update every week
          </h4>
          <p className="font-Raleway text-[16px] w-full lg:w-[500px]">
            We ensure that your product is delivered in the safest possible
            manner, at the correct location, at the right time.
          </p>
        </div>
        <div className="w-full lg:w-auto">
          <p className="font-bold font-Oxanium text-lg text-BasicOrange">
            SUBSCRIBE TO NEWSLETTER
          </p>
          <div className="flex flex-col lg:flex-row mt-5">
            <input
              type="email"
              placeholder="Enter your mail"
              className="bg-transparent border border-gray-500 rounded-md px-4 py-4 text-white outline-none w-full lg:w-[386px] mb-4 lg:mb-0"
            />
            <button className="bg-[#F26522] text-white font-bold px-6 py-4 rounded-md lg:ml-2 font-Oxanium">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* ---------- Footer second layer ---------- */}
      <div className="bg-footerSecondary mt-20">
        <div className="max-w-max-width mx-auto py-16 xl:flex max-lg:ml-10 items-center">
          <div className="w-1/2">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <p className="mt-3 text-[#9291A1] font-Raleway text-lg">
              The most trusted Courier
              <br />
              company in your area.
            </p>
          </div>
          <div className="w-1/2 lg:flex max-xl:space-y-10 max-lg:mt-10 justify-between">
            <div>
              <h3 className="text-white font-Oxanium">Other links</h3>
              <ul className="text-[#9291A1] mt-5 space-y-2 font-Oxanium">
                <li>Blogs</li>
                <li>Movers website</li>
                <li>Traffic Update</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-Oxanium">Services</h3>
              <ul className="text-[#9291A1] mt-5 space-y-2 font-Oxanium">
                <li>Corporate goods</li>
                <li>Artworks</li>
                <li>Documents</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-Oxanium">Customer Care</h3>
              <ul className="text-[#9291A1] mt-5 space-y-2 font-Oxanium">
                <li>About Us</li>
                <li>Contact US</li>
                <li>Get Update</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* ---------- Footer third layer ---------- */}
      <div>
        <div className="max-w-max-width mx-auto lg:flex max-lg:ml-5 max-lg:space-y-5 justify-between text-[#DBDBE9] mt-10 font-Raleway">
          <p>All rights Reserved © Your Company, 2021</p>
          <p>
            Made with heart by{" "}
            <span className="text-BasicOrange font-bold">ThemeWagon</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
