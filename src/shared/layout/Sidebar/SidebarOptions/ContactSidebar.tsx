"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { dropdownVariants } from "@/shared/utils/animationVariants";
import { contactLinkItems, socialLinkItems } from "./contactSidebarConfig";

const ContactSidebar = () => {
  const [expandedDropdowns, setExpandedDropdowns] = useState<Set<string>>(
    () => new Set(["contact"]),
  );

  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "abdullah.az.zahur@gmail.com";
  const contactPhone =
    process.env.NEXT_PUBLIC_CONTACT_PHONE || "+880-1705697897";
  const facebookUrl =
    process.env.NEXT_PUBLIC_FACEBOOK_URL ||
    "https://www.facebook.com/AbdullahAzZahur";
  const linkedinUrl =
    process.env.NEXT_PUBLIC_LINKEDIN_URL ||
    "https://www.linkedin.com/in/abdullahazzahur/";
  const youtubeUrl = "https://www.youtube.com/@AzZahur";

  const toggleDropdown = (title: string) => {
    setExpandedDropdowns((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  };

  const isDropdownExpanded = (title: string): boolean => {
    return expandedDropdowns.has(title);
  };

  return (
    <>
      <motion.div
        className="flex cursor-pointer items-center gap-2 border-b border-(--app-border-color) py-2 pl-3 text-white hover:text-[#3b82f6] light:border-[#7a8fa5] light:text-[#172337] light:hover:text-[#2563a8]"
        onClick={() => toggleDropdown("contact")}
        whileHover={{ x: 3 }}
        whileTap={{ scale: 0.98 }}
      >
        {isDropdownExpanded("contact") ? (
          <IoMdArrowDropdown className="text-white light:text-[#172337]" />
        ) : (
          <IoMdArrowDropright className="text-white light:text-[#172337]" />
        )}
        <span>Contact</span>
      </motion.div>

      <AnimatePresence>
        {isDropdownExpanded("contact") && (
          <motion.ul
            className="ml-3 mt-2 space-y-1 overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={dropdownVariants}
          >
            {contactLinkItems.map((item) => {
              const Icon = item.icon;
              const value =
                item.href === "contactEmail" ? contactEmail : contactPhone;
              const href = item.transformHref
                ? item.transformHref(value)
                : value;

              return (
                <li key={item.label} className={item.itemClassName}>
                  <Icon className={item.iconClassName} />
                  <a href={href} className={item.linkClassName}>
                    {value}
                  </a>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>

      <motion.div
        className="flex cursor-pointer items-center gap-2 border-y border-(--app-border-color) py-2 pl-3 text-white hover:text-[#3b82f6] light:border-[#7a8fa5] light:text-[#172337] light:hover:text-[#2563a8]"
        onClick={() => toggleDropdown("find-me-also-in")}
        whileHover={{ x: 3 }}
        whileTap={{ scale: 0.98 }}
      >
        {isDropdownExpanded("find-me-also-in") ? (
          <IoMdArrowDropdown className="text-white light:text-[#172337]" />
        ) : (
          <IoMdArrowDropright className="text-white light:text-[#172337]" />
        )}
        <span>find-me-also-in</span>
      </motion.div>

      <AnimatePresence>
        {isDropdownExpanded("find-me-also-in") && (
          <motion.ul
            className="ml-3 mt-2 space-y-1 overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={dropdownVariants}
          >
            {socialLinkItems.map((item) => {
              const Icon = item.icon;
              const hrefMap = {
                facebookUrl,
                linkedinUrl,
                youtubeUrl,
                twitterUrl: "https://x.com/abdullahazzahur",
                instagramUrl: "https://www.instagram.com/abdullah.az.zahur/",
              } as const;

              return (
                <li key={item.label} className={item.itemClassName}>
                  <Icon className={item.iconClassName} />
                  <a
                    href={hrefMap[item.href]}
                    target={item.target}
                    rel={item.rel}
                    className={item.linkClassName}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactSidebar;
