import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://portfolio-v2-beige-eta.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://portfolio-v2-beige-eta.vercel.app/projects",
      lastModified: new Date(),
    },
    {
      url: "https://portfolio-v2-beige-eta.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://portfolio-v2-beige-eta.vercel.app/contact",
      lastModified: new Date(),
    },
  ];
}
