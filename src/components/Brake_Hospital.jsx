import React from "react";
import { assets } from "../assets/assets";
import data from "../assets/assets";

const Brake_Hospital = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-10 bg-gradient-to-b from-blue-50 to-white">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-black mb-10 hover:text-blue-700 transition duration-300">
        Welcome to Brake Hospital
      </h1>

      {/* Wrapper */}
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 p-5 sm:p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.01] transition duration-300 flex flex-col gap-6">
          {/* Image and Description */}
          <div className="flex flex-col items-center gap-4">
            <img
              src={assets.Social_Img}
              alt="Social"
              className="w-full h-auto rounded-xl object-cover hover:shadow-md transition duration-300"
            />
            <div className="text-gray-700 space-y-3 text-justify px-2 sm:px-4">
              <p className="text-base sm:text-lg font-semibold leading-relaxed hover:text-gray-900 transition duration-300">
                Strong connection and support help people grow better, even
                during difficult times.
              </p>
              <p className="text-sm sm:text-base leading-relaxed hover:text-gray-800 transition duration-300">
                With strong support and care, people can live better. Even in
                hard situations, we can move forward and grow steadily.
              </p>
            </div>
          </div>

          {/* Date and Arrow */}
          <div className="flex items-center justify-between px-4 border-t pt-4 border-gray-300">
            <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
              <img src={assets.calendar} alt="calendar" className="w-5 h-5" />
              <span className="hover:text-black transition duration-300">
                21-Apr-2025
              </span>
            </div>
            <div className="flex items-center justify-center rounded-full bg-[#8B1C27] hover:bg-[#A52733] transition duration-300 h-8 w-8 shadow-md cursor-pointer">
              <img src={assets.right_arrow_w} alt="arrow" className="w-4 h-4" />
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 pt-4 border-t border-gray-200">
            <p className="text-gray-700 text-sm font-medium hover:text-black transition duration-300">
              You can also find regular updates on our social media channels.
            </p>
            <div className="flex items-center gap-3">
              <img
                src={assets.FaceBook_ico}
                alt="Facebook"
                className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
              <img
                src={assets.Insta_ico}
                alt="Instagram"
                className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
              <img
                src={assets.linkeIn_ico}
                alt="LinkedIn"
                className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:scale-[1.01] transition duration-300"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 font-medium mb-3">
                <img src={assets.calendar} alt="calendar" className="w-5 h-5" />
                <span className="hover:text-black transition duration-300">
                  {item.date}
                </span>
              </div>

              <p className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed mb-4 hover:text-gray-900 transition duration-300">
                {item.description}
              </p>

              <div className="flex justify-end">
                <div className="h-9 w-9 flex items-center justify-center rounded-full bg-[#8B1C27] hover:bg-[#A52733] transition duration-300 shadow-md cursor-pointer">
                  <img
                    src={assets.right_arrow_w}
                    alt="arrow"
                    className="w-4 h-4"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brake_Hospital;
