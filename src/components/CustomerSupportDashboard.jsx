  import React, { useState } from "react";
  import DashboardHeader from "./DashboardHeader";
  import DashboardContent from "./DashboardContent";
  import DashboardSidebar from "./DashboardSidebar";
  import ChatUI from "./ChatUI";

  const CustomerSupportDashboard = () => {
    const [chatOpen, setChatOpen] = useState(false);
    const [terminalOpen,setterminalOpen] = useState(false);
    return (
      <>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <div className="bg-white min-h-screen w-screen flex flex-col">
          <DashboardHeader setterminalOpen={setterminalOpen}/>
          <div className="flex flex-1 relative">
            <main className="flex-1 bg-white p-6 transition-all duration-500 ease-in-out">
              <DashboardContent />
            </main>
            <div
    className={`flex-shrink-0 transition-all duration-500 ease-in-out overflow-hidden`}
    style={{ width: chatOpen ? 380 : 0 }}
  >
  <div
    className={`h-full w-[380px] transform transition-transform duration-500 ease-in-out `}
    style={{
      transform: chatOpen ? "translateX(0%)" : "translateX(100%)",
    }}
  >
    <ChatUI setChatOpen={setChatOpen} />
  </div>



  </div>
  <div className="relative bottom-10 right-6 bg-transparent">
    {!terminalOpen && !chatOpen && (
    <DashboardSidebar chatOpen={chatOpen} setChatOpen={setChatOpen} />
  )}  
  </div>

          </div>
        </div>
      </>
    );
  };

  export default CustomerSupportDashboard;
