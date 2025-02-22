"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "_hello" },
  { href: "/about", label: "_about-me" },
  { href: "/project", label: "_project" },
  { href: "/contact", label: "_contact-me" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed w-full h-14 bg-transparent border-b border-gray-500 z-50">
      <div className="mx-auto flex items-center justify-between h-full">
        {/* Logo / Name */}
        <Link href="/" className="lg:w-1/5 border-r p-4 border-gray-500 h-full flex items-center">
          md. abdullah az-zahur
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 justify-between items-center h-full">
          <div className="flex h-full">
            {navItems.slice(0, 3).map((item, index) => (
              <div key={item.href} className="relative flex items-center h-full">
                {/* Navigation Link */}
                <Link
                  href={item.href}
                  className={`hover:text-gray-400 p-4 transition relative flex items-center h-full ${
                    pathname === item.href ? "text-white" : ""
                  }`}
                >
                  {item.label}
                  {/* Active underline (Full width of link) */}
                  {pathname === item.href && (
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FEA55F]"></span>
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
                pathname === navItems[3].href ? "text-white" : ""
              }`}
            >
              {navItems[3].label}
              {pathname === navItems[3].href && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500"></span>
              )}
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
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
