import React, { useState } from "react";
import TicketTable from "./TicketTable";

const DashboardContent = () => {
  const [selectedDataset, setSelectedDataset] = useState("Dataset A");

  //Sample dataset Just front ready anoo nokkane
  const datasets = {
    "Dataset A": [
      { ticketNo: "101", ticket: "Connecting Snowflake to Atlan - required permissions?", topicTag: "Connector", sentiment: "Curious", priority: "Low" },
      { ticketNo: "102", ticket: "Which connectors automatically capture lineage?", topicTag: "API/SDK", sentiment: "Angry", priority: "Medium" },
      { ticketNo: "101", ticket: "Connecting Snowflake to Atlan - required permissions?", topicTag: "Connector", sentiment: "Curious", priority: "Low" },
      { ticketNo: "102", ticket: "Which connectors automatically capture lineage?", topicTag: "API/SDK", sentiment: "Angry", priority: "Medium" },
      { ticketNo: "101", ticket: "Connecting Snowflake to Atlan - required permissions?", topicTag: "Connector", sentiment: "Curious", priority: "Low" },
      { ticketNo: "102", ticket: "Which connectors automatically capture lineage?", topicTag: "API/SDK", sentiment: "Angry", priority: "Medium" },
      { ticketNo: "101", ticket: "Connecting Snowflake to Atlan - required permissions?", topicTag: "Connector", sentiment: "Curious", priority: "Low" },
      { ticketNo: "102", ticket: "Which connectors automatically capture lineage?", topicTag: "API/SDK", sentiment: "Angry", priority: "Medium" },
    ],
    "Dataset B": [
      { ticketNo: "201", ticket: "Payment gateway timeout issue", topicTag: "Billing", sentiment: "Angry", priority: "High" },
      { ticketNo: "202", ticket: "Refund request taking too long", topicTag: "Billing", sentiment: "neutral", priority: "Medium" },
      { ticketNo: "201", ticket: "Payment gateway timeout issue", topicTag: "Billing", sentiment: "Angry", priority: "High" },
      { ticketNo: "202", ticket: "Refund request taking too long", topicTag: "Billing", sentiment: "neutral", priority: "Medium" },
      { ticketNo: "201", ticket: "Payment gateway timeout issue", topicTag: "Billing", sentiment: "Angry", priority: "High" },
      { ticketNo: "202", ticket: "Refund request taking too long", topicTag: "Billing", sentiment: "neutral", priority: "Medium" },
      { ticketNo: "201", ticket: "Payment gateway timeout issue", topicTag: "Billing", sentiment: "Angry", priority: "High" },
      { ticketNo: "202", ticket: "Refund request taking too long", topicTag: "Billing", sentiment: "neutral", priority: "Medium" },
      { ticketNo: "201", ticket: "Payment gateway timeout issue", topicTag: "Billing", sentiment: "Angry", priority: "High" },
      { ticketNo: "202", ticket: "Refund request taking too long", topicTag: "Billing", sentiment: "neutral", priority: "Medium" },
    ],
  };

  return (
    <main className="bg-white border border-gray-300 rounded-2xl shadow-md p-6 flex-1 m-12 max-h-[80vh] overflow-hidden relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-blue-700">
          Bulk Ticket Classification Dashboard
        </h2>
        <select
          value={selectedDataset}
          onChange={(e) => setSelectedDataset(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="Dataset A">Human</option>
            <option value="Dataset B">AI</option>
        </select>
      </div>
      
      <div className="overflow-y-auto max-h-[65vh] rounded-b-2xl">
        <TicketTable tickets={datasets[selectedDataset]} />
      </div>
    </main>
  );
};

export default DashboardContent;
