"use client";

import React, { ChangeEvent } from "react";

export interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  formData: FormData;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  isSubmitting?: boolean;
}

const ContactForm = ({
  formData,
  handleChange,
  handleSubmit,
  isSubmitting = false,
}: ContactFormProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Contact Form"
      className="h-full w-full p-6 md:p-12 lg:p-16"
    >
      <div className="mb-4 flex flex-col">
        <label
          htmlFor="name"
          className="mb-2 text-sm text-[#607b96] light:text-[#314158]"
        >
          _name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          aria-required="true"
          autoComplete="name"
          className="h-10 rounded-lg border border-(--app-border-color) bg-[#011221] px-3 text-[#e5e9f0] outline-none transition duration-150 focus:border-[#43d9ad] focus:ring-1 focus:ring-[#43d9ad] light:border-[#cbd6e3] light:bg-white light:text-[#0f172a] light:focus:border-[#0e7490] light:focus:ring-[#0e7490]"
        />
      </div>

      <div className="mb-4 flex flex-col">
        <label
          htmlFor="email"
          className="mb-2 text-sm text-[#607b96] light:text-[#314158]"
        >
          _email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          aria-required="true"
          autoComplete="email"
          className="h-10 rounded-lg border border-(--app-border-color) bg-[#011221] px-3 text-[#e5e9f0] outline-none transition duration-150 focus:border-[#43d9ad] focus:ring-1 focus:ring-[#43d9ad] light:border-[#cbd6e3] light:bg-white light:text-[#0f172a] light:focus:border-[#0e7490] light:focus:ring-[#0e7490]"
        />
      </div>

      <div className="mb-6 flex flex-col">
        <label
          htmlFor="message"
          className="mb-2 text-sm text-[#607b96] light:text-[#314158]"
        >
          _message:
        </label>
        <textarea
          rows={5}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          aria-required="true"
          className="rounded-lg border border-(--app-border-color) bg-[#011221] p-3 text-[#e5e9f0] outline-none transition duration-150 focus:border-[#43d9ad] focus:ring-1 focus:ring-[#43d9ad] light:border-[#cbd6e3] light:bg-white light:text-[#0f172a] light:focus:border-[#0e7490] light:focus:ring-[#0e7490]"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className={`inline-block rounded-lg bg-[#1c2b3a] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#263b50] light:bg-[#0e7490] light:text-white light:hover:bg-[#0891b2] ${
          isSubmitting ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        {isSubmitting ? "Sending..." : "submit-message"}
      </button>
    </form>
  );
};

export default ContactForm;
