import React from "react";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Sponsor from "./Components/Sponsor";
import About from "./Components/About";
import Credit from "./Components/Credit";
import Footer from "./Components/Footer";
import Stepper from "./Components/Stepper";
import Showcase from "./Components/Showcase";
import Contact from "./Components/Contact";
import Tastimonials from "./Components/Tastimonials";

const HomePage = () => {
  return (
    <div >
      <div className="max-w-7xl mx-auto ">
        <Header />
        <Hero />
        <Sponsor />
        <About />
        <Tastimonials />
        <Credit />
        <Stepper />
        <Showcase />
        <Contact />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
