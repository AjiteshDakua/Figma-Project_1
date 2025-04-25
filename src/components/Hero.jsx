import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="w-full max-w-[1560px] mx-auto  ">
      <img
        src={assets.hero_logo}
        alt="Hero"
        className="w-full h-[650px] object-cover "
      />
      <div className="absolute top-[450px] left-[105px] transform -translate-y-1/2 -rotate-90 origin-left text-xl font-normal leading-[26px] text-white">
        Scroll down
      </div>
      <div className="absolute top-[340px] right-[105px] transform -translate-y-1/2 -rotate-90 origin-right text-[20px] font-normal leading-[26px] text-white flex items-center space-x-2">
        <img
          src={assets.Phone_ico}
          alt="Phone Icon"
          className="w-[22px] h-[22px] object-contain rotate-90"
        />
        <span className="text-white text-[20px] leading-[26px] font-normal tracking-[0.06em]">
          +91 123 456 7890
        </span>
      </div>

      {/* Features button section */}
      <div className="absolute top-96 left-[1080px] w-[172px] h-[54px] rounded-full bg-[#002950] flex items-center justify-center shadow-md">
        <div className="w-[139px] h-[38px] flex items-center justify-between px-3 bg-[#002950] rounded-full">
          <span className="text-white text-base font-medium tracking-wide">
            Features
          </span>
          <div className="w-[38px] h-[38px] bg-white rounded-full flex items-center justify-center">
            <img
              src={assets.right_arrow}
              alt="Right Arrow"
              className="w-4 rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[450px] left-[850px] w-[620px] h-[187px]">
        <p className="text-white  text-[50px] leading-[60px] tracking-[-0.03em] break-words text-balance sm:text-[40px] sm:leading-[50px] max-w-full">
          Smooth flow through every simple and <br /> soft element.
        </p>
      </div>
    </div>
  );
};

export default Hero;
