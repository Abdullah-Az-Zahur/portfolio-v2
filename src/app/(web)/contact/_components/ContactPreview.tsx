"use client";

import { useSyncExternalStore } from "react";

export interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactPreviewProps {
  formData: FormData;
}

// Client-side hydration status helper (avoiding state in useEffect)
const emptySubscribe = () => () => {};
const useIsHydrated = () => {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
};

const ContactPreview = ({ formData }: ContactPreviewProps) => {
  const isHydrated = useIsHydrated();

  // Calculate date conditionally without useEffect setState
  const formattedDate = isHydrated
    ? new Date().toLocaleString("en-US", {
        weekday: "short",
        day: "numeric",
        month: "short",
      })
    : "";

  return (
    <div
      aria-hidden="true"
      className="flex h-full w-full items-center justify-center p-4 sm:p-6 lg:p-10"
    >
      <pre className="w-full overflow-x-auto rounded-lg border border-(--app-border-color) bg-[#010e1a] p-5 font-mono text-xs leading-relaxed text-[#607b96] light:border-[#cbd6e3] light:bg-white light:text-[#475569] sm:text-sm md:p-8">
        <code>
          <span className="text-[#4d5bce] light:text-[#3b4fbb]">const</span>{" "}
          <span className="text-[#e5e9f0] light:text-[#0f172a]">button</span>{" "}
          <span className="text-[#4d5bce] light:text-[#3b4fbb]">=</span>{" "}
          <span className="text-[#e5e9f0] light:text-[#0f172a]">
            document.querySelector
          </span>
          (
          <span className="text-[#e99287] light:text-[#b4534d]">
            &apos;#sendBtn&apos;
          </span>
          );
          <br />
          <br />
          <span className="text-[#4d5bce] light:text-[#3b4fbb]">
            const
          </span>{" "}
          <span className="text-[#43d9ad] light:text-[#087f67]">message</span>{" "}
          <span className="text-[#4d5bce] light:text-[#3b4fbb]">=</span> &#123;
          <br />
          &nbsp;&nbsp;
          <span className="text-[#607b96] light:text-[#475569]">
            name
          </span>:{" "}
          <span className="text-[#e99287] light:text-[#b4534d]">
            &quot;{formData.name || ""}&quot;
          </span>
          ,<br />
          &nbsp;&nbsp;
          <span className="text-[#607b96] light:text-[#475569]">
            email
          </span>:{" "}
          <span className="text-[#e99287] light:text-[#b4534d]">
            &quot;{formData.email || ""}&quot;
          </span>
          ,<br />
          &nbsp;&nbsp;
          <span className="text-[#607b96] light:text-[#475569]">
            message
          </span>:{" "}
          <span className="text-[#e99287] light:text-[#b4534d]">
            &quot;{formData.message || ""}&quot;
          </span>
          ,<br />
          &nbsp;&nbsp;
          <span className="text-[#607b96] light:text-[#475569]">
            date
          </span>:{" "}
          <span className="text-[#e99287] light:text-[#b4534d]">
            &quot;{formattedDate}&quot;
          </span>
          <br />
          &#125;;
          <br />
          <br />
          <span className="text-[#e5e9f0] light:text-[#0f172a]">button</span>
          .addEventListener(
          <span className="text-[#e99287] light:text-[#b4534d]">
            &apos;click&apos;
          </span>
          , (){" "}
          <span className="text-[#4d5bce] light:text-[#3b4fbb]">&rArr;</span>{" "}
          &#123;
          <br />
          &nbsp;&nbsp;
          <span className="text-[#43d9ad] light:text-[#087f67]">form</span>
          .send(message);
          <br />
          &#125;);
        </code>
      </pre>
    </div>
  );
};

export default ContactPreview;
