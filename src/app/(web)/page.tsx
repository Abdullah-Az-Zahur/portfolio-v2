import HomeContent from "@/features/home/components/HomeContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Md. Abdullah Az-Zahur's home page. Discover a software engineer's Next.js portfolio showcasing MERN stack projects, front-end development skills, and contact information.",
  keywords: [
    "Md. Abdullah Az-Zahur",
    "Home",
    "Portfolio",
    "Portfolio Home",
    "Software Engineer",
    "Software Engineering",
    "MERN Stack Developer",
    "Front-End Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "Web Developer Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Md. Abdullah Az-Zahur | Home",
    description:
      "Visit Md. Abdullah Az-Zahur's home page to view his portfolio, role summary, and software engineer profile.",
    url: "https://abdullahzahur.vercel.app/",
    siteName: "Md. Abdullah Az-Zahur Portfolio",
    type: "website",
    images: ["/assets/images/My%20half%20Photo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Abdullah Az-Zahur | Home",
    description:
      "Visit the home page of Md. Abdullah Az-Zahur's portfolio and see his software engineer profile.",
    images: ["/assets/images/My%20half%20Photo.png"],
  },
};

const HomePage = async () => {
  return <HomeContent />;
};

export default HomePage;
