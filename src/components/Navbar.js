// src/components/Navbar.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assests/logo.png";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTagDropdownOpen, setIsTagDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTagDropdown = () => {
    setIsTagDropdownOpen(!isTagDropdownOpen);
  };

  const handleClickImage = () => {
    navigate("/profile");
  };

  return (
    <nav className="bg-white text-black py-4 px-6 shadow-md flex justify-between items-center z-20 w-full">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="Habot Logo"
          className="w-20 h-12 md:w-20 md:h-12 lg:w-24 lg:h-12 xl:w-32 xl:h-14"
        />
      </Link>

      {/* Menu Items */}
      <div className="hidden md:flex items-center space-x-6">
        <Link
          to="/find-suppliers"
          className="text-buttonColor2 hover:text-buttonColor1"
        >
          Find Suppliers
        </Link>

        {/* Dropdown */}
        <div className="relative flex items-center">
          <button
            onClick={toggleTagDropdown}
            className="text-buttonColor2 hover:text-buttonColor1 flex items-center"
          >
            Find Service Tags
            {isTagDropdownOpen ? (
              <IoChevronUp className="ml-1" />
            ) : (
              <IoChevronDown className="ml-1" />
            )}
          </button>
          {isTagDropdownOpen && (
            <div className="absolute flex flex-col bg-white shadow-lg rounded-sm top-full mt-0 md:-ml-8 py-2 w-48 z-10">
              <Link
                to="/tag1"
                className="text-buttonColor2 border border-b-buttonColor1 px-4 py-2 hover:bg-buttonColor1 hover:text-white"
              >
                Tag 1
              </Link>
              <Link
                to="/tag2"
                className="text-buttonColor2 border border-b-buttonColor1 px-4 py-2 hover:bg-buttonColor1 hover:text-white"
              >
                Tag 2
              </Link>
              <Link
                to="/tag3"
                className="text-buttonColor2 px-4 py-2 hover:bg-buttonColor1 hover:text-white"
              >
                Tag 3
              </Link>
            </div>
          )}
        </div>

        {/* Login/Signup Button */}

        {user?.photo ? (
          <img
            src={user.photo}
            alt="User Profile"
            className="w-12 h-12 rounded-full border border-gray-300 cursor-pointer"
            onClick={handleClickImage}
          />
        ) : (
          <Link
            to="/login"
            className="text-buttonColor1 border border-buttonColor1 font-semibold text-base px-4 py-2 rounded hover:text-opacity-90 hover:bg-buttonColor1 hover:text-white"
          >
            Login / Signup
          </Link>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-xl focus:outline-none"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg rounded-md py-2 px-3 z-10">
          <Link
            to="/find-suppliers"
            className="block text-buttonColor2 px-4 py-2 hover:bg-buttonColor1 hover:text-white mb-2"
          >
            Find Suppliers
          </Link>
          <div className="relative">
            <button
              onClick={toggleTagDropdown}
              className="flex items-center justify-between w-full text-left px-4 py-2 text-buttonColor2 hover:bg-buttonColor1 hover:text-white mb-2"
            >
              Find Service Tags
              {isTagDropdownOpen ? (
                <IoChevronUp className="ml-1" />
              ) : (
                <IoChevronDown className="ml-1" />
              )}
            </button>
            {isTagDropdownOpen && (
              <div className="absolute flex flex-col bg-white shadow-lg py-2 w-full">
                <Link
                  to="/tag1"
                  className="text-buttonColor2 px-4 py-2 hover:bg-buttonColor1 hover:text-white"
                >
                  Tag 1
                </Link>
                <Link
                  to="/tag2"
                  className="text-buttonColor2 px-4 py-2 hover:bg-buttonColor1 hover:text-white"
                >
                  Tag 2
                </Link>
                <Link
                  to="/tag3"
                  className="text-buttonColor2 px-4 py-2 hover:bg-buttonColor1 hover:text-white"
                >
                  Tag 3
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/login"
            className="block text-buttonColor1 border border-buttonColor1 px-4 py-2 rounded hover:text-opacity-90 hover:bg-buttonColor1 hover:text-white"
          >
            Login / Signup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
