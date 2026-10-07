"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const isHomePage = usePathname() === "/";

  return (
    <footer
      className={`site-footer fixed bottom-0 left-0 z-40 h-12 w-full border  ${isHomePage ? "site-footer-home" : ""}`}
    >
      <div className="flex h-full items-center justify-between">
        <div className="flex items-center">
          <h2 className="px-3 text-sm sm:text-base">find me in:</h2>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/md-abdullah-az-zahur/"
            aria-label="LinkedIn"
            className="hidden border-l border-gray-500 px-3 py-3 sm:block"
          >
            <FaLinkedin />
          </Link>
          <Link
            target="_blank"
            href="https://www.facebook.com/abdullah.az.zahur"
            aria-label="Facebook"
            className="hidden border-x border-gray-500 px-3 py-3 sm:block"
          >
            <FaFacebookF />
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/md-abdullah-az-zahur/"
            aria-label="LinkedIn"
            className="block border-l border-gray-500 px-3 py-3 sm:hidden"
          >
            <FaLinkedin />
          </Link>
          <Link
            target="_blank"
            href="https://www.facebook.com/abdullah.az.zahur"
            aria-label="Facebook"
            className="block border-x px-3 py-3 sm:hidden"
          >
            <FaFacebookF />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/Abdullah-Az-Zahur"
            aria-label="GitHub"
            className="flex items-center"
          >
            <span className="hidden border-l border-gray-500 px-3 py-3 text-sm sm:block">
              @Abdullah-Az-Zahur
            </span>
            <span className="px-3">
              <FaGithub />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
