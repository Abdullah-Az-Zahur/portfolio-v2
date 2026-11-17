export const siteLinks = {
  home: "/",
  about: "/about",
  projects: "/project",
  contact: "/contact",
  github: "https://github.com/Abdullah-Az-Zahur",
  linkedin: "https://www.linkedin.com/in/md-amanullah-az-zahur/",
  facebook: "https://www.facebook.com/abdullah.az.zahur",
  youtube: "https://www.youtube.com/@AzZahur",
  twitter: "https://x.com/abdullahazzahur",
  instagram: "https://www.instagram.com/abdullah.az.zahur/",
  resume:
    "https://drive.google.com/uc?export=download&id=1fuMYadVqT74gf7RX545ERff8RFl0BJYG",
  cv: "https://drive.google.com/uc?export=download&id=15_17rv6PbTe_A7zyhBmR2pwwCJXpjPBq",
} as const;

export const contactDetails = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "abdullah.az.zahur@gmail.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+880-1705697897",
} as const;

export type PublicSiteLinks = typeof siteLinks & typeof contactDetails;

export const aboutSidebarResources = [
  { label: "Resume", href: siteLinks.resume },
  { label: "CV", href: siteLinks.cv },
] as const;

export const socialLinks = {
  linkedin: siteLinks.linkedin,
  facebook: siteLinks.facebook,
  github: siteLinks.github,
  youtube: siteLinks.youtube,
  twitter: siteLinks.twitter,
  instagram: siteLinks.instagram,
} as const;
