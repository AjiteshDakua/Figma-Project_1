import React from "react";
import { assets } from "../assets/assets";

const About_Us = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-14 bg-gradient-to-b from-blue-50 to-white">
      <div className="flex flex-col lg:flex-row items-start gap-12">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={assets.About_us_1}
            alt="About us main"
            className="w-full max-w-[500px] h-auto rounded-2xl hidden lg:block"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 ">
          {/* Heading and Description */}
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-800  ">
              About Us
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-left ">
              At Brake Hospital, we are dedicated to providing exceptional
              healthcare with compassion, care, and advanced technology. Our
              mission is to ensure every patient receives the best medical
              services with kindness and respect.
            </p>
          </div>

          {/* Section 1 */}
          <div className="flex items-start gap-4 group text-left">
            <img
              src={assets.capsul}
              alt="Capsule"
              className="w-10 sm:w-12 h-10 sm:h-12 hidden lg:block "
            />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-700 ">
                Support Through Every Stage
              </h3>
              <p className="text-gray-700 text-sm sm:text-base ">
                From preventive care to emergency services, we stand by your
                side at every step of your health journey, especially during
                your most critical moments.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex items-start gap-4 group text-left">
            <img
              src={assets.first_aid_box}
              alt="First Aid"
              className="w-10 sm:w-12 h-10 sm:h-12 hidden lg:block "
            />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-700">
                Emergency Care Services
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Our 24/7 emergency department is equipped to handle all critical
                conditions with speed, precision, and expert medical care,
                ensuring you are always in safe hands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Us;
