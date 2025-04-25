import React from "react";
import { assets } from "../assets/assets";

const About_Us = () => {
  return (
    <div className="w-full px-5 md:px-20 py-14 bg-gradient-to-b from-blue-50 to-white">
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Left image */}
        <div className="w-full md:w-1/2">
          <img
            src={assets.About_us_1}
            alt="About us main"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* middle content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-left">
          <h2 className="text-4xl font-bold text-blue-800">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            Cllum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          {/* Section 1 */}
          <div className="flex items-start gap-4">
            <img src={assets.capsul} alt="Capsule" className="w-12 h-12" />
            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                Placerat per senectus
              </h3>
              <p className="text-gray-700">
                Cllum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex items-start gap-4">
            <img
              src={assets.first_aid_box}
              alt="First Aid"
              className="w-12 h-12"
            />
            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                Convallis iaculis porttitor
              </h3>
              <p className="text-gray-700">
                Cllum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Cllum dolore eu fugiat nulla
                pariatur.
              </p>
            </div>
          </div>

          {/* left div*/}
        </div>
        <div className="pt-4">
          <img
            src={assets.About_us_2}
            alt="Decorative"
            className="w-40 md:w-52 rounded-md shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default About_Us;
