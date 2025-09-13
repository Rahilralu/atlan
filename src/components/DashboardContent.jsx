import React from "react";
import TicketTable from "./TicketTable";

const DashboardContent = () => {
  return (
    <main className="bg-white border border-gray-300 rounded-2xl shadow-md p-6 flex-1 m-12 max-h-[80vh] overflow-hidden relative">
      {/* Sticky Title */}
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">
        Bulk Ticket Classification Dashboard
      </h2>

      {/* Scroll only inside the table body */}
      <div className="overflow-y-auto max-h-[65vh] rounded-b-2xl">
        <TicketTable />
      </div>
    </main>
  );
};

export default DashboardContent;
