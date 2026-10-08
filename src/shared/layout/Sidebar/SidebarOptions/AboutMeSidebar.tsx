"use client";

import { useEffect, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addTab } from "@/store/features/tabs/tabsSlice";
import { aboutSidebarCategories } from "@/features/about/components/aboutSidebarCategories";
import { SidebarCategory } from "@/features/about/components/aboutSidebarTypes";
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
        className="about-sidebar flex flex-col md:hidden"
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
              className="about-sidebar-category border-b py-2"
            >
              <motion.button
                type="button"
                onClick={() => handleMobileCategoryToggle(category.id)}
                className={`about-sidebar-trigger flex w-full items-center gap-2 rounded-md py-2 text-left transition-colors ${
                  isActive
                    ? "about-sidebar-trigger-active"
                    : "about-sidebar-trigger-idle"
                }`}
                whileTap={{ scale: 0.98 }}
              >
                <span className="about-sidebar-trigger-label flex items-center gap-2">
                  <motion.span
                    className="flex items-center"
                    animate={isActive ? "rotate" : "rotateReverse"}
                    variants={arrowVariants}
                  >
                    {isActive ? (
                      <IoMdArrowDropdown className="about-sidebar-arrow" />
                    ) : (
                      <IoMdArrowDropright className="about-sidebar-arrow" />
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
          wrapperClassName="about-sidebar-resources border-t py-3"
          linkClassName="about-sidebar-link flex items-center gap-2 transition duration-200"
          itemClassName="about-sidebar-resource-item flex items-center justify-between gap-3 border-b px-2 py-2 last:border-b-0"
        />
      </motion.div>

      {/* ============================================================
          DESKTOP
          ============================================================ */}
      <div className="about-sidebar hidden items-stretch gap-0 md:flex md:h-full">
        {/* Icon rail — categories stagger in */}
        <motion.div
          className="about-sidebar-rail flex flex-col items-center gap-2 self-stretch border-r px-3 pb-2 pt-2"
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
                className={`about-sidebar-rail-btn rounded-md p-2 transition-colors ${
                  isActive
                    ? "about-category-active"
                    : "about-sidebar-rail-btn-idle"
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

        {/* Content */}
        <div className="min-w-0 flex-1 pl-2">
          <motion.div
            className="about-sidebar-header -ml-2 flex cursor-pointer items-center gap-2 border-b py-2 pl-1"
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
                <IoMdArrowDropdown className="about-sidebar-arrow" />
              ) : (
                <IoMdArrowDropright className="about-sidebar-arrow" />
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
                      className="about-sidebar-resources about-sidebar-resources-open -ml-2 mt-2"
                    >
                      <AboutSidebarResources
                        resources={sidebarResources}
                        wrapperClassName=""
                        linkClassName="about-sidebar-link ml-2 flex items-center gap-2 transition duration-200"
                        itemClassName="about-sidebar-resource-item flex items-center justify-between border-b py-2 pl-1 last:border-b-0"
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
