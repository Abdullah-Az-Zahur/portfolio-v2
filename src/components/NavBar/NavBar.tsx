"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

// Navigation items array
const navItems = [
  { href: "/", label: "_hello" },
  { href: "/about", label: "_about-me" },
  { href: "/project", label: "_project" },
  { href: "/contact", label: "_contact-me" },
];

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const pathname = usePathname(); // Gets the current pathname to highlight the active link

  return (
    <header className="fixed w-full h-14 bg-gray-900 border-b border-gray-500 z-50">
      <div className="mx-auto flex items-center justify-between h-full">
        {/* Logo / Name */}
        <Link
          href="/"
          className="md:w-1/5 md:border-r p-4 border-gray-500 h-full flex items-center"
        >
          md. abdullah az-zahur
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-between items-center h-full">
          <div className="flex h-full">
            {navItems.slice(0, 3).map((item) => (
              <div
                key={item.href}
                className="relative flex items-center h-full"
              >
                {/* Navigation Link */}
                <Link
                  href={item.href}
                  className={`hover:text-gray-400 hover:bg-gray-900/60  p-4 transition relative flex items-center h-full ${
                    pathname === item.href
                      ? "text-white "
                      : "hover:border-b-4 hover:border-orange-300"
                  }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <span className="absolute bottom-0 left-0 w-full h-1 border-b-4 border-orange-300"></span>
                  )}
                </Link>

                {/* Full-height Vertical Line on Right Side (except last) */}
                <span className="absolute right-0 top-0 h-full w-[1px] bg-gray-500"></span>
              </div>
            ))}
          </div>

          {/* Last Item - Right Aligned with Full-Height Left Border */}
          <div className="relative flex items-center h-full">
            <span className="absolute left-0 top-0 h-full w-[1px] bg-gray-500"></span>
            <Link
              href={navItems[3].href}
              className={`hover:text-gray-400 p-4 transition relative flex items-center h-full ${
                pathname === navItems[3].href
                  ? "text-white"
                  : "hover:border-b-4 hover:border-orange-300"
              }`}
            >
              {navItems[3].label}
              {pathname === navItems[3].href && (
                <span className="absolute bottom-0 left-0 w-full h-1 border-b-4 border-orange-300"></span>
              )}
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden mr-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <motion.div
              key={"close"}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <IoMdClose className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key={"menu"}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <IoMenu className="w-6 h-6" />
            </motion.div>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-r-2 border-gray-600 shadow-md absolute w-full h-[calc(100vh-56px-48px)]">
          <nav className="flex flex-col items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block w-full text-start text-white"
                onClick={() => setIsOpen(false)}
              >
                <hr className="border-gray-600" />
                <div className="p-4">{item.label}</div>
              </Link>
            ))}
          </nav>
          <hr className="border-gray-600" />
        </div>
      )}
    </header>
  );
};

export default NavBar;
