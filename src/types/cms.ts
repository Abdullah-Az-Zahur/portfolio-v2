export type SocialLink = {
  label: string;
  url: string;
};

export type TimelineEntry = {
  title: string;
  organization: string;
  period?: string;
  details?: string;
};

export type CertificateEntry = {
  title: string;
  issuer: string;
  year?: string;
  url?: string;
};

export type HobbyEntry = {
  title: string;
  details?: string;
};

export type ProfileDocument = {
  name: string;
  headline: string;
  summary: string;
  bio: string;
  location?: string;
  email?: string;
  phone?: string;
  avatarUrl?: string;
  avatarPublicId?: string;
  socialLinks: SocialLink[];
  highlights: string[];
  skills: string[];
  education: TimelineEntry[];
  experience: TimelineEntry[];
  certificates: CertificateEntry[];
  hobbies: HobbyEntry[];
};

export type ProjectDocument = {
  title: string;
  slug: string;
  description: string;
  liveLink: string;
  repoLink?: string;
  imageUrl: string;
  imagePublicId?: string;
  skills: string[];
  order: number;
  featured: boolean;
  status: "draft" | "published";
};

export type SkillDocument = {
  name: string;
  slug: string;
  category: string;
  isVisible: boolean;
};

export type SettingsDocument = {
  siteName: string;
  siteDescription: string;
  projectPageSize: number;
  allowPublicContact: boolean;
};

export type AdminUserDocument = {
  email: string;
  name: string;
  role: "admin";
  passwordHash?: string;
};
