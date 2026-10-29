"use client";

import { useEffect, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addTab } from "@/store/features/tabs/tabsSlice";
import AboutSidebarGroups from "./AboutSidebarGroups";
import AboutSidebarResources from "./AboutSidebarResources";
import { aboutIconOptions } from "@/shared/data/aboutIconOptions";
import {
  categoryListVariants,
  categoryRowVariants,
  dropdownVariants,
  arrowVariants,
  resourcesVariants,
} from "@/shared/utils/animationVariants";
import { SidebarCategory } from "@/app/(web)/about/_components/aboutSidebarTypes";
import { aboutSidebarCategories } from "@/app/(web)/about/_components/aboutSidebarCategories";

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
  const [categories, setCategories] = useState<SidebarCategory[]>(
    aboutSidebarCategories,
  );

  useEffect(() => {
    async function loadDynamicCategories() {
      try {
        const response = await fetch("/api/about");
        const data = await response.json();
        if (!response.ok || !Array.isArray(data.entries)) return;

        const nextCategories = aboutSidebarCategories.map((category) => ({
          ...category,
          groups: category.groups.map((group) => ({
            ...group,
            items: data.entries
              .filter(
                (entry: { category: string; group: string }) =>
                  entry.category === category.id && entry.group === group.id,
              )
              .sort(
                (left: { order?: number }, right: { order?: number }) =>
                  (left.order ?? 0) - (right.order ?? 0),
              )
              .map(
                (entry: {
                  key: string;
                  label: string;
                  iconKey: string;
                  color: string;
                }) => {
                  const icon =
                    aboutIconOptions[
                      entry.iconKey as keyof typeof aboutIconOptions
                    ]?.icon ?? aboutIconOptions.user.icon;
                  const colorClass = `text-${entry.color}-500`;
                  return {
                    id: entry.key,
                    title: entry.label,
                    label: entry.label,
                    icon,
                    activeClass: `${colorClass} font-medium`,
                    hoverClass: `hover:${colorClass}`,
                    iconClass: colorClass,
                  };
                },
              ),
          })),
        }));
        setCategories(nextCategories);
      } catch {
        // Static categories remain available when MongoDB is unavailable.
      }
    }

    void loadDynamicCategories();
  }, []);

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
    dispatch(addTab({ id, title }));
  };

  const isItemActive = (id: string): boolean => activeTab === id;

  return (
    <>
      {/* ============================================================
          MOBILE — Categories stagger in
          ============================================================ */}
      <motion.div
        className="flex flex-col text-[#94a3b8] light:text-[#52657d] md:hidden"
        initial="hidden"
        animate="visible"
        variants={categoryListVariants}
      >
        {categories.map((category) => {
          const isActive = mobileExpandedCategoryId === category.id;

          return (
            <motion.div
              key={category.id}
              variants={categoryRowVariants}
              className="border-b border-(--app-border-color-soft) py-2 light:border-[#cbd6e3]"
            >
              <motion.button
                type="button"
                onClick={() => handleMobileCategoryToggle(category.id)}
                className={`flex w-full items-center gap-2 rounded-md px-2 py-2 text-left transition-colors ${
                  isActive
                    ? "bg-[#1f2937] light:bg-[#dce7f0]"
                    : "hover:bg-[#1a2234] light:hover:bg-[#e3ebf3]"
                }`}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-2 text-white light:text-[#172337]">
                  <motion.span
                    className="flex items-center"
                    animate={isActive ? "rotate" : "rotateReverse"}
                    variants={arrowVariants}
                  >
                    {isActive ? (
                      <IoMdArrowDropdown className="text-white light:text-[#172337]" />
                    ) : (
                      <IoMdArrowDropright className="text-white light:text-[#172337]" />
                    )}
                  </motion.span>
                  <span>{category.label}</span>
                </span>
              </motion.button>

              {/* Category dropdown — animated height */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    key={`mobile-${category.id}-dropdown`}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={dropdownVariants}
                    style={{ overflow: "hidden" }}
                  >
                    <AboutSidebarGroups
                      category={category}
                      isExpanded={isActive}
                      expandedDropdowns={expandedDropdowns}
                      isItemActive={isItemActive}
                      onToggleDropdown={toggleDropdown}
                      onSelectItem={handleSideBarItemClick}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

        <AboutSidebarResources
          resources={sidebarResources}
          wrapperClassName="py-3 border-t border-(--app-border-color) light:border-[#7a8fa5]"
          linkClassName="flex items-center gap-2 text-[#93c5fd] hover:text-[#3b82f6] light:text-[#2563a8] light:hover:text-[#0e7490] transition duration-200"
          itemClassName="flex items-center justify-between gap-3 border-b border-(--app-border-color) light:border-[#7a8fa5] px-2 py-2 last:border-b-0"
        />
      </motion.div>

      {/* ============================================================
          DESKTOP
          ============================================================ */}
      <div className="hidden items-stretch gap-0 text-[#94a3b8] light:text-[#52657d] md:flex md:h-full">
        {/* Icon rail — categories stagger in */}
        <motion.div
          className="flex flex-col items-center gap-2 self-stretch border-r border-(--app-border-color) px-3 pb-2 pt-2 light:border-[#7a8fa5]"
          initial="hidden"
          animate="visible"
          variants={categoryListVariants}
        >
          {categories.map((category) => {
            const CategoryIcon = category.icon;
            const isActive = activeCategory.id === category.id;

            return (
              <motion.button
                key={category.id}
                type="button"
                onClick={() => handleCategorySwitch(category.id)}
                className={`rounded-md p-2 transition-colors ${
                  isActive
                    ? "bg-[#1f2937] light:bg-[#dce7f0] light:shadow-[0_0_0_1px_#5b8fc4]"
                    : "hover:bg-[#1a2234] light:hover:bg-[#e3ebf3]"
                }`}
                title={category.label}
                aria-label={category.label}
                variants={categoryRowVariants}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
              >
                <CategoryIcon className={`text-lg ${category.iconClass}`} />
              </motion.button>
            );
          })}
        </motion.div>

        {/* Content — no left padding on wrapper, borders span full width */}
        <div className="min-w-0 flex-1">
          <motion.div
            className="flex cursor-pointer items-center gap-2 border-b border-(--app-border-color) py-2 pl-3 text-white hover:text-[#3b82f6] light:border-[#7a8fa5] light:text-[#172337] light:hover:text-[#2563a8]"
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
              variants={arrowVariants}
            >
              {isDropdownExpanded(`main-${activeCategory.id}`) ? (
                <IoMdArrowDropdown className="text-white light:text-[#172337]" />
              ) : (
                <IoMdArrowDropright className="text-white light:text-[#172337]" />
              )}
            </motion.div>
            <span>{activeCategory.label}</span>
          </motion.div>

          {/* Category switch fade */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Desktop category dropdown — height animated */}
              <AnimatePresence initial={false}>
                {isDropdownExpanded(`main-${activeCategory.id}`) && (
                  <motion.div
                    key={`desktop-${activeCategory.id}-dropdown`}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={dropdownVariants}
                    style={{ overflow: "hidden" }}
                  >
                    <AboutSidebarGroups
                      category={activeCategory}
                      isExpanded
                      expandedDropdowns={expandedDropdowns}
                      isItemActive={isItemActive}
                      onToggleDropdown={toggleDropdown}
                      onSelectItem={handleSideBarItemClick}
                    />

                    <motion.div
                      key={`resources-${activeCategory.id}`}
                      variants={resourcesVariants}
                      initial="hidden"
                      animate="visible"
                      className="mt-2 border-t border-(--app-border-color) light:border-[#7a8fa5]"
                    >
                      <AboutSidebarResources
                        resources={sidebarResources}
                        wrapperClassName=""
                        linkClassName="flex items-center gap-2 text-[#93c5fd] hover:text-[#3b82f6] light:text-[#2563a8] light:hover:text-[#0e7490] transition duration-200 pl-3"
                        itemClassName="flex items-center justify-between border-b border-(--app-border-color) light:border-[#7a8fa5] py-2 pl-3 last:border-b-0"
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default AboutMeSidebar;
