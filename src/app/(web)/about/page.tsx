import { Metadata } from "next";
import AboutClient from "@/features/about/components/AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Md. Abdullah Az-Zahur, a software engineer focused on MERN stack development and AI/ML research.",
};

const AboutPage = () => {
  return <AboutClient />;
};

export default AboutPage;
