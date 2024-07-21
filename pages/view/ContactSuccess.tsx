import React from "react";

export default function SuccessMessage({
  toggleNewForm,
  senderName,
}: {
  toggleNewForm: () => void;
  senderName: string;
}) {
  return (
    <div className="mt-8 flex w-full flex-col items-center justify-center gap-6 text-center md:mt-0 md:max-w-[20vw]">
      <h1 className="text-[26px] font-medium text-success-700">Thank you! 🤘</h1>
      <p className="text-[18px] font-medium">
        I have received your message,{" "}
        <span className="text-warning-500">{senderName}</span>. I will get back to you
        as soon as possible.
      </p>
      <button
        className="bg-primary-500 hover:bg-primary-700 font-bold py-2 px-4 rounded"
        onClick={() => toggleNewForm()}
      >
        Send New Message
      </button>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/irfansk"
        className="bg-primary-500 hover:bg-primary-700 font-bold py-2 px-4 rounded"
      >
        View my GitHub profile
      </a>
    </div>
  );
}