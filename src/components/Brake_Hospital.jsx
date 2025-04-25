import React from "react";
import { assets } from "../assets/assets";
import data from "../assets/assets";

const Brake_Hospital = () => {
  return (
    <div className=" top-[700px] w-full px-20 py-10 bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-4xl font-bold text-center text-black mb-8  pb-2 mt-5">
        Welcome to Brake Hospital
      </h1>

      {/* Wrapper for left and right divs */}
      <div className="flex justify-between gap-x-5">
        {/* Left div */}
        <div className="w-1/2 p-6 bg-white rounded-2xl shadow-xl flex flex-col gap-6 hover:shadow-2xl transition-all duration-300">
          {/* Image and description section */}
          <div className="flex flex-col items-center gap-4">
            <img
              src={assets.Social_Img}
              alt="Social"
              className="w-full rounded-xl object-cover"
            />
            <div className="text-gray-700 space-y-3 text-justify px-4">
              <p className="text-lg font-semibold leading-relaxed">
                Strong connection and support help people grow better, even
                during difficult times.
              </p>
              <p className="text-base leading-relaxed">
                With strong support and care, people can live better. Even in
                hard situations, we can move forward and grow steadily.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between px-4 border-t pt-4 border-gray-300">
            <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
              <img src={assets.calendar} alt="calendar" className="w-5 h-5" />
              <span>21-Apr-2025</span>
            </div>
            <div className="flex items-center justify-center rounded-full bg-[#8B1C27] hover:bg-[#A52733] transition duration-300 h-8 w-8 shadow-md cursor-pointer">
              <img src={assets.right_arrow_w} alt="arrow" className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-center gap-4 px-4 pt-4 border-t border-gray-200">
            <p className="text-gray-700 text-sm font-medium whitespace-nowrap">
              You can also find regular updates <br />
              on our social media channels.
            </p>
            <div className="flex items-center gap-3">
              <img
                src={assets.FaceBook_ico}
                alt="Facebook"
                className="w-6 h-6"
              />
              <img src={assets.Insta_ico} alt="Instagram" className="w-6 h-6" />
              <img
                src={assets.linkeIn_ico}
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>

        {/* Right div */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 font-medium mb-3">
                <img src={assets.calendar} alt="calendar" className="w-5 h-5" />
                <span>{item.date}</span>
              </div>

              <div className="text-gray-700 text-[15px] leading-relaxed text-justify mb-5">
                <p>{item.description}</p>
              </div>

              <div className="flex justify-end">
                <div className="flex items-center justify-center h-9 w-9 rounded-full bg-[#8B1C27] hover:bg-[#A52733] transition duration-300 shadow-md cursor-pointer">
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
