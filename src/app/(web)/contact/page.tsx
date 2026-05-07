import ContactClient from "@/features/contact/components/ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Md. Abdullah Az-Zahur, a software engineer and Front-End/MERN Stack Developer, for collaboration, hiring, freelance work, or project inquiries.",
  keywords: [
    "Contact Md. Abdullah Az-Zahur",
    "Software Engineer",
    "Software Engineer Contact",
    "Hire a Developer",
    "Freelance Web Developer",
    "Frontend Developer Contact",
    "MERN Stack Developer Contact",
    "Portfolio Contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Md. Abdullah Az-Zahur",
    description:
      "Contact Md. Abdullah Az-Zahur for collaboration, hiring opportunities, or freelance web development work.",
    url: "https://abdullahzahur.vercel.app/contact",
    siteName: "Md. Abdullah Az-Zahur Portfolio",
    type: "website",
    images: ["/assets/images/My%20half%20Photo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Md. Abdullah Az-Zahur",
    description:
      "Send a message to Md. Abdullah Az-Zahur using the contact form on his portfolio.",
    images: ["/assets/images/My%20half%20Photo.png"],
  },
};

const ContactPage = () => {
  return <ContactClient />;
};

export default ContactPage;
