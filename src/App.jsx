import React from "react";
import Footer from "./Components/layout/Footer";
import Navbar from "./Components/layout/Navbar";
import OfferCard from "./Components/layout/OfferCard";
import Counter from "./Components/section/Counter";
import FindUs from "./Components/section/FindUs";
import Form from "./Components/section/Form";
import Hero from "./Components/section/Hero";
import PlayVideo from "./Components/section/PlayVideo";
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
      <PlayVideo />
      <Testimonial />
      <Form />
      <FindUs />
      <Footer />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
