/**
 * Shared animation variants for use across components
 */

export const dropdownVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      opacity: { delay: 0.12 },
      duration: 0.28,
      ease: "easeInOut",
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

export const sidebarItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};
