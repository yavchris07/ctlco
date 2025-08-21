"use client";
import { useTranslation } from "@/lib/translation-context";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/ctlco.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, setLanguage } = useTranslation();
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div>
              <Image src={logo} alt="logo" width={"140"} height={"140"} />
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {t("home")}
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {t("projects")}
            </a>
            <a
              href="#participate"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {t("participate")}
            </a>
            <a
              href="#news"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {t("news")}
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {t("contact")}
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as "fr" | "en")}
              className="text-blue-600 border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {/* <option value="fr">FR</option>
              <option value="en">EN</option> */}
              <option value="fr">🇫🇷</option>
              <option value="en">🇬🇧</option>
            </select>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600"
              >
                {t("home")}
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600"
              >
                {t("projects")}
              </a>
              <a
                href="#participate"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600"
              >
                {t("participate")}
              </a>
              <a
                href="#news"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600"
              >
                {t("news")}
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600"
              >
                {t("contact")}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
