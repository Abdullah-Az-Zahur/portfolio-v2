"use client"; // Required for client-side hooks
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import React, { useEffect, useState } from "react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  const pathname = usePathname(); // Get the current path
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile (screen width < 768px)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set the initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hide the footer only on mobile devices when the path is '/'
  const shouldHideFooter = isMobile && pathname === "/";

  return (
    <div
      className={`fixed bg-[#011627] bottom-0 left-0 border border-gray-500 h-12 w-full ${
        shouldHideFooter ? "hidden" : ""
      }`}
    >
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center">
          <h2 className="p-3">find me in:</h2>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/md-abdullah-az-zahur/"
            className="p-[15px] border-l border-gray-500 hidden sm:block"
          >
            <FaLinkedin />
          </Link>
          <Link
            target="_blank"
            href="https://www.facebook.com/abdullahaazzahur.giyas"
            className="p-[15px] border-x border-gray-500 hidden sm:block"
          >
            <FaFacebookF />
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/md-abdullah-az-zahur/"
            className="p-[15px] border-l border-gray-500 block md:hidden"
          >
            <FaLinkedin />
          </Link>
          <Link
            target="_blank"
            href="https://www.facebook.com/abdullahaazzahur.giyas"
            className="p-[15px] border-x border-gray-500 block md:hidden"
          >
            <FaFacebookF />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/Abdullah-Az-Zahur"
            className="flex items-center"
          >
            <h2 className="p-3 border-l border-gray-500 text-sm hidden sm:block">
              @Abdullah-Az-Zahur
            </h2>
            <div className="px-3">
              <FaGithub />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;