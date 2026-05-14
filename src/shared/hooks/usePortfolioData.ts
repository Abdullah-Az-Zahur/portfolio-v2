"use client";

import axios from "axios";
import { useEffect, useState } from "react";

type PortfolioData = {
  portfolio: {
    name: string;
    bio: string;
    contact: { phone: string; email: string };
    social: { github: string; linkedin: string; facebook: string };
  };
  projects: Array<{
    _id: string;
    name: string;
    description: string;
    image: string;
    liveLink: string;
    repoLink: string;
    skills: string[];
    order: number;
  }>;
  skills: string[];
  hobbies: Array<{
    _id: string;
    title: string;
    description: string;
    order: number;
  }>;
  education: Array<{
    _id: string;
    degree: string;
    institution: string;
    cgpa: string;
    date: string;
    description: string;
    order: number;
  }>;
  experience: Array<{
    _id: string;
    company: string;
    position: string;
    duration: string;
    description: string;
    order: number;
  }>;
};

export const usePortfolioData = () => {
  const [data, setData] = useState<PortfolioData | null>(null);

  useEffect(() => {
    let isMounted = true;
    void axios.get<PortfolioData>("/api/portfolio").then((response) => {
      if (isMounted) {
        setData(response.data);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return data;
};
