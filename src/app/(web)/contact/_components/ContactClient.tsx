"use client";

import React, { ChangeEvent, useState } from "react";
import SuccessMessage from "./SuccessMessage";
import ContactForm from "./ContactForm";
import ContactPreview from "./ContactPreview";

export interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactClient = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewMessage = () => {
    setIsSuccess(false);
  };

  return (
    <section
      aria-label="Contact Section"
      className="grid w-full min-h-[calc(100dvh-56px-48px)] grid-cols-1 md:grid-cols-2 bg-[#011627] text-[#607b96] transition-colors duration-200 light:bg-[#eef3f8] light:text-[#314158]"
    >
      {/* Left Column: Form / Success Message */}
      <div className="flex w-full items-center justify-center border-b border-(--app-border-color) light:border-[#cbd6e3] md:border-b-0 md:border-r">
        {isSuccess ? (
          <SuccessMessage onNewMessage={handleNewMessage} />
        ) : (
          <ContactForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        )}
      </div>

      {/* Right Column: Code Preview (Full Height & Full Width) */}
      <div
        className="flex w-full items-center justify-center"
        aria-label="Code Preview"
      >
        <ContactPreview formData={formData} />
      </div>
    </section>
  );
};

export default ContactClient;
