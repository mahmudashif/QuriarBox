import React, { useEffect, useState } from "react";
import award from "/public/Award.svg";
import statesCovered from "/public/state.svg";

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count < 26) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 200);
      return () => clearInterval(interval);
    }
  }, [count]);
  return (
    <div className="bg-BackgroundColor pt-20 pb-10">
      <div className="max-w-max-width mx-auto flex justify-between items-center">
        {/* ---------- Award Won counter ---------- */}
        <div className="w-[15%] text-center">
          <div className="flex justify-center">
            <img src={award} alt="Award" />
          </div>
          <p className="text-BasicOrange font-bold text-4xl font-Raleway mt-2">
            {count}+
          </p>
          <p className="text-BasicGray text-xl font-semibold font-Raleway mt-2">
            Awards won
          </p>
        </div>
        {/* ---------- State cover counter ---------- */}
        <div className="w-[15%] text-center">
          <div className="flex justify-center">
            <img src={statesCovered} alt="statesCovered" />
          </div>
          <p className="text-BasicOrange font-bold text-4xl font-Raleway mt-2">
            {count}+
          </p>
          <p className="text-BasicGray text-xl font-semibold font-Raleway mt-2">
            States covered
          </p>
        </div>
        {/* ---------- State cover counter ---------- */}
        <div className="w-[15%] text-center">
          <div className="flex justify-center">
            <img src={statesCovered} alt="statesCovered" />
          </div>
          <p className="text-BasicOrange font-bold text-4xl font-Raleway mt-2">
            {count}+
          </p>
          <p className="text-BasicGray text-xl font-semibold font-Raleway mt-2">
            States covered
          </p>
        </div>
        {/* ---------- State cover counter ---------- */}
        <div className="w-[15%] text-center">
          <div className="flex justify-center">
            <img src={statesCovered} alt="statesCovered" />
          </div>
          <p className="text-BasicOrange font-bold text-4xl font-Raleway mt-2">
            {count}+
          </p>
          <p className="text-BasicGray text-xl font-semibold font-Raleway mt-2">
            States covered
          </p>
        </div>
        {/* ---------- State cover counter ---------- */}
        <div className="w-[15%] text-center">
          <div className="flex justify-center">
            <img src={statesCovered} alt="statesCovered" />
          </div>
          <p className="text-BasicOrange font-bold text-4xl font-Raleway mt-2">
            {count}+
          </p>
          <p className="text-BasicGray text-xl font-semibold font-Raleway mt-2">
            States covered
          </p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
