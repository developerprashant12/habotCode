import React from "react";
import backgroundImage from "../assests/banner.png";
import serviceImage from "../assests/suitcase1.png";
import locationImage from "../assests/placeholder1.png";
import DivePage from "./DivePage";
import VideoSectionPage from "./VideoSectionPage";
import SupplierFindPage from "./SupplierFindPage";
import WorkSection from "./WorkSection";

const HomePage = () => {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center md:pt-24 md:pb-8 px-4 text-center h-[450px] md:h-[600px]">
        {/* Data Center */}
        <div className="z-10">
          <h1 className="text-xl md:text-4xl font-bold text-white mb-4 md:mb-4">
            <b>Are You a Supplier?</b>
            <br />
            Explore Matching Opportunities.
          </h1>

          {/* Search Section */}
          <div className="flex flex-wrap justify-center gap-2 md:mt-8">
            {/* Service Input */}
            <div className="flex items-center bg-white rounded-sm px-4 py-2 border border-gray-300 w-full md:w-80 mb-2 md:mb-0">
              <img
                src={serviceImage}
                alt="Service Icon"
                className="w-4 h-4 mr-2"
              />
              <input
                type="text"
                placeholder="Search your required service here"
                className="placeholder:text-sm outline-none flex-grow text-gray-600"
              />
            </div>

            {/* Location Input */}
            <div className="flex items-center bg-white rounded-sm px-4 py-2 border-t border-b border-gray-300 md:border-none w-full md:w-80 mb-2 md:mb-0">
              <img
                src={locationImage}
                alt="Location Icon"
                className="w-4 h-4 mr-2"
              />
              <input
                type="text"
                placeholder="Search your desired location here"
                className="placeholder:text-sm outline-none flex-grow text-gray-600"
              />
            </div>

            {/* Search Button */}
            <button className="bg-buttonColor1 text-white font-semibold px-8 py-2 rounded-sm hover:bg-buttonColor1 hover:text-white">
              Search
            </button>
          </div>

          {/* Additional Buyer Section */}
          <div className="mt-4 text-white">
            <p>
              <b>Are you a buyer?</b>{" "}
              <a
                href="/buyer-post-requirement"
                className="text-gray-300 text-sm underline hover:text-white"
              >
                Click here if you are looking to post a requirement
              </a>
            </p>
          </div>
        </div>

        {/* Background with Image and Linear Gradients */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage}), 
                            linear-gradient(356.01deg, rgba(7, 47, 87, 0.75) 50.8%, rgba(7, 47, 87, 0) 94.58%), 
                            linear-gradient(0deg, rgba(7, 47, 87, 0.45), rgba(7, 47, 87, 0.45))`,
            backgroundBlendMode: "overlay",
          }}
        ></div>
      </section>
      <DivePage/>
      <VideoSectionPage/>
      <SupplierFindPage/>
      <WorkSection/>
    </>
  );
};

export default HomePage;