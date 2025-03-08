import {
  FaAngular,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaVuejs,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiFolder3Fill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";

export interface SidebarItem {
  title: string;
  icon: React.ReactNode;
  customClass: string;
  path?: string;
  href?: string;
  isSelectable?: boolean;
  isAlwaysVisible?: boolean;
  subMenu?: SidebarItem[];
}

export interface SidebarConfig {
  [key: string]: {
    pageName: string;
    items: SidebarItem[];
    sidebarClass: string;
  };
}

export const sidebarConfig: SidebarConfig = {
  "/about": {
    pageName: "About",
    items: [
      {
        title: "bio",
        icon: <RiFolder3Fill className="text-blue-500" />,
        customClass: "text-gray-500 hover:text-blue-500 ml-4",
        path: "/about",
      },
      {
        title: "interests",
        icon: <RiFolder3Fill className="text-green-500" />,
        customClass: "text-gray-500 hover:text-green-500 ml-4",
        path: "/about/interests",
      },
      {
        title: "education",
        icon: <RiFolder3Fill className="text-purple-500" />,
        customClass: "text-gray-500 hover:text-purple-500 ml-4",
        subMenu: [
          {
            title: "high-school",
            icon: <RiFolder3Fill className="text-yellow-500" />,
            customClass: "text-gray-500 hover:text-yellow-500 ml-4",
            path: "/about/education/high-school",
          },
          {
            title: "university",
            icon: <RiFolder3Fill className="text-red-500" />,
            customClass: "text-gray-500 hover:text-red-500 ml-4",
            path: "/about/education/university",
          },
        ],
      },
      {
        title: "contact",
        icon: <IoMdArrowDropdown className="" />,
        customClass:
          "text-white hover:text-blue-500 border-t border-b border-gray-500 py-2",
        isAlwaysVisible: true,
        subMenu: [
          {
            title: "abdullah.az.zahur@gmail.com",
            icon: <MdEmail className="text-purple-500" />,
            customClass: "text-gray-500 hover:text-purple-500",
            href: "mailto:abdullah.az.zahur@gmail.com",
          },
          {
            title: "+880-1705697897",
            icon: <MdPhone className="text-green-500" />,
            customClass: "text-gray-500 hover:text-green-500",
            href: "tel:+8801705697897",
          },
        ],
      },
    ],
    sidebarClass: "",
  },
  "/project": {
    pageName: "Projects",
    items: [
      {
        title: "React",
        icon: <FaReact className="text-blue-500" />,
        customClass: "text-gray-500 hover:text-blue-500 ml-4",
        isSelectable: true,
      },
      {
        title: "Vue",
        icon: <FaVuejs className="text-green-500" />,
        customClass: "text-gray-500 hover:text-green-500 ml-4",
        isSelectable: true,
      },
      {
        title: "Angular",
        icon: <FaAngular className="text-red-500" />,
        customClass: "text-gray-500 hover:text-red-500 ml-4",
        isSelectable: true,
      },
      {
        title: "HTML",
        icon: <FaHtml5 className="text-orange-500" />,
        customClass: "text-gray-500 hover:text-orange-500 ml-4",
        isSelectable: true,
      },
      {
        title: "CSS",
        icon: <FaCss3Alt className="text-blue-300" />,
        customClass: "text-gray-500 hover:text-blue-300 ml-4",
        isSelectable: true,
      },
    ],
    sidebarClass: "",
  },
  "/contact": {
    pageName: "Contact",
    items: [
      {
        title: "abdullah.az.zahur@gmail.com",
        icon: <MdEmail className="text-purple-500" />,
        customClass: "text-gray-500 hover:text-purple-500 ml-4",
        href: "mailto:abdullah.az.zahur@gmail.com",
      },
      {
        title: "+880-1705697897",
        icon: <MdPhone className="text-green-500" />,
        customClass: "text-gray-500 hover:text-green-500 ml-4",
        href: "tel:+8801705697897",
      },
      {
        title: "find-me-also-in",
        icon: <IoMdArrowDropdown className="" />,
        customClass:
          "text-white hover:text-blue-500 border-t border-b border-gray-500 py-2",
        isAlwaysVisible: true,
        subMenu: [
          {
            title: "YouTube link",
            icon: <FaYoutube className="text-red-500" />,
            customClass: "text-gray-500 hover:text-red-500",
            href: "https://www.youtube.com",
          },
          {
            title: "Twitter link",
            icon: <FaTwitter className="text-blue-500" />,
            customClass: "text-gray-500 hover:text-blue-500",
            href: "https://www.twitter.com",
          },
          {
            title: "Instagram link",
            icon: <FaInstagram className="text-pink-500" />,
            customClass: "text-gray-500 hover:text-pink-500",
            href: "https://www.instagram.com",
          },
        ],
      },
    ],
    sidebarClass: "",
  },
};

export const navItems = [
  { href: "/", label: "_hello" },
  { href: "/about", label: "_about-me" },
  { href: "/project", label: "_project" },
  { href: "/contact", label: "_contact-me" },
];
