import React from "react";
import SentimentBadge from "./SentimentBadge";
import TopicTag from "./TopicTag";

const TicketRow = ({ ticketNo, ticket, topicTag, sentiment, priority }) => {
  return (
    <tr className="hover:bg-gray-50 transition">
      <td className="py-3 px-6 text-sm text-gray-800 font-medium">{ticketNo}</td>
      <td className="py-3 px-6 text-sm text-gray-800 max-w-sm">{ticket}</td>
      <td className="py-3 px-6"><TopicTag tag={topicTag} /></td>
      <td className="py-3 px-6"><SentimentBadge sentiment={sentiment} /></td>
      <td className="py-3 px-6 text-sm text-gray-800 font-medium">{priority}</td>
    </tr>
  );
};

export default TicketRow;
