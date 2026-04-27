import { Metadata } from "next";
import AboutClient from "@/features/about/components/AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about me, my background, and my journey in web development.",
};

const AboutPage = () => {
  return <AboutClient />;
};

export default AboutPage;
