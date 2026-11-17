"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { dropdownVariants } from "@/shared/utils/animationVariants";
import {
  contactLinkItems,
  socialLinkItems,
} from "@/shared/data/contactSidebar";
import { usePublicSiteSettings } from "@/shared/hooks/usePublicSiteSettings";

const ContactSidebar = () => {
  const settings = usePublicSiteSettings();
  const [expandedDropdowns, setExpandedDropdowns] = useState<Set<string>>(
    () => new Set(["contact"]),
  );

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
                item.href === "contactEmail" ? settings.email : settings.phone;
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
                facebookUrl: settings.facebook,
                linkedinUrl: settings.linkedin,
                youtubeUrl: settings.youtube,
                twitterUrl: settings.twitter,
                instagramUrl: settings.instagram,
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
