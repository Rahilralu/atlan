import React from "react";

const TopicTag = ({ tag }) => {
  return (
    <span className="inline-flex items-center justify-center px-3 py-1 rounded-lg bg-blue-500 text-white text-xs font-medium">
      {tag}
    </span>
  );
};

export default TopicTag;
