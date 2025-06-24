import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import Logo from "../../shared/Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 rounded-md py-10">
      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="flex items-center mb-6 justify-center">
          <Logo isWhite={true} />
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm border-b border-gray-600 pb-4 sm:text-base">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-7 pb-4 border-b border-gray-600 mb-6">
          {[
            "Services",
            "Pricing",
            "Coverage",
            "About Us",
            "Contact Us",
            "Blog",
          ].map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-teal-500 duration-200 text-sm sm:text-base"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4">
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-teal-500" />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-teal-500" />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebook className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-teal-500" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
