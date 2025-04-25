import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="relative w-full max-w-[1560px] mx-auto">
      {/* Hero Image */}
      <img
        src={assets.hero_logo}
        alt="Hero"
        className="w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] object-cover"
      />

      {/* Left - Scroll Down */}
      <div className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 -rotate-90 text-sm lg:text-lg text-white font-normal animate-fadeIn">
        Scroll down
      </div>

      {/* Right - Phone */}
      <div className="hidden md:flex absolute top-[40%] right-4 transform -translate-y-1/2 -rotate-90 text-sm lg:text-lg text-white items-center space-x-2 animate-fadeIn">
        <img
          src={assets.Phone_ico}
          alt="Phone Icon"
          className="w-5 h-5 object-contain rotate-90"
        />
        <span className="tracking-wide">+91 123 456 7890</span>
      </div>

      {/* Features Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:top-96 md:left-[1080px] animate-fadeInUp">
        <div className="w-[172px] h-[54px] rounded-full bg-[#002950] hover:bg-[#003d70] shadow-lg flex items-center justify-center transition-all duration-300">
          <div className="w-[139px] h-[38px] flex items-center justify-between px-3 rounded-full">
            <span className="text-white text-sm md:text-base font-medium tracking-wide">
              Features
            </span>
            <div className="w-[38px] h-[38px] bg-white rounded-full flex items-center justify-center hover:scale-110 transition duration-300">
              <img src={assets.right_arrow} alt="Right Arrow" className="w-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Heading */}
      <div className="absolute top-[55%] md:top-[450px] left-1/2 md:left-[850px] transform -translate-x-1/2 md:translate-x-0 w-[90%] md:w-[620px] px-4 animate-fadeInUp">
        <p className="text-white text-center md:text-left text-[28px] sm:text-[36px] md:text-[48px] leading-tight sm:leading-[48px] md:leading-[58px] font-semibold tracking-tight">
          Smooth flow through every simple and{" "}
          <br className="hidden md:block" />
          soft element.
        </p>
      </div>
    </div>
  );
};

export default Hero;
