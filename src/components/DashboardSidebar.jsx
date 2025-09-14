import React from "react";

const DashboardSidebar = ({ chatOpen, setChatOpen }) => {
  if (chatOpen) return null;

  return (
    <div
      onClick={() => setChatOpen(true)}
      aria-label="Open chat"
      className="fixed bottom-6 right-6 cursor-pointer z-50"
    >
      {/* White circular wrapper */}
      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
        <img
          src="/bot1.png"
          alt="Chat Bot"
          className="w-8 h-8 object-contain"
        />
      </div>
    </div>
  );
};

export default DashboardSidebar;
