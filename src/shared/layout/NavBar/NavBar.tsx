"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "./navItems";
import ThemeToggle from "@/shared/ui/ThemeToggle/ThemeToggle";
import BrandButton from "@/shared/ui/BrandName/BrandButton";
import { FiTerminal } from "react-icons/fi";
import {
  mobileMenuVariants,
  mobileMenuItemVariants,
} from "@/shared/utils/animationVariants";

/* ============================================================
   NavItemLink — controlled by parent's pendingHref
   ============================================================ */
type NavItemLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
  showSpinner: boolean;
  className: string;
  onClick: () => void;
};

const NavItemLink: React.FC<NavItemLinkProps> = ({
  href,
  label,
  isActive,
  showSpinner,
  className,
  onClick,
}) => {
  return (
    <Link href={href} className={className} onClick={onClick}>
      <span>{label}</span>

      {showSpinner && (
        <span
          aria-hidden
          className="ml-2 inline-block h-3 w-3 shrink-0 animate-spin rounded-full border-2 border-[rgba(103,232,249,0.25)] border-t-[#67e8f9] light:border-[rgba(14,116,144,0.25)] light:border-t-[#0e7490]"
        />
      )}

      {isActive && (
        <span className="pointer-events-none absolute bottom-0 left-0 h-1 w-full border-b-4 border-orange-300" />
      )}
    </Link>
  );
};

/* ============================================================
   NavBar
   ============================================================ */
const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingHref, setPendingHref] = useState<string | null>(null);
  const pendingTimerRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const visiblePendingHref =
    pendingHref && pendingHref !== pathname ? pendingHref : null;

  // Auto-clear pending after safety timeout
  useEffect(() => {
    if (!pendingHref) return;
    if (pendingTimerRef.current) clearTimeout(pendingTimerRef.current);
    pendingTimerRef.current = setTimeout(() => {
      setPendingHref(null);
    }, 3000);
    return () => {
      if (pendingTimerRef.current) clearTimeout(pendingTimerRef.current);
    };
  }, [pendingHref]);

  const handleNavClick = (href: string) => {
    if (href === pathname) return;
    setPendingHref(href);
  };

  const headerClassName = isHomePage
    ? "fixed z-50 h-14 w-full border-b border-(--app-border-color) bg-[#011627] light:bg-[#eef3f8] light:border-[#7a8fa5] md:bg-gradient-to-r md:from-[#06111f]/85 md:via-[#0b1b2e]/75 md:to-[#06111f]/85 md:backdrop-blur-xl md:shadow-[0_8px_30px_rgba(1,22,39,0.35)] light:md:bg-gradient-to-r light:md:from-[#eef3f8]/90 light:md:via-[#e2ebf4]/85 light:md:to-[#eef3f8]/90 light:md:shadow-[0_4px_20px_rgba(122,143,165,0.15)]"
    : "fixed z-50 h-14 w-full border-b border-(--app-border-color) bg-[#011627] light:bg-[#eef3f8] light:border-[#7a8fa5]";

  const mobileMenuClassName = isHomePage
    ? "md:hidden bg-[#011627] light:bg-[#eef3f8] border-r-2 border-(--app-border-color) light:border-[#7a8fa5] shadow-md absolute w-full md:bg-[#06111f]/70 md:backdrop-blur-2xl md:shadow-[0_20px_45px_rgba(1,22,39,0.45)]"
    : "md:hidden bg-[#011627] light:bg-[#eef3f8] border-r-2 border-(--app-border-color) light:border-[#7a8fa5] shadow-md absolute w-full";

  const getDesktopLinkClass = (href: string) => {
    const isActive = pathname === href;
    return `relative flex items-center h-full p-4 transition-colors duration-180 text-[#607b96] light:text-[#52657d] ${
      isActive
        ? "text-white font-medium bg-white/5 light:text-[#0f172a] light:bg-[#0f172a]/10"
        : "hover:text-[#cbd5e1] hover:bg-[#011627]/10 light:hover:text-[#172337] light:hover:bg-[#172337]/5 hover:border-b-4 hover:border-orange-300"
    }`;
  };

  return (
    <header className={headerClassName}>
      <div className="mx-auto flex h-full items-center justify-between">
        {/* ---------- Logo / Name ---------- */}
        <div className="flex h-full items-center gap-2 border-(--app-border-color) px-3 py-2 md:w-1/5 md:border-r light:border-[#7a8fa5]">
          <Link
            href="/dashboard"
            aria-label="Open dashboard"
            title="Open dashboard"
            className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition hover:border-cyan-300/50 hover:bg-cyan-400/20"
          >
            <FiTerminal className="h-4 w-4" />
          </Link>
          <BrandButton href="/" key={pathname} />
        </div>

        {/* ---------- Desktop Navigation ---------- */}
        <nav className="hidden h-full flex-1 items-center justify-between md:flex">
          <div className="flex h-full">
            {navItems.slice(0, 3).map((item) => {
              const isActive = pathname === item.href;
              const showSpinner = visiblePendingHref === item.href;
              return (
                <div
                  key={item.href}
                  className="relative flex h-full items-center"
                >
                  <NavItemLink
                    href={item.href}
                    label={item.label}
                    isActive={isActive}
                    showSpinner={showSpinner}
                    className={getDesktopLinkClass(item.href)}
                    onClick={() => handleNavClick(item.href)}
                  />
                  <span className="absolute right-0 top-0 h-full w-px bg-(--app-border-color) light:bg-[#7a8fa5]" />
                </div>
              );
            })}
          </div>

          <div className="relative flex h-full items-center">
            <div className="mr-2 hidden md:block">
              <ThemeToggle />
            </div>
            <NavItemLink
              href={navItems[3].href}
              label={navItems[3].label}
              isActive={pathname === navItems[3].href}
              showSpinner={visiblePendingHref === navItems[3].href}
              className={`${getDesktopLinkClass(
                navItems[3].href,
              )} border-l border-(--app-border-color) light:border-[#7a8fa5] pl-5 pr-4`}
              onClick={() => handleNavClick(navItems[3].href)}
            />
          </div>
        </nav>

        {/* ---------- Mobile: Theme Toggle + Hamburger ---------- */}
        <div className="mr-3 flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="flex items-center justify-center p-1 text-[#607b96] light:text-[#314158]"
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
                  <IoMdClose className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoMenu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ---------- Mobile Dropdown Menu ---------- */}
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
                      className={`block w-full text-start text-[#e5e9f0] transition-colors duration-180 hover:bg-white/5 light:text-[#172337] light:hover:bg-[#0f172a]/5 ${
                        isActive
                          ? "bg-white/10 font-medium text-white light:bg-[#0f172a]/10 light:text-[#0f172a]"
                          : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <hr className="border-(--app-border-color) light:border-[#7a8fa5]" />
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
