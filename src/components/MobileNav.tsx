"use client";
import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav: React.FC<Props> = ({ nav, closeNav }) => {
  const navAnimation = nav ? "translate-x-0" : "-translate-x-full";

  return (
    <>
      {/* Backdrop */}
      {nav && (
        <div
          onClick={closeNav}
          className="fixed inset-0 bg-black/50 z-[9990] backdrop-blur-sm"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-[#09101a] z-[10000] transform ${navAnimation} transition-transform duration-300`}
      >
        {/* Close Button */}
        <button
          onClick={closeNav}
          className="absolute top-6 right-6 w-10 h-10 text-blue-600 hover:text-blue-500 transition-colors"
          aria-label="Close mobile menu"
        >
          <XMarkIcon className="w-full h-full" />
        </button>

        {/* Menu Links */}
        <div className="flex flex-col items-center justify-center h-full mt-12 space-y-6">
          <a
            href="#home"
            className="text-white text-2xl hover:text-blue-400 transition-colors"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-white text-2xl hover:text-blue-400 transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-white text-2xl hover:text-blue-400 transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-white text-2xl hover:text-blue-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white text-2xl hover:text-blue-400 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
