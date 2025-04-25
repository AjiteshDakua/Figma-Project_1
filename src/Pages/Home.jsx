import React from "react";
import Hero from "../components/Hero";
import Brake_Hospital from "../components/Brake_Hospital";
import About_Us from "../components/About_Us";
import Instagram from "../components/Instagram";
import Job_section from "../components/Job_section";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center space-y-7 text-center">
        <Hero />
        <Brake_Hospital />
        <About_Us />
        <Instagram />
        <Job_section />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
