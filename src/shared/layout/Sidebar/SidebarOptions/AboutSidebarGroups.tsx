"use client";

import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { RiFolder3Fill } from "react-icons/ri";
import { dropdownVariants } from "@/shared/utils/animationVariants";
import { SidebarCategory } from "@/features/about/components/aboutSidebarTypes";

type AboutSidebarGroupsProps = {
  category: SidebarCategory;
  isExpanded: boolean;
  expandedDropdowns: Set<string>;
  isItemActive: (id: string) => boolean;
  onToggleDropdown: (title: string) => void;
  onSelectItem: (id: string, title: string) => void;
};

// ✅ Group row — new stagger animation
const groupRowVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.26, ease: [0.4, 0, 0.2, 1] as const },
  },
  exit: {
    opacity: 0,
    x: -8,
    transition: { duration: 0.14, ease: [0.4, 0, 0.2, 1] as const },
  },
};

// ✅ Group list — staggers group rows in
const groupListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1 as const,
    },
  },
};

// ❌ Item hover — existing behaviour অটুট
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

const AboutSidebarGroups = ({
  category,
  isExpanded,
  expandedDropdowns,
  isItemActive,
  onToggleDropdown,
  onSelectItem,
}: AboutSidebarGroupsProps) => {
  const isDropdownExpanded = (title: string) => expandedDropdowns.has(title);

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
          {/* ✅ Group list staggers its children — no ml-3, borders span full width */}
          <motion.ul
            className="mt-2 space-y-1"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={groupListVariants}
          >
            {category.groups.map((group) => {
              const groupKey = `${category.id}-${group.id}`;

              return (
                <motion.div key={groupKey} variants={groupRowVariants}>
                  <motion.li
                    className={`about-sidebar-group-row flex cursor-pointer items-center gap-2 pl-3 text-gray-500 ${
                      group.hoverClass ?? ""
                    }`}
                    onClick={() => onToggleDropdown(groupKey)}
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
                    <span>{group.label}</span>
                  </motion.li>

                  {/* ❌ Items — existing animation (changed nothing) */}
                  <AnimatePresence initial={false}>
                    {isDropdownExpanded(groupKey) && (
                      <motion.ul
                        className="mt-1 space-y-1 overflow-hidden"
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
                              className={`about-sidebar-item flex cursor-pointer items-center gap-2 pl-6 text-sm ${
                                isItemActive(item.id)
                                  ? item.activeClass
                                  : `text-gray-500 ${item.hoverClass ?? ""}`
                              }`}
                              onClick={() => onSelectItem(item.id, item.title)}
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
                </motion.div>
              );
            })}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AboutSidebarGroups;
