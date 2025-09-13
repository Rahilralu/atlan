import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardContent from "./DashboardContent";
import DashboardSidebar from "./DashboardSidebar";
import ChatUI from "./ChatUI";

const CustomerSupportDashboard = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      />
      <div className="bg-white min-h-screen w-screen flex flex-col">
        <DashboardHeader />
        <div className="flex flex-1">
          <main
            className={`flex-1 bg-white p-6 transition-all duration-500 ease-in-out`}
          >
            <DashboardContent />
          </main>
          <div
            className={`flex-shrink-0 transition-all duration-500 ease-in-out overflow-hidden`}
            style={{ width: chatOpen ? 380 : 0 }}
          >
            <div
              className={`h-full w-[380px] transform transition-transform duration-500 ease-in-out`}
              style={{
                transform: chatOpen ? "translateX(0%)" : "translateX(100%)",
              }}
            >
              <ChatUI setChatOpen={setChatOpen} />
            </div>
          </div>
          <aside className="w-[60px] mt-[75px] mr-[30px] flex items-center justify-center">
            <DashboardSidebar chatOpen={chatOpen} setChatOpen={setChatOpen} />
          </aside>
        </div>
      </div>
    </>
  );
};

export default CustomerSupportDashboard;
