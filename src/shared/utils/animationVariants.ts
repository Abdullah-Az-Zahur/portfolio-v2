import { Variants } from "framer-motion";

/**
 * Shared Framer Motion animation variants
 * Use with: motion.div variants={...}
 */

// ============================================================
// Dropdown / Accordion (height auto)
// ============================================================
export const dropdownVariants: Variants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      opacity: { delay: 0.12 },
      duration: 0.28,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// ============================================================
// Sidebar Item — staggered entrance
// ============================================================
export const sidebarItemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    x: -8,
    transition: { duration: 0.16, ease: [0.4, 0, 0.2, 1] },
  },
};

// ============================================================
// Sidebar Items Container — staggers children
// ============================================================
export const sidebarListVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.025,
      staggerDirection: -1,
    },
  },
};

// ============================================================
// Category Trigger — press feedback
// ============================================================
export const categoryTriggerVariants: Variants = {
  idle: { scale: 1 },
  tap: { scale: 0.98 },
};

// ============================================================
// Arrow icon rotate
// ============================================================
export const arrowVariants: Variants = {
  rotate: {
    rotate: 0,
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
  },
  rotateReverse: {
    rotate: 0,
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
  },
};

// ============================================================
// Group Row — stagger
// ============================================================
export const groupRowVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.24, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    x: -6,
    transition: { duration: 0.14, ease: [0.4, 0, 0.2, 1] },
  },
};

export const groupListVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.04,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.025,
      staggerDirection: -1,
    },
  },
};

// ============================================================
// Item Row — stagger
// ============================================================
export const itemRowVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.22, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    x: -6,
    transition: { duration: 0.12, ease: [0.4, 0, 0.2, 1] },
  },
};

export const itemListVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.02,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
};

// ============================================================
// Hover / Tap feedback
// ============================================================
export const rowHoverVariants: Variants = {
  hover: {
    x: 4,
    transition: { duration: 0.18, ease: [0.4, 0, 0.2, 1] },
  },
  tap: { scale: 0.98 },
};

// ============================================================
// Mobile Menu Container (NavBar)
// ============================================================
export const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.28,
      ease: [0.4, 0, 0.2, 1],
      when: "afterChildren",
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    height: "calc(100vh - 56px - 48px)",
    transition: {
      duration: 0.32,
      ease: [0.4, 0, 0.2, 1],
      when: "beforeChildren",
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

// ============================================================
// Mobile Menu Items
// ============================================================
export const mobileMenuItemVariants: Variants = {
  closed: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.15 },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
  },
};

// ============================================================
// Theme Toggle Icon Swap
// ============================================================
export const themeIconVariants = {
  enter: (direction: "left" | "right") => ({
    opacity: 0,
    rotate: direction === "left" ? -90 : 90,
    scale: 0.6,
  }),
  center: {
    opacity: 1,
    rotate: 0,
    scale: 1,
  },
  exit: (direction: "left" | "right") => ({
    opacity: 0,
    rotate: direction === "left" ? 90 : -90,
    scale: 0.6,
  }),
};

// ============================================================
// Resources List — fade in when category opens
// ============================================================
export const resourcesVariants: Variants = {
  hidden: { opacity: 0, y: -6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.26,
      delay: 0.14,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: {
      duration: 0.16,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// ============================================================
// Category Row (Desktop icon rail + Mobile category item)
// ============================================================
export const categoryRowVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    x: -8,
    transition: { duration: 0.16, ease: [0.4, 0, 0.2, 1] },
  },
};

// Category list container — staggers category rows
export const categoryListVariants: Variants = {
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
      staggerDirection: -1,
    },
  },
};
