import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://abdullahzahur.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://abdullahzahur.vercel.app/projects",
      lastModified: new Date(),
    },
    {
      url: "https://abdullahzahur.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://abdullahzahur.vercel.app/contact",
      lastModified: new Date(),
    },
  ];
}
