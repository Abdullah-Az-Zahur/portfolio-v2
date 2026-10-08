/**
 * Shared Framer Motion animation variants
 * Use with: motion.div variants={...}
 */

// ============================================================
// Dropdown / Accordion (height auto)
// ============================================================
export const dropdownVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      opacity: { delay: 0.12 },
      duration: 0.28,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
} as const;

// ============================================================
// Sidebar Item — staggered entrance
// ============================================================
export const sidebarItemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] as const },
  },
  exit: {
    opacity: 0,
    x: -8,
    transition: { duration: 0.16, ease: [0.4, 0, 0.2, 1] as const },
  },
} as const;

// ============================================================
// Sidebar Items Container — staggers children
// ============================================================
export const sidebarListVariants = {
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
} as const;

// ============================================================
// Category Trigger — press feedback
// ============================================================
export const categoryTriggerVariants = {
  idle: { scale: 1 },
  tap: { scale: 0.98 },
} as const;

// ============================================================
// Arrow icon rotate
// ============================================================
export const arrowVariants = {
  rotate: {
    rotate: 0,
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] as const },
  },
  rotateReverse: {
    rotate: 0,
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] as const },
  },
} as const;

// ============================================================
// Group Row — stagger
// ============================================================
export const groupRowVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.24, ease: [0.4, 0, 0.2, 1] as const },
  },
  exit: {
    opacity: 0,
    x: -6,
    transition: { duration: 0.14, ease: [0.4, 0, 0.2, 1] as const },
  },
} as const;

export const groupListVariants = {
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
} as const;

// ============================================================
// Item Row — stagger
// ============================================================
export const itemRowVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.22, ease: [0.4, 0, 0.2, 1] as const },
  },
  exit: {
    opacity: 0,
    x: -6,
    transition: { duration: 0.12, ease: [0.4, 0, 0.2, 1] as const },
  },
} as const;

export const itemListVariants = {
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
} as const;

// ============================================================
// Hover / Tap feedback
// ============================================================
export const rowHoverVariants = {
  hover: {
    x: 4,
    transition: { duration: 0.18, ease: [0.4, 0, 0.2, 1] as const },
  },
  tap: { scale: 0.98 },
} as const;

// ============================================================
// Mobile Menu Container (NavBar)
// ============================================================
export const mobileMenuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.28,
      ease: [0.4, 0, 0.2, 1] as const,
      when: "afterChildren" as const,
      staggerChildren: 0.04,
      staggerDirection: -1 as const,
    },
  },
  open: {
    opacity: 1,
    height: "calc(100vh - 56px - 48px)",
    transition: {
      duration: 0.32,
      ease: [0.4, 0, 0.2, 1] as const,
      when: "beforeChildren" as const,
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
} as const;

// ============================================================
// Mobile Menu Items
// ============================================================
export const mobileMenuItemVariants = {
  closed: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.15 },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] as const },
  },
} as const;

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
} as const;

// ============================================================
// Resources List — fade in when category opens
// ============================================================
export const resourcesVariants = {
  hidden: { opacity: 0, y: -6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.26,
      delay: 0.14,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: {
      duration: 0.16,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
} as const;

// ============================================================
// Category Row (Desktop icon rail + Mobile category item)
// ============================================================
export const categoryRowVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] as const },
  },
  exit: {
    opacity: 0,
    x: -8,
    transition: { duration: 0.16, ease: [0.4, 0, 0.2, 1] as const },
  },
} as const;

// Category list container — staggers category rows
export const categoryListVariants = {
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
} as const;
