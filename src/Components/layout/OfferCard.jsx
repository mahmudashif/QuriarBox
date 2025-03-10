import React from "react";
import cardData from "./CardItem.js";

const OfferCard = () => {
  return (
    <div className="bg-BackgroundColor pb-10 pt-10">
      <div className="max-w-max-width mx-auto flex justify-between">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-gradient-to-r from-[#fff7e7]-500 to-[#fff1dc]-600 text-white py-16 pl-10 pr-10 w-[30%] rounded-lg shadow-lg"
          >
            <img src={card.image} alt={card.title} className="mx-auto" />
            <h2 className="text-xl font-bold font-Raleway text-[#464558] text-center mt-4">
              {card.title}
            </h2>
            <p className="text-[#7B7A8B] mt-4 font-Raleway text-lg h-32">
              {card.description}
            </p>
            <ul className="mt-4 list-disc list-inside text-[#7B7A8B] font-Raleway">
              {card.features.map((feature, index) => (
                <li key={index} className="">
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-10 px-24 text-[#F95C19] border-[2px] text-xl font-Oxanium border-[#F95C19] py-4 rounded-lg font-bold block mx-auto hover:bg-[#F95C19] hover:text-white">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferCard;
