import React from "react";
import {
  assets,
  jobOffersManagement,
  jobOffersOtherAreas,
  medicalJobs,
  nursingJobs,
} from "../assets/assets";

const Job_section = () => {
  return (
    <div className="w-full px-5 md:px-20 py-10 bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Job Advertisements
      </h1>

      {/* Nursing Job Offers Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Nursing Job Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nursingJobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start text-left hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={assets[job.image]}
                alt={job.title}
                className="w-full h-52 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                {job.title}
              </h3>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div className="flex gap-2 mb-4">
                {job.types.map((type, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                  >
                    {type}
                  </span>
                ))}
              </div>
              <button className="mt-auto flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition duration-300 shadow-md">
                {job.button}
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white hover:bg-blue-100 transition duration-300">
                  <img
                    src={assets.right_arrow}
                    alt="arrow"
                    className="w-3.5 h-3.5"
                  />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* medical section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Medical Job Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {medicalJobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start text-left hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={assets[job.image]} // Ensure this correctly maps the image path from `assets`
                alt={job.title}
                className="w-full h-52 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                {job.title}
              </h3>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div className="flex gap-2 mb-4">
                {job.types.map((type, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                  >
                    {type}
                  </span>
                ))}
              </div>
              <button className="mt-auto flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition duration-300 shadow-md">
                {job.button}
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white hover:bg-blue-100 transition duration-300">
                  <img
                    src={assets.right_arrow} // Ensure arrow image is correct
                    alt="arrow"
                    className="w-3.5 h-3.5"
                  />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Administrative section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Administrative
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {jobOffersManagement.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start text-left hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={assets[job.image]} // Ensure this correctly maps the image path from `assets`
                alt={job.title}
                className="w-full h-52 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                {job.title}
              </h3>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div className="flex gap-2 mb-4">
                {job.types.map((type, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                  >
                    {type}
                  </span>
                ))}
              </div>
              <button className="mt-auto flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition duration-300 shadow-md">
                {job.button}
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white hover:bg-blue-100 transition duration-300">
                  <img
                    src={assets.right_arrow} // Ensure arrow image is correct
                    alt="arrow"
                    className="w-3.5 h-3.5"
                  />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* jobOffersOtherAreas section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          jobOffersOtherAreas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {jobOffersOtherAreas.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start text-left hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={assets[job.image]} // Ensure this correctly maps the image path from `assets`
                alt={job.title}
                className="w-full h-52 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                {job.title}
              </h3>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div className="flex gap-2 mb-4">
                {job.types.map((type, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                  >
                    {type}
                  </span>
                ))}
              </div>
              <button className="mt-auto flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition duration-300 shadow-md">
                {job.button}
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white hover:bg-blue-100 transition duration-300">
                  <img
                    src={assets.right_arrow} // Ensure arrow image is correct
                    alt="arrow"
                    className="w-3.5 h-3.5"
                  />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Job_section;
