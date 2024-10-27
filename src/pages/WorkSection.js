import React from "react";
import Group from "../assests/Group.png";
import document from "../assests/document.png";
import Layer from "../assests/Layer.png";
import edit from "../assests/edit.png";
import write from "../assests/write.png";
import hand from "../assests/hand.png";

const WorkSection = () => {
  return (
    <section className="py-10 px-5 md:mb-20 pb-14">
      <h2 className="text-center text-3xl font-bold mb-4">How it works?</h2>
      <p className="text-center text-gray-600 mb-10">
        Buyers post their needs and review top suppliers, while suppliers
        complete profiles, connect with <br />
        potential buyers, and build successful business relationships, sharing
        valuable feedback.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 md:pl-40 md:pr-40 gap-3">
        {/* Step 1 */}
        <div className="bg-[#E8FBFF] p-6 rounded-lg text-center p-4">
          <div className="flex justify-center mb-4">
            {/* Replace with an icon */}
            <img src={Group} alt="Group" className="w-14 h-14" />
          </div>
          <h3 className="font-semibold mb-2">
            Select Your Role and
            <br /> Sign Up
          </h3>
        </div>

        {/* Step 2 */}
        <div className="p-6 rounded-lg text-center">
          <div className="flex justify-center mb-4">
            {/* Replace with an icon */}
            <img src={document} alt="document" className="w-14 h-14" />
          </div>
          <h3 className="font-semibold mb-2">
            Buyers Post Your
            <br /> Requirements
          </h3>
        </div>

        {/* Step 3 */}
        <div className="bg-[#E8FBFF] p-6 rounded-lg text-center">
          <div className="flex justify-center mb-4">
            {/* Replace with an icon */}
            <img src={Layer} alt="Layer" className="w-14 h-14" />
          </div>
          <h3 className="font-semibold mb-2">
            Review, Select, and
            <br /> Contact the Best Suppliers
          </h3>
        </div>

        {/* Step 4 */}
        <div className="p-6 rounded-lg text-center">
          <div className="flex justify-center mb-4">
            {/* Replace with an icon */}
            <img src={edit} alt="edit" className="w-14 h-14" />
          </div>
          <h3 className="font-semibold mb-2">
            {" "}
            Suppliers Complete your
            <br /> profile and get notified for
            <br /> opportunities
          </h3>
        </div>

        {/* Step 5 */}
        <div className="bg-[#E8FBFF] p-6 rounded-lg text-center">
          <div className="flex justify-center mb-4">
            {/* Replace with an icon */}
            <img src={write} alt="write" className="w-14 h-14" />
          </div>
          <h3 className="font-semibold mb-2">
            Contact to Buyers and Share
            <br /> your Quote for the service
          </h3>
        </div>

        {/* Step 6 */}
        <div className="p-6 rounded-lg text-center">
          <div className="flex justify-center mb-4">
            {/* Replace with an icon */}
            <img src={hand} alt="hand" className="w-14 h-14" />
          </div>
          <h3 className="font-semibold mb-2">
            Both the Parties can Connect
            <br /> and Make Business Leave a<br /> Feedback
          </h3>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;