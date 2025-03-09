import React from "react";
import Navbar from "./Components/layout/Navbar";
import Hero from "./Components/section/Hero";
import Services from "./Components/section/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
