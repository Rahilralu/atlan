import React from "react";

const SentimentBadge = ({ sentiment }) => {
  const colors = {
    curious: "bg-yellow-400 text-white",
    angry: "bg-red-500 text-white",
    neutral: "bg-gray-300 text-black",
  };

  return (
    <span className={`inline-flex items-center justify-center px-3 py-1 rounded-lg text-xs font-medium ${colors[sentiment.toLowerCase()] || "bg-gray-200 text-black"}`}>
      {sentiment}
    </span>
  );
};

export default SentimentBadge;