import React from "react";
import Navbar from "./Components/layout/Navbar";
import OfferCard from "./Components/layout/OfferCard";
import Hero from "./Components/section/Hero";
import Services from "./Components/section/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <OfferCard />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
