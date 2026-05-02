export interface NavItem {
  href: string;
  label: string;
}

export const navItems: NavItem[] = [
  { href: "/", label: "_hello" },
  { href: "/about", label: "_about-me" },
  { href: "/project", label: "_project" },
  { href: "/contact", label: "_contact-me" },
];
