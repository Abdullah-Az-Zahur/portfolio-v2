'use client';
import React, { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactSidebar = () => {
  const [expandedDropdowns, setExpandedDropdowns] = useState<Set<string>>(new Set());

  const toggleDropdown = (title: string) => {
    setExpandedDropdowns(prev => {
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
      <div
        className="flex items-center gap-2 cursor-pointer text-white hover:text-blue-500 border-b border-gray-500 py-2"
        onClick={() => toggleDropdown("contact")}
      >
        {isDropdownExpanded("contact") ? (
          <IoMdArrowDropdown className="text-white" />
        ) : (
          <IoMdArrowDropright className="text-white" />
        )}
        <span>Contact</span>
      </div>

      <div className="overflow-hidden transition-all duration-300">
        {isDropdownExpanded("contact") && (
          <ul className="ml-4 mt-2 space-y-1">
            <li className="flex items-center gap-2 text-gray-500 hover:text-purple-500 cursor-pointer">
              <MdEmail className="text-purple-500 flex-shrink-0" />
              <a
                href="mailto:abdullah.az.zahur@gmail.com"
                className="truncate hover:underline"
              >
                abdullah.az.zahur@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2 text-gray-500 hover:text-green-500 cursor-pointer">
              <MdPhone className="text-green-500" />
              <a
                href="tel:+8801705697897"
                className="hover:underline"
              >
                +880-1705697897
              </a>
            </li>
          </ul>
        )}
      </div>

      {/* Find Me Also In Dropdown */}
      <div
        className="flex items-center gap-2 cursor-pointer text-white hover:text-blue-500 border-y border-gray-500 py-2"
        onClick={() => toggleDropdown("find-me-also-in")}
      >
        {isDropdownExpanded("find-me-also-in") ? (
          <IoMdArrowDropdown className="text-white" />
        ) : (
          <IoMdArrowDropright className="text-white" />
        )}
        <span>find-me-also-in</span>
      </div>

      <div className="overflow-hidden transition-all duration-300">
        {isDropdownExpanded("find-me-also-in") && (
          <ul className="ml-4 mt-2 space-y-1">
            <li className="flex items-center gap-2 text-gray-500 hover:text-red-500">
              <FaYoutube className="text-red-500" />
              <a
                href="https://www.youtube.com/@itsazzahurgaming"
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
                href="https://www.instagram.com/md_abdullah_az_zahur_gias/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default ContactSidebar;
