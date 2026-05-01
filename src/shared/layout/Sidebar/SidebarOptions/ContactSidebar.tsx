"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { MdEmail, MdPhone } from "react-icons/md";
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { dropdownVariants } from "@/shared/utils/animationVariants";

const ContactSidebar = () => {
  const [expandedDropdowns, setExpandedDropdowns] = useState<Set<string>>(
    () => new Set(["contact"]),
  );

  // Use environment variables for contact information
  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@example.com";
  const contactPhone =
    process.env.NEXT_PUBLIC_CONTACT_PHONE || "+880-1705697897";
  const facebookUrl =
    process.env.NEXT_PUBLIC_FACEBOOK_URL ||
    "https://www.facebook.com/abdullah.az.zahur";
  const linkedinUrl =
    process.env.NEXT_PUBLIC_LINKEDIN_URL ||
    "https://www.linkedin.com/in/md-abdullah-az-zahur/";
  const youtubeUrl = "https://www.youtube.com/@itsazzahurgaming";

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
      {/* Contact Dropdown */}
      <motion.div
        className="flex items-center gap-2 cursor-pointer text-white hover:text-blue-500 border-b border-gray-500 py-2"
        onClick={() => toggleDropdown("contact")}
        whileHover={{ x: 3 }}
        whileTap={{ scale: 0.98 }}
      >
        {isDropdownExpanded("contact") ? (
          <IoMdArrowDropdown className="text-white" />
        ) : (
          <IoMdArrowDropright className="text-white" />
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
            <li className="flex items-center gap-2 text-gray-500 hover:text-purple-500 cursor-pointer">
              <MdEmail className="text-purple-500 flex-shrink-0" />
              <a
                href={`mailto:${contactEmail}`}
                className="truncate hover:underline"
              >
                {contactEmail}
              </a>
            </li>
            <li className="flex items-center gap-2 text-gray-500 hover:text-green-500 cursor-pointer">
              <MdPhone className="text-green-500" />
              <a
                href={`tel:${contactPhone.replace(/-/g, "")}`}
                className="hover:underline"
              >
                {contactPhone}
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Find Me Also In Dropdown */}
      <motion.div
        className="flex items-center gap-2 cursor-pointer text-white hover:text-blue-500 border-y border-gray-500 py-2"
        onClick={() => toggleDropdown("find-me-also-in")}
        whileHover={{ x: 3 }}
        whileTap={{ scale: 0.98 }}
      >
        {isDropdownExpanded("find-me-also-in") ? (
          <IoMdArrowDropdown className="text-white" />
        ) : (
          <IoMdArrowDropright className="text-white" />
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
            <li className="flex items-center gap-2 text-gray-500 hover:text-blue-700">
              <FaFacebook className="text-blue-700" />
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li className="flex items-center gap-2 text-gray-500 hover:text-blue-600">
              <FaLinkedin className="text-blue-600" />
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2 text-gray-500 hover:text-red-500">
              <FaYoutube className="text-red-500" />
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                YouTube
              </a>
            </li>
            <li className="flex items-center gap-2 text-gray-500 hover:text-blue-500">
              <FaTwitter className="text-blue-500" />
              <a
                href="https://x.com/abdullahazzahur"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Twitter
              </a>
            </li>
            <li className="flex items-center gap-2 text-gray-500 hover:text-pink-500">
              <FaInstagram className="text-pink-500" />
              <a
                href="https://www.instagram.com/abdullah.az.zahur/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactSidebar;
