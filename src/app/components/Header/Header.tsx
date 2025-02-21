"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

const navItems = [
  { href: "#hello", label: "_hello" },
  { href: "#about-me", label: "_about-me" },
  { href: "#project", label: "_project" },
  { href: "#contact-me", label: "_contact-me" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-transparent border-b">
      <div className=" mx-auto flex items-center justify-between lg:px-8">
        {/* Logo / Name */}
        <Link href="/" className="lg:w-1/5 border-r p-4">
          Md. Abdullah Az-Zahur
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 justify-between items-center">
          <div className="flex space-x-6">
            {navItems.slice(0, 3).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-gray-600 border-r p-4"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href={navItems[2].href}
            className="hover:text-gray-600 border-l p-4"
          >
            {navItems[3].label}
          </Link>
        </nav>

        {/* Mobile Menu Button - Hidden on Large Screens */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md absolute w-full">
          <nav className="flex flex-col items-center space-y-4 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block w-full text-center hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
