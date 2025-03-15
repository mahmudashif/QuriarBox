import React from "react";
import ProfileIcon1 from "/public/profileIcon1.svg";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      title: "Fantastic service!",
      content:
        "I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.",
      rating: 5,
      author: "Yves Tanguy",
      position: "Chief Executive, DLF",
      image: ProfileIcon1,
    },
    {
      id: 2,
      title: "Excellent delivery experience!",
      content:
        "The delivery was prompt and the courier was very professional. I appreciate the care taken with my package and the real-time tracking feature was incredibly useful. The customer service team was responsive and helpful throughout the entire process.",
      rating: 5,
      author: "Sarah Johnson",
      position: "Marketing Director, ABC Corp",
      image: ProfileIcon1,
    },
    {
      id: 3,
      title: "Reliable and fast!",
      content:
        "I've been using this service for my business shipments for over a year now, and I'm consistently impressed with their reliability and speed. The online portal is user-friendly and makes managing multiple shipments a breeze.",
      rating: 4,
      author: "Michael Chen",
      position: "Operations Manager, Tech Solutions",
      image: ProfileIcon1,
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 md:w-6 md:h-6 ${
          index < rating ? "text-[#FF5722]" : "text-gray-300"
        } fill-current`}
        viewBox="0 0 24 24"
      >
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
      </svg>
    ));
  };

  return (
    <div className="bg-BackgroundColor pt-6 md:pt-8 lg:pt-10 pb-10 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <h3 className="font-bold font-Oxanium text-xl md:text-2xl lg:text-3xl text-BasicOrange uppercase">
            testimonial
          </h3>
          <h2 className="font-Raleway text-BasicGray text-2xl md:text-[30px] lg:text-[40px] capitalize pt-2">
            our awesome clients
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="max-w-[872px] mx-auto space-y-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-[#fff6e6] rounded-3xl p-6 md:p-8 shadow-[0_0_20px_rgba(0,0,255,0.1)] transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Blue Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-blue-600/5 blur-xl -z-10"></div>

              {/* Content */}
              <h2 className="text-[#FF5722] text-xl md:text-2xl font-bold mb-4">
                {testimonial.title}
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed line-clamp-6 text-sm md:text-base">
                {testimonial.content}
              </p>

              {/* Rating and Author Info */}
              <div className="flex justify-between items-center">
                <div className="flex">{renderStars(testimonial.rating)}</div>
                <div className="flex gap-x-4 items-center">
                  <div>
                    <h3 className="text-gray-900 font-bold text-sm md:text-base">
                      {testimonial.author}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {testimonial.position}
                    </p>
                  </div>

                  {/* Profile Image */}
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
