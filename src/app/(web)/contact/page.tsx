import ContactClient from "@/features/contact/components/ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Md. Abdullah Az-Zahur — Front-End & MERN Stack Developer. Use the contact form to send a message for collaboration, hiring, or just to say hello.",
};

const ContactPage = () => {
  return <ContactClient />;
};

export default ContactPage;
