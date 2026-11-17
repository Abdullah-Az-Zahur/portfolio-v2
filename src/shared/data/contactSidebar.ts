import type { IconType } from "react-icons";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export interface ContactLinkItem {
  label: string;
  href: string;
  icon: IconType;
  iconClassName: string;
  itemClassName: string;
  linkClassName: string;
  target?: "_blank";
  rel?: string;
  transformHref?: (value: string) => string;
}

export const contactLinkItems = [
  {
    label: "Email",
    href: "contactEmail",
    icon: MdEmail,
    iconClassName: "text-purple-500 flex-shrink-0",
    itemClassName:
      "flex items-center gap-2 text-gray-500 hover:text-purple-500 cursor-pointer",
    linkClassName: "truncate hover:underline",
    transformHref: (value: string) => `mailto:${value}`,
  },
  {
    label: "Phone",
    href: "contactPhone",
    icon: MdPhone,
    iconClassName: "text-green-500",
    itemClassName:
      "flex items-center gap-2 text-gray-500 hover:text-green-500 cursor-pointer",
    linkClassName: "hover:underline",
    transformHref: (value: string) => `tel:${value.replace(/-/g, "")}`,
  },
] as const;

export const socialLinkItems = [
  {
    label: "Facebook",
    href: "facebookUrl",
    icon: FaFacebook,
    iconClassName: "text-blue-700",
    itemClassName: "flex items-center gap-2 text-gray-500 hover:text-blue-700",
    linkClassName: "hover:underline",
    target: "_blank" as const,
    rel: "noopener noreferrer",
  },
  {
    label: "LinkedIn",
    href: "linkedinUrl",
    icon: FaLinkedin,
    iconClassName: "text-blue-600",
    itemClassName: "flex items-center gap-2 text-gray-500 hover:text-blue-600",
    linkClassName: "hover:underline",
    target: "_blank" as const,
    rel: "noopener noreferrer",
  },
  {
    label: "YouTube",
    href: "youtubeUrl",
    icon: FaYoutube,
    iconClassName: "text-red-500",
    itemClassName: "flex items-center gap-2 text-gray-500 hover:text-red-500",
    linkClassName: "hover:underline",
    target: "_blank" as const,
    rel: "noopener noreferrer",
  },
  {
    label: "Twitter",
    href: "twitterUrl",
    icon: FaTwitter,
    iconClassName: "text-blue-500",
    itemClassName: "flex items-center gap-2 text-gray-500 hover:text-blue-500",
    linkClassName: "hover:underline",
    target: "_blank" as const,
    rel: "noopener noreferrer",
  },
  {
    label: "Instagram",
    href: "instagramUrl",
    icon: FaInstagram,
    iconClassName: "text-pink-500",
    itemClassName: "flex items-center gap-2 text-gray-500 hover:text-pink-500",
    linkClassName: "hover:underline",
    target: "_blank" as const,
    rel: "noopener noreferrer",
  },
] as const;
