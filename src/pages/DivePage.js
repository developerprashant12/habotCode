import React from "react";
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";


const destinations = [
    { name: "Abu Dhabi", link: "/abu-dhabi" },
    { name: "Dubai", link: "/dubai" },
    { name: "Sharjah & Ajman", link: "/sharjah" },
    { name: "Fujairah", link: "/fujairah" },
    { name: "Ras Al Khaimah", link: "/ras-al-khaimah" },
    { name: "Umm Al Quwain", link: "/umm-al-quwain" },
  ];


const DivePage = () => {
  return (
    <section className="flex flex-col md:flex-row p-2 md:p-12 ">
      {/* Left Section */}
      <div className="flex-1 p-2 m-2 rounded-md md:pt-20 md:pb-20">
        <h2 className="text-2xl font-bold mb-4">
          Ready to dive into <span className="text-[#271555]">HABOT?</span>
        </h2>
        <p className="text-gray-700 text-justify md:w-3/4 mb-5">
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-2 bg-buttonColor1 text-white font-semibold rounded-md hover:buttonColor1"
        >
          Sign up Today !
          <IoArrowForward className="ml-8" />
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex-1 p-2 m-2 rounded-md md:pt-20 md:pb-20">
          {/* Button Grid */}
          <div className="grid grid-cols-2 gap-6">
          {destinations.map((destination, index) => (
            <Link
              to={destination.link}
              key={index}
              className="inline-flex items-center px-3 py-3 border border-buttonColor1 text-black font-semibold rounded-md hover:bg-buttonColor1 hover:text-white w-full justify-center"
            >
              {destination.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivePage;
