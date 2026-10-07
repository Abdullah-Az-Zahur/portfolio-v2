"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
import { navItems } from "./navItems";
import ThemeToggle from "@/shared/ui/ThemeToggle/ThemeToggle";
import { FiTerminal } from "react-icons/fi";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const pathname = usePathname(); // Gets the current pathname to highlight the active link
  const isHomePage = pathname === "/";

  const headerClassName = isHomePage
    ? "fixed w-full h-14 bg-[#011627] border-b border-gray-500 z-50 md:bg-gradient-to-r md:from-[#06111f]/78 md:via-[#0b1b2e]/70 md:to-[#06111f]/78 md:backdrop-blur-xl md:border-white/15 md:shadow-[0_8px_30px_rgba(1,22,39,0.35)]"
    : "fixed w-full h-14 bg-[#011627] border-b border-gray-500 z-50";

  const mobileMenuClassName = isHomePage
    ? "md:hidden bg-[#011627] border-r-2 border-gray-600 shadow-md absolute w-full h-[calc(100vh-56px-48px)] md:bg-[#06111f]/70 md:backdrop-blur-2xl md:border-white/15 md:shadow-[0_20px_45px_rgba(1,22,39,0.45)]"
    : "md:hidden bg-[#011627] border-r-2 border-gray-600 shadow-md absolute w-full h-[calc(100vh-56px-48px)]";

  return (
    <header className={`site-navbar ${headerClassName}`}>
      <div className="mx-auto flex items-center justify-between h-full">
        {/* Logo / Name */}

        <div className="md:w-1/5 md:border-r p-4 border-gray-400 h-full flex items-center hover:text-gray-500 gap-5">
          <Link
            href="/dashboard"
            aria-label="Open dashboard"
            title="Open dashboard"
            className="grid h-8 w-8 place-items-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition hover:border-cyan-300/50 hover:bg-cyan-400/20"
          >
            <FiTerminal className="h-4 w-4" />
          </Link>

          <Link href="/">md. abdullah az-zahur</Link>
        </div>

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
                  className={`hover:text-gray-400 hover:bg-[#011627]/10  p-4 transition relative flex items-center h-full ${
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
            <div className="mr-2 hidden md:block">
              <ThemeToggle />
            </div>
            <Link
              href={navItems[3].href}
              className={`border-l border-gray-400 pl-5 pr-4 hover:text-gray-500 transition relative flex items-center h-full ${
                pathname === navItems[3].href
                  ? "text-white"
                  : "hover:border-b-4 hover:border-orange-300 hover:bg-transparent/10"
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
        <div className={mobileMenuClassName}>
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
          <div className="flex justify-center border-t border-gray-600 py-4">
            <ThemeToggle />
          </div>
          <hr className="border-gray-600" />
        </div>
      )}
    </header>
  );
};

export default NavBar;
