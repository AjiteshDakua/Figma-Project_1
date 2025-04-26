import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="w-full px-6 sm:px-12 md:px-20 lg:px-32 py-10 bg-gradient-to-br from-blue-100 via-white to-blue-50">
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
        {/* Left div - Form */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-lg bg-blue-50 p-8 rounded-2xl  hover:shadow-blue-200 transition duration-500">
            <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
              Get in Touch
            </h2>
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              />
              <textarea
                placeholder="Your Message"
                className="p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition resize-none h-28"
              ></textarea>
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2 accent-blue-500" />I
                agree to the{" "}
                <span className="underline text-blue-600 hover:text-blue-800 cursor-pointer ml-1">
                  terms and conditions
                </span>
              </label>
              <button
                type="submit"
                className="p-3 mt-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-lg font-bold rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Right div - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={assets.Contact}
            alt="Contact"
            className="hidden lg:block w-full max-w-sm rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
