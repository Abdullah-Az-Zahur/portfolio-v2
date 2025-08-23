"use client"
import React, { ChangeEvent, useState } from 'react';
import SuccessMessage from './SuccessMessage';
import ContactForm from './ContactForm';
import ContactPreview from './ContactPreview';

interface FormData {
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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
        console.error("Error sending message");
      }
    } catch (error) {
      console.error("Error sending message", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewMessage = () => {
    setIsSuccess(false);
  };

    return (
        <div className="flex flex-col-reverse md:flex-row">
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

      <ContactPreview formData={formData} />
    </div>
    );
};

export default ContactClient;