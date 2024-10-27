import React from "react";
import { Link } from "react-router-dom";

const SupplierFindPage = () => {
  return (
    <section className="bg-[#c5e7ee] p-5 mt-14 mb-14 md:mt-20 md:mb-20">
      <div className="container flex md:flex-row justify-between items-center rounded-md md:p-2 md:pl-24 md:pr-24">
        {/* Left Section */}
        <div className="flex-1 text-left md:p-6">
          <h2 className="text-xl md:text-2xl font-bold">
            Let Suppliers <span className="text-[#271555]">Find You</span>
          </h2>
        </div>

        {/* Right Section */}
        <div className="flex-1 text-right md:p-6">
          <Link
            to=""
            className="inline-flex items-center px-3 py-3 bg-[#EB7150] text-white font-semibold rounded-md hover:bg-[#EB7150] hover:text-white"
          >
            Get Verified
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SupplierFindPage;