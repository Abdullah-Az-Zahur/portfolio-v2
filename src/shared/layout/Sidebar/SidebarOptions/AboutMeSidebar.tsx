"use client";

import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addTab } from "@/store/features/tabs/tabsSlice";
import { aboutSidebarCategories } from "@/features/about/components/aboutSidebarCategories";
import { SidebarCategory } from "@/features/about/components/aboutSidebarTypes";
import AboutSidebarGroups from "./AboutSidebarGroups";
import AboutSidebarResources from "./AboutSidebarResources";

const sidebarResources = [
  {
    label: "Resume",
    href: "https://drive.google.com/uc?export=download&id=1fuMYadVqT74gf7RX545ERff8RFl0BJYG",
  },
  {
    label: "CV",
    href: "https://drive.google.com/uc?export=download&id=15_17rv6PbTe_A7zyhBmR2pwwCJXpjPBq",
  },
] as const;

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

              <AboutSidebarGroups
                category={category}
                isExpanded={isActive}
                expandedDropdowns={expandedDropdowns}
                isItemActive={isItemActive}
                onToggleDropdown={toggleDropdown}
                onSelectItem={handleSideBarItemClick}
              />
            </div>
          );
        })}

        <AboutSidebarResources
          resources={sidebarResources}
          wrapperClassName="border-t border-gray-700 py-3"
          linkClassName="flex items-center gap-2 text-blue-300 transition duration-200 hover:text-blue-500"
          itemClassName="flex items-center justify-between gap-3 border-b border-gray-500 px-2 py-2 last:border-b-0"
        />
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

          <AboutSidebarGroups
            category={activeCategory}
            isExpanded={isDropdownExpanded(`main-${activeCategory.id}`)}
            expandedDropdowns={expandedDropdowns}
            isItemActive={isItemActive}
            onToggleDropdown={toggleDropdown}
            onSelectItem={handleSideBarItemClick}
          />

          <div
            className={`-ml-2 mt-2 ${
              isDropdownExpanded(`main-${activeCategory.id}`)
                ? "border-t border-gray-500"
                : "border-t-0"
            }`}
          >
            <AboutSidebarResources
              resources={sidebarResources}
              wrapperClassName=""
              linkClassName="ml-2 text-blue-300 hover:text-blue-500 flex items-center gap-2 transition duration-200"
              itemClassName="py-2 pl-1 flex items-center justify-between border-b border-gray-500 last:border-b-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeSidebar;
