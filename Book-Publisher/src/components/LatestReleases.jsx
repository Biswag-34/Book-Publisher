import React from "react";

const LatestReleases = () => {
  return (
    <div
      className="bg-cover bg-center py-12 px-6"
      style={{ backgroundImage: "url('/library-bg-2.jpg')" }}
    >
      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white">
        LATEST RELEASES
      </h2>
      <p className="text-center text-gray-400 mt-2 uppercase text-sm md:text-base max-w-lg mx-auto">
        Lorem ipsum dolor sit amet consectetur
      </p>

      {/* Responsive Layout */}
      <div className="flex flex-col md:flex-row justify-center gap-10 mt-10 items-center">
        {/* First Book */}
        <div className="relative w-full md:w-[45%] flex flex-col md:flex-row items-center md:items-start">
          <img
            src="/light.jpg"
            alt="Book Cover"
            className="w-1/4 md:w-1/3 h-auto object-cover"
          />
          <div className="absolute md:right-[27%] top-1/2 md:transform md:-translate-y-1/2 bg-opacity-50 border border-white p-3 md:p-4 text-white w-[80%] md:w-[45%]">
            <p className="pl-15 text-red-500 font-bold text-xs md:text-sm">18 Dec 2020</p>
            <h3 className="pl-8 text-lg md:text-xl font-bold">Lorem ipsum dolor</h3>
            <p className="pl-8 text-xs md:text-sm mt-2 font-bold text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
        </div>

        {/* Second Book */}
        <div className="relative w-full md:w-[45%] flex flex-col md:flex-row items-center md:items-start">
          <img
            src="/light.jpg"
            alt="Book Cover"
            className="w-1/2 md:w-1/3 h-auto object-cover"
          />
          <div className="absolute md:right-[27%] top-1/2 md:transform md:-translate-y-1/2 bg-opacity-50 border border-white p-3 md:p-4 text-white w-[80%] md:w-[45%]">
            <p className="pl-15 text-red-500 font-bold text-xs md:text-sm">18 Dec 2020</p>
            <h3 className="pl-8 text-lg md:text-xl font-bold">Lorem ipsum dolor </h3>
            <p className="pl-8 mr-0 pr-0 text-xs md:text-sm mt-2 font-bold text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestReleases;
