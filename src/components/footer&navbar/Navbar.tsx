import React from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-8 h-8" fill="black">
                <path d="M20 8C15 8 12 12 12 16c0 2 1 4 2 5v6c0 2 1 3 3 3h6c2 0 3-1 3-3v-6c1-1 2-3 2-5 0-4-3-8-8-8zm0 2c3 0 5 2 5 5 0 1-1 2-1 3h-8c0-1-1-2-1-3 0-3 2-5 5-5z" />
              </svg>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-white hover:text-gray-300 transition-colors text-sm font-medium"
            >
              About
            </a>
            <a
              href="#contest"
              className="text-white hover:text-gray-300 transition-colors text-sm font-medium"
            >
              Beard Contest
            </a>
            <a
              href="#shops"
              className="text-white hover:text-gray-300 transition-colors text-sm font-medium"
            >
              Barber Shops
            </a>
            <a
              href="#shop"
              className="text-white hover:text-gray-300 transition-colors text-sm font-medium"
            >
              Online Shop
            </a>
            <a
              href="#contact"
              className="text-white hover:text-gray-300 transition-colors text-sm font-medium"
            >
              Contact
            </a>
          </div>

          {/* Language Selector & Profile */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors">
              <Image
                width={300}
                height={300}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='30' fill='%23012169'/%3E%3Cpath d='M0 0l60 30M60 0L0 30' stroke='%23fff' stroke-width='6'/%3E%3Cpath d='M0 0l60 30M60 0L0 30' stroke='%23C8102E' stroke-width='4' clip-path='inset(0)'/%3E%3Cpath d='M30 0v30M0 15h60' stroke='%23fff' stroke-width='10'/%3E%3Cpath d='M30 0v30M0 15h60' stroke='%23C8102E' stroke-width='6'/%3E%3C/svg%3E"
                alt="UK Flag"
                className="w-5 h-4"
              />
              <span className="text-sm font-medium">Eng (UK)</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            <div className="w-8 h-8 rounded-full bg-gray-400 overflow-hidden">
              <Image
                width={300}
                height={300}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23ccc'/%3E%3Ccircle cx='50' cy='40' r='15' fill='%23999'/%3E%3Cpath d='M25 75c0-13.8 11.2-25 25-25s25 11.2 25 25' fill='%23999'/%3E%3C/svg%3E"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
