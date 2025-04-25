import React from "react";
import { assets } from "../assets/assets";

const About_Us = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20 py-14 bg-gradient-to-b from-blue-50 to-white">
      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={assets.About_us_1}
            alt="About us main"
            className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          />
        </div>

        {/* Content + Extra Image */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          {/* Heading and Description */}
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 hover:text-blue-600 transition duration-300">
              About Us
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed hover:text-gray-900 transition duration-300">
              Cllum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>

          {/* Section 1 */}
          <div className="flex items-start gap-4 group">
            <img
              src={assets.capsul}
              alt="Capsule"
              className="w-10 sm:w-12 h-10 sm:h-12 hidden lg:block group-hover:scale-110 transition-transform duration-300"
            />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-700 group-hover:text-blue-500 transition duration-300">
                Placerat per senectus
              </h3>
              <p className="text-gray-700 text-sm sm:text-base group-hover:text-gray-900 transition duration-300">
                Cllum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex items-start gap-4 group">
            <img
              src={assets.first_aid_box}
              alt="First Aid"
              className="w-10 sm:w-12 h-10 sm:h-12 hidden lg:block group-hover:scale-110 transition-transform duration-300"
            />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-700 group-hover:text-blue-500 transition duration-300">
                Convallis iaculis porttitor
              </h3>
              <p className="text-gray-700 text-sm sm:text-base group-hover:text-gray-900 transition duration-300">
                Cllum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Cllum dolore eu fugiat nulla
                pariatur.
              </p>
            </div>
          </div>

          {/* Decorative Image */}
          <div className="pt-2 sm:pt-4 self-start hidden lg:block">
            <img
              src={assets.About_us_2}
              alt="Decorative"
              className="w-32 sm:w-40 md:w-48 lg:w-52 rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Us;
