"use client";

interface SuccessMessageProps {
  onNewMessage: () => void;
}

const SuccessMessage = ({ onNewMessage }: SuccessMessageProps) => {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex h-full w-full flex-col items-center justify-center p-6 text-center md:p-12 lg:p-16"
    >
      <div className="mb-6 max-w-md">
        <h3 className="mb-2 text-xl font-semibold text-[#e5e9f0] light:text-[#172337] md:text-2xl">
          Thank you! 🤘
        </h3>
        <p className="text-sm text-[#607b96] light:text-[#314158] md:text-base">
          Your message has been accepted. You will receive an answer really
          soon!
        </p>
      </div>

      <button
        type="button"
        onClick={onNewMessage}
        className="rounded-lg bg-[#1c2b3a] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#263b50] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#43d9ad] light:bg-[#0e7490] light:text-white light:hover:bg-[#0891b2] light:focus-visible:ring-[#0e7490]"
      >
        send-new-message
      </button>
    </div>
  );
};

export default SuccessMessage;
