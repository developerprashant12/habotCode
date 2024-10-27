import React, { useState } from "react";
import ytv from "../assests/ytv.png"; // Left image
import ytv1 from "../assests/ytv1.png"; // Center image
import check from "../assests/check.png"; // Image for each tab item

// Data for tabs with multiple items
const tabData = {
  tab1: [
    "Post your requirements",
    "Sit back for multiple suppliers to contact you.",
    "Choose among the suppliers based on the ratings and reviews.",
  ],
  tab2: [
    "Post your accesspolish",
    "Sit back for multiple suppliers.",
    "Choose among the suppliers based on the ratings.",
  ],
};

const VideoSectionPage = () => {
  const [activeTab, setActiveTab] = useState("tab1"); // State to manage active tab

  const handleVideoClick = () => {
    window.open("https://www.youtube.com/watch?v=IZLp-TZyDkQ", "_blank");
  };

  return (
    <section className="p-5 md:pl-16 md:pr-16">
      <div className="bg-[#072F57] flex flex-col md:flex-row rounded-md md:p-2">
        {/* Left Section */}
        <div className="flex-1 p-6 flex flex-col items-center relative md:pt-20 md:pb-20 pt-14 pb-14">
          <div
            className="relative w-full h-auto md:p-6 cursor-pointer"
            onClick={handleVideoClick}
          >
            <img src={ytv1} alt="Video thumbnail" className="w-62 h-auto" />
            <img
              src={ytv}
              alt="Play icon"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-auto"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 p-6 md:pt-20 md:pb-20 pb-14">
          {/* Tab Buttons */}
          <div className="flex mb-4 md:mb-0 md:p-6 gap-5">
            <button
              className={`flex-1 text-xl md:text-2xl px-4 py-2 text-white font-semibold ${
                activeTab === "tab1"
                  ? "border-b-2 border-[#EB7150] text-[#EB7150]"
                  : ""
              }`}
              onClick={() => setActiveTab("tab1")}
            >
              Buyer
            </button>
            <button
              className={`flex-1 text-xl md:text-2xl px-4 py-2 text-white font-semibold ${
                activeTab === "tab2"
                  ? "border-b-2 border-[#EB7150] text-[#EB7150]"
                  : ""
              }`}
              onClick={() => setActiveTab("tab2")}
            >
              Supplier
            </button>
          </div>

          {/* Tab Content */}
          <div className="space-y-4 md:p-6">
            {tabData[activeTab].map((item, index) => (
              <div key={index} className="flex items-center">
                {/* Check Icon on the left side of each tab item */}
                <img src={check} alt="Check mark" className="w-5 h-5 mr-4" />
                <div className="text-gray-300">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSectionPage;