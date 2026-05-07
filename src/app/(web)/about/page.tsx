import { Metadata } from "next";
import AboutClient from "@/features/about/components/AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Md. Abdullah Az-Zahur, a software engineer, including his education, skills, experience, certificates, and development journey.",
  keywords: [
    "About Md. Abdullah Az-Zahur",
    "Software Engineer",
    "Web Developer",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Software Engineering",
    "AI/ML",
    "MSc ICT",
    "Research",
    "Skills",
    "Experience",
    "Education",
    "Certificates",
    "Parkinson's Prediction",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Md. Abdullah Az-Zahur",
    description:
      "Read about Md. Abdullah Az-Zahur's background, skills, experience, education, research, and interests as a software engineer.",
    url: "https://abdullahzahur.vercel.app/about",
    siteName: "Md. Abdullah Az-Zahur Portfolio",
    type: "profile",
    images: ["/assets/images/My%20half%20Photo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Md. Abdullah Az-Zahur",
    description:
      "Learn about Md. Abdullah Az-Zahur's skills, education, research, and software engineering journey.",
    images: ["/assets/images/My%20half%20Photo.png"],
  },
};

const AboutPage = () => {
  return <AboutClient />;
};

export default AboutPage;
