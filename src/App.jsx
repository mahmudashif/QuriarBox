import React from "react";
import Footer from "./Components/layout/Footer";
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
      <Footer />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
