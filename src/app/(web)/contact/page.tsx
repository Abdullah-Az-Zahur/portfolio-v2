import ContactClient from "@/components/Contact/ContactClient";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Md. Abdullah Az-Zahur — Front-End & MERN Stack Developer. Use the contact form to send a message for collaboration, hiring, or just to say hello.",
};

const page = () => {
  return (
    <>
      <ContactClient />
    </>
  );
};

export default page;
