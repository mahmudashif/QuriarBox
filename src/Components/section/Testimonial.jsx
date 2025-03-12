import React from "react";

const Rating = ({ value }) => {
  return <p className="text-BasicOrange text-xl">{"⭐".repeat(value)}</p>;
};

const Testimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      review: "Excellent service and great experience!",
      rating: 5,
    },
    {
      name: "Jane Smith",
      review: "Good quality, but delivery was a bit slow.",
      rating: 4,
    },
    {
      name: "Michael Johnson",
      review: "Decent, but could be better.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-BackgroundColor pt-10 pb-10">
      <div className="max-w-max-width mx-auto">
        <div className="text-center">
          <h3 className="font-bold font-Oxanium text-3xl text-BasicOrange uppercase">
            testimonial
          </h3>
          <h2 className="font-Raleway text-BasicGray text-[40px] capitalize pt-2">
            our awesome clients
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md max-w-sm"
            >
              <p className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </p>
              <Rating value={testimonial.rating} />
              <p className="text-gray-600 mt-2">"{testimonial.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
