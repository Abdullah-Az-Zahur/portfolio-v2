"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const isHomePage = usePathname() === "/";

  return (
    <footer
      className={`site-footer fixed bottom-0 left-0 z-40 h-12 w-full border rounded-b-lg ${
        isHomePage ? "site-footer-home" : ""
      }`}
    >
      <div className="flex h-full items-center justify-between">
        <div className="flex h-full items-center">
          <h2 className="px-3 text-sm sm:text-base">find me in:</h2>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/md-abdullah-az-zahur/"
            aria-label="LinkedIn"
            className="flex h-full items-center border-l border-app-divider px-3"
          >
            <FaLinkedin />
          </Link>
          <Link
            target="_blank"
            href="https://www.facebook.com/abdullah.az.zahur"
            aria-label="Facebook"
            className="flex h-full items-center border-x border-app-divider px-3"
          >
            <FaFacebookF />
          </Link>
        </div>
        <div className="flex h-full items-center">
          <Link
            target="_blank"
            href="https://github.com/Abdullah-Az-Zahur"
            aria-label="GitHub"
            className="flex h-full items-center border-l border-app-divider"
          >
            <span className="hidden px-3 text-sm sm:block">
              @Abdullah-Az-Zahur
            </span>
            <span className="flex h-full items-center px-3">
              <FaGithub />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
