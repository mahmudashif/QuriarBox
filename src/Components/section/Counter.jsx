"use client";

import { useEffect, useState } from "react";
import award from "/public/Award.svg";
import businessHours from "/public/businessHours.svg";
import happyClient from "/public/client.svg";
import statesCovered from "/public/state.svg";
import goodsDelivered from "/public/transport.svg";

const Counter = () => {
  // Individual state for each counter
  const [awardsCount, setAwardsCount] = useState(0);
  const [statesCount, setStatesCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [goodsCount, setGoodsCount] = useState(0);
  const [hoursCount, setHoursCount] = useState(0);

  // Target values for each counter
  const targetValues = {
    awards: 26,
    states: 48,
    clients: 25, // Will display as 25K+
    goods: 10, // Will display as 10M+
    hours: 15, // Will display as 15M+
  };

  // Animation speed (in milliseconds)
  const animationSpeed = 100;

  // Awards counter
  useEffect(() => {
    if (awardsCount < targetValues.awards) {
      const interval = setInterval(() => {
        setAwardsCount((prev) => Math.min(prev + 1, targetValues.awards));
      }, animationSpeed);
      return () => clearInterval(interval);
    }
  }, [awardsCount]);

  // States counter
  useEffect(() => {
    if (statesCount < targetValues.states) {
      const interval = setInterval(() => {
        setStatesCount((prev) => Math.min(prev + 1, targetValues.states));
      }, animationSpeed);
      return () => clearInterval(interval);
    }
  }, [statesCount]);

  // Clients counter
  useEffect(() => {
    if (clientsCount < targetValues.clients) {
      const interval = setInterval(() => {
        setClientsCount((prev) => Math.min(prev + 1, targetValues.clients));
      }, animationSpeed);
      return () => clearInterval(interval);
    }
  }, [clientsCount]);

  // Goods counter
  useEffect(() => {
    if (goodsCount < targetValues.goods) {
      const interval = setInterval(() => {
        setGoodsCount((prev) => Math.min(prev + 1, targetValues.goods));
      }, animationSpeed);
      return () => clearInterval(interval);
    }
  }, [goodsCount]);

  // Hours counter
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
      <div className="max-w-max-width mx-auto flex flex-wrap justify-between items-center">
        {/* ---------- Award Won counter ---------- */}
        <div className="w-[15%] text-center">
          <div className="flex justify-center">
            <img src={award || "/placeholder.svg"} alt="Award" />
          </div>
          <p className="text-BasicOrange font-bold text-4xl font-Raleway mt-2">
            {awardsCount}+
          </p>
          <p className="text-BasicGray text-xl font-semibold font-Raleway mt-2">
            Awards won
          </p>
        </div>

        {/* ---------- State cover counter ---------- */}
        <div className="w-[15%] text-center">
          <div className="flex justify-center">
            <img
              src={statesCovered || "/placeholder.svg"}
              alt="statesCovered"
            />
          </div>
          <p className="text-BasicOrange font-bold text-4xl font-Raleway mt-2">
            {statesCount}+
          </p>
          <p className="text-BasicGray text-xl font-semibold font-Raleway mt-2">
            States covered
          </p>
        </div>

        {/* ---------- Happy Client counter ---------- */}
        <div className="w-[15%] text-center">
          <div className="flex justify-center">
            <img src={happyClient || "/placeholder.svg"} alt="statesCovered" />
          </div>
          <p className="text-BasicOrange font-bold text-4xl font-Raleway mt-2">
            {clientsCount}K+
          </p>
          <p className="text-BasicGray text-xl font-semibold font-Raleway mt-2">
            Happy clients
          </p>
        </div>

        {/* ---------- Goods Delivered counter ---------- */}
        <div className="w-[15%] text-center">
          <div className="flex justify-center">
            <img
              src={goodsDelivered || "/placeholder.svg"}
              alt="statesCovered"
            />
          </div>
          <p className="text-BasicOrange font-bold text-4xl font-Raleway mt-2">
            {goodsCount}M+
          </p>
          <p className="text-BasicGray text-xl font-semibold font-Raleway mt-2">
            Goods delivered
          </p>
        </div>

        {/* ---------- Business hours counter ---------- */}
        <div className="w-[15%] text-center">
          <div className="flex justify-center">
            <img
              src={businessHours || "/placeholder.svg"}
              alt="statesCovered"
            />
          </div>
          <p className="text-BasicOrange font-bold text-4xl font-Raleway mt-2">
            {hoursCount}M+
          </p>
          <p className="text-BasicGray text-xl font-semibold font-Raleway mt-2">
            Business hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
