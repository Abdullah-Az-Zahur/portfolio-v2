"use client";
import React, { ChangeEvent, useState } from "react";

const Page = () => {
  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="md:flex">
      {/* contact form */}
      <form
        action=""
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
            className="bg-gray-950 border border-gray-600 rounded-lg "
          />
        </div>

        <button
          type="submit"
          className="inline-block p-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-700 transition"
        >
          submit-message
        </button>
      </form>

      {/* contact information */}
      <div className="p-5 md:p-24 lg:p-32 h-auto md:flex-1">
        <pre className="p-4 rounded-md text-sm  text-indigo-500 overflow-x-auto">
          <code>
            <>{`\n`}</>
            <span className="text-purple-400">const</span>{" "}
            <span className="">button</span>{" "}
            <span className="text-purple-400">= </span>
            document.querySelector(
            <span className="text-orange-400">&#39;#sendBtn&#39;</span>);
            <br />
            <br />
            <span className="text-purple-400">const</span> message{" "}
            <span className="text-purple-400">= </span>{" "}
            <span className="text-gray-400">{"{"}</span>
            <br />
            &nbsp;&nbsp;name:{" "}
            <span className="text-orange-400">
              &quot;{formData.name || '""'}&quot;
            </span>
            ,
            <br />
            &nbsp;&nbsp;email:{" "}
            <span className="text-orange-400">
              &quot;{formData.email || '""'}&quot;
            </span>
            ,
            <br />
            &nbsp;&nbsp;message:{" "}
            <span className="text-orange-400">
              &quot;{formData.message || '""'}&quot;
            </span>
            ,
            <br />
            &nbsp;&nbsp;<span className="text-gray-400">date:</span>{" "}
            <span className="text-orange-400">
              &quot;
              {new Date().toLocaleString("en-US", {
                weekday: "short",
                day: "numeric",
                month: "short",
              })}
              &quot;
            </span>
            <br />
            <span className="text-gray-400">{"}"}</span>
            <br />
            <br />
            <span className="">button</span>.addEventListener(
            <span className="text-orange-400">&#39;click&#39;</span>,{" "}
            <span className="text-gray-400">()</span>{" "}
            <span className="text-purple-400">=&gt;</span>{" "}
            <span className="text-gray-400">{"{"}</span>
            <br />
            &nbsp;&nbsp;<span className="">form</span>
            .send(message);
            <br />
            <span className="text-gray-400">{"}"}</span>
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Page;
