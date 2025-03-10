import React from "react";
import cardData from "./CardItem.js";

const OfferCard = () => {
  return (
    <div className="bg-BackgroundColor pb-10 pt-10">
      <div className="max-w-max-width mx-auto flex justify-between">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 w-[30%] rounded-lg shadow-lg"
          >
            <img src={card.image} alt={card.title} className="mx-auto" />
            <h2 className="text-xl font-bold text-center mt-4">{card.title}</h2>
            <p className="text-center mt-2">{card.description}</p>
            <ul className="mt-4 list-disc list-inside text-red-400">
              {card.features.map((feature, index) => (
                <li key={index} className="text-white">
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-md font-semibold block mx-auto hover:bg-gray-200">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferCard;
