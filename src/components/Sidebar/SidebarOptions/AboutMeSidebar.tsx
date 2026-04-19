"use client";

import Bio from "@/components/About/Bio";
import College from "@/components/About/College";
import HighSchool from "@/components/About/HighSchool";
import Interests from "@/components/About/Interests";
import University from "@/components/About/University";
import { ReactNode, useMemo, useState } from "react";
import {
  FaBriefcase,
  FaCertificate,
  FaDownload,
  FaGamepad,
  FaLaptopCode,
  FaLeaf,
  FaMusic,
  FaUserGraduate,
  FaUserTie,
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
import { FaPersonHiking } from "react-icons/fa6";
import { RiFolder3Fill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addTab } from "@/redux/features/tabs/tabsSlice";
import QwikIt from "@/components/About/QwikIt";
import EncoderIT from "@/components/About/EncoderIT";
import Link from "next/link";
import { IconType } from "react-icons";

type SidebarItem = {
  id: string;
  title: string;
  label: string;
  icon: IconType;
  activeClass: string;
  hoverClass: string;
  iconClass: string;
  content: ReactNode;
};

type SidebarGroup = {
  id: string;
  label: string;
  arrowClass: string;
  folderClass: string;
  items: SidebarItem[];
};

type SidebarCategory = {
  id: string;
  label: string;
  icon: IconType;
  iconClass: string;
  groups: SidebarGroup[];
};

const PlaceholderSection = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="rounded-md border border-gray-700 bg-[#111827] p-4 text-gray-200">
      <h3 className="text-lg font-semibold text-blue-300">{title}</h3>
      <p className="mt-2 text-sm text-gray-300">{description}</p>
    </div>
  );
};

