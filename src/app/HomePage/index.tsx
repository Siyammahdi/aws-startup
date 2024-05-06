import React from "react";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Sponsor from "./Components/Sponsor";
import About from "./Components/About";
import Credit from "./Components/Credit";
import Footer from "./Components/Footer";
import Stepper from "./Components/Stepper";

const HomePage = () => {
  return (
    <div >
      <div className="max-w-7xl mx-auto">
        <Header />
        <Hero />
        <Sponsor />
        <About />
        <Credit />
        <Stepper />
      </div>
      <div className="bg-[#232f3e]">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
