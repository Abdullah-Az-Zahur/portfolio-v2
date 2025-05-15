"use client";

import Bio from "@/components/About/Bio";
import College from "@/components/About/College";
import HighSchool from "@/components/About/HighSchool";
import Interests from "@/components/About/Interests";
import University from "@/components/About/University";
import { useState } from "react";
import {
  FaBriefcase,
  FaDownload,
  FaStar,
  FaUniversity,
  FaUser,
} from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoMdArrowDropdown,
  IoMdArrowDropright,
} from "react-icons/io";
import { MdScience } from "react-icons/md";
import { RiFolder3Fill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addTab } from "@/redux/features/tabs/tabsSlice";
import QwikIt from "@/components/About/QwikIt";
import EncoderIT from "@/components/About/EncoderIT";
import Link from "next/link";

const AboutMeSidebar = () => {
  const dispatch = useAppDispatch();
  const { activeTab } = useAppSelector((state) => state.tabs);
  const [expandedDropdowns, setExpandedDropdowns] = useState<Set<string>>(
    () => new Set()
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

  const handleSideBarItemClick = (
    title: string,
    component: React.ReactNode
  ) => {
    console.log(title, component);

    dispatch(
      addTab({
        id: title.toLowerCase().replace(/\s+/g, "-"),
        title: title,
        content: component,
      })
    );
  };

  const isItemActive = (title: string): boolean => {
    return activeTab === title;
  };

  // Animation variants
  const dropdownVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        opacity: { delay: 0.15 },
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hover: {
      scale: 1.02,
      x: 5,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
    },
  };

  const iconVariants = {
    rotate: {
      rotate: 0,
      transition: { duration: 0.2 },
    },
    rotateReverse: {
      rotate: -0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <>
      <motion.div
        className="flex items-center gap-2 cursor-pointer text-white hover:text-blue-500 border-b border-gray-500 py-2"
        onClick={() => toggleDropdown("about")}
        whileHover={{ x: 3 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          animate={isDropdownExpanded("about") ? "rotate" : "rotateReverse"}
          variants={iconVariants}
        >
          {isDropdownExpanded("about") ? (
            <IoMdArrowDropdown className="text-white" />
          ) : (
            <IoMdArrowDropright className="text-white" />
          )}
        </motion.div>
        <span>About</span>
      </motion.div>

      <AnimatePresence>
        {isDropdownExpanded("about") && (
          <motion.ul
            className="ml-4 mt-2 space-y-1 overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={dropdownVariants}
          >
            {/* bio */}
            <motion.li
              className={`flex items-center gap-2 text-gray-500 hover:text-blue-500 cursor-pointer`}
              onClick={() => toggleDropdown("bio")}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div
                animate={isDropdownExpanded("bio") ? "rotate" : "rotateReverse"}
                variants={iconVariants}
              >
                {isDropdownExpanded("bio") ? (
                  <IoIosArrowDown className="text-blue-500" />
                ) : (
                  <IoIosArrowForward className="text-blue-500" />
                )}
              </motion.div>
              <RiFolder3Fill className="text-blue-500" />
              <span>bio</span>
            </motion.li>

            <AnimatePresence>
              {isDropdownExpanded("bio") && (
                <motion.ul
                  className="ml-6 mt-1 space-y-1 overflow-hidden"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={dropdownVariants}
                >
                  <motion.li
                    className={`flex items-center gap-2 text-sm ${
                      isItemActive("Bio")
                        ? "text-blue-500 font-medium"
                        : "text-gray-500 hover:text-blue-500"
                    } cursor-pointer`}
                    onClick={() => handleSideBarItemClick("Bio", <Bio />)}
                    variants={itemVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <FaUser className="text-blue-500" />
                    <span>bio</span>
                  </motion.li>
                </motion.ul>
              )}
            </AnimatePresence>

            {/* Interests */}
            <motion.li
              className={`flex items-center gap-2 ${
                isItemActive("Interests")
                  ? "text-green-500 font-medium"
                  : "text-gray-500 hover:text-green-500"
              } cursor-pointer`}
              onClick={() => toggleDropdown("interest")}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div
                animate={
                  isDropdownExpanded("interest") ? "rotate" : "rotateReverse"
                }
                variants={iconVariants}
              >
                {isDropdownExpanded("interest") ? (
                  <IoIosArrowDown className="text-green-500" />
                ) : (
                  <IoIosArrowForward className="text-green-500" />
                )}
              </motion.div>
              <RiFolder3Fill className="text-green-500" />
              <span>interests</span>
            </motion.li>

            <AnimatePresence>
              {isDropdownExpanded("interest") && (
                <motion.ul
                  className="ml-6 mt-1 space-y-1 overflow-hidden"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={dropdownVariants}
                >
                  <motion.li
                    className={`flex items-center gap-2 text-sm ${
                      isItemActive("Interest")
                        ? "text-green-500 font-medium"
                        : "text-gray-500 hover:text-green-500"
                    } cursor-pointer`}
                    onClick={() =>
                      handleSideBarItemClick("Interest", <Interests />)
                    }
                    variants={itemVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <FaStar className="text-green-500" />
                    <span>interests</span>
                  </motion.li>
                </motion.ul>
              )}
            </AnimatePresence>

            <motion.li
              className={`flex items-center gap-2 text-gray-500 hover:text-purple-500 cursor-pointer`}
              onClick={() => toggleDropdown("education")}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div
                animate={
                  isDropdownExpanded("education") ? "rotate" : "rotateReverse"
                }
                variants={iconVariants}
              >
                {isDropdownExpanded("education") ? (
                  <IoIosArrowDown className="text-purple-500" />
                ) : (
                  <IoIosArrowForward className="text-purple-500" />
                )}
              </motion.div>
              <RiFolder3Fill className="text-purple-500" />
              <span>education</span>
            </motion.li>

            <AnimatePresence>
              {isDropdownExpanded("education") && (
                <motion.ul
                  className="ml-6 mt-1 space-y-1 overflow-hidden"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={dropdownVariants}
                >
                  <motion.li
                    className={`flex items-center gap-2 text-sm ${
                      isItemActive("High School")
                        ? "text-yellow-500 font-medium"
                        : "text-gray-500 hover:text-yellow-500"
                    } cursor-pointer`}
                    onClick={() =>
                      handleSideBarItemClick("High School", <HighSchool />)
                    }
                    variants={itemVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <GiSchoolBag className="text-yellow-500" />
                    <span>high-school</span>
                  </motion.li>
                  <motion.li
                    className={`flex items-center gap-2 text-sm ${
                      isItemActive("College")
                        ? "text-blue-500 font-medium"
                        : "text-gray-500 hover:text-blue-500"
                    } cursor-pointer`}
                    onClick={() =>
                      handleSideBarItemClick("College", <College />)
                    }
                    variants={itemVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <FaUniversity className="text-blue-500" />
                    <span>college</span>
                  </motion.li>
                  <motion.li
                    className={`flex items-center gap-2 text-sm ${
                      isItemActive("University")
                        ? "text-purple-500 font-medium"
                        : "text-gray-500 hover:text-purple-500"
                    } cursor-pointer`}
                    onClick={() =>
                      handleSideBarItemClick("University", <University />)
                    }
                    variants={itemVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <MdScience className="text-purple-500" />
                    <span>university</span>
                  </motion.li>
                </motion.ul>
              )}
            </AnimatePresence>
            <motion.li
              className={`flex items-center gap-2 text-gray-500 hover:text-blue-500 cursor-pointer`}
              onClick={() => toggleDropdown("experience")}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div
                animate={
                  isDropdownExpanded("experience") ? "rotate" : "rotateReverse"
                }
                variants={iconVariants}
              >
                {isDropdownExpanded("experience") ? (
                  <IoIosArrowDown className="text-blue-500" />
                ) : (
                  <IoIosArrowForward className="text-blue-500" />
                )}
              </motion.div>
              <RiFolder3Fill className="text-blue-500" />
              <span>experience</span>
            </motion.li>

            <AnimatePresence>
              {isDropdownExpanded("experience") && (
                <motion.ul
                  className="ml-6 mt-1 space-y-1 overflow-hidden"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={dropdownVariants}
                >
                  <motion.li
                    className={`flex items-center gap-2 text-sm ${
                      isItemActive("QwikIt")
                        ? "text-yellow-500 font-medium"
                        : "text-gray-500 hover:text-yellow-500"
                    } cursor-pointer`}
                    onClick={() => handleSideBarItemClick("QwikIt", <QwikIt />)}
                    variants={itemVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <FaBriefcase className="text-yellow-500" />
                    <span>QwikIt</span>
                  </motion.li>
                  <motion.li
                    className={`flex items-center gap-2 text-sm ${
                      isItemActive("Encoder IT")
                        ? "text-blue-500 font-medium"
                        : "text-gray-500 hover:text-blue-500"
                    } cursor-pointer`}
                    onClick={() =>
                      handleSideBarItemClick("Encoder IT", <EncoderIT />)
                    }
                    variants={itemVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <FaBriefcase className="text-blue-500" />
                    <span>Encoder IT</span>
                  </motion.li>
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.ul>
        )}
      </AnimatePresence>

      <div
        className={` py-2 my-2 flex items-center justify-between ${
          isDropdownExpanded("about") ? "border-t border-gray-500" : ""
        }`}
      >
        <Link
          href="https://drive.google.com/uc?export=download&id=1fuMYadVqT74gf7RX545ERff8RFl0BJYG"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="ml-6 text-blue-300 hover:text-blue-500 flex items-center gap-2 transition duration-200"
        >
          <FaDownload className="text-lg" />
          Resume
        </Link>
      </div>
      <div
        className={`py-2 my-2 flex items-center justify-between border-y border-gray-500`}
      >
        <Link
          href="https://drive.google.com/uc?export=download&id=15_17rv6PbTe_A7zyhBmR2pwwCJXpjPBq"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="ml-6 text-blue-300 hover:text-blue-500 flex items-center gap-2 transition duration-200"
        >
          <FaDownload className="text-lg" />
          CV
        </Link>
      </div>
    </>
  );
};

export default AboutMeSidebar;
