import React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardContent from "./DashboardContent";
import DashboardSidebar from "./DashboardSidebar";

const CustomerSupportDashboard = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      />
    <div className="bg-white min-h-screen w-screen flex flex-col">
  {/* Header */}
  <DashboardHeader />

  {/* Content + Sidebar */}
        <div className="flex flex-1">
          {/* Main content */}
        <div className="flex flex-1">
        <main className="flex-1 bg-white p-6 overflow-auto">
          <DashboardContent />
        </main>

          <aside
            className="w-[60px] mt-[75px] mr-[30px] bg-indigo-500 flex flex-col items-center justify-center"
            style={{ height: "460px" }}
          >
            <DashboardSidebar />
          </aside>

</div>

  </div>
</div>




    </>
  );
};

export default CustomerSupportDashboard;
