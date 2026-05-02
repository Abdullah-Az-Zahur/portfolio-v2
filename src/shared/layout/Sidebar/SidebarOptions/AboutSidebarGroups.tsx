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
          <motion.ul className="ml-3 mt-2 space-y-1 overflow-hidden">
            {category.groups.map((group) => {
              const groupKey = `${category.id}-${group.id}`;

              return (
                <div key={groupKey}>
                  <motion.li
                    className="flex items-center gap-2 text-gray-500 cursor-pointer"
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
                </div>
              );
            })}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AboutSidebarGroups;
