import React from "react";
import ViewBackendButton from "./ViewBackendButton";

const DashboardHeader = () => {
  return (
    <header className="flex justify-between items-center px-12 py-6 border-b border-gray-200 bg-white shadow-sm">
      <h2 className="text-3xl font-medium text-blue-700 tracking-tight">
        Customer Support Copilot
      </h2>
      <ViewBackendButton />
    </header>
  );
};

export default DashboardHeader;
