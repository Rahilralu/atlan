import React from "react";
import TicketRow from "./TicketRow";

const TicketTable = ({ tickets }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Ticket No</th>
            <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Ticket</th>
            <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Topic Tags</th>
            <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Sentiment</th>
            <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Priority</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {tickets.map((t, index) => (
            <TicketRow key={index} {...t} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketTable;