const AboutMeSidebar = () => {
  const dispatch = useAppDispatch();
  const { activeTab } = useAppSelector((state) => state.tabs);
  const [activeCategoryId, setActiveCategoryId] = useState("professional-info");

  const categories = useMemo<SidebarCategory[]>(
    () => [
      {
        id: "professional-info",
        label: "Professional Info",
        icon: FaUserTie,
        iconClass: "text-blue-400",
        groups: [
          {
            id: "experience",
            label: "experience",
            arrowClass: "text-blue-500",
            folderClass: "text-blue-500",
            items: [
              {
                id: "qwikit",
                title: "QwikIt",
                label: "QwikIt",
                icon: FaBriefcase,
                activeClass: "text-yellow-500 font-medium",
                hoverClass: "hover:text-yellow-500",
                iconClass: "text-yellow-500",
                content: <QwikIt />,
              },
              {
                id: "encoder-it",
                title: "Encoder IT",
                label: "Encoder IT",
                icon: FaBriefcase,
                activeClass: "text-blue-500 font-medium",
                hoverClass: "hover:text-blue-500",
                iconClass: "text-blue-500",
                content: <EncoderIT />,
              },
            ],
          },
          {
            id: "skills",
            label: "skills",
            arrowClass: "text-green-500",
            folderClass: "text-green-500",
            items: [
              {
                id: "technical-skills",
                title: "Technical Skills",
                label: "technical-skills",
                icon: FaLaptopCode,
                activeClass: "text-green-500 font-medium",
                hoverClass: "hover:text-green-500",
                iconClass: "text-green-500",
                content: (
                  <PlaceholderSection
                    title="Technical Skills"
                    description="TypeScript, Next.js, Redux, Tailwind, REST APIs, and scalable frontend architecture."
                  />
                ),
              },
            ],
          },
          {
            id: "certificates",
            label: "certificates",
            arrowClass: "text-purple-500",
            folderClass: "text-purple-500",
            items: [
              {
                id: "certifications",
                title: "Certifications",
                label: "certifications",
                icon: FaCertificate,
                activeClass: "text-purple-500 font-medium",
                hoverClass: "hover:text-purple-500",
                iconClass: "text-purple-500",
                content: (
                  <PlaceholderSection
                    title="Certificates"
                    description="Add your latest professional certificates and training highlights here."
                  />
                ),
              },
            ],
          },
        ],
      },
      {
        id: "personal-info",
        label: "Personal Info",
        icon: FaUser,
        iconClass: "text-emerald-400",
        groups: [
          {
            id: "bio",
            label: "bio",
            arrowClass: "text-blue-500",
            folderClass: "text-blue-500",
            items: [
              {
                id: "bio-item",
                title: "Bio",
                label: "bio",
                icon: FaUser,
                activeClass: "text-blue-500 font-medium",
                hoverClass: "hover:text-blue-500",
                iconClass: "text-blue-500",
                content: <Bio />,
              },
            ],
          },
          {
            id: "interest",
            label: "interests",
            arrowClass: "text-green-500",
            folderClass: "text-green-500",
            items: [
              {
                id: "interest-item",
                title: "Interest",
                label: "interests",
                icon: FaStar,
                activeClass: "text-green-500 font-medium",
                hoverClass: "hover:text-green-500",
                iconClass: "text-green-500",
                content: <Interests />,
              },
            ],
          },
          {
            id: "education",
            label: "education",
            arrowClass: "text-purple-500",
            folderClass: "text-purple-500",
            items: [
              {
                id: "high-school",
                title: "High School",
                label: "high-school",
                icon: GiSchoolBag,
                activeClass: "text-yellow-500 font-medium",
                hoverClass: "hover:text-yellow-500",
                iconClass: "text-yellow-500",
                content: <HighSchool />,
              },
              {
                id: "college",
                title: "College",
                label: "college",
                icon: FaUniversity,
                activeClass: "text-blue-500 font-medium",
                hoverClass: "hover:text-blue-500",
                iconClass: "text-blue-500",
                content: <College />,
              },
              {
                id: "university",
                title: "University",
                label: "university",
                icon: FaUserGraduate,
                activeClass: "text-purple-500 font-medium",
                hoverClass: "hover:text-purple-500",
                iconClass: "text-purple-500",
                content: <University />,
              },
            ],
          },
        ],
      },
      {
        id: "hobbies",
        label: "Hobbies",
        icon: FaGamepad,
        iconClass: "text-amber-400",
        groups: [
          {
            id: "creative",
            label: "creative",
            arrowClass: "text-rose-500",
            folderClass: "text-rose-500",
            items: [
              {
                id: "music",
                title: "Music",
                label: "music",
                icon: FaMusic,
                activeClass: "text-rose-500 font-medium",
                hoverClass: "hover:text-rose-500",
                iconClass: "text-rose-500",
                content: (
                  <PlaceholderSection
                    title="Music"
                    description="I enjoy coding while listening to instrumental playlists and exploring different genres."
                  />
                ),
              },
              {
                id: "books",
                title: "Books",
                label: "books",
                icon: FaStar,
                activeClass: "text-indigo-500 font-medium",
                hoverClass: "hover:text-indigo-500",
                iconClass: "text-indigo-500",
                content: (
                  <PlaceholderSection
                    title="Books"
                    description="Reading books on technology, productivity, and biographies helps me stay inspired."
                  />
                ),
              },
            ],
          },
          {
            id: "outdoor",
            label: "outdoor",
            arrowClass: "text-lime-500",
            folderClass: "text-lime-500",
            items: [
              {
                id: "hiking",
                title: "Hiking",
                label: "hiking",
                icon: FaPersonHiking,
                activeClass: "text-lime-500 font-medium",
                hoverClass: "hover:text-lime-500",
                iconClass: "text-lime-500",
                content: (
                  <PlaceholderSection
                    title="Hiking"
                    description="Hiking helps me reset and return with better focus for problem-solving."
                  />
                ),
              },
              {
                id: "games",
                title: "Games",
                label: "games",
                icon: FaGamepad,
                activeClass: "text-orange-500 font-medium",
                hoverClass: "hover:text-orange-500",
                iconClass: "text-orange-500",
                content: (
                  <PlaceholderSection
                    title="Games"
                    description="I like strategic and story-driven games that improve focus and creativity."
                  />
                ),
              },
            ],
          },
          {
            id: "wellness",
            label: "wellness",
            arrowClass: "text-emerald-500",
            folderClass: "text-emerald-500",
            items: [
              {
                id: "nature-walks",
                title: "Nature Walks",
                label: "nature-walks",
                icon: FaLeaf,
                activeClass: "text-emerald-500 font-medium",
                hoverClass: "hover:text-emerald-500",
                iconClass: "text-emerald-500",
                content: (
                  <PlaceholderSection
                    title="Nature Walks"
                    description="Short nature walks keep me fresh and improve my long coding sessions."
                  />
                ),
              },
            ],
          },
        ],
      },
    ],
    [],
  );

  const activeCategory =
    categories.find((category) => category.id === activeCategoryId) ??
    categories[0];

  const [expandedDropdowns, setExpandedDropdowns] = useState<Set<string>>(
    () =>
      new Set([
        `main-${activeCategory.id}`,
        `${activeCategory.id}-${activeCategory.groups[0]?.id ?? ""}`,
      ]),
  );

  const handleCategorySwitch = (categoryId: string) => {
    const selectedCategory =
      categories.find((category) => category.id === categoryId) ??
      categories[0];

    setActiveCategoryId(categoryId);
    setExpandedDropdowns(
      new Set([
        `main-${selectedCategory.id}`,
        `${selectedCategory.id}-${selectedCategory.groups[0]?.id ?? ""}`,
      ]),
    );
  };

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
    component: React.ReactNode,
  ) => {
    dispatch(
      addTab({
        id: title.toLowerCase().replace(/\s+/g, "-"),
        title: title,
        content: component,
      }),
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
      <div className="flex items-stretch gap-0 md:h-full">
        <div className="flex self-stretch flex-col items-center gap-2 border-r border-gray-700 pr-3 pt-2 pb-2">
          {categories.map((category) => {
            const CategoryIcon = category.icon;
            const isActive = activeCategory.id === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => handleCategorySwitch(category.id)}
                className={`rounded-md p-2 transition-colors ${
                  isActive
                    ? "bg-[#1f2937] ring-1 ring-blue-500"
                    : "hover:bg-[#1a2234]"
                }`}
                title={category.label}
                aria-label={category.label}
              >
                <CategoryIcon className={`text-lg ${category.iconClass}`} />
              </button>
            );
          })}
        </div>

        <div className="min-w-0 flex-1 pl-3 ">
          <motion.div
            className="-ml-3 pl-3 flex items-center gap-2 cursor-pointer text-white hover:text-blue-500 border-b border-gray-500 py-2"
            onClick={() => toggleDropdown(`main-${activeCategory.id}`)}
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              animate={
                isDropdownExpanded(`main-${activeCategory.id}`)
                  ? "rotate"
                  : "rotateReverse"
              }
              variants={iconVariants}
            >
              {isDropdownExpanded(`main-${activeCategory.id}`) ? (
                <IoMdArrowDropdown className="text-white" />
              ) : (
                <IoMdArrowDropright className="text-white" />
              )}
            </motion.div>
            <span>{activeCategory.label}</span>
          </motion.div>

          <AnimatePresence>
            {isDropdownExpanded(`main-${activeCategory.id}`) && (
              <motion.ul
                className="ml-4 mt-2 space-y-1 overflow-hidden"
                initial="closed"
                animate="open"
                exit="closed"
                variants={dropdownVariants}
              >
                {activeCategory.groups.map((group) => {
                  const groupKey = `${activeCategory.id}-${group.id}`;

                  return (
                    <div key={groupKey}>
                      <motion.li
                        className="flex items-center gap-2 text-gray-500 cursor-pointer "
                        onClick={() => toggleDropdown(groupKey)}
                        variants={itemVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <motion.div
                          animate={
                            isDropdownExpanded(groupKey)
                              ? "rotate"
                              : "rotateReverse"
                          }
                          variants={iconVariants}
                        >
                          {isDropdownExpanded(groupKey) ? (
                            <IoIosArrowDown className={group.arrowClass} />
                          ) : (
                            <IoIosArrowForward className={group.arrowClass} />
                          )}
                        </motion.div>
                        <RiFolder3Fill className={group.folderClass} />
                        <span className={`hover:${group.folderClass}`}>
                          {group.label}
                        </span>
                      </motion.li>

                      <AnimatePresence>
                        {isDropdownExpanded(groupKey) && (
                          <motion.ul
                            className="ml-6 mt-1 space-y-1 overflow-hidden"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={dropdownVariants}
                          >
                            {group.items.map((item) => {
                              const ItemIcon = item.icon;

                              return (
                                <motion.li
                                  key={item.id}
                                  className={`flex items-center gap-2 text-sm ${
                                    isItemActive(item.title)
                                      ? item.activeClass
                                      : `text-gray-500 ${item.hoverClass}`
                                  } cursor-pointer`}
                                  onClick={() =>
                                    handleSideBarItemClick(
                                      item.title,
                                      item.content,
                                    )
                                  }
                                  variants={itemVariants}
                                  whileHover="hover"
                                  whileTap="tap"
                                >
                                  <ItemIcon className={item.iconClass} />
                                  <span>{item.label}</span>
                                </motion.li>
                              );
                            })}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.ul>
            )}
          </AnimatePresence>

          <div
            className={`-ml-3 mt-2 py-2 pl-3 flex items-center justify-between ${
              isDropdownExpanded(`main-${activeCategory.id}`)
                ? "border-t border-gray-500"
                : ""
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
          <div className="-ml-3 py-2 pl-3 flex items-center justify-between border-y border-gray-500">
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
        </div>
      </div>
    </>
  );
};

export default AboutMeSidebar;
