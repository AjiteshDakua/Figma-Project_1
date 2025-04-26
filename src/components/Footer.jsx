import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-900 text-white pt-12 pb-6 px-6 sm:px-12 md:px-20 lg:px-32 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 animate-fadeInUpDelicate text-left">
        {/* Contact Info */}
        <div className="cursor-pointer">
          <h3 className="text-xl font-semibold mb-4 text-blue-100">
            Contact Us
          </h3>

          <div className="flex items-center gap-3 mb-3 hover:text-blue-300 transition-all duration-300 ease-in-out">
            <FaEnvelope className="text-white/80 mt-1" size={20} />
            <span className="text-lg font-medium text-gray-200">
              info@brakehospital.com
            </span>
          </div>

          <div className="flex items-center gap-3 mb-3 hover:text-blue-300 transition-all duration-300 ease-in-out">
            <FaPhoneAlt className="text-white/80 mt-1" size={20} />
            <span className="text-lg font-medium text-gray-200">
              +91 9876543210
            </span>
          </div>

          <div className="flex items-center gap-3 mt-3 hover:text-blue-300 transition-all duration-300 ease-in-out">
            <FaMapMarkerAlt className="text-white/80 mt-1" size={20} />
            <span className="text-sm font-medium text-gray-300">
              123 Brake Street, Kolkata, India
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About Us", "Departments", "Contact"].map(
              (link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-blue-300 transition duration-200"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
          <ul className="text-sm space-y-1 text-gray-100">
            <li>Mon - Fri: 8:00 AM - 8:00 PM</li>
            <li>Saturday: 9:00 AM - 5:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <p className="text-sm mb-3 text-gray-200">
            Stay connected through our social channels.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              className="p-2 rounded-full bg-blue-800 hover:bg-blue-600 transition duration-200"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-pink-700 hover:bg-pink-500 transition duration-200"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-blue-700 hover:bg-blue-500 transition duration-200"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 pt-4 border-t border-blue-500 text-center text-sm text-gray-200">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-medium">Brake Hospital</span>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
