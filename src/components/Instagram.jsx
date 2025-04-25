import React from "react";

const Instagram = () => {
  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-blue-900 mb-4 leading-tight tracking-tight">
          Follow Us on Instagram
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
          Stay connected and see what’s happening behind the scenes. Don’t miss
          out on our latest posts!
        </p>
      </div>

      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-3xl p-4 sm:p-6 md:p-10 border border-blue-100">
        {/* Instagram Widget Script */}
        <script
          src="https://static.elfsight.com/platform/platform.js"
          async
        ></script>

        {/* Widget Container */}
        <div
          className="elfsight-app-a002c95f-cd05-44fe-a2b8-0c1861b482c1"
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
  );
};

export default Instagram;
