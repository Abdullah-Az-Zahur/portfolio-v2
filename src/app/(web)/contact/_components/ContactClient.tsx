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
  const [errorMessage, setErrorMessage] = useState("");

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
    setErrorMessage("");

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
        setErrorMessage("Your message could not be sent. Please try again.");
      }
    } catch {
      setErrorMessage(
        "We could not connect to the contact service. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewMessage = () => {
    setIsSuccess(false);
  };

  return (
    <section
      aria-labelledby="contact-heading"
      aria-label="Contact Section"
      className="grid w-full min-h-[calc(100dvh-56px-48px)] grid-cols-1 md:grid-cols-2 bg-[#011627] text-[#607b96] transition-colors duration-200 light:bg-[#eef3f8] light:text-[#314158]"
    >
      <h1 id="contact-heading" className="sr-only">
        Contact Md. Abdullah Az-Zahur
      </h1>
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
        {errorMessage && !isSuccess ? (
          <p
            role="alert"
            className="px-6 pb-6 text-sm text-rose-300 light:text-rose-700"
          >
            {errorMessage}
          </p>
        ) : null}
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
