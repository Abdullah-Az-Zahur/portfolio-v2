"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const isHomePage = usePathname() === "/";

  const footerClassName = `relative z-40 h-12 w-full shrink-0 border-t border-(--app-border-color,#4a627a) light:border-[#7a8fa5] bg-[#011627] text-[#607b96] light:bg-[#eef3f8] light:text-[#314158] transition-colors duration-180 ease-in-out ${
    isHomePage
      ? "md:bg-gradient-to-r md:from-[#06111f]/78 md:via-[#0b1b2e]/70 md:to-[#06111f]/78 md:backdrop-blur-xl md:shadow-[0_-8px_30px_rgba(1,22,39,0.35)] light:md:from-[#e5edf4]/85 light:md:via-[#eef3f8]/80 light:md:to-[#e5edf4]/85"
      : ""
  }`;

  const socialIconClassName =
    "flex h-full items-center justify-center border-l border-(--app-border-color,#4a627a) light:border-[#7a8fa5] px-4 sm:px-3 transition-colors duration-180 hover:text-white hover:bg-white/5 light:hover:text-[#0f172a] light:hover:bg-[#0f172a]/5";

  return (
    <footer className={footerClassName}>
      <div className="mx-auto flex h-full items-center justify-between">
        {/* Left & Mobile-combined Section */}
        <div className="flex h-full flex-1 items-center sm:flex-initial">
          <h2 className="flex-1 px-4 text-sm text-[#607b96] sm:flex-initial sm:px-3 sm:text-base light:text-[#52657d]">
            find me in:
          </h2>

          {/* LinkedIn */}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/md-amanullah-az-zahur/"
            aria-label="LinkedIn"
            className={socialIconClassName}
          >
            <FaLinkedin />
          </Link>

          {/* Facebook */}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/abdullah.az.zahur"
            aria-label="Facebook"
            className={`${socialIconClassName} sm:border-r`}
          >
            <FaFacebookF />
          </Link>

          {/* GitHub (Only visible here on Mobile, right next to Facebook) */}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Abdullah-Az-Zahur"
            aria-label="GitHub"
            className={`${socialIconClassName} sm:hidden`}
          >
            <FaGithub />
          </Link>
        </div>

        {/* Desktop Right Section (GitHub with username) */}
        <div className="hidden h-full items-center sm:flex">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Abdullah-Az-Zahur"
            aria-label="GitHub"
            className="flex h-full items-center border-l border-(--app-border-color,#4a627a) light:border-[#7a8fa5] transition-colors duration-180 hover:text-white hover:bg-white/5 light:hover:text-[#0f172a] light:hover:bg-[#0f172a]/5"
          >
            <span className="px-3 text-sm">@Abdullah-Az-Zahur</span>
            <span className="flex h-full items-center px-3">
              <FaGithub />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
