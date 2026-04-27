"use client";

import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoMdArrowDropdown,
  IoMdArrowDropright,
} from "react-icons/io";
import { RiFolder3Fill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addTab } from "@/store/features/tabs/tabsSlice";
import Link from "next/link";
import { aboutSidebarCategories } from "@/features/about/components/aboutSidebarCategories";
import { SidebarCategory } from "@/features/about/components/sidebarTypes";

const AboutMeSidebar = () => {
  const dispatch = useAppDispatch();
  const { activeTab } = useAppSelector((state) => state.tabs);
  const [activeCategoryId, setActiveCategoryId] = useState("professional-info");
  const [mobileExpandedCategoryId, setMobileExpandedCategoryId] = useState<
    string | null
  >(null);
  const categories: SidebarCategory[] = aboutSidebarCategories;

  const activeCategory =
    categories.find((category) => category.id === activeCategoryId) ??
    categories[0];

  const [expandedDropdowns, setExpandedDropdowns] = useState<Set<string>>(
    () => new Set([`main-${activeCategory.id}`]),
  );

  const handleCategorySwitch = (categoryId: string) => {
    const selectedCategory =
      categories.find((category) => category.id === categoryId) ??
      categories[0];

    setActiveCategoryId(categoryId);
    setExpandedDropdowns(new Set([`main-${selectedCategory.id}`]));
  };

  const handleMobileCategoryToggle = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    setMobileExpandedCategoryId((currentCategoryId) =>
      currentCategoryId === categoryId ? null : categoryId,
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

  const handleSideBarItemClick = (id: string, title: string) => {
    dispatch(
      addTab({
        id,
        title: title,
      }),
    );
  };

  const isItemActive = (id: string): boolean => {
    return activeTab === id;
  };

  // Animation variants
  const dropdownVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        opacity: { delay: 0.15 },
        duration: 0.34,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        opacity: { duration: 0.2 },
        height: { duration: 0.42 },
        ease: "easeOut",
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

  const renderCategoryGroups = (
    category: SidebarCategory,
    isExpanded: boolean,
  ) => {
    return (
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            className="overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={dropdownVariants}
          >
            <motion.ul className="ml-3 mt-2 space-y-1 overflow-hidden">
              {category.groups.map((group) => {
                const groupKey = `${category.id}-${group.id}`;

                return (
                  <div key={groupKey}>
                    <motion.li
                      className="flex items-center gap-2 text-gray-500 cursor-pointer"
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
                          className="ml-5 mt-1 space-y-1 overflow-hidden"
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
                                  isItemActive(item.id)
                                    ? item.activeClass
                                    : `text-gray-500 ${item.hoverClass}`
                                } cursor-pointer`}
                                onClick={() =>
                                  handleSideBarItemClick(item.id, item.title)
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
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <>
      <div className="flex flex-col md:hidden">
        {categories.map((category) => {
          const isActive = mobileExpandedCategoryId === category.id;

          return (
            <div key={category.id} className="border-b border-gray-700 py-2 ">
              <motion.button
                type="button"
                onClick={() => handleMobileCategoryToggle(category.id)}
                className={`flex w-full items-center gap-2 rounded-md py-2 text-left transition-colors ${
                  isActive ? "bg-[#1f2937]" : "hover:bg-[#1a2234]"
                }`}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-2 text-white">
                  {isActive ? (
                    <IoMdArrowDropdown className="text-white" />
                  ) : (
                    <IoMdArrowDropright className="text-white" />
                  )}
                  <span>{category.label}</span>
                </span>
              </motion.button>

              {renderCategoryGroups(category, isActive)}
            </div>
          );
        })}

        <div className="border-t border-gray-700 py-3">
          <div className="flex items-center justify-between gap-3 border-b border-gray-500 px-2 py-2">
            <Link
              href="https://drive.google.com/uc?export=download&id=1fuMYadVqT74gf7RX545ERff8RFl0BJYG"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center gap-2 text-blue-300 transition duration-200 hover:text-blue-500"
            >
              <FaDownload className="text-lg" />
              Resume
            </Link>
          </div>

          <div className="flex items-center justify-between gap-3 px-2 py-2">
            <Link
              href="https://drive.google.com/uc?export=download&id=15_17rv6PbTe_A7zyhBmR2pwwCJXpjPBq"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center gap-2 text-blue-300 transition duration-200 hover:text-blue-500"
            >
              <FaDownload className="text-lg" />
              CV
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-stretch gap-0 md:h-full">
        <div className="flex self-stretch flex-col items-center gap-2 border-r border-gray-700 px-3 pt-2 pb-2">
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

        <div className="min-w-0 flex-1 pl-2">
          <motion.div
            className="-ml-2 pl-1 flex items-center gap-2 cursor-pointer text-white hover:text-blue-500 border-b border-gray-500 py-2"
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

          {renderCategoryGroups(
            activeCategory,
            isDropdownExpanded(`main-${activeCategory.id}`),
          )}

          <div
            className={`-ml-2 mt-2 ${
              isDropdownExpanded(`main-${activeCategory.id}`)
                ? "border-t border-gray-500"
                : "border-t-0"
            }`}
          >
            <div className="py-2 pl-1 flex items-center justify-between border-b border-gray-500">
              <Link
                href="https://drive.google.com/uc?export=download&id=1fuMYadVqT74gf7RX545ERff8RFl0BJYG"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="ml-2 text-blue-300 hover:text-blue-500 flex items-center gap-2 transition duration-200"
              >
                <FaDownload className="text-lg" />
                Resume
              </Link>
            </div>

            <div className="py-2 pl-1 flex items-center justify-between border-b border-gray-500">
              <Link
                href="https://drive.google.com/uc?export=download&id=15_17rv6PbTe_A7zyhBmR2pwwCJXpjPBq"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="ml-2 text-blue-300 hover:text-blue-500 flex items-center gap-2 transition duration-200"
              >
                <FaDownload className="text-lg" />
                CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeSidebar;
