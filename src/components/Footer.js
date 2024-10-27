import React from "react";
import logo from "../assests/logo1.png";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#122C48] text-white py-8">
      <div className="container mx-auto px-4 md:px-8 md:px-28">
        <div className="border-t-2 border-b-2 border-gray-600 py-5 flex flex-col md:flex-row justify-center items-center md:items-start">
          {/* Left Section: Logo and Links */}
          <div className="flex flex-col md:flex-row justify-start items-center space-y-8 md:space-y-0 md:space-x-8 w-full md:gap-12">
            {/* Logo and Copyright */}
            <div className="flex flex-col items-center md:items-start">
              <img src={logo} alt="Habot Logo" className="h-10 mb-2" />
              <p className="text-sm text-gray-400 md:ml-5">
                &copy; R Singhania
              </p>
            </div>

            {/* Links Section */}
            <div className="flex space-x-8 text-sm text-gray-400">
              {/* Company Links */}
              <div>
                <h2 className="font-semibold text-white mb-2">Company</h2>
                <ul>
                  <li className="hover:text-white">
                    <a href="/about">About</a>
                  </li>
                  <li className="hover:text-white">
                    <a href="/faq">FAQ</a>
                  </li>
                </ul>
              </div>

              {/* Terms Links */}
              <div>
                <h2 className="font-semibold text-white mb-2">Terms</h2>
                <ul>
                  <li className="hover:text-white">
                    <a href="/data-privacy">Data privacy</a>
                  </li>
                  <li className="hover:text-white">
                    <a href="/terms">Terms</a>
                  </li>
                  <li className="hover:text-white">
                    <a href="/accessibility">Accessibility</a>
                  </li>
                </ul>
              </div>

              {/* Related Links */}
              <div>
                <h2 className="font-semibold text-white mb-2">Related</h2>
                <ul>
                  <li className="hover:text-white">
                    <a href="/find-buyer">Find Buyer</a>
                  </li>
                  <li className="hover:text-white">
                    <a href="/feedback">Feedback</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section: Social Media Icons */}
          <div className="flex space-x-6 md:ml-8 mt-8 md:mt-0">
            <a
              href="https://www.linkedin.com"
              className="text-gray-400 hover:text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://www.twitter.com"
              className="text-gray-400 hover:text-white"
              aria-label="Twitter"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://www.facebook.com"
              className="text-gray-400 hover:text-white"
              aria-label="Facebook"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com"
              className="text-gray-400 hover:text-white"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;