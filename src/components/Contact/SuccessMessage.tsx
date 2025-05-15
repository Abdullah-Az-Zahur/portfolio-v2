"use client";
import React from "react";

interface SuccessMessageProps {
  onNewMessage: () => void;
}

const SuccessMessage = ({ onNewMessage }: SuccessMessageProps) => {
  return (
    <div className="p-5 md:p-24 lg:p-32 h-auto md:w-1/2 md:border-r border-gray-600">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white mb-2 text-center">
          Thank you! 🤘
        </h3>
        <p className="text-gray-300 text-center">
          Your message has been accepted. You will receive an answer really
          soon!
        </p>
      </div>
      <div className="flex justify-center">
        <button
          onClick={onNewMessage}
          className="p-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-700 transition"
        >
          send-new-message
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;
