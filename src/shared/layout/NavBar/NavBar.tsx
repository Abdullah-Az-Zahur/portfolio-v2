"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "./navItems";
import ThemeToggle from "@/shared/ui/ThemeToggle/ThemeToggle";
import { FiTerminal } from "react-icons/fi";
import {
  mobileMenuVariants,
  mobileMenuItemVariants,
} from "@/shared/utils/animationVariants";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const headerClassName = isHomePage
    ? "fixed w-full h-14 bg-[#011627] border-b border-app-divider z-50 md:bg-gradient-to-r md:from-[#06111f]/78 md:via-[#0b1b2e]/70 md:to-[#06111f]/78 md:backdrop-blur-xl md:shadow-[0_8px_30px_rgba(1,22,39,0.35)]"
    : "fixed w-full h-14 bg-[#011627] border-b border-app-divider z-50";

  const mobileMenuClassName = isHomePage
    ? "md:hidden bg-[#011627] border-r-2 border-app-divider shadow-md absolute w-full md:bg-[#06111f]/70 md:backdrop-blur-2xl md:shadow-[0_20px_45px_rgba(1,22,39,0.45)]"
    : "md:hidden bg-[#011627] border-r-2 border-app-divider shadow-md absolute w-full";

  // ✅ Active link — hover-এর মতো bright, + orange underline
  const getDesktopLinkClass = (href: string) => {
    const isActive = pathname === href;
    return `nav-link relative flex items-center h-full p-4 transition ${
      isActive
        ? "nav-link-active"
        : "nav-link-idle hover:border-b-4 hover:border-orange-300"
    }`;
  };

  return (
    <header className={`site-navbar ${headerClassName}`}>
      <div className="mx-auto flex items-center justify-between h-full">
        {/* Logo / Name */}
        <div className="md:w-1/5 md:border-r border-app-divider p-4 h-full flex items-center hover:text-gray-500 gap-5">
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
            {navItems.slice(0, 3).map((item) => {
              const isActive = pathname === item.href;
              return (
                <div
                  key={item.href}
                  className="relative flex items-center h-full"
                >
                  <Link
                    href={item.href}
                    className={getDesktopLinkClass(item.href)}
                  >
                    {item.label}
                    {isActive && (
                      <span className="nav-link-underline absolute bottom-0 left-0 w-full h-1 border-b-4 border-orange-300" />
                    )}
                  </Link>
                  {/* ✅ Vertical divider using shared token */}
                  <span className="nav-divider absolute right-0 top-0 h-full w-[1px]" />
                </div>
              );
            })}
          </div>

          <div className="relative flex items-center h-full">
            <div className="mr-2 hidden md:block">
              <ThemeToggle />
            </div>
            <Link
              href={navItems[3].href}
              className={`${getDesktopLinkClass(
                navItems[3].href,
              )} border-l border-app-divider pl-5 pr-4`}
            >
              {navItems[3].label}
              {pathname === navItems[3].href && (
                <span className="nav-link-underline absolute bottom-0 left-0 w-full h-1 border-b-4 border-orange-300" />
              )}
            </Link>
          </div>
        </nav>

        {/* Mobile: Theme Toggle + Hamburger */}
        <div className="md:hidden flex items-center gap-2 mr-3">
          <ThemeToggle />
          <button
            className="flex items-center justify-center p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoMdClose className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoMenu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            className={mobileMenuClassName}
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            style={{ overflow: "hidden", height: 0 }}
          >
            <nav className="flex flex-col items-center">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    className="w-full"
                    variants={mobileMenuItemVariants}
                  >
                    <Link
                      href={item.href}
                      className={`nav-link-mobile block w-full text-start ${
                        isActive ? "nav-link-mobile-active" : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <hr className="border-app-divider" />
                      <div className="p-4">{item.label}</div>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
