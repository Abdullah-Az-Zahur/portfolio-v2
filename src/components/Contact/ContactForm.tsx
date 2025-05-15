"use client";
import React, { ChangeEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  formData: FormData;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  isSubmitting?: boolean;
}

const ContactForm = ({
  formData,
  handleChange,
  handleSubmit,
  isSubmitting,
}: ContactFormProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="p-5 md:p-24 lg:p-32 h-auto md:w-1/2 md:border-r border-gray-600"
    >
      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="mb-2">
          _name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-gray-950 border border-gray-600 rounded-lg h-10"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="email" className="mb-2">
          _email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-gray-950 border border-gray-600 rounded-lg h-10"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="message" className="mb-2">
          _message:
        </label>
        <textarea
          rows={5}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="bg-gray-950 border border-gray-600 rounded-lg"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`inline-block p-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-700 transition ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? "Sending..." : "submit-message"}
      </button>
    </form>
  );
};

export default ContactForm;
