"use client";
import React from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactPreviewProps {
  formData: FormData;
}

const ContactPreview = ({ formData }: ContactPreviewProps) => {
  return (
    <div className="p-5 md:py-32 h-auto md:w-1/2">
      <pre className="p-4 rounded-md text-sm text-indigo-500 overflow-x-auto">
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
  );
};

export default ContactPreview;
