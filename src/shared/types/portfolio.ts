export type PortfolioDoc = {
  _id: string;
  name: string;
  bio: string;
  contact: {
    phone: string;
    email: string;
  };
  social: {
    github: string;
    linkedin: string;
    facebook: string;
  };
};

export type ProjectDoc = {
  _id: string;
  name: string;
  description: string;
  image: string;
  liveLink: string;
  repoLink: string;
  skills: string[];
  order: number;
};

export type OrderedContentDoc = {
  _id: string;
  title?: string;
  degree?: string;
  company?: string;
  position?: string;
  description: string;
  order: number;
};
