import React from "react";

const Hero = () => {
  return (
    <div className="bg-BackgroundColor">
      <div className="max-w-max-width mx-auto pt-40 pb-20">
        {/* ---------- Heading ---------- */}
        <div className="w-2/5">
          <h1 className="font-Raleway text-5xl">
            A trusted provider of{" "}
            <span className="font-bold">courier services.</span>
          </h1>
          <p className="text-[#4D4D4D] text-xl pt-4 w-[320px] font-Raleway">
            We deliver your products safely to your home in a reasonable time.
          </p>
          <button className="font-bold text-xl font-Oxanium mt-14 px-5 py-3 text-white rounded-md bg-[#f95c19]">
            Get started
          </button>
        </div>
        {/* ---------- Banner Image ---------- */}
        <div className="w-3/5"></div>
      </div>
    </div>
  );
};

export default Hero;
