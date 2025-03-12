import React from "react";
import Navbar from "./Components/layout/Navbar";
import OfferCard from "./Components/layout/OfferCard";
import Counter from "./Components/section/Counter";
import Hero from "./Components/section/Hero";
import Services from "./Components/section/Services";
import Testimonial from "./Components/section/Testimonial";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <OfferCard />
      <Counter />
      <Testimonial />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
