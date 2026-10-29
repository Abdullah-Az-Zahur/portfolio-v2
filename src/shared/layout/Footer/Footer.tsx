"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const isHomePage = usePathname() === "/";

  const footerClassName = `fixed bottom-0 left-0 z-40 h-12 w-full border-t border-(--app-border-color,#4a627a) light:border-[#7a8fa5] bg-[#011627] text-[#607b96] light:bg-[#eef3f8] light:text-[#314158] transition-colors duration-180 ease-in-out ${
    isHomePage
      ? "md:bg-gradient-to-r md:from-[#06111f]/78 md:via-[#0b1b2e]/70 md:to-[#06111f]/78 md:backdrop-blur-xl md:shadow-[0_-8px_30px_rgba(1,22,39,0.35)] light:md:from-[#e5edf4]/85 light:md:via-[#eef3f8]/80 light:md:to-[#e5edf4]/85"
      : ""
  }`;

  const linkClassName =
    "flex h-full items-center border-r border-(--app-border-color,#4a627a) light:border-[#7a8fa5] px-3 transition-colors duration-180 hover:text-white hover:bg-white/5 light:hover:text-[#0f172a] light:hover:bg-[#0f172a]/5";

  return (
    <footer className={footerClassName}>
      <div className="mx-auto flex h-full items-center justify-between">
        <div className="flex h-full items-center">
          <h2 className="px-3 text-sm sm:text-base text-[#607b96] light:text-[#52657d]">
            find me in:
          </h2>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/md-amanullah-az-zahur/"
            aria-label="LinkedIn"
            className={`border-l border-(--app-border-color,#4a627a) light:border-[#7a8fa5] ${linkClassName}`}
          >
            <FaLinkedin />
          </Link>
          <Link
            target="_blank"
            href="https://www.facebook.com/abdullah.az.zahur"
            aria-label="Facebook"
            className={linkClassName}
          >
            <FaFacebookF />
          </Link>
        </div>
        <div className="flex h-full items-center">
          <Link
            target="_blank"
            href="https://github.com/Abdullah-Az-Zahur"
            aria-label="GitHub"
            className="flex h-full items-center border-l border-(--app-border-color,#4a627a) light:border-[#7a8fa5] transition-colors duration-180 hover:text-white hover:bg-white/5 light:hover:text-[#0f172a] light:hover:bg-[#0f172a]/5"
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
