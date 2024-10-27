// src/layouts/MainLayout.js
import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full min-w-screen min-w-fit">
      <Navbar />
      <main className="flex-grow mx-auto md:px-0">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
