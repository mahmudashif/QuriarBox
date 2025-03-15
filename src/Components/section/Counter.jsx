"use client";

import { useEffect, useState } from "react";
import award from "/public/Award.svg";
import businessHours from "/public/businessHours.svg";
import happyClient from "/public/client.svg";
import statesCovered from "/public/state.svg";
import goodsDelivered from "/public/transport.svg";

const Counter = () => {
  const [awardsCount, setAwardsCount] = useState(0);
  const [statesCount, setStatesCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [goodsCount, setGoodsCount] = useState(0);
  const [hoursCount, setHoursCount] = useState(0);

  const targetValues = {
    awards: 26,
    states: 48,
    clients: 25,
    goods: 10,
    hours: 15,
  };

  const animationSpeed = 100;

  useEffect(() => {
    if (awardsCount < targetValues.awards) {
      const interval = setInterval(() => {
        setAwardsCount((prev) => Math.min(prev + 1, targetValues.awards));
      }, animationSpeed);
      return () => clearInterval(interval);
    }
  }, [awardsCount]);

  useEffect(() => {
    if (statesCount < targetValues.states) {
      const interval = setInterval(() => {
        setStatesCount((prev) => Math.min(prev + 1, targetValues.states));
      }, animationSpeed);
      return () => clearInterval(interval);
    }
  }, [statesCount]);

  useEffect(() => {
    if (clientsCount < targetValues.clients) {
      const interval = setInterval(() => {
        setClientsCount((prev) => Math.min(prev + 1, targetValues.clients));
      }, animationSpeed);
      return () => clearInterval(interval);
    }
  }, [clientsCount]);

  useEffect(() => {
    if (goodsCount < targetValues.goods) {
      const interval = setInterval(() => {
        setGoodsCount((prev) => Math.min(prev + 1, targetValues.goods));
      }, animationSpeed);
      return () => clearInterval(interval);
    }
  }, [goodsCount]);

  useEffect(() => {
    if (hoursCount < targetValues.hours) {
      const interval = setInterval(() => {
        setHoursCount((prev) => Math.min(prev + 1, targetValues.hours));
      }, animationSpeed);
      return () => clearInterval(interval);
    }
  }, [hoursCount]);

  return (
    <div className="bg-BackgroundColor pt-20 pb-10">
      <div className="max-w-max-width mx-auto flex flex-wrap justify-center md:justify-between gap-6">
        {/* Counter Items */}
        {[
          { img: award, count: awardsCount, suffix: "+", label: "Awards won" },
          {
            img: statesCovered,
            count: statesCount,
            suffix: "+",
            label: "States covered",
          },
          {
            img: happyClient,
            count: clientsCount,
            suffix: "K+",
            label: "Happy clients",
          },
          {
            img: goodsDelivered,
            count: goodsCount,
            suffix: "M+",
            label: "Goods delivered",
          },
          {
            img: businessHours,
            count: hoursCount,
            suffix: "M+",
            label: "Business hours",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="w-[15%] min-w-[180px] max-w-[200px] text-center flex flex-col items-center"
          >
            <img
              src={item.img || "/placeholder.svg"}
              alt={item.label}
              className="w-16 h-16"
            />
            <p className="text-BasicOrange font-bold text-4xl font-Raleway mt-2">
              {item.count}
              {item.suffix}
            </p>
            <p className="text-BasicGray text-xl font-semibold font-Raleway mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
