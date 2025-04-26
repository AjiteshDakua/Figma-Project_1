import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Menu, X } from "lucide-react"; // Icon library

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[90%] max-w-[1560px] bg-white/40 backdrop-blur-[20px] rounded-[15px] z-50 shadow-md">
      <div className="flex items-center justify-between w-full px-4 py-4 sm:py-3">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <img src={assets.vector_53} alt="Vector" className="h-8" />
          <div className="hidden sm:flex space-x-4 text-sm sm:text-base font-semibold">
            <a
              href="/"
              className="cursor-pointer hover:text-red-500 text-[#84151F]"
            >
              Startseite
            </a>
            <p className="cursor-pointer hover:text-blue-500 text-white">
              For Patients
            </p>
            <p className="cursor-pointer hover:text-blue-500 text-white">
              For Referrers
            </p>
          </div>
        </div>

        {/* Center Logo */}
        <div>
          <a href="/">
            <img src={assets.logo} alt="Logo" className="h-10" />
          </a>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-6 text-white font-medium text-sm sm:text-base">
          <a href="/applicants" className="hover:text-blue-600">
            For Applicants
          </a>
          <a href="/career" className="hover:text-blue-600">
            Career
          </a>
          <a href="/about-us" className="hover:text-blue-600">
            About Us
          </a>
          <button className="ml-4 px-4 py-2 bg-white/80 backdrop-blur-[20px] rounded-[15px] text-black font-semibold hover:bg-white hover:shadow-md transition">
            Contact
          </button>
        </div>

        {/* Hamburger for small screens */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-white font-medium animate-fade-in-down">
          <a href="/" className="hover:text-red-500">
            Startseite
          </a>
          <p className="hover:text-blue-500">For Patients</p>
          <p className="hover:text-blue-500">For Referrers</p>
          <a href="/applicants" className="block hover:text-blue-600">
            For Applicants
          </a>
          <a href="/career" className="block hover:text-blue-600">
            Career
          </a>
          <a href="/about-us" className="block hover:text-blue-600">
            About Us
          </a>
          <button className="w-full mt-2 px-4 py-2 bg-blue-200 backdrop-blur-[20px] rounded-[15px] text-black font-semibold n">
            Contact
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
