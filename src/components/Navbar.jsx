import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1560px] h-[99px] bg-white/40 backdrop-blur-[20px] rounded-[15px] z-50 shadow-md flex items-center justify-center">
      <div className="w-full max-w-7xl px-4 py-3 flex items-center justify-between ">
        {/* Left section with vector and text */}
        <div className="flex items-center space-x-2">
          <img src={assets.vector_53} alt="Logo" className="h-8" />
          <div className="flex space-x-6 text-base  font-semibold">
            <p className="cursor-pointer hover:text-red-500 text-[#84151F]">
              Startseite
            </p>
            <p className="cursor-pointer hover:text-blue-500 text-white">
              For Patients
            </p>
            <p className="cursor-pointer hover:text-blue-500 text-white">
              For Referrers
            </p>
          </div>
        </div>

        {/* Center logo */}
        <div>
          <img src={assets.logo} alt="Logo" className="h-10" />
        </div>

        {/* Navbar links */}
        <div className="hidden md:flex">
          <ul className="flex space-x-6 text-white font-medium">
            <li>
              <a href="/applicants" className="hover:text-blue-600">
                For Applicants
              </a>
            </li>
            <li>
              <a href="/career" className="hover:text-blue-600">
                Career
              </a>
            </li>
            <li>
              <a href="/about-us" className="hover:text-blue-600">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact button */}
        <div>
          <button className="w-[193px] h-[69px] bg-white/80 backdrop-blur-[20px] rounded-[15px] text-black font-semibold hover:bg-white hover:shadow-md transition">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
