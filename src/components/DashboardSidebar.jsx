import React from "react";

const DashboardSidebar = ({ chatOpen, setChatOpen }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <button
        onClick={() => setChatOpen((s) => !s)}
        aria-label="Toggle chat"
        className={`p-3 rounded-full transition-colors duration-300 shadow-sm ${
          chatOpen ? "bg-blue-600 text-white" : "bg-white text-blue-600"
        }`}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${chatOpen ? "rotate-180" : ""} transition-transform duration-300`}
        >
          <path
            d="M38 24L10 24M10 24L24 38M10 24L24 10"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default DashboardSidebar;
